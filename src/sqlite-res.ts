import {
  AlreadyExistsError,
  ResServerTools,
  ResServerFuncParams,
  NotFoundError,
  ErrorCode,
  FuncItem,
  CommonError,
} from "@isdk/ai-tool";

import { IKVObjItem, KVSqlite } from "./kvsqlite";
import { RunResult } from "better-sqlite3";

// const eventBus = event.runSync()

export interface KVSqliteResFuncParams extends ResServerFuncParams {
  _id?: string
  val: IKVObjItem
  query?: string
  size?: number
  page?: number
  overwrite?: boolean
}

export class KVSqliteResFunc<T extends KVSqliteResFuncParams> extends ResServerTools {
  dbPath: string|undefined
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
      throw new CommonError('dbPath is required', 'KVSqliteRes', ErrorCode.InvalidArgument)
    }
  }

  initDB() {
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
      const result = this.db.get(id) as T
      if (!result) {
        throw new NotFoundError(id, 'KVSqliteRes.get')
      }
      return result
    } else {
      throw new CommonError('id is required', 'KVSqliteRes.get', ErrorCode.InvalidArgument)
    }
  }

  put(model: KVSqliteResFuncParams) {
    const id = model.id
    const val = model.val
    const overwrite = model.overwrite || false
    if (!id) {
      throw new CommonError('id is required', 'KVSqliteRes.put', ErrorCode.InvalidArgument)
    }
    if (typeof val !== 'object' ) {
      throw new CommonError('object val is required', 'KVSqliteRes.put', ErrorCode.InvalidArgument)
    }

    if (this.db.isExists(id)) {
      return this.db.set(id, model.val, { overwrite })
    } else {
      throw new NotFoundError(id, 'KVSqliteRes.put')
    }
  }

  post(model: KVSqliteResFuncParams) {
    const id = model.id
    const val = model.val
    let result: RunResult[]|RunResult

    if (Array.isArray(val)) {
      result = this.db.bulkDocs(val)
    } else {
      if (!id) {
        throw new CommonError('id is required', 'KVSqliteRes.post', ErrorCode.InvalidArgument)
      }
      if (typeof val !== 'object' ) {
        throw new CommonError('object val is required', 'KVSqliteRes.post', ErrorCode.InvalidArgument)
      }

      if (this.db.isExists(id)) {
        throw new AlreadyExistsError(id, 'KVSqliteRes.post')
      }

      result = this.db.set(id, model.val)
    }
    return result
  }

  delete({id}: KVSqliteResFuncParams) {
    if (Array.isArray(id)) {
      return this.db.del(id)
    }

    if (id !== undefined) {
      if (this.db.isExists(id)) {
        return this.db.del(id)
      } else {
        throw new NotFoundError(id, 'KVSqliteRes.delete')
      }
    } else {
      throw new CommonError('_id is required', 'KVSqliteRes.delete', ErrorCode.InvalidArgument)
    }
  }
}

KVSqliteResFunc.defineProperties(KVSqliteResFunc, {
  dbPath: { type: 'string' },
})
