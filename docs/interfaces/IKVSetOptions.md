[**@isdk/ai-tool-sqlite**](../README.md)

***

[@isdk/ai-tool-sqlite](../globals.md) / IKVSetOptions

# Interface: IKVSetOptions

Defined in: packages/kvsqlite/dist/index.d.ts:18

## Extends

- `Options`.[`IKVSerdeOptions`](IKVSerdeOptions.md)

## Indexable

\[`name`: `string`\]: `any`

## Properties

### collection?

> `optional` **collection**: `string`

Defined in: packages/kvsqlite/dist/index.d.ts:21

***

### collections?

> `optional` **collections**: (`string` \| [`IKVCreateOptions`](IKVCreateOptions.md) \| [`IKVCreateExOptions`](IKVCreateExOptions.md))[]

Defined in: packages/kvsqlite/dist/index.d.ts:22

***

### deserialize()?

> `optional` **deserialize**: (`val`) => `any`

Defined in: packages/kvsqlite/dist/index.d.ts:16

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

Defined in: packages/kvsqlite/dist/index.d.ts:27

***

### fieldInfos?

> `optional` **fieldInfos**: `Required`\<[`IKVFieldOptions`](IKVFieldOptions.md)\>

Defined in: packages/kvsqlite/dist/index.d.ts:36

***

### fieldNames?

> `optional` **fieldNames**: `string`[]

Defined in: packages/kvsqlite/dist/index.d.ts:29

***

### fileMustExist?

> `optional` **fileMustExist**: `boolean`

Defined in: node\_modules/.pnpm/@types+better-sqlite3@7.6.12/node\_modules/@types/better-sqlite3/index.d.ts:111

#### Inherited from

`Database.Options.fileMustExist`

***

### ftsQueryStyle?

> `optional` **ftsQueryStyle**: `string` \| `boolean`

Defined in: packages/kvsqlite/dist/index.d.ts:26

***

### id?

> `optional` **id**: `string`

Defined in: packages/kvsqlite/dist/index.d.ts:19

***

### ignoreExists?

> `optional` **ignoreExists**: `boolean`

Defined in: packages/kvsqlite/dist/index.d.ts:25

***

### location?

> `optional` **location**: `string`

Defined in: packages/kvsqlite/dist/index.d.ts:20

***

### mapped?

> `optional` **mapped**: `boolean`

Defined in: packages/kvsqlite/dist/index.d.ts:35

***

### nativeBinding?

> `optional` **nativeBinding**: `string`

Defined in: node\_modules/.pnpm/@types+better-sqlite3@7.6.12/node\_modules/@types/better-sqlite3/index.d.ts:114

#### Inherited from

`Database.Options.nativeBinding`

***

### order?

> `optional` **order**: `"ASC"` \| `"DESC"`

Defined in: packages/kvsqlite/dist/index.d.ts:31

***

### overwrite?

> `optional` **overwrite**: `boolean`

Defined in: packages/kvsqlite/dist/index.d.ts:23

***

### page?

> `optional` **page**: `number`

Defined in: packages/kvsqlite/dist/index.d.ts:33

***

### query?

> `optional` **query**: `string`

Defined in: packages/kvsqlite/dist/index.d.ts:34

***

### readonly?

> `optional` **readonly**: `boolean`

Defined in: node\_modules/.pnpm/@types+better-sqlite3@7.6.12/node\_modules/@types/better-sqlite3/index.d.ts:110

#### Inherited from

`Database.Options.readonly`

***

### serialize()?

> `optional` **serialize**: (`val`) => `string`

Defined in: packages/kvsqlite/dist/index.d.ts:15

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

Defined in: packages/kvsqlite/dist/index.d.ts:24

***

### size?

> `optional` **size**: `number`

Defined in: packages/kvsqlite/dist/index.d.ts:32

***

### sort?

> `optional` **sort**: `string` \| `string`[]

Defined in: packages/kvsqlite/dist/index.d.ts:30

***

### timeout?

> `optional` **timeout**: `number`

Defined in: node\_modules/.pnpm/@types+better-sqlite3@7.6.12/node\_modules/@types/better-sqlite3/index.d.ts:112

#### Inherited from

`Database.Options.timeout`

***

### usingJsonb?

> `optional` **usingJsonb**: `boolean`

Defined in: packages/kvsqlite/dist/index.d.ts:28

***

### verbose()?

> `optional` **verbose**: (`message`?, ...`additionalArgs`) => `void`

Defined in: node\_modules/.pnpm/@types+better-sqlite3@7.6.12/node\_modules/@types/better-sqlite3/index.d.ts:113

#### Parameters

##### message?

`unknown`

##### additionalArgs?

...`unknown`[]

#### Returns

`void`

#### Inherited from

`Database.Options.verbose`
