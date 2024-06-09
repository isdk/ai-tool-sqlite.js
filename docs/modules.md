[@isdk/ai-tool-sqlite](README.md) / Exports

# @isdk/ai-tool-sqlite

## Table of contents

### Classes

- [KVSqlite](classes/KVSqlite.md)
- [KVSqliteAttachments](classes/KVSqliteAttachments.md)
- [KVSqliteCollection](classes/KVSqliteCollection.md)
- [KVSqliteResFunc](classes/KVSqliteResFunc.md)

### Interfaces

- [IKVCollections](interfaces/IKVCollections.md)
- [IKVObjItem](interfaces/IKVObjItem.md)
- [IKVSetOptions](interfaces/IKVSetOptions.md)
- [KVSqliteResFuncItem](interfaces/KVSqliteResFuncItem.md)
- [KVSqliteResFuncParams](interfaces/KVSqliteResFuncParams.md)
- [SqliteRunResult](interfaces/SqliteRunResult.md)

### Type Aliases

- [IKVDocumentId](modules.md#ikvdocumentid)

### Variables

- [DefaultKVCollection](modules.md#defaultkvcollection)
- [KV\_TYPE\_SYMBOL](modules.md#kv_type_symbol)
- [KV\_VALUE\_SYMBOL](modules.md#kv_value_symbol)
- [StoreCache](modules.md#storecache)
- [StoreCacheName](modules.md#storecachename)

### Functions

- [\_sqliteStore](modules.md#_sqlitestore)
- [createSqliteStore](modules.md#createsqlitestore)

## Type Aliases

### IKVDocumentId

Ƭ **IKVDocumentId**: `string` \| `number`

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:12](https://github.com/isdk/ai-tool-sqlite.js/blob/e7311db52ae92bc8b044507d9c239bcd77e10f6e/src/kvsqlite.ts#L12)

## Variables

### DefaultKVCollection

• `Const` **DefaultKVCollection**: ``"kv"``

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:30](https://github.com/isdk/ai-tool-sqlite.js/blob/e7311db52ae92bc8b044507d9c239bcd77e10f6e/src/kvsqlite.ts#L30)

___

### KV\_TYPE\_SYMBOL

• `Const` **KV\_TYPE\_SYMBOL**: ``"型"``

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:32](https://github.com/isdk/ai-tool-sqlite.js/blob/e7311db52ae92bc8b044507d9c239bcd77e10f6e/src/kvsqlite.ts#L32)

___

### KV\_VALUE\_SYMBOL

• `Const` **KV\_VALUE\_SYMBOL**: ``"值"``

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:31](https://github.com/isdk/ai-tool-sqlite.js/blob/e7311db52ae92bc8b044507d9c239bcd77e10f6e/src/kvsqlite.ts#L31)

___

### StoreCache

• `Const` **StoreCache**: `ToolFunc`

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-store.ts:8](https://github.com/isdk/ai-tool-sqlite.js/blob/e7311db52ae92bc8b044507d9c239bcd77e10f6e/src/sqlite-store.ts#L8)

___

### StoreCacheName

• `Const` **StoreCacheName**: ``"cache.store"``

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-store.ts:6](https://github.com/isdk/ai-tool-sqlite.js/blob/e7311db52ae92bc8b044507d9c239bcd77e10f6e/src/sqlite-store.ts#L6)

## Functions

### \_sqliteStore

▸ **_sqliteStore**(`this`, `«destructured»?`): [`IKVObjItem`](interfaces/IKVObjItem.md) \| [`KVSqlite`](classes/KVSqlite.md) \| `RunResult` \| `RunResult`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ToolFunc` |
| `«destructured»` | `Object` |
| › `key?` | `string` \| [`IKVObjItem`](interfaces/IKVObjItem.md) \| [`IKVSetOptions`](interfaces/IKVSetOptions.md) |
| › `options?` | [`IKVSetOptions`](interfaces/IKVSetOptions.md) |
| › `value?` | [`IKVObjItem`](interfaces/IKVObjItem.md) \| [`IKVSetOptions`](interfaces/IKVSetOptions.md) |

#### Returns

[`IKVObjItem`](interfaces/IKVObjItem.md) \| [`KVSqlite`](classes/KVSqlite.md) \| `RunResult` \| `RunResult`[]

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-store.ts:17](https://github.com/isdk/ai-tool-sqlite.js/blob/e7311db52ae92bc8b044507d9c239bcd77e10f6e/src/sqlite-store.ts#L17)

___

### createSqliteStore

▸ **createSqliteStore**(`name`, `dbPath?`, `options?`): `ToolFunc`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `dbPath?` | `string` |
| `options?` | [`IKVSetOptions`](interfaces/IKVSetOptions.md) |

#### Returns

`ToolFunc`

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-store.ts:57](https://github.com/isdk/ai-tool-sqlite.js/blob/e7311db52ae92bc8b044507d9c239bcd77e10f6e/src/sqlite-store.ts#L57)
