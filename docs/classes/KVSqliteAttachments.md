[**@isdk/ai-tool-sqlite**](../README.md)

***

[@isdk/ai-tool-sqlite](../globals.md) / KVSqliteAttachments

# Class: KVSqliteAttachments

Defined in: packages/kvsqlite/dist/index.d.ts:680

## Constructors

### new KVSqliteAttachments()

> **new KVSqliteAttachments**(`name`, `db`): [`KVSqliteAttachments`](KVSqliteAttachments.md)

Defined in: packages/kvsqlite/dist/index.d.ts:696

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

Defined in: packages/kvsqlite/dist/index.d.ts:682

***

### name

> **name**: `string`

Defined in: packages/kvsqlite/dist/index.d.ts:681

***

### preAdd

> **preAdd**: `Statement`

Defined in: packages/kvsqlite/dist/index.d.ts:683

***

### preAll

> **preAll**: `Statement`

Defined in: packages/kvsqlite/dist/index.d.ts:693

***

### preAllLimit

> **preAllLimit**: `Statement`

Defined in: packages/kvsqlite/dist/index.d.ts:694

***

### preCalcSize

> **preCalcSize**: `Statement`

Defined in: packages/kvsqlite/dist/index.d.ts:695

***

### preCount

> **preCount**: `Statement`

Defined in: packages/kvsqlite/dist/index.d.ts:689

***

### preCountW

> **preCountW**: `Statement`

Defined in: packages/kvsqlite/dist/index.d.ts:690

***

### preDel

> **preDel**: `Statement`

Defined in: packages/kvsqlite/dist/index.d.ts:687

***

### preDelAll

> **preDelAll**: `Statement`

Defined in: packages/kvsqlite/dist/index.d.ts:688

***

### preExists

> **preExists**: `Statement`

Defined in: packages/kvsqlite/dist/index.d.ts:685

***

### preGet

> **preGet**: `Statement`

Defined in: packages/kvsqlite/dist/index.d.ts:686

***

### preSearchKey

> **preSearchKey**: `Statement`

Defined in: packages/kvsqlite/dist/index.d.ts:691

***

### preSearchKeyAll

> **preSearchKeyAll**: `Statement`

Defined in: packages/kvsqlite/dist/index.d.ts:692

***

### preUpdate

> **preUpdate**: `Statement`

Defined in: packages/kvsqlite/dist/index.d.ts:684

## Methods

### add()

> **add**(`docId`, `filename`, `content`, `options`?): [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)

Defined in: packages/kvsqlite/dist/index.d.ts:708

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

Defined in: packages/kvsqlite/dist/index.d.ts:716

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

Defined in: packages/kvsqlite/dist/index.d.ts:703

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

Defined in: packages/kvsqlite/dist/index.d.ts:707

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

Defined in: packages/kvsqlite/dist/index.d.ts:712

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
