[**@isdk/ai-tool-sqlite**](../README.md)

***

[@isdk/ai-tool-sqlite](../globals.md) / \_sqliteStore

# Function: \_sqliteStore()

> **\_sqliteStore**(`this`, `__namedParameters`): [`KVSqlite`](../classes/KVSqlite.md) \| [`IKVObjItem`](../interfaces/IKVObjItem.md) \| [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md) \| [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)[]

Defined in: [packages/ai-tool-sqlite/src/sqlite-store.ts:29](https://github.com/isdk/ai-tool-sqlite.js/blob/845862c47602d22555d85e9da1cf6d3511d18a9b/src/sqlite-store.ts#L29)

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

[`IKVSetOptions`](../interfaces/IKVSetOptions.md)

#### value?

[`IKVObjItem`](../interfaces/IKVObjItem.md) \| [`IKVSetOptions`](../interfaces/IKVSetOptions.md)

## Returns

[`KVSqlite`](../classes/KVSqlite.md) \| [`IKVObjItem`](../interfaces/IKVObjItem.md) \| [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md) \| [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)[]
