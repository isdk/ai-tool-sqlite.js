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
- [ftsLoaded](KVSqlite.md#ftsloaded)
- [id](KVSqlite.md#id)
- [inTransaction](KVSqlite.md#intransaction)
- [memory](KVSqlite.md#memory)
- [name](KVSqlite.md#name)
- [open](KVSqlite.md#open)
- [preIsExists](KVSqlite.md#preisexists)
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
- [createJsonIndex](KVSqlite.md#createjsonindex)
- [defaultSafeIntegers](KVSqlite.md#defaultsafeintegers)
- [del](KVSqlite.md#del)
- [drop](KVSqlite.md#drop)
- [enableFts](KVSqlite.md#enablefts)
- [exec](KVSqlite.md#exec)
- [function](KVSqlite.md#function)
- [get](KVSqlite.md#get)
- [getCollection](KVSqlite.md#getcollection)
- [getExtend](KVSqlite.md#getextend)
- [getExtends](KVSqlite.md#getextends)
- [isCollectionExists](KVSqlite.md#iscollectionexists)
- [isExists](KVSqlite.md#isexists)
- [isTypeExists](KVSqlite.md#istypeexists)
- [list](KVSqlite.md#list)
- [loadExtension](KVSqlite.md#loadextension)
- [loadFtsLanguage](KVSqlite.md#loadftslanguage)
- [pragma](KVSqlite.md#pragma)
- [prepare](KVSqlite.md#prepare)
- [search](KVSqlite.md#search)
- [searchEx](KVSqlite.md#searchex)
- [searchFts](KVSqlite.md#searchfts)
- [serialize](KVSqlite.md#serialize)
- [set](KVSqlite.md#set)
- [setExtend](KVSqlite.md#setextend)
- [setExtends](KVSqlite.md#setextends)
- [table](KVSqlite.md#table)
- [tableInfo](KVSqlite.md#tableinfo)
- [transaction](KVSqlite.md#transaction)
- [tryUpgradeVer](KVSqlite.md#tryupgradever)
- [unsafeMode](KVSqlite.md#unsafemode)
- [usingJsonb](KVSqlite.md#usingjsonb)

## Constructors

### constructor

• **new KVSqlite**(`filename?`, `options?`): [`KVSqlite`](KVSqlite.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename?` | `string` \| `Buffer` |
| `options?` | [`IKVSetOptions`](../interfaces/IKVSetOptions.md) & [`IKVCreateOptions`](../interfaces/IKVCreateOptions.md) |

#### Returns

[`KVSqlite`](KVSqlite.md)

#### Overrides

Database.constructor

#### Defined in

packages/kvsqlite/dist/index.d.ts:122

## Properties

### collections

• **collections**: [`IKVCollections`](../interfaces/IKVCollections.md)

#### Defined in

packages/kvsqlite/dist/index.d.ts:121

___

### ftsLoaded

• **ftsLoaded**: `Object`

#### Index signature

▪ [lang: `string`]: `boolean`

#### Defined in

packages/kvsqlite/dist/index.d.ts:118

___

### id

• **id**: `undefined` \| `string`

The unique id of the database.

#### Defined in

packages/kvsqlite/dist/index.d.ts:116

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

### preIsExists

• **preIsExists**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

packages/kvsqlite/dist/index.d.ts:117

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

▸ **bulkDocs**(`objs`, `options?`): [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `objs` | [`IKVObjItem`](../interfaces/IKVObjItem.md)[] |
| `options?` | [`IKVSetOptions`](../interfaces/IKVSetOptions.md) |

#### Returns

[`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)[]

#### Defined in

packages/kvsqlite/dist/index.d.ts:131

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

packages/kvsqlite/dist/index.d.ts:137

___

### create

▸ **create**(`name`, `options?`): `undefined` \| [`KVSqliteCollection`](KVSqliteCollection.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `options?` | [`IKVCreateOptions`](../interfaces/IKVCreateOptions.md) |

#### Returns

`undefined` \| [`KVSqliteCollection`](KVSqliteCollection.md)

#### Defined in

packages/kvsqlite/dist/index.d.ts:125

___

### createIndex

▸ **createIndex**(`indexName`, `fields`, `options?`): [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `indexName` | `string` |
| `fields` | `string` \| `string`[] |
| `options?` | [`IKVSetOptions`](../interfaces/IKVSetOptions.md) |

#### Returns

[`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)

#### Defined in

packages/kvsqlite/dist/index.d.ts:140

___

### createJsonIndex

▸ **createJsonIndex**(`indexName`, `fields`, `options?`): [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `indexName` | `string` |
| `fields` | `string` \| `string`[] |
| `options?` | [`IKVSetOptions`](../interfaces/IKVSetOptions.md) |

#### Returns

[`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)

#### Defined in

packages/kvsqlite/dist/index.d.ts:139

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

▸ **del**(`_id?`, `options?`): [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md) \| [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id?` | [`IKVDocumentId`](../modules.md#ikvdocumentid) \| [`IKVDocumentId`](../modules.md#ikvdocumentid)[] |
| `options?` | [`IKVSetOptions`](../interfaces/IKVSetOptions.md) |

#### Returns

[`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md) \| [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)[]

#### Defined in

packages/kvsqlite/dist/index.d.ts:135

___

### drop

▸ **drop**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Defined in

packages/kvsqlite/dist/index.d.ts:127

___

### enableFts

▸ **enableFts**(`collection?`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `collection?` | `string` |
| `options?` | [`IKVCreateFtsOptions`](../interfaces/IKVCreateFtsOptions.md) |

#### Returns

`void`

#### Defined in

packages/kvsqlite/dist/index.d.ts:147

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

packages/kvsqlite/dist/index.d.ts:132

___

### getCollection

▸ **getCollection**(`name`): [`KVSqliteCollection`](KVSqliteCollection.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`KVSqliteCollection`](KVSqliteCollection.md)

#### Defined in

packages/kvsqlite/dist/index.d.ts:126

___

### getExtend

▸ **getExtend**(`docId`, `aPropName?`, `options?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `docId` | [`IKVDocumentId`](../modules.md#ikvdocumentid) |
| `aPropName?` | `string` |
| `options?` | [`IKVSetOptions`](../interfaces/IKVSetOptions.md) |

#### Returns

`any`

#### Defined in

packages/kvsqlite/dist/index.d.ts:133

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

packages/kvsqlite/dist/index.d.ts:134

___

### isCollectionExists

▸ **isCollectionExists**(`collection`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `collection` | `string` |

#### Returns

`boolean`

#### Defined in

packages/kvsqlite/dist/index.d.ts:144

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

packages/kvsqlite/dist/index.d.ts:136

___

### isTypeExists

▸ **isTypeExists**(`type`, `name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `name` | `string` |

#### Returns

`boolean`

#### Defined in

packages/kvsqlite/dist/index.d.ts:143

___

### list

▸ **list**(`query?`, `options?`): [`IKVObjItem`](../interfaces/IKVObjItem.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `query?` | `string` \| [`IKVSetOptions`](../interfaces/IKVSetOptions.md) |
| `options?` | [`IKVSetOptions`](../interfaces/IKVSetOptions.md) |

#### Returns

[`IKVObjItem`](../interfaces/IKVObjItem.md)[]

#### Defined in

packages/kvsqlite/dist/index.d.ts:138

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

### loadFtsLanguage

▸ **loadFtsLanguage**(`options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`IKVCreateFtsOptions`](../interfaces/IKVCreateFtsOptions.md) |

#### Returns

`void`

#### Defined in

packages/kvsqlite/dist/index.d.ts:145

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

▸ **search**(`filter`, `options?`): [`IKVObjItem`](../interfaces/IKVObjItem.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | `Record`\<`string`, `any`\> |
| `options?` | [`IKVSetOptions`](../interfaces/IKVSetOptions.md) |

#### Returns

[`IKVObjItem`](../interfaces/IKVObjItem.md)[]

#### Defined in

packages/kvsqlite/dist/index.d.ts:142

___

### searchEx

▸ **searchEx**(`query`, `options?`): [`IKVObjItem`](../interfaces/IKVObjItem.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` \| `Record`\<`string`, `string`\> |
| `options?` | [`IKVSetOptions`](../interfaces/IKVSetOptions.md) |

#### Returns

[`IKVObjItem`](../interfaces/IKVObjItem.md)[]

#### Defined in

packages/kvsqlite/dist/index.d.ts:141

___

### searchFts

▸ **searchFts**(`query`, `options?`): \{ `_id`: `string` ; `值`: `any`  }[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `Record`\<`string`, `any`\> \| `Record`\<`string`, `any`\>[] |
| `options?` | [`IKVSetOptions`](../interfaces/IKVSetOptions.md) |

#### Returns

\{ `_id`: `string` ; `值`: `any`  }[]

#### Defined in

packages/kvsqlite/dist/index.d.ts:148

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

▸ **set**(`docId`, `obj?`, `options?`): [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `docId` | [`IKVObjItem`](../interfaces/IKVObjItem.md) \| [`IKVDocumentId`](../modules.md#ikvdocumentid) |
| `obj?` | [`IKVObjItem`](../interfaces/IKVObjItem.md) \| [`IKVSetOptions`](../interfaces/IKVSetOptions.md) |
| `options?` | [`IKVSetOptions`](../interfaces/IKVSetOptions.md) |

#### Returns

[`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)

#### Defined in

packages/kvsqlite/dist/index.d.ts:128

___

### setExtend

▸ **setExtend**(`docId`, `key`, `value`, `options?`): [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `docId` | [`IKVDocumentId`](../modules.md#ikvdocumentid) |
| `key` | `string` |
| `value` | `any` |
| `options?` | [`IKVSetOptions`](../interfaces/IKVSetOptions.md) |

#### Returns

[`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)

#### Defined in

packages/kvsqlite/dist/index.d.ts:129

___

### setExtends

▸ **setExtends**(`docId`, `aDoc`, `options?`): [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `docId` | [`IKVDocumentId`](../modules.md#ikvdocumentid) |
| `aDoc` | `any` |
| `options?` | [`IKVSetOptions`](../interfaces/IKVSetOptions.md) |

#### Returns

[`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)[]

#### Defined in

packages/kvsqlite/dist/index.d.ts:130

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

### tableInfo

▸ **tableInfo**(`collection?`, `options?`): `undefined` \| `Required`\<[`IKVFieldOptions`](../interfaces/IKVFieldOptions.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `collection?` | `string` |
| `options?` | [`IKVSetOptions`](../interfaces/IKVSetOptions.md) |

#### Returns

`undefined` \| `Required`\<[`IKVFieldOptions`](../interfaces/IKVFieldOptions.md)\>

#### Defined in

packages/kvsqlite/dist/index.d.ts:146

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

### tryUpgradeVer

▸ **tryUpgradeVer**(): `void`

#### Returns

`void`

#### Defined in

packages/kvsqlite/dist/index.d.ts:123

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

___

### usingJsonb

▸ **usingJsonb**(`collection?`): `undefined` \| `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `collection?` | `string` |

#### Returns

`undefined` \| `boolean`

#### Defined in

packages/kvsqlite/dist/index.d.ts:124
