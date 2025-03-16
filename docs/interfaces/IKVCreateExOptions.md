[**@isdk/ai-tool-sqlite**](../README.md)

***

[@isdk/ai-tool-sqlite](../globals.md) / IKVCreateExOptions

# Interface: IKVCreateExOptions

Defined in: packages/kvsqlite/dist/index.d.ts:134

## Extends

- [`IKVCreateBaseOptions`](IKVCreateBaseOptions.md)

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

[`IKVCreateBaseOptions`](IKVCreateBaseOptions.md).[`deserialize`](IKVCreateBaseOptions.md#deserialize)

***

### fields?

> `optional` **fields**: [`IKVFieldOptionEx`](../type-aliases/IKVFieldOptionEx.md)[]

Defined in: packages/kvsqlite/dist/index.d.ts:135

***

### fts?

> `optional` **fts**: `true` \| [`IKVCreateFtsOptions`](IKVCreateFtsOptions.md)

Defined in: packages/kvsqlite/dist/index.d.ts:126

#### Inherited from

[`IKVCreateBaseOptions`](IKVCreateBaseOptions.md).[`fts`](IKVCreateBaseOptions.md#fts)

***

### indexes?

> `optional` **indexes**: [`IKVIndexOptions`](IKVIndexOptions.md) \| [`IKVIndexOptions`](IKVIndexOptions.md)[]

Defined in: packages/kvsqlite/dist/index.d.ts:127

#### Inherited from

[`IKVCreateBaseOptions`](IKVCreateBaseOptions.md).[`indexes`](IKVCreateBaseOptions.md#indexes)

***

### name?

> `optional` **name**: `string`

Defined in: packages/kvsqlite/dist/index.d.ts:124

#### Inherited from

[`IKVCreateBaseOptions`](IKVCreateBaseOptions.md).[`name`](IKVCreateBaseOptions.md#name)

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

[`IKVCreateBaseOptions`](IKVCreateBaseOptions.md).[`serialize`](IKVCreateBaseOptions.md#serialize)

***

### triggers?

> `optional` **triggers**: [`IKVTriggerOptions`](IKVTriggerOptions.md)[]

Defined in: packages/kvsqlite/dist/index.d.ts:128

#### Inherited from

[`IKVCreateBaseOptions`](IKVCreateBaseOptions.md).[`triggers`](IKVCreateBaseOptions.md#triggers)

***

### usingJsonb?

> `optional` **usingJsonb**: `boolean`

Defined in: packages/kvsqlite/dist/index.d.ts:125

#### Inherited from

[`IKVCreateBaseOptions`](IKVCreateBaseOptions.md).[`usingJsonb`](IKVCreateBaseOptions.md#usingjsonb)
