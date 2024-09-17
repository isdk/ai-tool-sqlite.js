[**@isdk/ai-tool-sqlite**](../README.md) • **Docs**

***

[@isdk/ai-tool-sqlite](../globals.md) / KVSqlite

# Class: KVSqlite

## Extends

- `Database`

## Constructors

### new KVSqlite()

> **new KVSqlite**(`filename`?, `options`?): [`KVSqlite`](KVSqlite.md)

#### Parameters

• **filename?**: `string` \| `Buffer`

• **options?**: [`IKVSetOptions`](../interfaces/IKVSetOptions.md) & [`IKVCreateOptions`](../interfaces/IKVCreateOptions.md)

#### Returns

[`KVSqlite`](KVSqlite.md)

#### Overrides

`Database.constructor`

#### Defined in

packages/kvsqlite/dist/index.d.ts:122

## Properties

### collections

> **collections**: [`IKVCollections`](../interfaces/IKVCollections.md)

#### Defined in

packages/kvsqlite/dist/index.d.ts:121

***

### ftsLoaded

> **ftsLoaded**: `object`

#### Index Signature

 \[`lang`: `string`\]: `boolean`

#### Defined in

packages/kvsqlite/dist/index.d.ts:118

***

### id

> **id**: `undefined` \| `string`

The unique id of the database.

#### Defined in

packages/kvsqlite/dist/index.d.ts:116

***

### inTransaction

> **inTransaction**: `boolean`

#### Inherited from

`Database.inTransaction`

#### Defined in

node\_modules/.pnpm/@types+better-sqlite3@7.6.11/node\_modules/@types/better-sqlite3/index.d.ts:57

***

### memory

> **memory**: `boolean`

#### Inherited from

`Database.memory`

#### Defined in

node\_modules/.pnpm/@types+better-sqlite3@7.6.11/node\_modules/@types/better-sqlite3/index.d.ts:53

***

### name

> **name**: `string`

#### Inherited from

`Database.name`

#### Defined in

node\_modules/.pnpm/@types+better-sqlite3@7.6.11/node\_modules/@types/better-sqlite3/index.d.ts:55

***

### open

> **open**: `boolean`

#### Inherited from

`Database.open`

#### Defined in

node\_modules/.pnpm/@types+better-sqlite3@7.6.11/node\_modules/@types/better-sqlite3/index.d.ts:56

***

### preIsExists

> **preIsExists**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

packages/kvsqlite/dist/index.d.ts:117

***

### readonly

> **readonly**: `boolean`

#### Inherited from

`Database.readonly`

#### Defined in

node\_modules/.pnpm/@types+better-sqlite3@7.6.11/node\_modules/@types/better-sqlite3/index.d.ts:54

***

### SqliteError

> `static` **SqliteError**: *typeof* `SqliteError`

#### Inherited from

`Database.SqliteError`

#### Defined in

node\_modules/.pnpm/@types+better-sqlite3@7.6.11/node\_modules/@types/better-sqlite3/index.d.ts:91

## Methods

### aggregate()

> **aggregate**\<`T`\>(`name`, `options`): `this`

#### Type Parameters

• **T**

#### Parameters

• **name**: `string`

• **options**: `RegistrationOptions` & `object`

#### Returns

`this`

#### Inherited from

`Database.aggregate`

#### Defined in

node\_modules/.pnpm/@types+better-sqlite3@7.6.11/node\_modules/@types/better-sqlite3/index.d.ts:67

***

### backup()

> **backup**(`destinationFile`, `options`?): `Promise`\<`BackupMetadata`\>

#### Parameters

• **destinationFile**: `string`

• **options?**: `BackupOptions`

#### Returns

`Promise`\<`BackupMetadata`\>

#### Inherited from

`Database.backup`

#### Defined in

node\_modules/.pnpm/@types+better-sqlite3@7.6.11/node\_modules/@types/better-sqlite3/index.d.ts:80

***

### bulkDocs()

> **bulkDocs**(`objs`, `options`?): [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)[]

#### Parameters

• **objs**: [`IKVObjItem`](../interfaces/IKVObjItem.md)[]

• **options?**: [`IKVSetOptions`](../interfaces/IKVSetOptions.md)

#### Returns

[`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)[]

#### Defined in

packages/kvsqlite/dist/index.d.ts:131

***

### close()

> **close**(): `this`

#### Returns

`this`

#### Inherited from

`Database.close`

#### Defined in

node\_modules/.pnpm/@types+better-sqlite3@7.6.11/node\_modules/@types/better-sqlite3/index.d.ts:78

***

### count()

> **count**(`query`?, `options`?): `number`

#### Parameters

• **query?**: `string`

• **options?**: [`IKVSetOptions`](../interfaces/IKVSetOptions.md)

#### Returns

`number`

#### Defined in

packages/kvsqlite/dist/index.d.ts:137

***

### create()

> **create**(`name`, `options`?): `undefined` \| [`KVSqliteCollection`](KVSqliteCollection.md)

#### Parameters

• **name**: `string`

• **options?**: [`IKVCreateOptions`](../interfaces/IKVCreateOptions.md)

#### Returns

`undefined` \| [`KVSqliteCollection`](KVSqliteCollection.md)

#### Defined in

packages/kvsqlite/dist/index.d.ts:125

***

### createIndex()

> **createIndex**(`indexName`, `fields`, `options`?): [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)

#### Parameters

• **indexName**: `string`

• **fields**: `string` \| `string`[]

• **options?**: [`IKVSetOptions`](../interfaces/IKVSetOptions.md)

#### Returns

[`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)

#### Defined in

packages/kvsqlite/dist/index.d.ts:140

***

### createJsonIndex()

> **createJsonIndex**(`indexName`, `fields`, `options`?): [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)

#### Parameters

• **indexName**: `string`

• **fields**: `string` \| `string`[]

• **options?**: [`IKVSetOptions`](../interfaces/IKVSetOptions.md)

#### Returns

[`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)

#### Defined in

packages/kvsqlite/dist/index.d.ts:139

***

### defaultSafeIntegers()

> **defaultSafeIntegers**(`toggleState`?): `this`

#### Parameters

• **toggleState?**: `boolean`

#### Returns

`this`

#### Inherited from

`Database.defaultSafeIntegers`

#### Defined in

node\_modules/.pnpm/@types+better-sqlite3@7.6.11/node\_modules/@types/better-sqlite3/index.d.ts:79

***

### del()

> **del**(`_id`?, `options`?): [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md) \| [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)[]

#### Parameters

• **\_id?**: [`IKVDocumentId`](../type-aliases/IKVDocumentId.md) \| [`IKVDocumentId`](../type-aliases/IKVDocumentId.md)[]

• **options?**: [`IKVSetOptions`](../interfaces/IKVSetOptions.md)

#### Returns

[`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md) \| [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)[]

#### Defined in

packages/kvsqlite/dist/index.d.ts:135

***

### drop()

> **drop**(`name`): `void`

#### Parameters

• **name**: `string`

#### Returns

`void`

#### Defined in

packages/kvsqlite/dist/index.d.ts:127

***

### enableFts()

> **enableFts**(`collection`?, `options`?): `void`

#### Parameters

• **collection?**: `string`

• **options?**: [`IKVCreateFtsOptions`](../interfaces/IKVCreateFtsOptions.md)

#### Returns

`void`

#### Defined in

packages/kvsqlite/dist/index.d.ts:147

***

### exec()

> **exec**(`source`): `this`

#### Parameters

• **source**: `string`

#### Returns

`this`

#### Inherited from

`Database.exec`

#### Defined in

node\_modules/.pnpm/@types+better-sqlite3@7.6.11/node\_modules/@types/better-sqlite3/index.d.ts:63

***

### function()

#### function(name, cb)

> **function**(`name`, `cb`): `this`

##### Parameters

• **name**: `string`

• **cb**

##### Returns

`this`

##### Inherited from

`Database.function`

##### Defined in

node\_modules/.pnpm/@types+better-sqlite3@7.6.11/node\_modules/@types/better-sqlite3/index.d.ts:65

#### function(name, options, cb)

> **function**(`name`, `options`, `cb`): `this`

##### Parameters

• **name**: `string`

• **options**: `RegistrationOptions`

• **cb**

##### Returns

`this`

##### Inherited from

`Database.function`

##### Defined in

node\_modules/.pnpm/@types+better-sqlite3@7.6.11/node\_modules/@types/better-sqlite3/index.d.ts:66

***

### get()

> **get**(`_id`, `options`?): [`IKVObjItem`](../interfaces/IKVObjItem.md)

#### Parameters

• **\_id**: [`IKVDocumentId`](../type-aliases/IKVDocumentId.md)

• **options?**: [`IKVSetOptions`](../interfaces/IKVSetOptions.md)

#### Returns

[`IKVObjItem`](../interfaces/IKVObjItem.md)

#### Defined in

packages/kvsqlite/dist/index.d.ts:132

***

### getCollection()

> **getCollection**(`name`): [`KVSqliteCollection`](KVSqliteCollection.md)

#### Parameters

• **name**: `string`

#### Returns

[`KVSqliteCollection`](KVSqliteCollection.md)

#### Defined in

packages/kvsqlite/dist/index.d.ts:126

***

### getExtend()

> **getExtend**(`docId`, `aPropName`?, `options`?): `any`

#### Parameters

• **docId**: [`IKVDocumentId`](../type-aliases/IKVDocumentId.md)

• **aPropName?**: `string`

• **options?**: [`IKVSetOptions`](../interfaces/IKVSetOptions.md)

#### Returns

`any`

#### Defined in

packages/kvsqlite/dist/index.d.ts:133

***

### getExtends()

> **getExtends**(`docId`, `aPropName`?, `options`?): [`IKVObjItem`](../interfaces/IKVObjItem.md)

#### Parameters

• **docId**: [`IKVDocumentId`](../type-aliases/IKVDocumentId.md)

• **aPropName?**: `string` \| `string`[]

• **options?**: [`IKVSetOptions`](../interfaces/IKVSetOptions.md)

#### Returns

[`IKVObjItem`](../interfaces/IKVObjItem.md)

#### Defined in

packages/kvsqlite/dist/index.d.ts:134

***

### isCollectionExists()

> **isCollectionExists**(`collection`): `boolean`

#### Parameters

• **collection**: `string`

#### Returns

`boolean`

#### Defined in

packages/kvsqlite/dist/index.d.ts:144

***

### isExists()

> **isExists**(`_id`, `options`?): `boolean`

#### Parameters

• **\_id**: [`IKVDocumentId`](../type-aliases/IKVDocumentId.md)

• **options?**: [`IKVSetOptions`](../interfaces/IKVSetOptions.md)

#### Returns

`boolean`

#### Defined in

packages/kvsqlite/dist/index.d.ts:136

***

### isTypeExists()

> **isTypeExists**(`type`, `name`): `boolean`

#### Parameters

• **type**: `string`

• **name**: `string`

#### Returns

`boolean`

#### Defined in

packages/kvsqlite/dist/index.d.ts:143

***

### list()

> **list**(`query`?, `options`?): [`IKVObjItem`](../interfaces/IKVObjItem.md)[]

#### Parameters

• **query?**: `string` \| [`IKVSetOptions`](../interfaces/IKVSetOptions.md)

• **options?**: [`IKVSetOptions`](../interfaces/IKVSetOptions.md)

#### Returns

[`IKVObjItem`](../interfaces/IKVObjItem.md)[]

#### Defined in

packages/kvsqlite/dist/index.d.ts:138

***

### loadExtension()

> **loadExtension**(`path`): `this`

#### Parameters

• **path**: `string`

#### Returns

`this`

#### Inherited from

`Database.loadExtension`

#### Defined in

node\_modules/.pnpm/@types+better-sqlite3@7.6.11/node\_modules/@types/better-sqlite3/index.d.ts:77

***

### loadFtsLanguage()

> **loadFtsLanguage**(`options`?): `void`

#### Parameters

• **options?**: [`IKVCreateFtsOptions`](../interfaces/IKVCreateFtsOptions.md)

#### Returns

`void`

#### Defined in

packages/kvsqlite/dist/index.d.ts:145

***

### pragma()

> **pragma**(`source`, `options`?): `unknown`

#### Parameters

• **source**: `string`

• **options?**: `PragmaOptions`

#### Returns

`unknown`

#### Inherited from

`Database.pragma`

#### Defined in

node\_modules/.pnpm/@types+better-sqlite3@7.6.11/node\_modules/@types/better-sqlite3/index.d.ts:64

***

### prepare()

> **prepare**\<`BindParameters`, `Result`\>(`source`): `BindParameters` *extends* `unknown`[] ? `Statement`\<`BindParameters`\<`BindParameters`\>, `Result`\> : `Statement`\<[`BindParameters`], `Result`\>

#### Type Parameters

• **BindParameters** *extends* `object` \| `unknown`[] = `unknown`[]

• **Result** = `unknown`

#### Parameters

• **source**: `string`

#### Returns

`BindParameters` *extends* `unknown`[] ? `Statement`\<`BindParameters`\<`BindParameters`\>, `Result`\> : `Statement`\<[`BindParameters`], `Result`\>

#### Inherited from

`Database.prepare`

#### Defined in

node\_modules/.pnpm/@types+better-sqlite3@7.6.11/node\_modules/@types/better-sqlite3/index.d.ts:59

***

### search()

> **search**(`filter`, `options`?): [`IKVObjItem`](../interfaces/IKVObjItem.md)[]

#### Parameters

• **filter**: `Record`\<`string`, `any`\>

• **options?**: [`IKVSetOptions`](../interfaces/IKVSetOptions.md)

#### Returns

[`IKVObjItem`](../interfaces/IKVObjItem.md)[]

#### Defined in

packages/kvsqlite/dist/index.d.ts:142

***

### searchEx()

> **searchEx**(`query`, `options`?): [`IKVObjItem`](../interfaces/IKVObjItem.md)[]

#### Parameters

• **query**: `string` \| `Record`\<`string`, `string`\>

• **options?**: [`IKVSetOptions`](../interfaces/IKVSetOptions.md)

#### Returns

[`IKVObjItem`](../interfaces/IKVObjItem.md)[]

#### Defined in

packages/kvsqlite/dist/index.d.ts:141

***

### searchFts()

> **searchFts**(`query`, `options`?): `object`[]

#### Parameters

• **query**: `Record`\<`string`, `any`\> \| `Record`\<`string`, `any`\>[]

• **options?**: [`IKVSetOptions`](../interfaces/IKVSetOptions.md)

#### Returns

`object`[]

#### Defined in

packages/kvsqlite/dist/index.d.ts:148

***

### serialize()

> **serialize**(`options`?): `Buffer`

#### Parameters

• **options?**: `SerializeOptions`

#### Returns

`Buffer`

#### Inherited from

`Database.serialize`

#### Defined in

node\_modules/.pnpm/@types+better-sqlite3@7.6.11/node\_modules/@types/better-sqlite3/index.d.ts:83

***

### set()

> **set**(`docId`, `obj`?, `options`?): [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)

#### Parameters

• **docId**: [`IKVObjItem`](../interfaces/IKVObjItem.md) \| [`IKVDocumentId`](../type-aliases/IKVDocumentId.md)

• **obj?**: [`IKVObjItem`](../interfaces/IKVObjItem.md) \| [`IKVSetOptions`](../interfaces/IKVSetOptions.md)

• **options?**: [`IKVSetOptions`](../interfaces/IKVSetOptions.md)

#### Returns

[`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)

#### Defined in

packages/kvsqlite/dist/index.d.ts:128

***

### setExtend()

> **setExtend**(`docId`, `key`, `value`, `options`?): [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)

#### Parameters

• **docId**: [`IKVDocumentId`](../type-aliases/IKVDocumentId.md)

• **key**: `string`

• **value**: `any`

• **options?**: [`IKVSetOptions`](../interfaces/IKVSetOptions.md)

#### Returns

[`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)

#### Defined in

packages/kvsqlite/dist/index.d.ts:129

***

### setExtends()

> **setExtends**(`docId`, `aDoc`, `options`?): [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)[]

#### Parameters

• **docId**: [`IKVDocumentId`](../type-aliases/IKVDocumentId.md)

• **aDoc**: `any`

• **options?**: [`IKVSetOptions`](../interfaces/IKVSetOptions.md)

#### Returns

[`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)[]

#### Defined in

packages/kvsqlite/dist/index.d.ts:130

***

### table()

> **table**(`name`, `options`): `this`

#### Parameters

• **name**: `string`

• **options**: `VirtualTableOptions`

#### Returns

`this`

#### Inherited from

`Database.table`

#### Defined in

node\_modules/.pnpm/@types+better-sqlite3@7.6.11/node\_modules/@types/better-sqlite3/index.d.ts:81

***

### tableInfo()

> **tableInfo**(`collection`?, `options`?): `undefined` \| `Required`\<[`IKVFieldOptions`](../interfaces/IKVFieldOptions.md)\>

#### Parameters

• **collection?**: `string`

• **options?**: [`IKVSetOptions`](../interfaces/IKVSetOptions.md)

#### Returns

`undefined` \| `Required`\<[`IKVFieldOptions`](../interfaces/IKVFieldOptions.md)\>

#### Defined in

packages/kvsqlite/dist/index.d.ts:146

***

### transaction()

> **transaction**\<`F`\>(`fn`): `Transaction`\<`F`\>

#### Type Parameters

• **F** *extends* `VariableArgFunction`

#### Parameters

• **fn**: `F`

#### Returns

`Transaction`\<`F`\>

#### Inherited from

`Database.transaction`

#### Defined in

node\_modules/.pnpm/@types+better-sqlite3@7.6.11/node\_modules/@types/better-sqlite3/index.d.ts:62

***

### tryUpgradeVer()

> **tryUpgradeVer**(): `void`

#### Returns

`void`

#### Defined in

packages/kvsqlite/dist/index.d.ts:123

***

### unsafeMode()

> **unsafeMode**(`unsafe`?): `this`

#### Parameters

• **unsafe?**: `boolean`

#### Returns

`this`

#### Inherited from

`Database.unsafeMode`

#### Defined in

node\_modules/.pnpm/@types+better-sqlite3@7.6.11/node\_modules/@types/better-sqlite3/index.d.ts:82

***

### usingJsonb()

> **usingJsonb**(`collection`?): `undefined` \| `boolean`

#### Parameters

• **collection?**: `string`

#### Returns

`undefined` \| `boolean`

#### Defined in

packages/kvsqlite/dist/index.d.ts:124
