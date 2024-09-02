[@isdk/ai-tool-sqlite](../README.md) / [Exports](../modules.md) / KVSqliteResFuncItem

# Interface: KVSqliteResFuncItem

## Hierarchy

- `FuncItem`

  ↳ **`KVSqliteResFuncItem`**

## Table of contents

### Properties

- [dbPath](KVSqliteResFuncItem.md#dbpath)
- [func](KVSqliteResFuncItem.md#func)
- [initDir](KVSqliteResFuncItem.md#initdir)
- [isApi](KVSqliteResFuncItem.md#isapi)
- [name](KVSqliteResFuncItem.md#name)
- [params](KVSqliteResFuncItem.md#params)
- [result](KVSqliteResFuncItem.md#result)
- [scope](KVSqliteResFuncItem.md#scope)
- [setup](KVSqliteResFuncItem.md#setup)
- [stream](KVSqliteResFuncItem.md#stream)
- [tags](KVSqliteResFuncItem.md#tags)

## Properties

### dbPath

• **dbPath**: `undefined` \| `string`

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:37](https://github.com/isdk/ai-tool-sqlite.js/blob/f390cca995d926b1f7a25c7b378ff07f17d595b5/src/sqlite-res.ts#L37)

___

### func

• `Optional` **func**: `TFunc`

#### Inherited from

FuncItem.func

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:46

___

### initDir

• **initDir**: `undefined` \| `string`

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:38](https://github.com/isdk/ai-tool-sqlite.js/blob/f390cca995d926b1f7a25c7b378ff07f17d595b5/src/sqlite-res.ts#L38)

___

### isApi

• `Optional` **isApi**: `boolean`

#### Inherited from

FuncItem.isApi

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:42

___

### name

• `Optional` **name**: `string`

#### Inherited from

FuncItem.name

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:36

___

### params

• `Optional` **params**: `FuncParams` \| `FuncParam`[]

#### Inherited from

FuncItem.params

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:37

___

### result

• `Optional` **result**: `string`

#### Inherited from

FuncItem.result

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:38

___

### scope

• `Optional` **scope**: `any`

#### Inherited from

FuncItem.scope

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:39

___

### setup

• `Optional` **setup**: (`this`: `ToolFunc`, `options?`: `FuncItem`) => `void`

#### Type declaration

▸ (`this`, `options?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ToolFunc` |
| `options?` | `FuncItem` |

##### Returns

`void`

#### Inherited from

FuncItem.setup

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:41

___

### stream

• `Optional` **stream**: `boolean`

#### Inherited from

FuncItem.stream

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:43

___

### tags

• `Optional` **tags**: `string` \| `string`[]

#### Inherited from

FuncItem.tags

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:40
