[**@isdk/ai-tool-sqlite**](../README.md)

***

[@isdk/ai-tool-sqlite](../globals.md) / IKVCreateBaseOptions

# Interface: IKVCreateBaseOptions

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1523

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

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1398

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

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1526

***

### indexes?

> `optional` **indexes**: [`IKVIndexOptions`](IKVIndexOptions.md) \| [`IKVIndexOptions`](IKVIndexOptions.md)[]

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1527

***

### name?

> `optional` **name**: `string`

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1524

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

### triggers?

> `optional` **triggers**: [`IKVTriggerOptions`](IKVTriggerOptions.md)[]

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1528

***

### usingJsonb?

> `optional` **usingJsonb**: `boolean`

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1525
