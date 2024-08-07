import path from 'path'
import { createLRUCache, ToolFunc } from '@isdk/ai-tool'

import { IKVObjItem, IKVSetOptions, KVSqlite as _KVSqlite } from '@isdk/kvsqlite';

export const StoreCacheName = 'cache.store'

export const StoreCache = createLRUCache(StoreCacheName, { capacity: 16, expires: 1 * 60 * 1000, cleanInterval: 60 })
ToolFunc.register(StoreCache)
const cache = StoreCache.runSync()
cache.on('del', function (key: string, store: _KVSqlite) {
  store.close()
})

declare const KVSqlite: typeof _KVSqlite

export function _sqliteStore(this: ToolFunc, {key, value, options}: {key?: string | IKVObjItem | IKVSetOptions, value?: IKVObjItem | IKVSetOptions, options?: IKVSetOptions} = {}) {
  if (typeof key === 'object' && !key.hasOwnProperty('_id')) {
    options = key as IKVSetOptions
    key = value as IKVObjItem
    // value = options
  }
  const loc = options?.location || this.location || ':memory:'
  const storeId = loc !== ':memory:' ? loc : this.name + loc
  let store = cache.get(storeId) as _KVSqlite;
  if (!store) {
    const dataPath = (this.constructor as any).dataPath
    let _loc = loc
    if (loc[0] !== ':' && dataPath) {
      _loc = path.join(dataPath, loc)
    }
    store = new KVSqlite(_loc, {...options, id: storeId})
    cache.set(storeId, store, options)
  }

  // const store = this.store as KVSqlite;
  if (key == null) {
    return store
  }

  if (typeof key === 'string') {
    if (value === null) {
      return store.del(key, options)
    } else if (value === undefined) {
      return store.get(key, options)
    } else if (typeof value !== 'object') {
      value = { value } as any
    }
    value = { ...value, _id: key }
  } else {
    options = value as IKVSetOptions
    value = key as IKVObjItem
  }
  return store.set(value as IKVObjItem, options)
}

export function createSqliteStore(name: string, dbPath?: string, options?: IKVSetOptions) {
  const result = ToolFunc.get(name) ?? new ToolFunc(name, {
    func: _sqliteStore,
    description: 'get/set LRU cache or return the store object',
    params: {
      key: { name: 'key', type: 'string', description: 'the key is undefined means return the database directly' },
      value: { name: 'value', type: 'any', description: 'the value to store, if value is null means remove the key, undefined means get the value' },
      options: { name: 'options', type: 'any', description: 'the database options' },
    },
    result: 'object',
    scope: { cache, KVSqlite: _KVSqlite }
  })
  // if (!dbPath) { dbPath = ToolFunc.dataPath ? path.join(ToolFunc.dataPath, name) : ':memory:' }
  // result.store = new KVSqlite(dbPath, options)
  result.location = dbPath
  return result
}

// export const sqlite = createSqliteStore('sqlite', 'config.db')