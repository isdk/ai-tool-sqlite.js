import fs from 'fs';
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

import { DefaultKVCollection, IKVObjItem, KVSqlite, SYS_KV_COLLECTION } from "@isdk/kvsqlite";

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
  collection?: string
  options?: any
}

export interface KVSqliteResFuncItem extends FuncItem {
  dbPath: string|undefined
  initDir: string|undefined
}

export interface KVSqliteResFunc {
  initDB(db: KVSqlite): void
}

export class KVSqliteResFunc<T extends KVSqliteResFuncParams = KVSqliteResFuncParams> extends ResServerTools {
  dbPath: string|undefined
  initDir: string|undefined
  db: KVSqlite
  initingData: boolean|undefined

  constructor(name: string|Function|FuncItem, options: FuncItem|any = {}) {
    super(name, options)

    if (this.dbPath) {
      const db = this.db = new KVSqlite(this.dbPath)
      if (this.initDB) this.initDB(db)
      // const count = db.count()
      // if (count === 0) {
      //   this.initData()
      // }
    } else {
      throw new CommonError('dbPath is required', this.name, ErrorCode.InvalidArgument)
    }
  }

  async initData(initDir?: string, collection?: string) {
    if (!initDir && this.db.count() === 0) {
      initDir = this.initDir
    }
    if (initDir) {
      return this.initDataFromDir(initDir, collection)
    }
  }

  async initDataFromDir(dir: string, collection?: string) {
    if (this.initingData) { throw new CommonError('The initializing data is already running', this.name + '.initData') }
    this.initingData = true
    const docs = await this.getDocsFromDir(dir)
    this.db.bulkDocs(docs, {collection})
    this.initingData = false
  }

  async getDocsFromDir(dir: string) {
    const sysCollection = this.db.collections[SYS_KV_COLLECTION]
    const lastImportFiles = sysCollection.getExtend(DefaultKVCollection, lastImportFilesFieldName)
    const result = getConfigs(dir, {after: lastImportFiles})
    if (result.length) {
      const filenames = Object.fromEntries(result.map(item => [item.$cfgPath, fs.statSync(item.$cfgPath).mtimeMs]))
      sysCollection.setExtend(DefaultKVCollection, lastImportFilesFieldName, filenames, {overwrite: false})
    }
    return result.flat()
  }

  async updateDataFromDir(dir = this.initDir, collection?: string) {
    if (this.initingData) { throw new CommonError('The initializing data is already running', this.name + '.updateData') }
    if (dir) {
      this.initingData = true
      const docs = await this.getDocsFromDir(dir)
      if (docs.length) {
        this.db.bulkDocs(docs, {ignoreExists: true, collection})
      }
      this.initingData = false
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
    const { query } = options || {}
    const result = this.db.list(query, options as any) as unknown as T[]

    return result;
  }

  get(options: KVSqliteResFuncParams) {
    const id = options?.id
    if (id !== undefined) {
      const result = this.db.get(id as any, options as any) as T
      if (!result) {
        throw new NotFoundError(id, this.name + '.get')
      }
      return result
    } else {
      throw new CommonError('id is required', this.name + '.get', ErrorCode.InvalidArgument)
    }
  }

  put(model: KVSqliteResFuncParams): Promise<SqliteRunResult>|SqliteRunResult {
    const val = model.val
    const id = model.id ?? val?._id
    const overwrite = model.overwrite || false
    if (!id) {
      throw new CommonError('id is required', this.name + '.put', ErrorCode.InvalidArgument)
    }
    if (typeof val !== 'object' ) {
      throw new CommonError('object val is required', this.name + '.put', ErrorCode.InvalidArgument)
    }

    if (this.db.isExists(id as any, model as any)) {
      return this.db.set(id as any, model.val, { ...model as any, overwrite }) as SqliteRunResult
    } else {
      throw new NotFoundError(id, this.name + '.put')
    }
  }

  post(model: KVSqliteResFuncParams): Promise<SqliteRunResult[]|SqliteRunResult>|SqliteRunResult[]|SqliteRunResult {
    const id = model.id
    const val = model.val
    let result: SqliteRunResult[]|SqliteRunResult

    if (Array.isArray(val)) {
      result = this.db.bulkDocs(val, model as any)
    } else {
      if (!id) {
        throw new CommonError('id is required', this.name + '.post', ErrorCode.InvalidArgument)
      }
      if (typeof val !== 'object' ) {
        throw new CommonError('object val is required', this.name + '.post', ErrorCode.InvalidArgument)
      }

      if (this.db.isExists(id as any, model as any)) {
        throw new AlreadyExistsError(id, this.name + '.post')
      }

      result = this.db.set(id as any, model.val, model as any)
    }
    return result
  }

  delete(options: KVSqliteResFuncParams): SqliteRunResult | SqliteRunResult[] {
    const id = options?.id
    if (Array.isArray(id)) {
      return this.db.del(id)
    }

    if (id !== undefined) {
      if (this.db.isExists(id as any, options as any)) {
        return this.db.del(id as any, options as any)
      } else {
        throw new NotFoundError(id, this.name + '.delete')
      }
    } else {
      throw new CommonError('_id is required', this.name + '.delete', ErrorCode.InvalidArgument)
    }
  }

  $searchEx(options?: KVSqliteResFuncParams){
    const { query } = options || {}
    if (!query) {
      throw new CommonError('query is required', this.name + '.searchEx', ErrorCode.InvalidArgument)
    }
    const result = this.db.searchEx(query, options as any) as unknown as T[]

    return result;
  }

  $search(options?: KVSqliteResFuncParams){
    const { filter } = options || {}
    if (!filter) {
      throw new CommonError('filter is required', this.name + '.search', ErrorCode.InvalidArgument)
    }
    const result = this.db.search(filter, options as any) as unknown as T[]

    return result;
  }

  $count(options?: KVSqliteResFuncParams){
    const { query } = options || {}
    const result = this.db.count(query, options as any)
    return result
  }

  $createCollection({collection, options}: KVSqliteResFuncParams) {
    if (!collection) {
      throw new CommonError('collection name is required', this.name + '.createCollection', ErrorCode.InvalidArgument)
    }
    if (this.db.collections[collection]) {
      throw new AlreadyExistsError(collection, this.name + '.createCollection')
    }
    this.db.create(collection, options)
    return true
  }

  $deleteCollection({collection}: KVSqliteResFuncParams) {
    if (!collection) {
      throw new CommonError('collection name is required', this.name + '.deleteCollection', ErrorCode.InvalidArgument)
    }
    if (!this.db.collections[collection]) {
      throw new NotFoundError(collection, this.name + '.deleteCollection')
    }
    this.db.drop(collection)
    return true
  }
}

KVSqliteResFunc.defineProperties(KVSqliteResFunc, {
  dbPath: { type: 'string' },
  initDir: { type: 'string' },
})
