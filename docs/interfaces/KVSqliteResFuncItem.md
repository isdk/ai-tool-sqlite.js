[**@isdk/ai-tool-sqlite**](../README.md)

***

[@isdk/ai-tool-sqlite](../globals.md) / KVSqliteResFuncItem

# Interface: KVSqliteResFuncItem

Defined in: [packages/ai-tool-sqlite/src/sqlite-res.ts:36](https://github.com/isdk/ai-tool-sqlite.js/blob/a4b3467483e67b2e8245f2beb5bf1e93f3e0d974/src/sqlite-res.ts#L36)

## Extends

- `FuncItem`

## Properties

### dbPath

> **dbPath**: `undefined` \| `string`

Defined in: [packages/ai-tool-sqlite/src/sqlite-res.ts:37](https://github.com/isdk/ai-tool-sqlite.js/blob/a4b3467483e67b2e8245f2beb5bf1e93f3e0d974/src/sqlite-res.ts#L37)

***

### func?

> `optional` **func**: `TFunc`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:35

#### Inherited from

`FuncItem.func`

***

### initDir

> **initDir**: `undefined` \| `string`

Defined in: [packages/ai-tool-sqlite/src/sqlite-res.ts:38](https://github.com/isdk/ai-tool-sqlite.js/blob/a4b3467483e67b2e8245f2beb5bf1e93f3e0d974/src/sqlite-res.ts#L38)

***

### isApi?

> `optional` **isApi**: `boolean`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:31

#### Inherited from

`FuncItem.isApi`

***

### name?

> `optional` **name**: `string`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:25

#### Inherited from

`FuncItem.name`

***

### params?

> `optional` **params**: `FuncParams` \| `FuncParam`[]

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:26

#### Inherited from

`FuncItem.params`

***

### result?

> `optional` **result**: `string`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:27

#### Inherited from

`FuncItem.result`

***

### scope?

> `optional` **scope**: `any`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:28

#### Inherited from

`FuncItem.scope`

***

### setup()?

> `optional` **setup**: (`this`, `options`?) => `void`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:30

#### Parameters

##### this

`ToolFunc`

##### options?

`FuncItem`

#### Returns

`void`

#### Inherited from

`FuncItem.setup`

***

### stream?

> `optional` **stream**: `boolean`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:32

#### Inherited from

`FuncItem.stream`

***

### tags?

> `optional` **tags**: `string` \| `string`[]

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:29

#### Inherited from

`FuncItem.tags`
