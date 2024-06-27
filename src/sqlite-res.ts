import fs from 'fs'
import {
  AlreadyExistsError,
  ResServerTools,
  ResServerFuncParams,
  NotFoundError,
  ErrorCode,
  FuncItem,
  CommonError,
  getConfigs,
} from "@isdk/ai-tool";

import { DefaultKVCollection, IKVObjItem, KVSqlite, SYS_KV_COLLECTION } from "./kvsqlite";

export interface SqliteRunResult {
  changes: number;
  lastInsertRowid: number | bigint;
}

const lastImportFilesFieldName = 'lastImportFiles'

// const eventBus = event.runSync()

export interface KVSqliteResFuncParams extends ResServerFuncParams {
  _id?: string
  val?: IKVObjItem|any
  query?: string
  filter?: Record<string, any>|Record<string, any>[]
  size?: number
  page?: number
  overwrite?: boolean
}

export interface KVSqliteResFuncItem extends FuncItem {
  dbPath: string|undefined
  initDir: string|undefined
}

export class KVSqliteResFunc<T extends KVSqliteResFuncParams> extends ResServerTools {
  dbPath: string|undefined
  initDir: string|undefined
  db: KVSqlite

  constructor(name: string|Function|FuncItem, options: FuncItem|any = {}) {
    super(name, options)

    if (this.dbPath) {
      const db = this.db = new KVSqlite(this.dbPath)
      const count = db.count()
      if (count === 0) {
        this.initDB()
      }
    } else {
      throw new CommonError('dbPath is required', this.name, ErrorCode.InvalidArgument)
    }
  }

  initDB(initDir = this.initDir) {
    if (initDir) {
      this.intDBFromDir(initDir)
    }
  }

  intDBFromDir(dir: string) {
    const docs = this.getDocsFromDir(dir)
    this.db.bulkDocs(docs)
  }

  getDocsFromDir(dir: string) {
    const sysCollection = this.db.collections[SYS_KV_COLLECTION]
    const lastImportFiles = sysCollection.getExtend(DefaultKVCollection, lastImportFilesFieldName)
    const result = getConfigs(dir, {after: lastImportFiles})
    if (result.length) {
      const filenames = Object.fromEntries(result.map(item => [item.$cfgPath, fs.statSync(item.$cfgPath).mtimeMs]))
      sysCollection.setExtend(DefaultKVCollection, lastImportFilesFieldName, filenames, {overwrite: false})
    }
    return result.flat()
  }

  updateDBFromDir(dir = this.initDir) {
    if (dir) {
      const docs = this.getDocsFromDir(dir)
      if (docs.length) {
        this.db.bulkDocs(docs, {ignoreExists: true})
      }
      return docs.length
    }
  }

  cast(key: string, value: any) {
    if (key === 'id' && typeof value === 'string' && (value[0] === '[' || value[0] === '{')) {
      return JSON.parse(value)
    }
    return super.cast(key, value)
  }

  list(options?: KVSqliteResFuncParams){
    const { query, size, page } = options || {}
    const result = this.db.list(query, size, page) as unknown as T[]

    return result;
  }

  get({id}: KVSqliteResFuncParams) {
    if (id !== undefined) {
      const result = this.db.get(id as any) as T
      if (!result) {
        throw new NotFoundError(id, this.name + '.get')
      }
      return result
    } else {
      throw new CommonError('id is required', this.name + '.get', ErrorCode.InvalidArgument)
    }
  }

  put(model: KVSqliteResFuncParams) {
    const val = model.val
    const id = model.id ?? val?._id
    const overwrite = model.overwrite || false
    if (!id) {
      throw new CommonError('id is required', this.name + '.put', ErrorCode.InvalidArgument)
    }
    if (typeof val !== 'object' ) {
      throw new CommonError('object val is required', this.name + '.put', ErrorCode.InvalidArgument)
    }

    if (this.db.isExists(id as any)) {
      return this.db.set(id as any, model.val, { overwrite }) as SqliteRunResult
    } else {
      throw new NotFoundError(id, this.name + '.put')
    }
  }

  post(model: KVSqliteResFuncParams) {
    const id = model.id
    const val = model.val
    let result: SqliteRunResult[]|SqliteRunResult

    if (Array.isArray(val)) {
      result = this.db.bulkDocs(val)
    } else {
      if (!id) {
        throw new CommonError('id is required', this.name + '.post', ErrorCode.InvalidArgument)
      }
      if (typeof val !== 'object' ) {
        throw new CommonError('object val is required', this.name + '.post', ErrorCode.InvalidArgument)
      }

      if (this.db.isExists(id as any)) {
        throw new AlreadyExistsError(id, this.name + '.post')
      }

      result = this.db.set(id as any, model.val)
    }
    return result
  }

  delete({id}: KVSqliteResFuncParams): SqliteRunResult | SqliteRunResult[] {
    if (Array.isArray(id)) {
      return this.db.del(id)
    }

    if (id !== undefined) {
      if (this.db.isExists(id as any)) {
        return this.db.del(id as any)
      } else {
        throw new NotFoundError(id, this.name + '.delete')
      }
    } else {
      throw new CommonError('_id is required', this.name + '.delete', ErrorCode.InvalidArgument)
    }
  }

  $searchEx(options?: KVSqliteResFuncParams){
    const { query, size, page } = options || {}
    if (!query) {
      throw new CommonError('query is required', this.name + '.searchEx', ErrorCode.InvalidArgument)
    }
    const result = this.db.searchEx(query, size, page) as unknown as T[]

    return result;
  }

  $search(options?: KVSqliteResFuncParams){
    const { filter, size, page } = options || {}
    if (!filter) {
      throw new CommonError('filter is required', this.name + '.search', ErrorCode.InvalidArgument)
    }
    const result = this.db.search(filter, size, page) as unknown as T[]

    return result;
  }

  $count(options?: KVSqliteResFuncParams){
    const { query } = options || {}
    const result = this.db.count(query)
    return result
  }
}

KVSqliteResFunc.defineProperties(KVSqliteResFunc, {
  dbPath: { type: 'string' },
  initDir: { type: 'string' },
})
