import path from 'path/posix'

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
  singleValue?: boolean
  [name: string]: any;
}

export const DefaultKVCollection = 'kv'
export const KV_VALUE_SYMBOL = '值'
export const KV_TYPE_SYMBOL = '型'


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

  set(docId: string|IKVObjItem, obj?: IKVObjItem|IKVSetOptions, options?: IKVSetOptions) {
    const name = options?.collection || DefaultKVCollection
    return this.collections[name]?.set(docId, obj, options)
  }

  setExtend(docId: string, key: string, value: any, options?: IKVSetOptions) {
    const name = options?.collection || DefaultKVCollection
    return this.collections[name]?.setExtend(docId, key, value, options)
  }

  setExtends(docId: string, aDoc: any, options?: IKVSetOptions) {
    const name = options?.collection || DefaultKVCollection
    return this.collections[name]?.setExtends(docId, aDoc, options)
  }

  bulkDocs(objs: IKVObjItem[], options?: IKVSetOptions) {
    const name = options?.collection || DefaultKVCollection
    return this.collections[name]?.bulkDocs(objs, options)
  }

  get(_id: string, options?: IKVSetOptions) {
    const name = options?.collection || DefaultKVCollection
    return this.collections[name]?.get(_id)
  }

  getExtend(docId: string, aPropName: string, options?: IKVSetOptions) {
    const name = options?.collection || DefaultKVCollection
    return this.collections[name]?.getExtend(docId, aPropName)
  }

  getExtends(docId: string, aPropName?: string | string[], options?: IKVSetOptions) {
    const name = options?.collection || DefaultKVCollection
    return this.collections[name]?.getExtends(docId, aPropName, options)
  }

  del(_id?: string|string[], options?: IKVSetOptions) {
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

  createIndex(indexName: string, fields: string|string[], options?: IKVSetOptions) {
    const name = options?.collection || DefaultKVCollection
    return this.collections[name]?.createIndex(indexName, fields)
  }

  search(query: string, size?: number, page:number = 0, options?: IKVSetOptions) {
    const name = options?.collection || DefaultKVCollection
    return this.collections[name]?.search(query, size, page)
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
  declare preSearchKey: Statement
  declare preSearchKeyAll: Statement
  declare preAll: Statement
  declare preAllLimit: Statement

  constructor(public name: string, protected db: KVSqlite) {
    if (!db.readonly) {
      db.prepare(createTableSql(name)).run()
      db.createIndex('type', KV_TYPE_SYMBOL)
    }

    this.preAdd = db.prepare('INSERT INTO ' + name + ' (key, val) VALUES (@_id, jsonb(@val))')
    this.preUpdate = db.prepare('UPDATE ' + name + ' SET key = @_id, val = jsonb(@val) WHERE key=@_id');
    this.preExists = db.prepare('SELECT 1 FROM ' + name + ' WHERE key = ?').pluck();
    this.preGet = db.prepare('SELECT json(val) as val FROM ' + name + ' WHERE key = ?').pluck()
    this.preDel = db.prepare('DELETE FROM ' + name + ' WHERE key = ?')
    this.preDelAll = db.prepare('DELETE FROM ' + name + '')
    this.preCount = db.prepare('SELECT Count(*) as count FROM ' + name).pluck()
    this.preCountW = db.prepare('SELECT Count(*) as count FROM ' + name + ' WHERE key LIKE ?').pluck()
    this.preSearchKey = db.prepare('SELECT key, json(val) as val FROM ' + name + ' WHERE key LIKE @query LIMIT @size OFFSET @offset')
    this.preSearchKeyAll = db.prepare('SELECT key, json(val) as val FROM ' + name + ' WHERE key LIKE @query')
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

  set(docId: string|IKVObjItem, obj?: IKVObjItem|IKVSetOptions, options?: IKVSetOptions) {
    const vType = typeof docId
    if (vType === 'object') {
      options = obj
      obj = docId as IKVObjItem
    } else if (vType === 'string') {
      obj!._id = docId as string
    }
    return this.db.transaction(() => {
      return this._set(obj as IKVObjItem, options)
    })()
  }

  _setExtend(docId: string, key: string, value: any, options?: IKVSetOptions) {
    if (!key.startsWith('.')) key = '.' + key;
    docId = path.join(docId, key);
    const vDoc = {_id: docId, [KV_VALUE_SYMBOL]: value} as IKVObjItem
    if (options?.[KV_TYPE_SYMBOL]) {vDoc[KV_TYPE_SYMBOL] = options[KV_TYPE_SYMBOL]}
    return this._set(vDoc, options);
  }

  setExtend(docId: string, key: string, value: any, options?: IKVSetOptions) {
    return this.db.transaction(() => {
      return this._setExtend(docId, key, value, options)
    })()
  }

  setExtends(docId: string, aDoc: any, options?: IKVSetOptions) {
    return this.db.transaction(() => {
      return Object.keys(aDoc).map(key => this._setExtend(docId, key, aDoc[key], options));
    })()
  }

  bulkDocs(objs: IKVObjItem[], options?: IKVSetOptions) {
    return this.db.transaction(() => {
      return objs.map(obj => this._set(obj, options))
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

  /**
   * get the value of the document's property
   * @param docId the document id
   * @param aPropName the property name of the document id
   * @returns the property value object
   */
  getExtend(docId: string, aPropName: string) {
    if (!aPropName.startsWith('.')) aPropName = '.' + aPropName;
    const result = this.get(path.join(docId, aPropName));
    return result?.[KV_VALUE_SYMBOL];
  }

  /**
   * get extends of the document
   * @param docId the document id
   * @param aPropName the property name(s) of the document id
   * @param options optional options
   * @param options.singleValue whether return value if only one property.
   * @returns all extends property key-value object
   */
  getExtends(docId: string, aPropName?: string | string[], options?: IKVSetOptions) {
    const singleValue = options?.singleValue
    if (aPropName) {
      if (typeof aPropName === 'string') aPropName = [aPropName];
    } else {
      aPropName = ['%'];
    }
    aPropName = aPropName.map((name) =>
      path.join(docId, (name.startsWith('.') ? name : '.' + name))
    );
    const vProps = aPropName.map(key => key.lastIndexOf('%') >= 0 ? this.list(key) : this.get(key)).flat()
    let result = vProps.reduce(
      (obj, prop) => {
        if (prop) {
          const value = prop[KV_VALUE_SYMBOL]
          const key = path.basename(prop._id).slice(1)
          obj[key] = value
        }
        return obj
      },
      {_id: docId}
    )
    if (singleValue) {
      result = vProps.length === 1 ? vProps[0][KV_VALUE_SYMBOL] : result
    }
    return result
  }

  del(_id?: string|string[]) {
    if (Array.isArray(_id)) {
      return this.db.transaction(() => {
        return _id.map(id => this.preDel.run(id))
      })()
    }
    return _id ? this.preDel.run(_id) : this.preDelAll.run()
  }

  isExists(_id: string) {
    return this.preExists.get(_id) as boolean
  }

  count(query?: string) {
    return (query ? this.preCountW.get(query) : this.preCount.get()) as number
  }

  list(query?: string, size?: number, page:number = 0) {
    const result = (query ?
        size ? this.preSearchKey.all({query, size, offset: page*size}) : this.preSearchKeyAll.all({query})
      : size ? this.preAllLimit.all({size, offset: page*size}) : this.preAll.all()) as {key: string, val: string}[]
    return result.map(row => ({...JSON.parse(row.val), _id: row.key})) as IKVObjItem[]
  }

  createIndex(indexName: string, fields: string|string[]) {
    if (!indexName.startsWith('idx_' + this.name + '_')) {indexName = 'idx_' + this.name + '_' + indexName}
    if (!Array.isArray(fields)) {fields = [fields]}
    fields = fields.map(field => `val->>'$.${field}'`);
    return this.db.prepare('CREATE INDEX IF NOT EXISTS ' + indexName + ' ON ' + this.name + ' (' + fields.join(',') + ')').run()
  }

  // createIndex(indexName: string, fields: string|string[]) {
  //   return this.db.transaction(() => {
  //     return this._createIndex(indexName, fields)
  //   })()
  // }

  search(query: string, size?: number, page:number = 0) {
    const preSearchField = this.db.prepare('SELECT key, json(val) as val FROM ' + this.name + ' WHERE '+ query +' LIMIT @size OFFSET @offset')
    const preSearchFieldAll = this.db.prepare('SELECT key, json(val) as val FROM ' + this.name + ' WHERE '+ query)

    const result = (size ? preSearchField.all({size, offset: page*size}) : preSearchFieldAll.all()) as {key: string, val: string}[]
    return result.map(row => ({...JSON.parse(row.val), _id: row.key})) as IKVObjItem[]
  }
}