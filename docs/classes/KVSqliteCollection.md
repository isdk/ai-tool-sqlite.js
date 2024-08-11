[@isdk/ai-tool-sqlite](../README.md) / [Exports](../modules.md) / KVSqliteCollection

# Class: KVSqliteCollection

## Table of contents

### Constructors

- [constructor](KVSqliteCollection.md#constructor)

### Properties

- [db](KVSqliteCollection.md#db)
- [jsonb](KVSqliteCollection.md#jsonb)
- [name](KVSqliteCollection.md#name)
- [preAdd](KVSqliteCollection.md#preadd)
- [preAll](KVSqliteCollection.md#preall)
- [preAllLimit](KVSqliteCollection.md#prealllimit)
- [preCount](KVSqliteCollection.md#precount)
- [preCountW](KVSqliteCollection.md#precountw)
- [preDel](KVSqliteCollection.md#predel)
- [preDelAll](KVSqliteCollection.md#predelall)
- [preExists](KVSqliteCollection.md#preexists)
- [preGet](KVSqliteCollection.md#preget)
- [preSearchKey](KVSqliteCollection.md#presearchkey)
- [preSearchKeyAll](KVSqliteCollection.md#presearchkeyall)
- [preUpdate](KVSqliteCollection.md#preupdate)

### Methods

- [\_set](KVSqliteCollection.md#_set)
- [\_setExtend](KVSqliteCollection.md#_setextend)
- [bulkDocs](KVSqliteCollection.md#bulkdocs)
- [count](KVSqliteCollection.md#count)
- [createIndex](KVSqliteCollection.md#createindex)
- [createIndexes](KVSqliteCollection.md#createindexes)
- [createJsonIndex](KVSqliteCollection.md#createjsonindex)
- [createTableIndex](KVSqliteCollection.md#createtableindex)
- [del](KVSqliteCollection.md#del)
- [drop](KVSqliteCollection.md#drop)
- [enableFts](KVSqliteCollection.md#enablefts)
- [get](KVSqliteCollection.md#get)
- [getEx](KVSqliteCollection.md#getex)
- [getExtend](KVSqliteCollection.md#getextend)
- [getExtends](KVSqliteCollection.md#getextends)
- [isExists](KVSqliteCollection.md#isexists)
- [list](KVSqliteCollection.md#list)
- [search](KVSqliteCollection.md#search)
- [searchEx](KVSqliteCollection.md#searchex)
- [searchFts](KVSqliteCollection.md#searchfts)
- [set](KVSqliteCollection.md#set)
- [setExtend](KVSqliteCollection.md#setextend)
- [setExtends](KVSqliteCollection.md#setextends)
- [tableInfo](KVSqliteCollection.md#tableinfo)

## Constructors

### constructor

• **new KVSqliteCollection**(`name`, `db`, `options?`): [`KVSqliteCollection`](KVSqliteCollection.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `db` | [`KVSqlite`](KVSqlite.md) |
| `options?` | [`IKVCreateOptions`](../interfaces/IKVCreateOptions.md) |

#### Returns

[`KVSqliteCollection`](KVSqliteCollection.md)

#### Defined in

packages/kvsqlite/dist/index.d.ts:169

## Properties

### db

• `Protected` **db**: [`KVSqlite`](KVSqlite.md)

#### Defined in

packages/kvsqlite/dist/index.d.ts:155

___

### jsonb

• **jsonb**: `string`

#### Defined in

packages/kvsqlite/dist/index.d.ts:168

___

### name

• **name**: `string`

#### Defined in

packages/kvsqlite/dist/index.d.ts:154

___

### preAdd

• **preAdd**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

packages/kvsqlite/dist/index.d.ts:156

___

### preAll

• **preAll**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

packages/kvsqlite/dist/index.d.ts:166

___

### preAllLimit

• **preAllLimit**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

packages/kvsqlite/dist/index.d.ts:167

___

### preCount

• **preCount**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

packages/kvsqlite/dist/index.d.ts:162

___

### preCountW

• **preCountW**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

packages/kvsqlite/dist/index.d.ts:163

___

### preDel

• **preDel**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

packages/kvsqlite/dist/index.d.ts:160

___

### preDelAll

• **preDelAll**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

packages/kvsqlite/dist/index.d.ts:161

___

### preExists

• **preExists**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

packages/kvsqlite/dist/index.d.ts:158

___

### preGet

• **preGet**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

packages/kvsqlite/dist/index.d.ts:159

___

### preSearchKey

• **preSearchKey**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

packages/kvsqlite/dist/index.d.ts:164

___

### preSearchKeyAll

• **preSearchKeyAll**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

packages/kvsqlite/dist/index.d.ts:165

___

### preUpdate

• **preUpdate**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

packages/kvsqlite/dist/index.d.ts:157

## Methods

### \_set

▸ **_set**(`obj`, `options?`): [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`IKVObjItem`](../interfaces/IKVObjItem.md) |
| `options?` | [`IKVSetOptions`](../interfaces/IKVSetOptions.md) |

#### Returns

[`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)

#### Defined in

packages/kvsqlite/dist/index.d.ts:170

___

### \_setExtend

▸ **_setExtend**(`docId`, `key`, `value`, `options?`): [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)

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

packages/kvsqlite/dist/index.d.ts:172

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

packages/kvsqlite/dist/index.d.ts:175

___

### count

▸ **count**(`query?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `query?` | `string` |

#### Returns

`number`

#### Defined in

packages/kvsqlite/dist/index.d.ts:196

___

### createIndex

▸ **createIndex**(`index`, `options?`): [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | [`IKVIndexOptions`](../interfaces/IKVIndexOptions.md) |
| `options?` | [`IKVCreateOptions`](../interfaces/IKVCreateOptions.md) |

#### Returns

[`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)

#### Defined in

packages/kvsqlite/dist/index.d.ts:200

___

### createIndexes

▸ **createIndexes**(`options`): [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IKVCreateOptions`](../interfaces/IKVCreateOptions.md) |

#### Returns

[`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)[]

#### Defined in

packages/kvsqlite/dist/index.d.ts:201

___

### createJsonIndex

▸ **createJsonIndex**(`indexName`, `fields`): [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `indexName` | `string` |
| `fields` | `string` \| `string`[] |

#### Returns

[`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)

#### Defined in

packages/kvsqlite/dist/index.d.ts:198

___

### createTableIndex

▸ **createTableIndex**(`indexName`, `fields`): [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `indexName` | `string` |
| `fields` | `string` \| `string`[] |

#### Returns

[`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)

#### Defined in

packages/kvsqlite/dist/index.d.ts:199

___

### del

▸ **del**(`_id?`): [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md) \| [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id?` | [`IKVDocumentId`](../modules.md#ikvdocumentid) \| [`IKVDocumentId`](../modules.md#ikvdocumentid)[] |

#### Returns

[`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md) \| [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)[]

#### Defined in

packages/kvsqlite/dist/index.d.ts:194

___

### drop

▸ **drop**(): `void`

#### Returns

`void`

#### Defined in

packages/kvsqlite/dist/index.d.ts:210

___

### enableFts

▸ **enableFts**(`options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`IKVCreateFtsOptions`](../interfaces/IKVCreateFtsOptions.md) |

#### Returns

`void`

#### Defined in

packages/kvsqlite/dist/index.d.ts:205

___

### get

▸ **get**(`_id`): [`IKVObjItem`](../interfaces/IKVObjItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | [`IKVDocumentId`](../modules.md#ikvdocumentid) |

#### Returns

[`IKVObjItem`](../interfaces/IKVObjItem.md)

#### Defined in

packages/kvsqlite/dist/index.d.ts:176

___

### getEx

▸ **getEx**(`_id`): `string` \| `number` \| `boolean` \| [`IKVObjItem`](../interfaces/IKVObjItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | [`IKVDocumentId`](../modules.md#ikvdocumentid) |

#### Returns

`string` \| `number` \| `boolean` \| [`IKVObjItem`](../interfaces/IKVObjItem.md)

#### Defined in

packages/kvsqlite/dist/index.d.ts:177

___

### getExtend

▸ **getExtend**(`docId`, `aPropName?`): `any`

get the value of the document's property

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `docId` | [`IKVDocumentId`](../modules.md#ikvdocumentid) | the document id |
| `aPropName?` | `string` | the property name of the document id |

#### Returns

`any`

the property value object

#### Defined in

packages/kvsqlite/dist/index.d.ts:184

___

### getExtends

▸ **getExtends**(`docId`, `aPropName?`, `options?`): [`IKVObjItem`](../interfaces/IKVObjItem.md)

get extends of the document

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `docId` | [`IKVDocumentId`](../modules.md#ikvdocumentid) | the document id |
| `aPropName?` | `string` \| `string`[] | the property name(s) of the document id |
| `options?` | [`IKVSetOptions`](../interfaces/IKVSetOptions.md) | optional options |

#### Returns

[`IKVObjItem`](../interfaces/IKVObjItem.md)

all extends property key-value object

#### Defined in

packages/kvsqlite/dist/index.d.ts:193

___

### isExists

▸ **isExists**(`_id`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | [`IKVDocumentId`](../modules.md#ikvdocumentid) |

#### Returns

`boolean`

#### Defined in

packages/kvsqlite/dist/index.d.ts:195

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

packages/kvsqlite/dist/index.d.ts:197

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

packages/kvsqlite/dist/index.d.ts:203

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

packages/kvsqlite/dist/index.d.ts:202

___

### searchFts

▸ **searchFts**(`query`, `options?`): \{ `_id`: `string` ; `值`: `any`  }[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` \| `Record`\<`string`, `any`\> \| `Record`\<`string`, `any`\>[] |
| `options?` | [`IKVSetOptions`](../interfaces/IKVSetOptions.md) & [`IKVCreateFtsOptions`](../interfaces/IKVCreateFtsOptions.md) |

#### Returns

\{ `_id`: `string` ; `值`: `any`  }[]

#### Defined in

packages/kvsqlite/dist/index.d.ts:206

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

packages/kvsqlite/dist/index.d.ts:171

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

packages/kvsqlite/dist/index.d.ts:173

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

packages/kvsqlite/dist/index.d.ts:174

___

### tableInfo

▸ **tableInfo**(`options?`): `undefined` \| `Required`\<[`IKVFieldOptions`](../interfaces/IKVFieldOptions.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`IKVSetOptions`](../interfaces/IKVSetOptions.md) |

#### Returns

`undefined` \| `Required`\<[`IKVFieldOptions`](../interfaces/IKVFieldOptions.md)\>

#### Defined in

packages/kvsqlite/dist/index.d.ts:204
