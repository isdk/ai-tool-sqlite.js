[**@isdk/ai-tool-sqlite**](../README.md)

***

[@isdk/ai-tool-sqlite](../globals.md) / IKVCreateExOptions

# Interface: IKVCreateExOptions

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1534

## Extends

- [`IKVCreateBaseOptions`](IKVCreateBaseOptions.md)

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

[`IKVCreateBaseOptions`](IKVCreateBaseOptions.md).[`deserialize`](IKVCreateBaseOptions.md#deserialize)

***

### fields?

> `optional` **fields**: [`IKVFieldOptionEx`](../type-aliases/IKVFieldOptionEx.md)[]

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1535

***

### fts?

> `optional` **fts**: `true` \| [`IKVCreateFtsOptions`](IKVCreateFtsOptions.md)

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1526

#### Inherited from

[`IKVCreateBaseOptions`](IKVCreateBaseOptions.md).[`fts`](IKVCreateBaseOptions.md#fts)

***

### indexes?

> `optional` **indexes**: [`IKVIndexOptions`](IKVIndexOptions.md) \| [`IKVIndexOptions`](IKVIndexOptions.md)[]

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1527

#### Inherited from

[`IKVCreateBaseOptions`](IKVCreateBaseOptions.md).[`indexes`](IKVCreateBaseOptions.md#indexes)

***

### name?

> `optional` **name**: `string`

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1524

#### Inherited from

[`IKVCreateBaseOptions`](IKVCreateBaseOptions.md).[`name`](IKVCreateBaseOptions.md#name)

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

[`IKVCreateBaseOptions`](IKVCreateBaseOptions.md).[`serialize`](IKVCreateBaseOptions.md#serialize)

***

### triggers?

> `optional` **triggers**: [`IKVTriggerOptions`](IKVTriggerOptions.md)[]

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1528

#### Inherited from

[`IKVCreateBaseOptions`](IKVCreateBaseOptions.md).[`triggers`](IKVCreateBaseOptions.md#triggers)

***

### usingJsonb?

> `optional` **usingJsonb**: `boolean`

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1525

#### Inherited from

[`IKVCreateBaseOptions`](IKVCreateBaseOptions.md).[`usingJsonb`](IKVCreateBaseOptions.md#usingjsonb)
