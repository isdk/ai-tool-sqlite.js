[@isdk/ai-tool-sqlite](../README.md) / [Exports](../modules.md) / KVSqliteAttachments

# Class: KVSqliteAttachments

## Table of contents

### Constructors

- [constructor](KVSqliteAttachments.md#constructor)

### Properties

- [db](KVSqliteAttachments.md#db)
- [name](KVSqliteAttachments.md#name)
- [preAdd](KVSqliteAttachments.md#preadd)
- [preAll](KVSqliteAttachments.md#preall)
- [preAllLimit](KVSqliteAttachments.md#prealllimit)
- [preCalcSize](KVSqliteAttachments.md#precalcsize)
- [preCount](KVSqliteAttachments.md#precount)
- [preCountW](KVSqliteAttachments.md#precountw)
- [preDel](KVSqliteAttachments.md#predel)
- [preDelAll](KVSqliteAttachments.md#predelall)
- [preExists](KVSqliteAttachments.md#preexists)
- [preGet](KVSqliteAttachments.md#preget)
- [preSearchKey](KVSqliteAttachments.md#presearchkey)
- [preSearchKeyAll](KVSqliteAttachments.md#presearchkeyall)
- [preUpdate](KVSqliteAttachments.md#preupdate)

### Methods

- [add](KVSqliteAttachments.md#add)
- [del](KVSqliteAttachments.md#del)
- [get](KVSqliteAttachments.md#get)
- [list](KVSqliteAttachments.md#list)
- [update](KVSqliteAttachments.md#update)

## Constructors

### constructor

• **new KVSqliteAttachments**(`name`, `db`): [`KVSqliteAttachments`](KVSqliteAttachments.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `db` | [`KVSqlite`](KVSqlite.md) |

#### Returns

[`KVSqliteAttachments`](KVSqliteAttachments.md)

#### Defined in

packages/kvsqlite/dist/index.d.ts:228

## Properties

### db

• `Protected` **db**: [`KVSqlite`](KVSqlite.md)

#### Defined in

packages/kvsqlite/dist/index.d.ts:214

___

### name

• **name**: `string`

#### Defined in

packages/kvsqlite/dist/index.d.ts:213

___

### preAdd

• **preAdd**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

packages/kvsqlite/dist/index.d.ts:215

___

### preAll

• **preAll**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

packages/kvsqlite/dist/index.d.ts:225

___

### preAllLimit

• **preAllLimit**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

packages/kvsqlite/dist/index.d.ts:226

___

### preCalcSize

• **preCalcSize**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

packages/kvsqlite/dist/index.d.ts:227

___

### preCount

• **preCount**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

packages/kvsqlite/dist/index.d.ts:221

___

### preCountW

• **preCountW**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

packages/kvsqlite/dist/index.d.ts:222

___

### preDel

• **preDel**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

packages/kvsqlite/dist/index.d.ts:219

___

### preDelAll

• **preDelAll**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

packages/kvsqlite/dist/index.d.ts:220

___

### preExists

• **preExists**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

packages/kvsqlite/dist/index.d.ts:217

___

### preGet

• **preGet**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

packages/kvsqlite/dist/index.d.ts:218

___

### preSearchKey

• **preSearchKey**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

packages/kvsqlite/dist/index.d.ts:223

___

### preSearchKeyAll

• **preSearchKeyAll**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

packages/kvsqlite/dist/index.d.ts:224

___

### preUpdate

• **preUpdate**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

packages/kvsqlite/dist/index.d.ts:216

## Methods

### add

▸ **add**(`docId`, `filename`, `content`, `options?`): [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `docId` | [`IKVDocumentId`](../modules.md#ikvdocumentid) |
| `filename` | `string` |
| `content` | `Buffer` |
| `options?` | `Object` |
| `options.isText?` | `boolean` |
| `options.mime?` | `string` |

#### Returns

[`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)

#### Defined in

packages/kvsqlite/dist/index.d.ts:240

___

### del

▸ **del**(`docId`, `filename?`): [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md) \| [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `docId` | [`IKVDocumentId`](../modules.md#ikvdocumentid) |
| `filename?` | `string` \| `string`[] |

#### Returns

[`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md) \| [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)[]

#### Defined in

packages/kvsqlite/dist/index.d.ts:248

___

### get

▸ **get**(`docId`, `filename`): `Object`

Get file content

#### Parameters

| Name | Type |
| :------ | :------ |
| `docId` | [`IKVDocumentId`](../modules.md#ikvdocumentid) |
| `filename` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `content` | `Buffer` |
| `filename` | `string` |

#### Defined in

packages/kvsqlite/dist/index.d.ts:235

___

### list

▸ **list**(`docId`, `filename?`): `unknown`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `docId` | [`IKVDocumentId`](../modules.md#ikvdocumentid) |
| `filename?` | `string` |

#### Returns

`unknown`[]

#### Defined in

packages/kvsqlite/dist/index.d.ts:239

___

### update

▸ **update**(`docId`, `filename`, `content`, `options?`): [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `docId` | [`IKVDocumentId`](../modules.md#ikvdocumentid) |
| `filename` | `string` |
| `content` | `Buffer` |
| `options?` | `Object` |
| `options.isText?` | `boolean` |
| `options.mime?` | `string` |

#### Returns

[`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)

#### Defined in

packages/kvsqlite/dist/index.d.ts:244
