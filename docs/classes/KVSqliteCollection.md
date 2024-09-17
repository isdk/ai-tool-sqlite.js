[**@isdk/ai-tool-sqlite**](../README.md) • **Docs**

***

[@isdk/ai-tool-sqlite](../globals.md) / KVSqliteCollection

# Class: KVSqliteCollection

## Constructors

### new KVSqliteCollection()

> **new KVSqliteCollection**(`name`, `db`, `options`?): [`KVSqliteCollection`](KVSqliteCollection.md)

#### Parameters

• **name**: `string`

• **db**: [`KVSqlite`](KVSqlite.md)

• **options?**: [`IKVCreateOptions`](../interfaces/IKVCreateOptions.md)

#### Returns

[`KVSqliteCollection`](KVSqliteCollection.md)

#### Defined in

packages/kvsqlite/dist/index.d.ts:169

## Properties

### db

> `protected` **db**: [`KVSqlite`](KVSqlite.md)

#### Defined in

packages/kvsqlite/dist/index.d.ts:155

***

### jsonb

> **jsonb**: `string`

#### Defined in

packages/kvsqlite/dist/index.d.ts:168

***

### name

> **name**: `string`

#### Defined in

packages/kvsqlite/dist/index.d.ts:154

***

### preAdd

> **preAdd**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

packages/kvsqlite/dist/index.d.ts:156

***

### preAll

> **preAll**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

packages/kvsqlite/dist/index.d.ts:166

***

### preAllLimit

> **preAllLimit**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

packages/kvsqlite/dist/index.d.ts:167

***

### preCount

> **preCount**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

packages/kvsqlite/dist/index.d.ts:162

***

### preCountW

> **preCountW**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

packages/kvsqlite/dist/index.d.ts:163

***

### preDel

> **preDel**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

packages/kvsqlite/dist/index.d.ts:160

***

### preDelAll

> **preDelAll**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

packages/kvsqlite/dist/index.d.ts:161

***

### preExists

> **preExists**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

packages/kvsqlite/dist/index.d.ts:158

***

### preGet

> **preGet**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

packages/kvsqlite/dist/index.d.ts:159

***

### preSearchKey

> **preSearchKey**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

packages/kvsqlite/dist/index.d.ts:164

***

### preSearchKeyAll

> **preSearchKeyAll**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

packages/kvsqlite/dist/index.d.ts:165

***

### preUpdate

> **preUpdate**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

packages/kvsqlite/dist/index.d.ts:157

## Methods

### \_set()

> **\_set**(`obj`, `options`?): [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)

#### Parameters

• **obj**: [`IKVObjItem`](../interfaces/IKVObjItem.md)

• **options?**: [`IKVSetOptions`](../interfaces/IKVSetOptions.md)

#### Returns

[`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)

#### Defined in

packages/kvsqlite/dist/index.d.ts:170

***

### \_setExtend()

> **\_setExtend**(`docId`, `key`, `value`, `options`?): [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)

#### Parameters

• **docId**: [`IKVDocumentId`](../type-aliases/IKVDocumentId.md)

• **key**: `string`

• **value**: `any`

• **options?**: [`IKVSetOptions`](../interfaces/IKVSetOptions.md)

#### Returns

[`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)

#### Defined in

packages/kvsqlite/dist/index.d.ts:172

***

### bulkDocs()

> **bulkDocs**(`objs`, `options`?): [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)[]

#### Parameters

• **objs**: [`IKVObjItem`](../interfaces/IKVObjItem.md)[]

• **options?**: [`IKVSetOptions`](../interfaces/IKVSetOptions.md)

#### Returns

[`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)[]

#### Defined in

packages/kvsqlite/dist/index.d.ts:175

***

### count()

> **count**(`query`?): `number`

#### Parameters

• **query?**: `string`

#### Returns

`number`

#### Defined in

packages/kvsqlite/dist/index.d.ts:196

***

### createIndex()

> **createIndex**(`index`, `options`?): [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)

#### Parameters

• **index**: [`IKVIndexOptions`](../interfaces/IKVIndexOptions.md)

• **options?**: [`IKVCreateOptions`](../interfaces/IKVCreateOptions.md)

#### Returns

[`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)

#### Defined in

packages/kvsqlite/dist/index.d.ts:200

***

### createIndexes()

> **createIndexes**(`options`): [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)[]

#### Parameters

• **options**: [`IKVCreateOptions`](../interfaces/IKVCreateOptions.md)

#### Returns

[`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)[]

#### Defined in

packages/kvsqlite/dist/index.d.ts:201

***

### createJsonIndex()

> **createJsonIndex**(`indexName`, `fields`): [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)

#### Parameters

• **indexName**: `string`

• **fields**: `string` \| `string`[]

#### Returns

[`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)

#### Defined in

packages/kvsqlite/dist/index.d.ts:198

***

### createTableIndex()

> **createTableIndex**(`indexName`, `fields`): [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)

#### Parameters

• **indexName**: `string`

• **fields**: `string` \| `string`[]

#### Returns

[`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)

#### Defined in

packages/kvsqlite/dist/index.d.ts:199

***

### del()

> **del**(`_id`?): [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md) \| [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)[]

#### Parameters

• **\_id?**: [`IKVDocumentId`](../type-aliases/IKVDocumentId.md) \| [`IKVDocumentId`](../type-aliases/IKVDocumentId.md)[]

#### Returns

[`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md) \| [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)[]

#### Defined in

packages/kvsqlite/dist/index.d.ts:194

***

### drop()

> **drop**(): `void`

#### Returns

`void`

#### Defined in

packages/kvsqlite/dist/index.d.ts:210

***

### enableFts()

> **enableFts**(`options`?): `void`

#### Parameters

• **options?**: [`IKVCreateFtsOptions`](../interfaces/IKVCreateFtsOptions.md)

#### Returns

`void`

#### Defined in

packages/kvsqlite/dist/index.d.ts:205

***

### get()

> **get**(`_id`): [`IKVObjItem`](../interfaces/IKVObjItem.md)

#### Parameters

• **\_id**: [`IKVDocumentId`](../type-aliases/IKVDocumentId.md)

#### Returns

[`IKVObjItem`](../interfaces/IKVObjItem.md)

#### Defined in

packages/kvsqlite/dist/index.d.ts:176

***

### getEx()

> **getEx**(`_id`): `string` \| `number` \| `boolean` \| [`IKVObjItem`](../interfaces/IKVObjItem.md)

#### Parameters

• **\_id**: [`IKVDocumentId`](../type-aliases/IKVDocumentId.md)

#### Returns

`string` \| `number` \| `boolean` \| [`IKVObjItem`](../interfaces/IKVObjItem.md)

#### Defined in

packages/kvsqlite/dist/index.d.ts:177

***

### getExtend()

> **getExtend**(`docId`, `aPropName`?): `any`

get the value of the document's property

#### Parameters

• **docId**: [`IKVDocumentId`](../type-aliases/IKVDocumentId.md)

the document id

• **aPropName?**: `string`

the property name of the document id

#### Returns

`any`

the property value object

#### Defined in

packages/kvsqlite/dist/index.d.ts:184

***

### getExtends()

> **getExtends**(`docId`, `aPropName`?, `options`?): [`IKVObjItem`](../interfaces/IKVObjItem.md)

get extends of the document

#### Parameters

• **docId**: [`IKVDocumentId`](../type-aliases/IKVDocumentId.md)

the document id

• **aPropName?**: `string` \| `string`[]

the property name(s) of the document id

• **options?**: [`IKVSetOptions`](../interfaces/IKVSetOptions.md)

optional options

#### Returns

[`IKVObjItem`](../interfaces/IKVObjItem.md)

all extends property key-value object

#### Defined in

packages/kvsqlite/dist/index.d.ts:193

***

### isExists()

> **isExists**(`_id`): `boolean`

#### Parameters

• **\_id**: [`IKVDocumentId`](../type-aliases/IKVDocumentId.md)

#### Returns

`boolean`

#### Defined in

packages/kvsqlite/dist/index.d.ts:195

***

### list()

> **list**(`query`?, `options`?): [`IKVObjItem`](../interfaces/IKVObjItem.md)[]

#### Parameters

• **query?**: `string` \| [`IKVSetOptions`](../interfaces/IKVSetOptions.md)

• **options?**: [`IKVSetOptions`](../interfaces/IKVSetOptions.md)

#### Returns

[`IKVObjItem`](../interfaces/IKVObjItem.md)[]

#### Defined in

packages/kvsqlite/dist/index.d.ts:197

***

### search()

> **search**(`filter`, `options`?): [`IKVObjItem`](../interfaces/IKVObjItem.md)[]

#### Parameters

• **filter**: `Record`\<`string`, `any`\>

• **options?**: [`IKVSetOptions`](../interfaces/IKVSetOptions.md)

#### Returns

[`IKVObjItem`](../interfaces/IKVObjItem.md)[]

#### Defined in

packages/kvsqlite/dist/index.d.ts:203

***

### searchEx()

> **searchEx**(`query`, `options`?): [`IKVObjItem`](../interfaces/IKVObjItem.md)[]

#### Parameters

• **query**: `string` \| `Record`\<`string`, `string`\>

• **options?**: [`IKVSetOptions`](../interfaces/IKVSetOptions.md)

#### Returns

[`IKVObjItem`](../interfaces/IKVObjItem.md)[]

#### Defined in

packages/kvsqlite/dist/index.d.ts:202

***

### searchFts()

> **searchFts**(`query`, `options`?): `object`[]

#### Parameters

• **query**: `string` \| `Record`\<`string`, `any`\> \| `Record`\<`string`, `any`\>[]

• **options?**: [`IKVSetOptions`](../interfaces/IKVSetOptions.md) & [`IKVCreateFtsOptions`](../interfaces/IKVCreateFtsOptions.md)

#### Returns

`object`[]

#### Defined in

packages/kvsqlite/dist/index.d.ts:206

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

packages/kvsqlite/dist/index.d.ts:171

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

packages/kvsqlite/dist/index.d.ts:173

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

packages/kvsqlite/dist/index.d.ts:174

***

### tableInfo()

> **tableInfo**(`options`?): `undefined` \| `Required`\<[`IKVFieldOptions`](../interfaces/IKVFieldOptions.md)\>

#### Parameters

• **options?**: [`IKVSetOptions`](../interfaces/IKVSetOptions.md)

#### Returns

`undefined` \| `Required`\<[`IKVFieldOptions`](../interfaces/IKVFieldOptions.md)\>

#### Defined in

packages/kvsqlite/dist/index.d.ts:204
