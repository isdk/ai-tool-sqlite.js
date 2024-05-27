// @vitest-environment node
import fastify from 'fastify'
import fs from 'fs'
import { ErrorCode, NotFoundError, ResClientTools, ResServerTools, wait } from "@isdk/ai-tool"
import { findPort } from '@isdk/ai-tool/test/util'

import { KVSqliteResFunc } from '../src/sqlite-res'

// const dbPath = __dirname + '/test.db'
// const dbPath = '/tmp/aikvsqlite-test.db'
const dbPath = ':memory:'
const FUNC_NAME = 'sqlite'

describe('KVSqliteRes server api', () => {
  let apiRoot: string // = 'http://localhost:3000/api'
  const server = fastify()
  const res = new KVSqliteResFunc(FUNC_NAME, {dbPath})

  beforeAll(async () => {
    fs.rmSync(dbPath, {force: true})
    server.get('/api', async function(request, reply){
      reply.send(ResServerTools.toJSON())
    })

    server.all('/api/:toolId/:id?', async function(request, reply){
      const { toolId, id } = request.params as any;
      const func = ResServerTools.get(toolId)
      if (!func) {
        reply.code(404).send({error: toolId + ' Not Found', data: {what: toolId}})
      }
      let params: any
      const method = request.method
      if (method === 'GET' || method == 'DELETE') {
        params = (request.query as any).p
        if (params) {
          params = JSON.parse(params)
        } else {
          params = {}
        }
      } else {
        params = request.body;
        if (typeof params === 'string') {params = JSON.parse(params)}
      }
      params._req = request.raw
      params._res = reply.raw
      if (id !== undefined) { params.id = id }

      // const result = JSON.stringify(await func.run(params))
      try {
        let result = await func.run(params)
        if (!func.isStream(params)) {
          result = JSON.stringify(result)
          // console.log('🚀 ~ server.all ~ result:', result)
          reply.send(result)
        } else if (result) {
          reply.send(result)
        }
        // reply.send({params: request.params as any, query: request.query, url: request.url})
      } catch(e) {
        // console.log('🚀 ~ server.all ~ e:', e)
        if (e.code !== undefined) {
          if (e.stack) {e.stack = undefined}
          reply.code(e.code).send(JSON.stringify(e))
        } else if (e.message) {
          reply.code(500).send({error: e.message})
        } else {
          reply.code(500).send({error: e})
        }
      }
    })
    await wait(10)
    const port = await findPort(3000)
    const result = await server.listen({port})
    console.log('server listening on ', result)
    apiRoot = `http://localhost:${port}/api`

    ResServerTools.setApiRoot(apiRoot)

    // const res = new KVSqliteResFunc(FUNC_NAME, {dbPath})
    res.register()

    ResClientTools.setApiRoot(apiRoot)
    await ResClientTools.loadFrom()
  })

  afterAll(async () => {
    await server.close()
  })

  beforeEach(() => {
    res.db.del()
  });

  it('should raise error to get non-exists item', async () => {
    const result = ResClientTools.get(FUNC_NAME)
    expect(result).toBeInstanceOf(ResClientTools)
    let err: any
    try {
      const res = await result.get({id: "123"})
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
    let res = await result.post({id: "1", val: {name: 'hello'}})
    expect(res).toHaveProperty('changes', 1)
    expect(res).toHaveProperty('lastInsertRowid', 1)
    res = await result.get({id: "1"})
    expect(res).toHaveProperty('name', 'hello')
    res = await result.delete({id: "1"})
    expect(res).toHaveProperty('changes', 1)
  })
  it('should post multi objects', async () => {
    const result = ResClientTools.get(FUNC_NAME)
    expect(result).toBeInstanceOf(ResClientTools)
    let res = await result.post({val: [{_id: "1", name: 'hello'}, {_id: "2", name: 'world'}]})
    expect(res).toHaveLength(2)
    res = await result.get({id: "1"})
    expect(res).toHaveProperty('name', 'hello')
    res = await result.get({id: "2"})
    expect(res).toHaveProperty('name', 'world')
    res = await result.delete({id: ["1","2"]})
    expect(res).toHaveLength(2)
  })

  it('should delete', async () => {
    const result = ResClientTools.get(FUNC_NAME)
    expect(result).toBeInstanceOf(ResClientTools)
    let res = await result.post({val: [{_id: "1", name: 'hello'}, {_id: "2", name: 'world'}]})
    expect(res).toHaveLength(2)
    res = await result.delete({id: "1"})
    expect(res).toHaveProperty('changes', 1)
    res = await result.list()
    expect(res.length).toStrictEqual(1)
    res = await result.delete({id: "2"})
    expect(res).toHaveProperty('changes', 1)
    res = await result.list()
    expect(res.length).toStrictEqual(0)
  })

  it('should list', async () => {
    const result = ResClientTools.get(FUNC_NAME)
    expect(result).toBeInstanceOf(ResClientTools)
    let res = await result.post({val: [{_id: "x1", name: 'hello'}, {_id: "x2", name: 'world'}, {_id: "3", name: 'd'}]})
    expect(res).toHaveLength(3)
    res = await result.list()
    expect(res.length).toStrictEqual(3)
    expect(res).toMatchObject([ { name: 'hello', _id: 'x1' }, { name: 'world', _id: 'x2' }, {_id: "3", name: 'd'}])

    res = await result.list({size: 2})
    expect(res.length).toBe(2)
    res = await result.list({query: 'x%'})
    expect(res.length).toBe(2)
    expect(res).toMatchObject([ { name: 'hello', _id: 'x1' }, { name: 'world', _id: 'x2' }])
  })
});
