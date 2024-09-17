[**@isdk/ai-tool-sqlite**](../README.md) • **Docs**

***

[@isdk/ai-tool-sqlite](../globals.md) / KVSqliteAttachments

# Class: KVSqliteAttachments

## Constructors

### new KVSqliteAttachments()

> **new KVSqliteAttachments**(`name`, `db`): [`KVSqliteAttachments`](KVSqliteAttachments.md)

#### Parameters

• **name**: `string`

• **db**: [`KVSqlite`](KVSqlite.md)

#### Returns

[`KVSqliteAttachments`](KVSqliteAttachments.md)

#### Defined in

packages/kvsqlite/dist/index.d.ts:228

## Properties

### db

> `protected` **db**: [`KVSqlite`](KVSqlite.md)

#### Defined in

packages/kvsqlite/dist/index.d.ts:214

***

### name

> **name**: `string`

#### Defined in

packages/kvsqlite/dist/index.d.ts:213

***

### preAdd

> **preAdd**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

packages/kvsqlite/dist/index.d.ts:215

***

### preAll

> **preAll**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

packages/kvsqlite/dist/index.d.ts:225

***

### preAllLimit

> **preAllLimit**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

packages/kvsqlite/dist/index.d.ts:226

***

### preCalcSize

> **preCalcSize**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

packages/kvsqlite/dist/index.d.ts:227

***

### preCount

> **preCount**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

packages/kvsqlite/dist/index.d.ts:221

***

### preCountW

> **preCountW**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

packages/kvsqlite/dist/index.d.ts:222

***

### preDel

> **preDel**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

packages/kvsqlite/dist/index.d.ts:219

***

### preDelAll

> **preDelAll**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

packages/kvsqlite/dist/index.d.ts:220

***

### preExists

> **preExists**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

packages/kvsqlite/dist/index.d.ts:217

***

### preGet

> **preGet**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

packages/kvsqlite/dist/index.d.ts:218

***

### preSearchKey

> **preSearchKey**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

packages/kvsqlite/dist/index.d.ts:223

***

### preSearchKeyAll

> **preSearchKeyAll**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

packages/kvsqlite/dist/index.d.ts:224

***

### preUpdate

> **preUpdate**: `Statement`\<`unknown`[], `unknown`\>

#### Defined in

packages/kvsqlite/dist/index.d.ts:216

## Methods

### add()

> **add**(`docId`, `filename`, `content`, `options`?): [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)

#### Parameters

• **docId**: [`IKVDocumentId`](../type-aliases/IKVDocumentId.md)

• **filename**: `string`

• **content**: `Buffer`

• **options?**

• **options.isText?**: `boolean`

• **options.mime?**: `string`

#### Returns

[`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)

#### Defined in

packages/kvsqlite/dist/index.d.ts:240

***

### del()

> **del**(`docId`, `filename`?): [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md) \| [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)[]

#### Parameters

• **docId**: [`IKVDocumentId`](../type-aliases/IKVDocumentId.md)

• **filename?**: `string` \| `string`[]

#### Returns

[`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md) \| [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)[]

#### Defined in

packages/kvsqlite/dist/index.d.ts:248

***

### get()

> **get**(`docId`, `filename`): `object`

Get file content

#### Parameters

• **docId**: [`IKVDocumentId`](../type-aliases/IKVDocumentId.md)

• **filename**: `string`

#### Returns

`object`

##### content

> **content**: `Buffer`

##### filename

> **filename**: `string`

#### Defined in

packages/kvsqlite/dist/index.d.ts:235

***

### list()

> **list**(`docId`, `filename`?): `unknown`[]

#### Parameters

• **docId**: [`IKVDocumentId`](../type-aliases/IKVDocumentId.md)

• **filename?**: `string`

#### Returns

`unknown`[]

#### Defined in

packages/kvsqlite/dist/index.d.ts:239

***

### update()

> **update**(`docId`, `filename`, `content`, `options`?): [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)

#### Parameters

• **docId**: [`IKVDocumentId`](../type-aliases/IKVDocumentId.md)

• **filename**: `string`

• **content**: `Buffer`

• **options?**

• **options.isText?**: `boolean`

• **options.mime?**: `string`

#### Returns

[`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)

#### Defined in

packages/kvsqlite/dist/index.d.ts:244
