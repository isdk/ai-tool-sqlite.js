[**@isdk/ai-tool-sqlite**](../README.md)

***

[@isdk/ai-tool-sqlite](../globals.md) / KVSqliteAttachments

# Class: KVSqliteAttachments

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1320

## Constructors

### Constructor

> **new KVSqliteAttachments**(`name`, `db`): `KVSqliteAttachments`

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1336

#### Parameters

##### name

`string`

##### db

[`KVSqlite`](KVSqlite.md)

#### Returns

`KVSqliteAttachments`

## Properties

### db

> `protected` **db**: [`KVSqlite`](KVSqlite.md)

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1322

***

### name

> **name**: `string`

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1321

***

### preAdd

> **preAdd**: `Statement`

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1323

***

### preAll

> **preAll**: `Statement`

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1333

***

### preAllLimit

> **preAllLimit**: `Statement`

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1334

***

### preCalcSize

> **preCalcSize**: `Statement`

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1335

***

### preCount

> **preCount**: `Statement`

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1329

***

### preCountW

> **preCountW**: `Statement`

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1330

***

### preDel

> **preDel**: `Statement`

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1327

***

### preDelAll

> **preDelAll**: `Statement`

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1328

***

### preExists

> **preExists**: `Statement`

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1325

***

### preGet

> **preGet**: `Statement`

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1326

***

### preSearchKey

> **preSearchKey**: `Statement`

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1331

***

### preSearchKeyAll

> **preSearchKeyAll**: `Statement`

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1332

***

### preUpdate

> **preUpdate**: `Statement`

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1324

## Methods

### add()

> **add**(`docId`, `filename`, `content`, `options?`): [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1348

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

> **del**(`docId`, `filename?`): [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md) \| [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)[]

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1356

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

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1343

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

> **list**(`docId`, `filename?`): `unknown`[]

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1347

#### Parameters

##### docId

[`IKVDocumentId`](../type-aliases/IKVDocumentId.md)

##### filename?

`string`

#### Returns

`unknown`[]

***

### update()

> **update**(`docId`, `filename`, `content`, `options?`): [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1352

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
