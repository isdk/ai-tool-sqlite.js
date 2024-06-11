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

[packages/ai-tool-sqlite/src/kvsqlite.ts:377](https://github.com/isdk/ai-tool-sqlite.js/blob/0324ebadddad49b1d2b97d356e532dcec9b8a887/src/kvsqlite.ts#L377)

## Properties

### db

• `Protected` **db**: [`KVSqlite`](KVSqlite.md)

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:377](https://github.com/isdk/ai-tool-sqlite.js/blob/0324ebadddad49b1d2b97d356e532dcec9b8a887/src/kvsqlite.ts#L377)

___

### name

• **name**: `string`

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:377](https://github.com/isdk/ai-tool-sqlite.js/blob/0324ebadddad49b1d2b97d356e532dcec9b8a887/src/kvsqlite.ts#L377)

___

### preAdd

• **preAdd**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:363](https://github.com/isdk/ai-tool-sqlite.js/blob/0324ebadddad49b1d2b97d356e532dcec9b8a887/src/kvsqlite.ts#L363)

___

### preAll

• **preAll**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:373](https://github.com/isdk/ai-tool-sqlite.js/blob/0324ebadddad49b1d2b97d356e532dcec9b8a887/src/kvsqlite.ts#L373)

___

### preAllLimit

• **preAllLimit**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:374](https://github.com/isdk/ai-tool-sqlite.js/blob/0324ebadddad49b1d2b97d356e532dcec9b8a887/src/kvsqlite.ts#L374)

___

### preCalcSize

• **preCalcSize**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:375](https://github.com/isdk/ai-tool-sqlite.js/blob/0324ebadddad49b1d2b97d356e532dcec9b8a887/src/kvsqlite.ts#L375)

___

### preCount

• **preCount**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:369](https://github.com/isdk/ai-tool-sqlite.js/blob/0324ebadddad49b1d2b97d356e532dcec9b8a887/src/kvsqlite.ts#L369)

___

### preCountW

• **preCountW**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:370](https://github.com/isdk/ai-tool-sqlite.js/blob/0324ebadddad49b1d2b97d356e532dcec9b8a887/src/kvsqlite.ts#L370)

___

### preDel

• **preDel**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:367](https://github.com/isdk/ai-tool-sqlite.js/blob/0324ebadddad49b1d2b97d356e532dcec9b8a887/src/kvsqlite.ts#L367)

___

### preDelAll

• **preDelAll**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:368](https://github.com/isdk/ai-tool-sqlite.js/blob/0324ebadddad49b1d2b97d356e532dcec9b8a887/src/kvsqlite.ts#L368)

___

### preExists

• **preExists**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:365](https://github.com/isdk/ai-tool-sqlite.js/blob/0324ebadddad49b1d2b97d356e532dcec9b8a887/src/kvsqlite.ts#L365)

___

### preGet

• **preGet**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:366](https://github.com/isdk/ai-tool-sqlite.js/blob/0324ebadddad49b1d2b97d356e532dcec9b8a887/src/kvsqlite.ts#L366)

___

### preSearchKey

• **preSearchKey**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:371](https://github.com/isdk/ai-tool-sqlite.js/blob/0324ebadddad49b1d2b97d356e532dcec9b8a887/src/kvsqlite.ts#L371)

___

### preSearchKeyAll

• **preSearchKeyAll**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:372](https://github.com/isdk/ai-tool-sqlite.js/blob/0324ebadddad49b1d2b97d356e532dcec9b8a887/src/kvsqlite.ts#L372)

___

### preUpdate

• **preUpdate**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:364](https://github.com/isdk/ai-tool-sqlite.js/blob/0324ebadddad49b1d2b97d356e532dcec9b8a887/src/kvsqlite.ts#L364)

## Methods

### add

▸ **add**(`docId`, `filename`, `content`, `options?`): `RunResult`

#### Parameters

| Name | Type |
| :------ | :------ |
| `docId` | [`IKVDocumentId`](../modules.md#ikvdocumentid) |
| `filename` | `string` |
| `content` | `Buffer` |
| `options` | `Object` |
| `options.isText?` | `boolean` |
| `options.mime?` | `string` |

#### Returns

`RunResult`

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:424](https://github.com/isdk/ai-tool-sqlite.js/blob/0324ebadddad49b1d2b97d356e532dcec9b8a887/src/kvsqlite.ts#L424)

___

### del

▸ **del**(`docId`, `filename?`): `RunResult` \| `RunResult`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `docId` | [`IKVDocumentId`](../modules.md#ikvdocumentid) |
| `filename?` | `string` \| `string`[] |

#### Returns

`RunResult` \| `RunResult`[]

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:467](https://github.com/isdk/ai-tool-sqlite.js/blob/0324ebadddad49b1d2b97d356e532dcec9b8a887/src/kvsqlite.ts#L467)

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

[packages/ai-tool-sqlite/src/kvsqlite.ts:415](https://github.com/isdk/ai-tool-sqlite.js/blob/0324ebadddad49b1d2b97d356e532dcec9b8a887/src/kvsqlite.ts#L415)

___

### list

▸ **list**(`docId`, `filename?`): `unknown`[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `docId` | [`IKVDocumentId`](../modules.md#ikvdocumentid) | `undefined` |
| `filename` | `string` | `''` |

#### Returns

`unknown`[]

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:420](https://github.com/isdk/ai-tool-sqlite.js/blob/0324ebadddad49b1d2b97d356e532dcec9b8a887/src/kvsqlite.ts#L420)

___

### update

▸ **update**(`docId`, `filename`, `content`, `options?`): `RunResult`

#### Parameters

| Name | Type |
| :------ | :------ |
| `docId` | [`IKVDocumentId`](../modules.md#ikvdocumentid) |
| `filename` | `string` |
| `content` | `Buffer` |
| `options` | `Object` |
| `options.isText?` | `boolean` |
| `options.mime?` | `string` |

#### Returns

`RunResult`

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:441](https://github.com/isdk/ai-tool-sqlite.js/blob/0324ebadddad49b1d2b97d356e532dcec9b8a887/src/kvsqlite.ts#L441)
