[**@isdk/ai-tool-sqlite**](../README.md)

***

[@isdk/ai-tool-sqlite](../globals.md) / KVSqliteAttachments

# Class: KVSqliteAttachments

Defined in: packages/kvsqlite/dist/index.d.ts:715

## Constructors

### new KVSqliteAttachments()

> **new KVSqliteAttachments**(`name`, `db`): [`KVSqliteAttachments`](KVSqliteAttachments.md)

Defined in: packages/kvsqlite/dist/index.d.ts:731

#### Parameters

##### name

`string`

##### db

[`KVSqlite`](KVSqlite.md)

#### Returns

[`KVSqliteAttachments`](KVSqliteAttachments.md)

## Properties

### db

> `protected` **db**: [`KVSqlite`](KVSqlite.md)

Defined in: packages/kvsqlite/dist/index.d.ts:717

***

### name

> **name**: `string`

Defined in: packages/kvsqlite/dist/index.d.ts:716

***

### preAdd

> **preAdd**: `Statement`

Defined in: packages/kvsqlite/dist/index.d.ts:718

***

### preAll

> **preAll**: `Statement`

Defined in: packages/kvsqlite/dist/index.d.ts:728

***

### preAllLimit

> **preAllLimit**: `Statement`

Defined in: packages/kvsqlite/dist/index.d.ts:729

***

### preCalcSize

> **preCalcSize**: `Statement`

Defined in: packages/kvsqlite/dist/index.d.ts:730

***

### preCount

> **preCount**: `Statement`

Defined in: packages/kvsqlite/dist/index.d.ts:724

***

### preCountW

> **preCountW**: `Statement`

Defined in: packages/kvsqlite/dist/index.d.ts:725

***

### preDel

> **preDel**: `Statement`

Defined in: packages/kvsqlite/dist/index.d.ts:722

***

### preDelAll

> **preDelAll**: `Statement`

Defined in: packages/kvsqlite/dist/index.d.ts:723

***

### preExists

> **preExists**: `Statement`

Defined in: packages/kvsqlite/dist/index.d.ts:720

***

### preGet

> **preGet**: `Statement`

Defined in: packages/kvsqlite/dist/index.d.ts:721

***

### preSearchKey

> **preSearchKey**: `Statement`

Defined in: packages/kvsqlite/dist/index.d.ts:726

***

### preSearchKeyAll

> **preSearchKeyAll**: `Statement`

Defined in: packages/kvsqlite/dist/index.d.ts:727

***

### preUpdate

> **preUpdate**: `Statement`

Defined in: packages/kvsqlite/dist/index.d.ts:719

## Methods

### add()

> **add**(`docId`, `filename`, `content`, `options`?): [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)

Defined in: packages/kvsqlite/dist/index.d.ts:743

#### Parameters

##### docId

[`IKVDocumentId`](../type-aliases/IKVDocumentId.md)

##### filename

`string`

##### content

`Buffer`

##### options?

###### isText?

`boolean`

###### mime?

`string`

#### Returns

[`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)

***

### del()

> **del**(`docId`, `filename`?): [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md) \| [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)[]

Defined in: packages/kvsqlite/dist/index.d.ts:751

#### Parameters

##### docId

[`IKVDocumentId`](../type-aliases/IKVDocumentId.md)

##### filename?

`string` | `string`[]

#### Returns

[`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md) \| [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)[]

***

### get()

> **get**(`docId`, `filename`): `object`

Defined in: packages/kvsqlite/dist/index.d.ts:738

Get file content

#### Parameters

##### docId

[`IKVDocumentId`](../type-aliases/IKVDocumentId.md)

##### filename

`string`

#### Returns

`object`

##### content

> **content**: `Buffer`

##### filename

> **filename**: `string`

***

### list()

> **list**(`docId`, `filename`?): `unknown`[]

Defined in: packages/kvsqlite/dist/index.d.ts:742

#### Parameters

##### docId

[`IKVDocumentId`](../type-aliases/IKVDocumentId.md)

##### filename?

`string`

#### Returns

`unknown`[]

***

### update()

> **update**(`docId`, `filename`, `content`, `options`?): [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)

Defined in: packages/kvsqlite/dist/index.d.ts:747

#### Parameters

##### docId

[`IKVDocumentId`](../type-aliases/IKVDocumentId.md)

##### filename

`string`

##### content

`Buffer`

##### options?

###### isText?

`boolean`

###### mime?

`string`

#### Returns

[`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)
