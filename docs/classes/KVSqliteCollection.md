[@isdk/ai-tool-sqlite](../README.md) / [Exports](../modules.md) / KVSqliteCollection

# Class: KVSqliteCollection

## Table of contents

### Constructors

- [constructor](KVSqliteCollection.md#constructor)

### Properties

- [db](KVSqliteCollection.md#db)
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
- [del](KVSqliteCollection.md#del)
- [get](KVSqliteCollection.md#get)
- [getExtend](KVSqliteCollection.md#getextend)
- [getExtends](KVSqliteCollection.md#getextends)
- [isExists](KVSqliteCollection.md#isexists)
- [list](KVSqliteCollection.md#list)
- [search](KVSqliteCollection.md#search)
- [searchEx](KVSqliteCollection.md#searchex)
- [set](KVSqliteCollection.md#set)
- [setExtend](KVSqliteCollection.md#setextend)
- [setExtends](KVSqliteCollection.md#setextends)

## Constructors

### constructor

• **new KVSqliteCollection**(`name`, `db`): [`KVSqliteCollection`](KVSqliteCollection.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `db` | [`KVSqlite`](KVSqlite.md) |

#### Returns

[`KVSqliteCollection`](KVSqliteCollection.md)

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:161](https://github.com/isdk/ai-tool-sqlite.js/blob/3a8af7e372deb90905c47b3a58d4c8157346e3cc/src/kvsqlite.ts#L161)

## Properties

### db

• `Protected` **db**: [`KVSqlite`](KVSqlite.md)

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:161](https://github.com/isdk/ai-tool-sqlite.js/blob/3a8af7e372deb90905c47b3a58d4c8157346e3cc/src/kvsqlite.ts#L161)

___

### name

• **name**: `string`

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:161](https://github.com/isdk/ai-tool-sqlite.js/blob/3a8af7e372deb90905c47b3a58d4c8157346e3cc/src/kvsqlite.ts#L161)

___

### preAdd

• **preAdd**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:148](https://github.com/isdk/ai-tool-sqlite.js/blob/3a8af7e372deb90905c47b3a58d4c8157346e3cc/src/kvsqlite.ts#L148)

___

### preAll

• **preAll**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:158](https://github.com/isdk/ai-tool-sqlite.js/blob/3a8af7e372deb90905c47b3a58d4c8157346e3cc/src/kvsqlite.ts#L158)

___

### preAllLimit

• **preAllLimit**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:159](https://github.com/isdk/ai-tool-sqlite.js/blob/3a8af7e372deb90905c47b3a58d4c8157346e3cc/src/kvsqlite.ts#L159)

___

### preCount

• **preCount**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:154](https://github.com/isdk/ai-tool-sqlite.js/blob/3a8af7e372deb90905c47b3a58d4c8157346e3cc/src/kvsqlite.ts#L154)

___

### preCountW

• **preCountW**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:155](https://github.com/isdk/ai-tool-sqlite.js/blob/3a8af7e372deb90905c47b3a58d4c8157346e3cc/src/kvsqlite.ts#L155)

___

### preDel

• **preDel**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:152](https://github.com/isdk/ai-tool-sqlite.js/blob/3a8af7e372deb90905c47b3a58d4c8157346e3cc/src/kvsqlite.ts#L152)

___

### preDelAll

• **preDelAll**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:153](https://github.com/isdk/ai-tool-sqlite.js/blob/3a8af7e372deb90905c47b3a58d4c8157346e3cc/src/kvsqlite.ts#L153)

___

### preExists

• **preExists**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:150](https://github.com/isdk/ai-tool-sqlite.js/blob/3a8af7e372deb90905c47b3a58d4c8157346e3cc/src/kvsqlite.ts#L150)

___

### preGet

• **preGet**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:151](https://github.com/isdk/ai-tool-sqlite.js/blob/3a8af7e372deb90905c47b3a58d4c8157346e3cc/src/kvsqlite.ts#L151)

___

### preSearchKey

• **preSearchKey**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:156](https://github.com/isdk/ai-tool-sqlite.js/blob/3a8af7e372deb90905c47b3a58d4c8157346e3cc/src/kvsqlite.ts#L156)

___

### preSearchKeyAll

• **preSearchKeyAll**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:157](https://github.com/isdk/ai-tool-sqlite.js/blob/3a8af7e372deb90905c47b3a58d4c8157346e3cc/src/kvsqlite.ts#L157)

___

### preUpdate

• **preUpdate**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:149](https://github.com/isdk/ai-tool-sqlite.js/blob/3a8af7e372deb90905c47b3a58d4c8157346e3cc/src/kvsqlite.ts#L149)

## Methods

### \_set

▸ **_set**(`obj`, `options?`): `RunResult`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`IKVObjItem`](../interfaces/IKVObjItem.md) |
| `options?` | [`IKVSetOptions`](../interfaces/IKVSetOptions.md) |

#### Returns

`RunResult`

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:185](https://github.com/isdk/ai-tool-sqlite.js/blob/3a8af7e372deb90905c47b3a58d4c8157346e3cc/src/kvsqlite.ts#L185)

___

### \_setExtend

▸ **_setExtend**(`docId`, `key`, `value`, `options?`): `RunResult`

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

[packages/ai-tool-sqlite/src/kvsqlite.ts:225](https://github.com/isdk/ai-tool-sqlite.js/blob/3a8af7e372deb90905c47b3a58d4c8157346e3cc/src/kvsqlite.ts#L225)

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

[packages/ai-tool-sqlite/src/kvsqlite.ts:245](https://github.com/isdk/ai-tool-sqlite.js/blob/3a8af7e372deb90905c47b3a58d4c8157346e3cc/src/kvsqlite.ts#L245)

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

[packages/ai-tool-sqlite/src/kvsqlite.ts:321](https://github.com/isdk/ai-tool-sqlite.js/blob/3a8af7e372deb90905c47b3a58d4c8157346e3cc/src/kvsqlite.ts#L321)

___

### createIndex

▸ **createIndex**(`indexName`, `fields`): `RunResult`

#### Parameters

| Name | Type |
| :------ | :------ |
| `indexName` | `string` |
| `fields` | `string` \| `string`[] |

#### Returns

`RunResult`

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:332](https://github.com/isdk/ai-tool-sqlite.js/blob/3a8af7e372deb90905c47b3a58d4c8157346e3cc/src/kvsqlite.ts#L332)

___

### del

▸ **del**(`_id?`): `RunResult` \| `RunResult`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id?` | [`IKVDocumentId`](../modules.md#ikvdocumentid) \| [`IKVDocumentId`](../modules.md#ikvdocumentid)[] |

#### Returns

`RunResult` \| `RunResult`[]

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:308](https://github.com/isdk/ai-tool-sqlite.js/blob/3a8af7e372deb90905c47b3a58d4c8157346e3cc/src/kvsqlite.ts#L308)

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

[packages/ai-tool-sqlite/src/kvsqlite.ts:251](https://github.com/isdk/ai-tool-sqlite.js/blob/3a8af7e372deb90905c47b3a58d4c8157346e3cc/src/kvsqlite.ts#L251)

___

### getExtend

▸ **getExtend**(`docId`, `aPropName`): `any`

get the value of the document's property

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `docId` | [`IKVDocumentId`](../modules.md#ikvdocumentid) | the document id |
| `aPropName` | `string` | the property name of the document id |

#### Returns

`any`

the property value object

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:266](https://github.com/isdk/ai-tool-sqlite.js/blob/3a8af7e372deb90905c47b3a58d4c8157346e3cc/src/kvsqlite.ts#L266)

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

[packages/ai-tool-sqlite/src/kvsqlite.ts:280](https://github.com/isdk/ai-tool-sqlite.js/blob/3a8af7e372deb90905c47b3a58d4c8157346e3cc/src/kvsqlite.ts#L280)

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

[packages/ai-tool-sqlite/src/kvsqlite.ts:317](https://github.com/isdk/ai-tool-sqlite.js/blob/3a8af7e372deb90905c47b3a58d4c8157346e3cc/src/kvsqlite.ts#L317)

___

### list

▸ **list**(`query?`, `size?`, `page?`): [`IKVObjItem`](../interfaces/IKVObjItem.md)[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `query?` | `string` | `undefined` |
| `size?` | `number` | `undefined` |
| `page` | `number` | `0` |

#### Returns

[`IKVObjItem`](../interfaces/IKVObjItem.md)[]

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:325](https://github.com/isdk/ai-tool-sqlite.js/blob/3a8af7e372deb90905c47b3a58d4c8157346e3cc/src/kvsqlite.ts#L325)

___

### search

▸ **search**(`filter`, `size?`, `page?`): [`IKVObjItem`](../interfaces/IKVObjItem.md)[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `filter` | `Record`\<`string`, `any`\> | `undefined` |
| `size?` | `number` | `undefined` |
| `page` | `number` | `0` |

#### Returns

[`IKVObjItem`](../interfaces/IKVObjItem.md)[]

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:356](https://github.com/isdk/ai-tool-sqlite.js/blob/3a8af7e372deb90905c47b3a58d4c8157346e3cc/src/kvsqlite.ts#L356)

___

### searchEx

▸ **searchEx**(`query`, `size?`, `page?`): [`IKVObjItem`](../interfaces/IKVObjItem.md)[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `query` | `string` \| `Record`\<`string`, `string`\> | `undefined` |
| `size?` | `number` | `undefined` |
| `page` | `number` | `0` |

#### Returns

[`IKVObjItem`](../interfaces/IKVObjItem.md)[]

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:345](https://github.com/isdk/ai-tool-sqlite.js/blob/3a8af7e372deb90905c47b3a58d4c8157346e3cc/src/kvsqlite.ts#L345)

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

[packages/ai-tool-sqlite/src/kvsqlite.ts:212](https://github.com/isdk/ai-tool-sqlite.js/blob/3a8af7e372deb90905c47b3a58d4c8157346e3cc/src/kvsqlite.ts#L212)

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

[packages/ai-tool-sqlite/src/kvsqlite.ts:233](https://github.com/isdk/ai-tool-sqlite.js/blob/3a8af7e372deb90905c47b3a58d4c8157346e3cc/src/kvsqlite.ts#L233)

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

[packages/ai-tool-sqlite/src/kvsqlite.ts:239](https://github.com/isdk/ai-tool-sqlite.js/blob/3a8af7e372deb90905c47b3a58d4c8157346e3cc/src/kvsqlite.ts#L239)
