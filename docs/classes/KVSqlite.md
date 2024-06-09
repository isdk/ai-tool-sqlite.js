[@isdk/ai-tool-sqlite](../README.md) / [Exports](../modules.md) / KVSqlite

# Class: KVSqlite

## Hierarchy

- `Database`

  ↳ **`KVSqlite`**

## Table of contents

### Constructors

- [constructor](KVSqlite.md#constructor)

### Properties

- [collections](KVSqlite.md#collections)
- [id](KVSqlite.md#id)
- [inTransaction](KVSqlite.md#intransaction)
- [memory](KVSqlite.md#memory)
- [name](KVSqlite.md#name)
- [open](KVSqlite.md#open)
- [readonly](KVSqlite.md#readonly)
- [SqliteError](KVSqlite.md#sqliteerror)

### Methods

- [aggregate](KVSqlite.md#aggregate)
- [backup](KVSqlite.md#backup)
- [bulkDocs](KVSqlite.md#bulkdocs)
- [close](KVSqlite.md#close)
- [count](KVSqlite.md#count)
- [create](KVSqlite.md#create)
- [createIndex](KVSqlite.md#createindex)
- [defaultSafeIntegers](KVSqlite.md#defaultsafeintegers)
- [del](KVSqlite.md#del)
- [exec](KVSqlite.md#exec)
- [function](KVSqlite.md#function)
- [get](KVSqlite.md#get)
- [getExtend](KVSqlite.md#getextend)
- [getExtends](KVSqlite.md#getextends)
- [isExists](KVSqlite.md#isexists)
- [list](KVSqlite.md#list)
- [loadExtension](KVSqlite.md#loadextension)
- [pragma](KVSqlite.md#pragma)
- [prepare](KVSqlite.md#prepare)
- [search](KVSqlite.md#search)
- [searchEx](KVSqlite.md#searchex)
- [serialize](KVSqlite.md#serialize)
- [set](KVSqlite.md#set)
- [setExtend](KVSqlite.md#setextend)
- [setExtends](KVSqlite.md#setextends)
- [table](KVSqlite.md#table)
- [transaction](KVSqlite.md#transaction)
- [unsafeMode](KVSqlite.md#unsafemode)

## Constructors

### constructor

• **new KVSqlite**(`filename?`, `options?`): [`KVSqlite`](KVSqlite.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename?` | `string` \| `Buffer` |
| `options?` | [`IKVSetOptions`](../interfaces/IKVSetOptions.md) |

#### Returns

[`KVSqlite`](KVSqlite.md)

#### Overrides

Database.constructor

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:50](https://github.com/isdk/ai-tool-sqlite.js/blob/e7311db52ae92bc8b044507d9c239bcd77e10f6e/src/kvsqlite.ts#L50)

## Properties

### collections

• **collections**: [`IKVCollections`](../interfaces/IKVCollections.md) = `{}`

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:48](https://github.com/isdk/ai-tool-sqlite.js/blob/e7311db52ae92bc8b044507d9c239bcd77e10f6e/src/kvsqlite.ts#L48)

___

### id

• **id**: `undefined` \| `string`

The unique id of the database.

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:47](https://github.com/isdk/ai-tool-sqlite.js/blob/e7311db52ae92bc8b044507d9c239bcd77e10f6e/src/kvsqlite.ts#L47)

___

### inTransaction

• **inTransaction**: `boolean`

#### Inherited from

Database.inTransaction

#### Defined in

node_modules/.pnpm/@types+better-sqlite3@7.6.10/node_modules/@types/better-sqlite3/index.d.ts:57

___

### memory

• **memory**: `boolean`

#### Inherited from

Database.memory

#### Defined in

node_modules/.pnpm/@types+better-sqlite3@7.6.10/node_modules/@types/better-sqlite3/index.d.ts:53

___

### name

• **name**: `string`

#### Inherited from

Database.name

#### Defined in

node_modules/.pnpm/@types+better-sqlite3@7.6.10/node_modules/@types/better-sqlite3/index.d.ts:55

___

### open

• **open**: `boolean`

#### Inherited from

Database.open

#### Defined in

node_modules/.pnpm/@types+better-sqlite3@7.6.10/node_modules/@types/better-sqlite3/index.d.ts:56

___

### readonly

• **readonly**: `boolean`

#### Inherited from

Database.readonly

#### Defined in

node_modules/.pnpm/@types+better-sqlite3@7.6.10/node_modules/@types/better-sqlite3/index.d.ts:54

___

### SqliteError

▪ `Static` **SqliteError**: typeof `SqliteError`

#### Inherited from

Database.SqliteError

#### Defined in

node_modules/.pnpm/@types+better-sqlite3@7.6.10/node_modules/@types/better-sqlite3/index.d.ts:91

## Methods

### aggregate

▸ **aggregate**\<`T`\>(`name`, `options`): `this`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `options` | `RegistrationOptions` & \{ `inverse?`: (`total`: `T`, `dropped`: `T`) => `T` ; `result?`: (`total`: `T`) => `unknown` ; `start?`: `T` \| () => `T` ; `step`: (`total`: `T`, `next`: `ElementOf`\<`T`\>) => `void` \| `T`  } |

#### Returns

`this`

#### Inherited from

Database.aggregate

#### Defined in

node_modules/.pnpm/@types+better-sqlite3@7.6.10/node_modules/@types/better-sqlite3/index.d.ts:67

___

### backup

▸ **backup**(`destinationFile`, `options?`): `Promise`\<`BackupMetadata`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `destinationFile` | `string` |
| `options?` | `BackupOptions` |

#### Returns

`Promise`\<`BackupMetadata`\>

#### Inherited from

Database.backup

#### Defined in

node_modules/.pnpm/@types+better-sqlite3@7.6.10/node_modules/@types/better-sqlite3/index.d.ts:80

___

### bulkDocs

▸ **bulkDocs**(`objs`, `options?`): `RunResult`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `objs` | [`IKVObjItem`](../interfaces/IKVObjItem.md)[] |
| `options?` | [`IKVSetOptions`](../interfaces/IKVSetOptions.md) |

#### Returns

`RunResult`[]

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:91](https://github.com/isdk/ai-tool-sqlite.js/blob/e7311db52ae92bc8b044507d9c239bcd77e10f6e/src/kvsqlite.ts#L91)

___

### close

▸ **close**(): `this`

#### Returns

`this`

#### Inherited from

Database.close

#### Defined in

node_modules/.pnpm/@types+better-sqlite3@7.6.10/node_modules/@types/better-sqlite3/index.d.ts:78

___

### count

▸ **count**(`query?`, `options?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `query?` | `string` |
| `options?` | [`IKVSetOptions`](../interfaces/IKVSetOptions.md) |

#### Returns

`number`

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:121](https://github.com/isdk/ai-tool-sqlite.js/blob/e7311db52ae92bc8b044507d9c239bcd77e10f6e/src/kvsqlite.ts#L121)

___

### create

▸ **create**(`name`): `undefined` \| [`KVSqliteCollection`](KVSqliteCollection.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`undefined` \| [`KVSqliteCollection`](KVSqliteCollection.md)

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:70](https://github.com/isdk/ai-tool-sqlite.js/blob/e7311db52ae92bc8b044507d9c239bcd77e10f6e/src/kvsqlite.ts#L70)

___

### createIndex

▸ **createIndex**(`indexName`, `fields`, `options?`): `RunResult`

#### Parameters

| Name | Type |
| :------ | :------ |
| `indexName` | `string` |
| `fields` | `string` \| `string`[] |
| `options?` | [`IKVSetOptions`](../interfaces/IKVSetOptions.md) |

#### Returns

`RunResult`

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:131](https://github.com/isdk/ai-tool-sqlite.js/blob/e7311db52ae92bc8b044507d9c239bcd77e10f6e/src/kvsqlite.ts#L131)

___

### defaultSafeIntegers

▸ **defaultSafeIntegers**(`toggleState?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `toggleState?` | `boolean` |

#### Returns

`this`

#### Inherited from

Database.defaultSafeIntegers

#### Defined in

node_modules/.pnpm/@types+better-sqlite3@7.6.10/node_modules/@types/better-sqlite3/index.d.ts:79

___

### del

▸ **del**(`_id?`, `options?`): `RunResult` \| `RunResult`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id?` | [`IKVDocumentId`](../modules.md#ikvdocumentid) \| [`IKVDocumentId`](../modules.md#ikvdocumentid)[] |
| `options?` | [`IKVSetOptions`](../interfaces/IKVSetOptions.md) |

#### Returns

`RunResult` \| `RunResult`[]

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:111](https://github.com/isdk/ai-tool-sqlite.js/blob/e7311db52ae92bc8b044507d9c239bcd77e10f6e/src/kvsqlite.ts#L111)

___

### exec

▸ **exec**(`source`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |

#### Returns

`this`

#### Inherited from

Database.exec

#### Defined in

node_modules/.pnpm/@types+better-sqlite3@7.6.10/node_modules/@types/better-sqlite3/index.d.ts:63

___

### function

▸ **function**(`name`, `cb`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `cb` | (...`params`: `unknown`[]) => `unknown` |

#### Returns

`this`

#### Inherited from

Database.function

#### Defined in

node_modules/.pnpm/@types+better-sqlite3@7.6.10/node_modules/@types/better-sqlite3/index.d.ts:65

▸ **function**(`name`, `options`, `cb`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `options` | `RegistrationOptions` |
| `cb` | (...`params`: `unknown`[]) => `unknown` |

#### Returns

`this`

#### Inherited from

Database.function

#### Defined in

node_modules/.pnpm/@types+better-sqlite3@7.6.10/node_modules/@types/better-sqlite3/index.d.ts:66

___

### get

▸ **get**(`_id`, `options?`): [`IKVObjItem`](../interfaces/IKVObjItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | [`IKVDocumentId`](../modules.md#ikvdocumentid) |
| `options?` | [`IKVSetOptions`](../interfaces/IKVSetOptions.md) |

#### Returns

[`IKVObjItem`](../interfaces/IKVObjItem.md)

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:96](https://github.com/isdk/ai-tool-sqlite.js/blob/e7311db52ae92bc8b044507d9c239bcd77e10f6e/src/kvsqlite.ts#L96)

___

### getExtend

▸ **getExtend**(`docId`, `aPropName`, `options?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `docId` | [`IKVDocumentId`](../modules.md#ikvdocumentid) |
| `aPropName` | `string` |
| `options?` | [`IKVSetOptions`](../interfaces/IKVSetOptions.md) |

#### Returns

`any`

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:101](https://github.com/isdk/ai-tool-sqlite.js/blob/e7311db52ae92bc8b044507d9c239bcd77e10f6e/src/kvsqlite.ts#L101)

___

### getExtends

▸ **getExtends**(`docId`, `aPropName?`, `options?`): [`IKVObjItem`](../interfaces/IKVObjItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `docId` | [`IKVDocumentId`](../modules.md#ikvdocumentid) |
| `aPropName?` | `string` \| `string`[] |
| `options?` | [`IKVSetOptions`](../interfaces/IKVSetOptions.md) |

#### Returns

[`IKVObjItem`](../interfaces/IKVObjItem.md)

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:106](https://github.com/isdk/ai-tool-sqlite.js/blob/e7311db52ae92bc8b044507d9c239bcd77e10f6e/src/kvsqlite.ts#L106)

___

### isExists

▸ **isExists**(`_id`, `options?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | [`IKVDocumentId`](../modules.md#ikvdocumentid) |
| `options?` | [`IKVSetOptions`](../interfaces/IKVSetOptions.md) |

#### Returns

`boolean`

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:116](https://github.com/isdk/ai-tool-sqlite.js/blob/e7311db52ae92bc8b044507d9c239bcd77e10f6e/src/kvsqlite.ts#L116)

___

### list

▸ **list**(`query?`, `pageSize?`, `page?`, `options?`): [`IKVObjItem`](../interfaces/IKVObjItem.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `query?` | `string` |
| `pageSize?` | `number` |
| `page?` | `number` |
| `options?` | [`IKVSetOptions`](../interfaces/IKVSetOptions.md) |

#### Returns

[`IKVObjItem`](../interfaces/IKVObjItem.md)[]

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:126](https://github.com/isdk/ai-tool-sqlite.js/blob/e7311db52ae92bc8b044507d9c239bcd77e10f6e/src/kvsqlite.ts#L126)

___

### loadExtension

▸ **loadExtension**(`path`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`this`

#### Inherited from

Database.loadExtension

#### Defined in

node_modules/.pnpm/@types+better-sqlite3@7.6.10/node_modules/@types/better-sqlite3/index.d.ts:77

___

### pragma

▸ **pragma**(`source`, `options?`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `options?` | `PragmaOptions` |

#### Returns

`unknown`

#### Inherited from

Database.pragma

#### Defined in

node_modules/.pnpm/@types+better-sqlite3@7.6.10/node_modules/@types/better-sqlite3/index.d.ts:64

___

### prepare

▸ **prepare**\<`BindParameters`, `Result`\>(`source`): `BindParameters` extends `unknown`[] ? `Statement`\<`BindParameters`\<`BindParameters`\>, `Result`\> : `Statement`\<[`BindParameters`], `Result`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `BindParameters` | extends {} \| `unknown`[] = `unknown`[] |
| `Result` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |

#### Returns

`BindParameters` extends `unknown`[] ? `Statement`\<`BindParameters`\<`BindParameters`\>, `Result`\> : `Statement`\<[`BindParameters`], `Result`\>

#### Inherited from

Database.prepare

#### Defined in

node_modules/.pnpm/@types+better-sqlite3@7.6.10/node_modules/@types/better-sqlite3/index.d.ts:59

___

### search

▸ **search**(`filter`, `size?`, `page?`, `options?`): [`IKVObjItem`](../interfaces/IKVObjItem.md)[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `filter` | `Record`\<`string`, `any`\> | `undefined` |
| `size?` | `number` | `undefined` |
| `page` | `number` | `0` |
| `options?` | [`IKVSetOptions`](../interfaces/IKVSetOptions.md) | `undefined` |

#### Returns

[`IKVObjItem`](../interfaces/IKVObjItem.md)[]

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:141](https://github.com/isdk/ai-tool-sqlite.js/blob/e7311db52ae92bc8b044507d9c239bcd77e10f6e/src/kvsqlite.ts#L141)

___

### searchEx

▸ **searchEx**(`query`, `size?`, `page?`, `options?`): [`IKVObjItem`](../interfaces/IKVObjItem.md)[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `query` | `string` \| `Record`\<`string`, `string`\> | `undefined` |
| `size?` | `number` | `undefined` |
| `page` | `number` | `0` |
| `options?` | [`IKVSetOptions`](../interfaces/IKVSetOptions.md) | `undefined` |

#### Returns

[`IKVObjItem`](../interfaces/IKVObjItem.md)[]

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:136](https://github.com/isdk/ai-tool-sqlite.js/blob/e7311db52ae92bc8b044507d9c239bcd77e10f6e/src/kvsqlite.ts#L136)

___

### serialize

▸ **serialize**(`options?`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `SerializeOptions` |

#### Returns

`Buffer`

#### Inherited from

Database.serialize

#### Defined in

node_modules/.pnpm/@types+better-sqlite3@7.6.10/node_modules/@types/better-sqlite3/index.d.ts:83

___

### set

▸ **set**(`docId`, `obj?`, `options?`): `RunResult`

#### Parameters

| Name | Type |
| :------ | :------ |
| `docId` | [`IKVDocumentId`](../modules.md#ikvdocumentid) \| [`IKVObjItem`](../interfaces/IKVObjItem.md) |
| `obj?` | [`IKVObjItem`](../interfaces/IKVObjItem.md) \| [`IKVSetOptions`](../interfaces/IKVSetOptions.md) |
| `options?` | [`IKVSetOptions`](../interfaces/IKVSetOptions.md) |

#### Returns

`RunResult`

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:76](https://github.com/isdk/ai-tool-sqlite.js/blob/e7311db52ae92bc8b044507d9c239bcd77e10f6e/src/kvsqlite.ts#L76)

___

### setExtend

▸ **setExtend**(`docId`, `key`, `value`, `options?`): `RunResult`

#### Parameters

| Name | Type |
| :------ | :------ |
| `docId` | [`IKVDocumentId`](../modules.md#ikvdocumentid) |
| `key` | `string` |
| `value` | `any` |
| `options?` | [`IKVSetOptions`](../interfaces/IKVSetOptions.md) |

#### Returns

`RunResult`

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:81](https://github.com/isdk/ai-tool-sqlite.js/blob/e7311db52ae92bc8b044507d9c239bcd77e10f6e/src/kvsqlite.ts#L81)

___

### setExtends

▸ **setExtends**(`docId`, `aDoc`, `options?`): `RunResult`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `docId` | [`IKVDocumentId`](../modules.md#ikvdocumentid) |
| `aDoc` | `any` |
| `options?` | [`IKVSetOptions`](../interfaces/IKVSetOptions.md) |

#### Returns

`RunResult`[]

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:86](https://github.com/isdk/ai-tool-sqlite.js/blob/e7311db52ae92bc8b044507d9c239bcd77e10f6e/src/kvsqlite.ts#L86)

___

### table

▸ **table**(`name`, `options`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `options` | `VirtualTableOptions` |

#### Returns

`this`

#### Inherited from

Database.table

#### Defined in

node_modules/.pnpm/@types+better-sqlite3@7.6.10/node_modules/@types/better-sqlite3/index.d.ts:81

___

### transaction

▸ **transaction**\<`F`\>(`fn`): `Transaction`\<`F`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends `VariableArgFunction` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `F` |

#### Returns

`Transaction`\<`F`\>

#### Inherited from

Database.transaction

#### Defined in

node_modules/.pnpm/@types+better-sqlite3@7.6.10/node_modules/@types/better-sqlite3/index.d.ts:62

___

### unsafeMode

▸ **unsafeMode**(`unsafe?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `unsafe?` | `boolean` |

#### Returns

`this`

#### Inherited from

Database.unsafeMode

#### Defined in

node_modules/.pnpm/@types+better-sqlite3@7.6.10/node_modules/@types/better-sqlite3/index.d.ts:82
