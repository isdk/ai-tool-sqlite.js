[**@isdk/ai-tool-sqlite**](../README.md) • **Docs**

***

[@isdk/ai-tool-sqlite](../globals.md) / KVSqliteResFuncItem

# Interface: KVSqliteResFuncItem

## Extends

- `FuncItem`

## Properties

### dbPath

> **dbPath**: `undefined` \| `string`

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:37](https://github.com/isdk/ai-tool-sqlite.js/blob/e3c1ff8a73c1e23a76a3ce2a388503307056f314/src/sqlite-res.ts#L37)

***

### func?

> `optional` **func**: `TFunc`

#### Inherited from

`FuncItem.func`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:46

***

### initDir

> **initDir**: `undefined` \| `string`

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:38](https://github.com/isdk/ai-tool-sqlite.js/blob/e3c1ff8a73c1e23a76a3ce2a388503307056f314/src/sqlite-res.ts#L38)

***

### isApi?

> `optional` **isApi**: `boolean`

#### Inherited from

`FuncItem.isApi`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:42

***

### name?

> `optional` **name**: `string`

#### Inherited from

`FuncItem.name`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:36

***

### params?

> `optional` **params**: `FuncParams` \| `FuncParam`[]

#### Inherited from

`FuncItem.params`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:37

***

### result?

> `optional` **result**: `string`

#### Inherited from

`FuncItem.result`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:38

***

### scope?

> `optional` **scope**: `any`

#### Inherited from

`FuncItem.scope`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:39

***

### setup()?

> `optional` **setup**: (`this`, `options`?) => `void`

#### Parameters

• **this**: `ToolFunc`

• **options?**: `FuncItem`

#### Returns

`void`

#### Inherited from

`FuncItem.setup`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:41

***

### stream?

> `optional` **stream**: `boolean`

#### Inherited from

`FuncItem.stream`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:43

***

### tags?

> `optional` **tags**: `string` \| `string`[]

#### Inherited from

`FuncItem.tags`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:40
