[**@isdk/ai-tool-sqlite**](../README.md)

***

[@isdk/ai-tool-sqlite](../globals.md) / \_sqliteStore

# Function: \_sqliteStore()

> **\_sqliteStore**(`this`, `__namedParameters`): `undefined` \| [`KVSqlite`](../classes/KVSqlite.md) \| [`IKVObjItem`](../interfaces/IKVObjItem.md) \| [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md) \| [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)[]

Defined in: [@isdk/ai-tools/packages/ai-tool-sqlite/src/sqlite-store.ts:31](https://github.com/isdk/ai-tool-sqlite.js/blob/e038f5d78b1e6466c7041f2de0c960c862914143/src/sqlite-store.ts#L31)

return the database directly if no key is provided
return the value if key is provided and value is undefined
remove the key if key is provided and value is null
set the value if key is provided and value is provided

## Parameters

### this

`ToolFunc`

### \_\_namedParameters

#### key?

`string` \| [`IKVObjItem`](../interfaces/IKVObjItem.md) \| [`IKVSetOptions`](../interfaces/IKVSetOptions.md)

#### options?

[`IKVSetOptions`](../interfaces/IKVSetOptions.md) & `object`

#### value?

[`IKVObjItem`](../interfaces/IKVObjItem.md) \| [`IKVSetOptions`](../interfaces/IKVSetOptions.md)

## Returns

`undefined` \| [`KVSqlite`](../classes/KVSqlite.md) \| [`IKVObjItem`](../interfaces/IKVObjItem.md) \| [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md) \| [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)[]
