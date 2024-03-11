import path from 'path'
import { ToolFunc } from '@isdk/ai-tool'
import { IKVObjItem, IKVSetOptions, KVSqlite } from './kvsqlite';

export function _sqliteStore(this: ToolFunc, key?: string|IKVObjItem, value?: IKVObjItem, options?: IKVSetOptions) {
  const store = this.store as KVSqlite;
  if (key == null) {
    return store
  }
  if (typeof key === 'string') {
    if (value === null) {
      return store.del(key, options)
    } if (value === undefined) {
      return store.get(key, options)
    }
    value = {...value, _id: key}
  } else {
    value = key
  }
  return store.set(value, options)
}

export function createSqliteStore(name: string, dbPath?: string, options?: IKVSetOptions) {
  const result = ToolFunc.get(name) ?? new ToolFunc(name, {
    func: _sqliteStore,
    description: 'get/set LRU cache or return the store object',
    params: [
      {name: 'key', type: 'string', description: 'the key is undefined means return the database directly'},
      {name: 'value', type: 'any', description: 'the value to store, if value is null means remove the key, undefined means get the value'},
      {name: 'options', type: 'any', description: 'the database options'},
    ],
    result: 'object',
  })
  if (!dbPath) {dbPath = ToolFunc.dataPath ? path.join(ToolFunc.dataPath, name) : ':memory:'}
  result.store = new KVSqlite(dbPath, options)
  return result
}
