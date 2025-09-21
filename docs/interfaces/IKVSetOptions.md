[**@isdk/ai-tool-sqlite**](../README.md)

***

[@isdk/ai-tool-sqlite](../globals.md) / IKVSetOptions

# Interface: IKVSetOptions

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1400

## Extends

- `Options`.[`IKVSerdeOptions`](IKVSerdeOptions.md)

## Indexable

\[`name`: `string`\]: `any`

## Properties

### collection?

> `optional` **collection**: `string`

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1403

***

### collections?

> `optional` **collections**: (`string` \| [`IKVCreateOptions`](IKVCreateOptions.md) \| [`IKVCreateExOptions`](IKVCreateExOptions.md))[]

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1404

***

### deserialize()?

> `optional` **deserialize**: (`val`) => `any`

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1398

#### Parameters

##### val

`string`

#### Returns

`any`

#### Inherited from

[`IKVSerdeOptions`](IKVSerdeOptions.md).[`deserialize`](IKVSerdeOptions.md#deserialize)

***

### dictPath?

> `optional` **dictPath**: `string`

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1409

***

### fieldInfos?

> `optional` **fieldInfos**: `Required`\<[`IKVFieldOptions`](IKVFieldOptions.md)\>

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1418

***

### fieldNames?

> `optional` **fieldNames**: `string`[]

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1411

***

### fileMustExist?

> `optional` **fileMustExist**: `boolean`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/@types+better-sqlite3@7.6.13/node\_modules/@types/better-sqlite3/index.d.ts:118

#### Inherited from

`Database.Options.fileMustExist`

***

### ftsQueryStyle?

> `optional` **ftsQueryStyle**: `string` \| `boolean`

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1408

***

### id?

> `optional` **id**: `string`

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1401

***

### ignoreExists?

> `optional` **ignoreExists**: `boolean`

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1407

***

### location?

> `optional` **location**: `string`

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1402

***

### mapped?

> `optional` **mapped**: `boolean`

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1417

***

### nativeBinding?

> `optional` **nativeBinding**: `string`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/@types+better-sqlite3@7.6.13/node\_modules/@types/better-sqlite3/index.d.ts:121

#### Inherited from

`Database.Options.nativeBinding`

***

### order?

> `optional` **order**: `"ASC"` \| `"DESC"`

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1413

***

### overwrite?

> `optional` **overwrite**: `boolean`

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1405

***

### page?

> `optional` **page**: `number`

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1415

***

### query?

> `optional` **query**: `any`

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1416

***

### readonly?

> `optional` **readonly**: `boolean`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/@types+better-sqlite3@7.6.13/node\_modules/@types/better-sqlite3/index.d.ts:117

#### Inherited from

`Database.Options.readonly`

***

### serialize()?

> `optional` **serialize**: (`val`) => `string`

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1397

#### Parameters

##### val

`any`

#### Returns

`string`

#### Inherited from

[`IKVSerdeOptions`](IKVSerdeOptions.md).[`serialize`](IKVSerdeOptions.md#serialize)

***

### singleValue?

> `optional` **singleValue**: `boolean`

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1406

***

### size?

> `optional` **size**: `number`

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1414

***

### sort?

> `optional` **sort**: `string` \| `string`[]

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1412

***

### timeout?

> `optional` **timeout**: `number`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/@types+better-sqlite3@7.6.13/node\_modules/@types/better-sqlite3/index.d.ts:119

#### Inherited from

`Database.Options.timeout`

***

### usingJsonb?

> `optional` **usingJsonb**: `boolean`

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1410

***

### verbose()?

> `optional` **verbose**: (`message?`, ...`additionalArgs`) => `void`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/@types+better-sqlite3@7.6.13/node\_modules/@types/better-sqlite3/index.d.ts:120

#### Parameters

##### message?

`unknown`

##### additionalArgs?

...`unknown`[]

#### Returns

`void`

#### Inherited from

`Database.Options.verbose`
