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
- [IKVCreateFtsLanguageOptions](interfaces/IKVCreateFtsLanguageOptions.md)
- [IKVCreateFtsOptions](interfaces/IKVCreateFtsOptions.md)
- [IKVCreateFtsPluginOptions](interfaces/IKVCreateFtsPluginOptions.md)
- [IKVCreateOptions](interfaces/IKVCreateOptions.md)
- [IKVFieldOption](interfaces/IKVFieldOption.md)
- [IKVFieldOptions](interfaces/IKVFieldOptions.md)
- [IKVIndexOptions](interfaces/IKVIndexOptions.md)
- [IKVObjItem](interfaces/IKVObjItem.md)
- [IKVSetOptions](interfaces/IKVSetOptions.md)
- [KVSqliteResFuncItem](interfaces/KVSqliteResFuncItem.md)
- [KVSqliteResFuncParams](interfaces/KVSqliteResFuncParams.md)
- [KVSqliteRunResult](interfaces/KVSqliteRunResult.md)
- [SqliteRunResult](interfaces/SqliteRunResult.md)

### Type Aliases

- [IKVDocumentId](modules.md#ikvdocumentid)

### Variables

- [DefaultKVCollection](modules.md#defaultkvcollection)
- [KVFileCurrentVer](modules.md#kvfilecurrentver)
- [KV\_FIELD\_SYMBOL\_MAP](modules.md#kv_field_symbol_map)
- [KV\_FIELD\_SYMBOL\_MAP\_REVERSE](modules.md#kv_field_symbol_map_reverse)
- [KV\_NAME\_SYMBOL](modules.md#kv_name_symbol)
- [KV\_TYPE\_SYMBOL](modules.md#kv_type_symbol)
- [KV\_VALUE\_SYMBOL](modules.md#kv_value_symbol)
- [SYS\_KV\_COLLECTION](modules.md#sys_kv_collection)
- [SqliteStoresName](modules.md#sqlitestoresname)
- [StoreCache](modules.md#storecache)
- [StoreCacheName](modules.md#storecachename)
- [sqliteStores](modules.md#sqlitestores)

### Functions

- [\_sqliteStore](modules.md#_sqlitestore)
- [createSqliteStore](modules.md#createsqlitestore)
- [updateKVFieldSymbol](modules.md#updatekvfieldsymbol)

## Type Aliases

### IKVDocumentId

Ƭ **IKVDocumentId**: `string` \| `number`

#### Defined in

packages/kvsqlite/dist/index.d.ts:4

## Variables

### DefaultKVCollection

• `Const` **DefaultKVCollection**: ``"kv"``

#### Defined in

packages/kvsqlite/dist/index.d.ts:101

___

### KVFileCurrentVer

• `Const` **KVFileCurrentVer**: ``2``

#### Defined in

packages/kvsqlite/dist/index.d.ts:3

___

### KV\_FIELD\_SYMBOL\_MAP

• `Const` **KV\_FIELD\_SYMBOL\_MAP**: `any`

#### Defined in

packages/kvsqlite/dist/index.d.ts:106

___

### KV\_FIELD\_SYMBOL\_MAP\_REVERSE

• `Const` **KV\_FIELD\_SYMBOL\_MAP\_REVERSE**: `any`

#### Defined in

packages/kvsqlite/dist/index.d.ts:107

___

### KV\_NAME\_SYMBOL

• `Const` **KV\_NAME\_SYMBOL**: ``"名"``

#### Defined in

packages/kvsqlite/dist/index.d.ts:103

___

### KV\_TYPE\_SYMBOL

• `Const` **KV\_TYPE\_SYMBOL**: ``"型"``

#### Defined in

packages/kvsqlite/dist/index.d.ts:105

___

### KV\_VALUE\_SYMBOL

• `Const` **KV\_VALUE\_SYMBOL**: ``"值"``

#### Defined in

packages/kvsqlite/dist/index.d.ts:104

___

### SYS\_KV\_COLLECTION

• `Const` **SYS\_KV\_COLLECTION**: ``"_sys_kv"``

#### Defined in

packages/kvsqlite/dist/index.d.ts:102

___

### SqliteStoresName

• `Const` **SqliteStoresName**: ``"stores"``

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-store.ts:90](https://github.com/isdk/ai-tool-sqlite.js/blob/390bbe2940757aea2ece9d98dbcd05954276a420/src/sqlite-store.ts#L90)

___

### StoreCache

• `Const` **StoreCache**: `ToolFunc`

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-store.ts:8](https://github.com/isdk/ai-tool-sqlite.js/blob/390bbe2940757aea2ece9d98dbcd05954276a420/src/sqlite-store.ts#L8)

___

### StoreCacheName

• `Const` **StoreCacheName**: ``"cache.store"``

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-store.ts:6](https://github.com/isdk/ai-tool-sqlite.js/blob/390bbe2940757aea2ece9d98dbcd05954276a420/src/sqlite-store.ts#L6)

___

### sqliteStores

• `Const` **sqliteStores**: `ToolFunc`

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-store.ts:91](https://github.com/isdk/ai-tool-sqlite.js/blob/390bbe2940757aea2ece9d98dbcd05954276a420/src/sqlite-store.ts#L91)

## Functions

### \_sqliteStore

▸ **_sqliteStore**(`this`, `«destructured»?`): [`KVSqlite`](classes/KVSqlite.md) \| [`IKVObjItem`](interfaces/IKVObjItem.md) \| [`KVSqliteRunResult`](interfaces/KVSqliteRunResult.md) \| [`KVSqliteRunResult`](interfaces/KVSqliteRunResult.md)[]

return the database directly if no key is provided
return the value if key is provided and value is undefined
remove the key if key is provided and value is null
set the value if key is provided and value is provided

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ToolFunc` |
| `«destructured»` | `Object` |
| › `key?` | `string` \| [`IKVObjItem`](interfaces/IKVObjItem.md) \| [`IKVSetOptions`](interfaces/IKVSetOptions.md) |
| › `options?` | [`IKVSetOptions`](interfaces/IKVSetOptions.md) |
| › `value?` | [`IKVObjItem`](interfaces/IKVObjItem.md) \| [`IKVSetOptions`](interfaces/IKVSetOptions.md) |

#### Returns

[`KVSqlite`](classes/KVSqlite.md) \| [`IKVObjItem`](interfaces/IKVObjItem.md) \| [`KVSqliteRunResult`](interfaces/KVSqliteRunResult.md) \| [`KVSqliteRunResult`](interfaces/KVSqliteRunResult.md)[]

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-store.ts:29](https://github.com/isdk/ai-tool-sqlite.js/blob/390bbe2940757aea2ece9d98dbcd05954276a420/src/sqlite-store.ts#L29)

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

[packages/ai-tool-sqlite/src/sqlite-store.ts:72](https://github.com/isdk/ai-tool-sqlite.js/blob/390bbe2940757aea2ece9d98dbcd05954276a420/src/sqlite-store.ts#L72)

___

### updateKVFieldSymbol

▸ **updateKVFieldSymbol**(`k`, `v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `k` | `string` |
| `v` | `string` |

#### Returns

`void`

#### Defined in

packages/kvsqlite/dist/index.d.ts:108
