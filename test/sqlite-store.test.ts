import { StoreCacheName, _sqliteStore, createSqliteStore } from '../src/sqlite-store';
import { ToolFunc } from '@isdk/ai-tool';
import { KVSqlite } from '@isdk/kvsqlite';

const conf = createSqliteStore('conf')

describe('sqliteStore function', async () => {
  const store = await conf.run() as KVSqlite
  const key = 'theKey'
  const value = { value: 'the value' }
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
  it('should create a new sqlite store', async () => {
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
    expect(result.open).toBeFalsy()
  });
});

async function sleep(ms: number) {
  return new Promise((resolve) => {
    return setTimeout(resolve, ms);
  })
}