import os from 'os';
import path from 'path';
import fs from 'fs';
import { sleep, ToolFunc } from '@isdk/ai-tool';
import { KVSqlite } from '@isdk/kvsqlite';
import { StoreCacheName, _sqliteStore, createSqliteStore } from '../src/sqlite-store';

const conf = createSqliteStore('conf')

describe('sqliteStore function', async () => {
  const store = await conf.run() as KVSqlite
  const key = 'theKey'
  const value = { v: 'the value' }
  const doc = { _id: key, ...value }

  beforeEach(() => {
    store.del()
  });

  it('should return a KVSqlite store when key is null', async () => {
    expect(store).toBeInstanceOf(KVSqlite);
    expect(await conf.run()).toBe(store)
  });

  it('should return a new KVSqlite store when pass location to options', async () => {
    const store1 = await conf.run({options: {location: ':memory:test1'}})
    expect(store1).toBeInstanceOf(KVSqlite);
    const store2 = await conf.run({options: {location: ':memory:test1'}})
    expect(store2).toBe(store1)
    expect(store2.memory).toBeTruthy()
    expect(store2).not.toBe(store)
  });

  it('should only open exists database', async () => {
    const store1 = await conf.run({options: {location: 'noSuchdbIn', onlyOpen: true}})
    expect(store1).toBeUndefined();
  });

  it('should delete a key-value pair when value is null', async () => {
    store.set(doc);
    await conf.run({key, value: null});
    expect(store.get(key)).toBeUndefined();
  });

  it('should get a value when value is undefined', async () => {
    store.set(doc);
    const result = await conf.run({key});
    expect(result).toMatchObject(doc);
  });

  it('should set a value when key is a string and value is defined', async () => {
    await conf.run({key, value});
    expect(store.get(key)).toMatchObject(doc);
  });
});

describe('createSqliteStore function', () => {
  const DefaultDBName = 'TestStore';
  const dbPath = path.join(os.tmpdir(), `${DefaultDBName}-${Date.now()}.db`);

  afterAll(async () => {
    fs.unlinkSync(dbPath);
  });

  it('should create a new sqlite store', async () => {
    const options = { location: dbPath };
    let mStore = createSqliteStore(DefaultDBName, dbPath, options);
    expect(mStore).toBeInstanceOf(ToolFunc);
    expect(mStore.location).toEqual(dbPath);
    let result = await mStore.run({options: { expires: 100, collections: [{name: 'my', fields: {tag: {type: 'TEXT'}}}] }}) as KVSqlite
    expect(result.open).toBeTruthy()
    await sleep(200)
    const cache = ToolFunc.runSync(StoreCacheName)
    // trigger the clean expires item
    cache.get(dbPath)
    expect(result.open).toBeFalsy()

    result = await mStore.run();
    expect(result.open).toBeTruthy()
    const tbl = result.getCollection('my')
    expect(tbl).toBeDefined()
    let res: any = tbl.set('mykey', {tag: 'mytag'})
    expect(res).toBeDefined()
    expect(res.changes).toBe(1)
  });

  it('should create a new sqlite memory store', async () => {
    // the memomry store will not be cleared.
    const name = 'TestStore';
    const dbPath = ':memory:';
    const options = { location: dbPath };
    const mStore = createSqliteStore(name, dbPath, options);
    expect(mStore).toBeInstanceOf(ToolFunc);
    expect(mStore.location).toEqual(dbPath);
    let result = await mStore.run({options: { expires: 100 }}) as KVSqlite
    expect(result.open).toBeTruthy()
    await sleep(200)
    const cache = ToolFunc.runSync(StoreCacheName)
    // trigger the clean expires item
    cache.get(dbPath + name) // dbPath + name just for :memory:
    expect(result.open).toBeTruthy()
  });
});
