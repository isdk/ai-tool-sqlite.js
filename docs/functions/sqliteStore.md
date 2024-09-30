[**@isdk/ai-tool-sqlite**](../README.md) • **Docs**

***

[@isdk/ai-tool-sqlite](../globals.md) / \_sqliteStore

# Function: \_sqliteStore()

> **\_sqliteStore**(`this`, `__namedParameters`): [`KVSqlite`](../classes/KVSqlite.md) \| [`IKVObjItem`](../interfaces/IKVObjItem.md) \| [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md) \| [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)[]

return the database directly if no key is provided
return the value if key is provided and value is undefined
remove the key if key is provided and value is null
set the value if key is provided and value is provided

## Parameters

• **this**: `ToolFunc`

• **\_\_namedParameters** = `{}`

• **\_\_namedParameters.key?**: `string` \| [`IKVObjItem`](../interfaces/IKVObjItem.md) \| [`IKVSetOptions`](../interfaces/IKVSetOptions.md)

• **\_\_namedParameters.options?**: [`IKVSetOptions`](../interfaces/IKVSetOptions.md)

• **\_\_namedParameters.value?**: [`IKVObjItem`](../interfaces/IKVObjItem.md) \| [`IKVSetOptions`](../interfaces/IKVSetOptions.md)

## Returns

[`KVSqlite`](../classes/KVSqlite.md) \| [`IKVObjItem`](../interfaces/IKVObjItem.md) \| [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md) \| [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)[]

## Defined in

[packages/ai-tool-sqlite/src/sqlite-store.ts:29](https://github.com/isdk/ai-tool-sqlite.js/blob/9fe2c10603e7d4edf9338798a309c4c793b97975/src/sqlite-store.ts#L29)
