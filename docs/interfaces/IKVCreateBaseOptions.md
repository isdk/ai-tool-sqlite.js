[**@isdk/ai-tool-sqlite**](../README.md)

***

[@isdk/ai-tool-sqlite](../globals.md) / IKVCreateBaseOptions

# Interface: IKVCreateBaseOptions

Defined in: packages/kvsqlite/dist/index.d.ts:123

## Extends

- [`IKVSerdeOptions`](IKVSerdeOptions.md)

## Extended by

- [`IKVCreateExOptions`](IKVCreateExOptions.md)
- [`IKVCreateOptions`](IKVCreateOptions.md)

## Indexable

\[`k`: `string`\]: `any`

## Properties

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

### fts?

> `optional` **fts**: `true` \| [`IKVCreateFtsOptions`](IKVCreateFtsOptions.md)

Defined in: packages/kvsqlite/dist/index.d.ts:126

***

### indexes?

> `optional` **indexes**: [`IKVIndexOptions`](IKVIndexOptions.md) \| [`IKVIndexOptions`](IKVIndexOptions.md)[]

Defined in: packages/kvsqlite/dist/index.d.ts:127

***

### name?

> `optional` **name**: `string`

Defined in: packages/kvsqlite/dist/index.d.ts:124

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

### triggers?

> `optional` **triggers**: [`IKVTriggerOptions`](IKVTriggerOptions.md)[]

Defined in: packages/kvsqlite/dist/index.d.ts:128

***

### usingJsonb?

> `optional` **usingJsonb**: `boolean`

Defined in: packages/kvsqlite/dist/index.d.ts:125
