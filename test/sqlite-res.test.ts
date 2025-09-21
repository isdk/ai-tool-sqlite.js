// @vitest-environment node
import fs from 'fs'
import path from 'path'
import { ClientTools, ErrorCode, Funcs, HttpClientToolTransport, HttpServerToolTransport, NotFoundError, ResClientTools, ResServerTools, ServerTools, ToolFunc, saveConfigFile, sleep } from "@isdk/ai-tool"
import { findPort } from '@isdk/ai-tool/test/util'

import { KVSqliteResFunc } from '../src/sqlite-res'
import { KVSqlite } from '@isdk/kvsqlite'

// const dbPath = __dirname + '/test.db'
// const dbPath = '/tmp/aikvsqlite-test.db'
const dbPath = ':memory:'
const FUNC_NAME = 'sqlite'

describe('KVSqliteRes server api', () => {
  let apiRoot: string // = 'http://localhost:3000/api'
  let server: any
  const res = new KVSqliteResFunc(FUNC_NAME, {dbPath})

  beforeAll(async () => {
    const ServerToolItems: {[name:string]: ServerTools|ToolFunc} = {}
    Object.setPrototypeOf(ServerToolItems, ToolFunc.items)
    ServerTools.items = ServerToolItems

    const ClientToolItems: Funcs = {}
    Object.setPrototypeOf(ClientToolItems, ToolFunc.items)
    ClientTools.items = ClientToolItems

    fs.rmSync(dbPath, {force: true})

    // server.get('/api', async function(request, reply){
    //   reply.send(ResServerTools.toJSON())
    // })

    // server.all('/api/:toolId/:id?', async function(request, reply){
    //   const { toolId, id } = request.params as any;
    //   const func = ResServerTools.get(toolId)
    //   if (!func) {
    //     reply.code(404).send({error: toolId + ' Not Found', data: {what: toolId}})
    //   }
    //   let params: any
    //   const method = request.method
    //   if (method === 'GET' || method == 'DELETE') {
    //     params = (request.query as any).p
    //     if (params) {
    //       params = JSON.parse(params)
    //     } else {
    //       params = {}
    //     }
    //   } else {
    //     params = request.body;
    //     if (typeof params === 'string') {params = JSON.parse(params)}
    //   }
    //   params._req = request.raw
    //   params._res = reply.raw
    //   if (id !== undefined) { params.id = id }

    //   // const result = JSON.stringify(await func.run(params))
    //   try {
    //     let result = await func.run(params)
    //     if (!func.isStream(params)) {
    //       result = JSON.stringify(result)
    //       // console.log('🚀 ~ server.all ~ result:', result)
    //       reply.send(result)
    //     } else if (result) {
    //       reply.send(result)
    //     }
    //     // reply.send({params: request.params as any, query: request.query, url: request.url})
    //   } catch(e) {
    //     // console.log('🚀 ~ server.all ~ e:', e)
    //     if (e.code !== undefined) {
    //       if (e.stack) {e.stack = undefined}
    //       reply.code(e.code).send(JSON.stringify(e))
    //     } else if (e.message) {
    //       reply.code(500).send({error: e.message})
    //     } else {
    //       reply.code(500).send({error: e})
    //     }
    //   }
    // })
    server = new HttpServerToolTransport()
    await server.mount(ServerTools, '/api')
    await sleep(10)
    const port = await findPort(3000)
    const result = await server.start({port})
    console.log('server listening on ', result)
    apiRoot = `http://localhost:${port}/api`

    // ResServerTools.setApiRoot(apiRoot)

    // const res = new KVSqliteResFunc(FUNC_NAME, {dbPath})
    res.register()

    const client = new HttpClientToolTransport(apiRoot)
    await client.mount(ResClientTools)

    // ResClientTools.setApiRoot(apiRoot)
    // await ResClientTools.loadFrom()
  })

  afterAll(async () => {
    await server.stop()
    delete (ClientTools as any).items
    delete (ServerTools as any).items
  })

  beforeEach(() => {
    res.db.del()
  });

  it('should initDB', async () => {
    class KVTestInit extends KVSqliteResFunc {

      initDB(db: KVSqlite) {
        db.create('test', {
          fields: {
            'test': {type: 'TEXT'}
          },
        })
      }
    }
    const res = new KVTestInit('testInitDB', {dbPath})
    expect(res.db.isCollectionExists('test'))
    const collection = res.db.collections.test
    const fields = collection.tableInfo()
    expect(fields).toMatchObject({
      test: { name: 'test', type: 'TEXT', notNull: false, primary: false },
      _id: { name: '_id', type: 'TEXT', notNull: false, primary: true },
      val: { name: 'val', type: 'JSONB', notNull: false, primary: false },
    })
  })

  it('should initData from dir', async () => {
    const res = new KVSqliteResFunc('testInitData', {dbPath, initDir: path.join(__dirname, 'init')})
    await res.initData()
    expect(res.$count()).toBe(4)
    let result = res.get({id: 3})
    expect(result).toMatchObject({_id: 3, name: 'test3'})
  })

  it('should updateData from dir', async () => {
    const res = new KVSqliteResFunc('testInitData', {dbPath, initDir: path.join(__dirname, 'init')})
    await res.initData()
    expect(res.$count()).toBe(4)

    const configs = [
      {_id: 5, name: 'test5'},
      {_id: 6, name: 'test6'},
    ]

    const updateDir = '/tmp/testUpdateDB'
    fs.mkdirSync(updateDir, {recursive: true})
    saveConfigFile(updateDir + '/1.yaml', configs)

    await res.updateDataFromDir(updateDir)
    expect(res.$count()).toBe(6)
    let result = res.get({id: 5})
    expect(result).toMatchObject({_id: 5, name: 'test5'})
    const len = await res.updateDataFromDir(updateDir)
    expect(len).toBe(0)

    fs.rmdirSync(updateDir, {recursive: true})
  })

  it('should updateDB from dir do not overwrite already exists', async () => {
    const res = new KVSqliteResFunc('testInitData', {dbPath, initDir: path.join(__dirname, 'init')})
    await res.initData()
    expect(res.$count()).toBe(4)
    let result = res.get({id: 3})
    expect(result).toMatchObject({_id: 3, name: 'test3'})
    result = res.put({id: 3, val: {name: 'test3-updated'}})
    expect(result).toHaveProperty('changes', 1)
    result = res.get({id: 3})
    expect(result).toMatchObject({_id: 3, name: 'test3-updated'})

    await res.updateDataFromDir()
    result = res.get({id: 3})
    expect(result).toMatchObject({_id: 3, name: 'test3-updated'})
  })

  testBaseOperations()

  describe('collection', () => {
    const testCollection = 'testCollection'

    beforeAll(() => {
      const resClient = ResClientTools.get(FUNC_NAME)
      expect(resClient).toBeInstanceOf(ResClientTools)
      resClient.createCollection({collection: testCollection})
    })

    afterAll(() => {
      let count = res.db.prepare(`SELECT COUNT(*) FROM sqlite_master WHERE type = 'table' AND name = '${testCollection}'`).pluck().get()
      expect(count).toBe(1)
      res.$deleteCollection({collection: testCollection})
      count = res.db.isCollectionExists(testCollection)
      expect(count).toBe(0)
    })

    testBaseOperations(testCollection)

  })
});

function testBaseOperations(collection?: string) {
  it('should raise error to get non-exists item', async () => {
    const result = ResClientTools.get(FUNC_NAME)
    expect(result).toBeInstanceOf(ResClientTools)
    let err: any
    try {
      const res = await result.get({id: "123", collection})
    } catch(e) {
      err = e
    }
    expect(err).toBeInstanceOf(NotFoundError)
    expect(err.message).toBe('Could not find 123.')
    expect(err.code).toBe(ErrorCode.NotFound)
    expect(err.data).toStrictEqual({what: "123"})
    expect(err.name).toBe(FUNC_NAME+'.get')

  })

  it('should post an object', async () => {
    const result = ResClientTools.get(FUNC_NAME)
    expect(result).toBeInstanceOf(ResClientTools)
    let res = await result.post({id: "1", val: {name: 'hello'}, collection})
    expect(res).toHaveProperty('changes', 1)
    expect(res).toHaveProperty('lastInsertRowid', 1)
    res = await result.get({id: "1", collection})
    expect(res).toHaveProperty('name', 'hello')
    res = await result.delete({id: "1", collection})
    expect(res).toHaveProperty('changes', 1)
  })
  it('should post multi objects', async () => {
    const result = ResClientTools.get(FUNC_NAME)
    expect(result).toBeInstanceOf(ResClientTools)
    let res = await result.post({val: [{_id: "1", name: 'hello'}, {_id: "2", name: 'world'}], collection})
    expect(res).toHaveLength(2)
    res = await result.get({id: "1", collection})
    expect(res).toHaveProperty('name', 'hello')
    res = await result.get({id: "2", collection})
    expect(res).toHaveProperty('name', 'world')
    res = await result.delete({id: ["1","2"], collection})
    expect(res).toHaveLength(2)
  })

  it('should set an object (upsert)', async () => {
    const result = ResClientTools.get(FUNC_NAME)
    expect(result).toBeInstanceOf(ResClientTools)

    // 1. Create a new item with set
    let res = await result.set({id: "set-test-1", val: {name: 'set-hello'}, collection})
    expect(res).toHaveProperty('changes', 1)

    let item = await result.get({id: "set-test-1", collection})
    expect(item).toHaveProperty('name', 'set-hello')

    // 2. Update the item with set
    res = await result.set({id: "set-test-1", val: {name: 'set-world'}, collection})
    expect(res).toHaveProperty('changes', 1)

    item = await result.get({id: "set-test-1", collection})
    expect(item).toHaveProperty('name', 'set-world')

    // cleanup
    res = await result.delete({id: "set-test-1", collection})
    expect(res).toHaveProperty('changes', 1)
  })

  it('should delete', async () => {
    const result = ResClientTools.get(FUNC_NAME)
    expect(result).toBeInstanceOf(ResClientTools)
    let res = await result.post({val: [{_id: "1", name: 'hello'}, {_id: "2", name: 'world'}], collection})
    expect(res).toHaveLength(2)
    res = await result.delete({id: "1", collection})
    expect(res).toHaveProperty('changes', 1)
    res = await result.list({collection})
    expect(res.length).toStrictEqual(1)
    res = await result.delete({id: "2", collection})
    expect(res).toHaveProperty('changes', 1)
    res = await result.list({collection})
    expect(res.length).toStrictEqual(0)
  })

  it('should list', async () => {
    const result = ResClientTools.get(FUNC_NAME)
    expect(result).toBeInstanceOf(ResClientTools)
    let res = await result.post({val: [{_id: "x1", name: 'hello'}, {_id: "x2", name: 'world'}, {_id: "3", name: 'd'}], collection})
    expect(res).toHaveLength(3)
    res = await result.list({collection})
    expect(res.length).toStrictEqual(3)
    expect(res).toMatchObject([ { name: 'hello', _id: 'x1' }, { name: 'world', _id: 'x2' }, {_id: "3", name: 'd'}])

    res = await result.list({size: 2, collection})
    expect(res.length).toBe(2)
    res = await result.list({query: 'x%', collection})
    expect(res.length).toBe(2)
    expect(res).toMatchObject([ { name: 'hello', _id: 'x1' }, { name: 'world', _id: 'x2' }])
  })

  it('should search', async () => {
    const result = ResClientTools.get(FUNC_NAME)
    expect(result).toBeInstanceOf(ResClientTools)
    let res = await result.post({val: [{_id: "x1", name: 'hello'}, {_id: "x2", name: 'hi world'}, {_id: "3", name: 'd'}], collection})
    expect(res).toHaveLength(3)

    res = await result.searchEx({query: "val->>'$.name' = 'hello' OR val->>'$.name' = 'd'", collection})
    expect(res.length).toStrictEqual(2)
    expect(res).toMatchObject([ { name: 'hello', _id: 'x1' }, {_id: "3", name: 'd'}])

    res = await result.searchEx({query: {'name': 'hello'}, collection})
    expect(res.length).toStrictEqual(1)
    expect(res).toMatchObject([ { name: 'hello', _id: 'x1' }])
  })
}
