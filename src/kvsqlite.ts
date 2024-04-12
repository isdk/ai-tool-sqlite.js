import Database from 'better-sqlite3'
import type { Statement } from 'better-sqlite3'
import { deepMergeObjects } from './deep-merge';

export interface IKVObjItem {
  _id: string;
  [name: string]: any;
}

export interface IKVSetOptions extends Database.Options {
  id?: string
  location?: string
  collection?: string
  collections?: string[]
  overwrite?: boolean
  [name: string]: any;
}

export const DefaultKVCollection = 'kv'

function createTableSql(name: string) {
  return `CREATE TABLE IF NOT EXISTS ${name} (key TEXT PRIMARY KEY, val JSONB)`
}

export interface IKVCollections {
  [name: string]: KVSqliteCollection
}

export class KVSqlite extends Database {
  /**
   * The unique id of the database.
   */
  declare id: string|undefined
  public collections: IKVCollections = {}

  constructor(filename?: string | Buffer, options?: IKVSetOptions) {
    super(filename, options)
    if (options?.id) {this.id = options.id}

    if (!this.readonly) {
      const collections = options?.collections || []
      collections.push(DefaultKVCollection)
      if (options?.collection) { collections.push(options.collection) }
      if (collections.length) {
        collections.forEach(name => this.create(name))
      }
    }
  }

  create(name: string) {
    if (!this.collections[name]) {
      return this.collections[name] = new KVSqliteCollection(name, this)
    }
  }

  set(obj: IKVObjItem, options?: IKVSetOptions) {
    const name = options?.collection || DefaultKVCollection
    return this.collections[name]?.set(obj, options)
  }

  get(_id: string, options?: IKVSetOptions) {
    const name = options?.collection || DefaultKVCollection
    return this.collections[name]?.get(_id)
  }

  del(_id?: string, options?: IKVSetOptions) {
    const name = options?.collection || DefaultKVCollection
    return this.collections[name]?.del(_id)
  }

  isExists(_id: string, options?: IKVSetOptions) {
    const name = options?.collection || DefaultKVCollection
    return this.collections[name]?.isExists(_id)
  }

  count(query?: string, options?: IKVSetOptions) {
    const name = options?.collection || DefaultKVCollection
    return this.collections[name]?.count(query)
  }

  list(query?: string, pageSize?: number, page?: number, options?: IKVSetOptions) {
    const name = options?.collection || DefaultKVCollection
    return this.collections[name]?.list(query, pageSize, page)
  }
}

export class KVSqliteCollection {
  declare preAdd: Statement
  declare preUpdate: Statement
  declare preExists: Statement
  declare preGet: Statement
  declare preDel: Statement
  declare preDelAll: Statement
  declare preCount: Statement
  declare preCountW: Statement
  declare preSearch: Statement
  declare preSearchAll: Statement
  declare preAll: Statement
  declare preAllLimit: Statement

  constructor(public name: string, protected db: KVSqlite) {
    if (!db.readonly) { db.prepare(createTableSql(name)).run() }

    this.preAdd = db.prepare('INSERT INTO ' + name + ' (key, val) VALUES (@_id, jsonb(@val))')
    this.preUpdate = db.prepare('UPDATE ' + name + ' SET key = @_id, val = jsonb(@val) WHERE key=@_id');
    this.preExists = db.prepare('SELECT 1 FROM ' + name + ' WHERE key = ?').pluck();
    this.preGet = db.prepare('SELECT json(val) as val FROM ' + name + ' WHERE key = ?').pluck()
    this.preDel = db.prepare('DELETE FROM ' + name + ' WHERE key = ?')
    this.preDelAll = db.prepare('DELETE FROM ' + name + '')
    this.preCount = db.prepare('SELECT Count(*) as count FROM ' + name).pluck()
    this.preCountW = db.prepare('SELECT Count(*) as count FROM ' + name + ' WHERE key LIKE ?').pluck()
    this.preSearch = db.prepare('SELECT key, json(val) as val FROM ' + name + ' WHERE key LIKE @query LIMIT @size OFFSET @offset')
    this.preSearchAll = db.prepare('SELECT key, json(val) as val FROM ' + name + ' WHERE key LIKE @query')
    this.preAll = db.prepare('SELECT key, json(val) as val FROM ' + name)
    this.preAllLimit = db.prepare('SELECT key, json(val) as val FROM ' + name + ' LIMIT @size OFFSET @offset')
  }

  _set(obj: IKVObjItem, options?: IKVSetOptions) {
    const _id = obj._id
    obj = { ...obj }
    delete (obj as any)._id
    let _obj: any = this.preGet.get(_id)
    if (_obj !== undefined) _obj = JSON.parse(_obj)
    let stm: Statement
    if (_obj) {
      const shouldOverwrite = !options || options.overwrite !== false
      stm = this.preUpdate
      if (shouldOverwrite) {
        _obj = obj
        // return this.preUpdate.run({_id, val: JSON.stringify(obj)})
      } else {
        // just overwrite difference properties values
        deepMergeObjects(obj, _obj)
        // return this.preUpdate.run({_id, val: JSON.stringify(_obj)})
      }
    } else {
      stm = this.preAdd
      _obj = obj
      // return this.preAdd.run(_id, JSON.stringify(obj))
    }
    return stm.run({ _id, val: JSON.stringify(_obj) })
  }

  set(obj: IKVObjItem, options?: IKVSetOptions) {
    return this.db.transaction(() => {
      return this._set(obj, options)
    })()
  }

  get(_id: string) {
    let result: any = this.preGet.get(_id)
    if (result) {
      result = JSON.parse(result)
      result._id = _id
    }
    return result as IKVObjItem
  }

  del(_id?: string) {
    return _id ? this.preDel.run(_id) : this.preDelAll.run()
  }

  isExists(_id: string) {
    return this.preExists.get(_id) as boolean
  }

  count(query?: string) {
    return query ? this.preCountW.get(query) : this.preCount.get()
  }

  list(query?: string, size?: number, page:number = 0) {
    const result = (query ?
        size ? this.preSearch.all({query, size, offset: page*size}) : this.preSearchAll.all({query})
      : size ? this.preAllLimit.all({size, offset: page*size}) : this.preAll.all()) as {key: string, val: string}[]
    return result.map(row => ({...JSON.parse(row.val), _id: row.key})) as IKVObjItem[]
  }
}