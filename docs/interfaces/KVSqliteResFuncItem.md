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
- [name](KVSqliteResFuncItem.md#name)
- [params](KVSqliteResFuncItem.md#params)
- [result](KVSqliteResFuncItem.md#result)
- [scope](KVSqliteResFuncItem.md#scope)
- [setup](KVSqliteResFuncItem.md#setup)
- [tags](KVSqliteResFuncItem.md#tags)

## Properties

### dbPath

• **dbPath**: `undefined` \| `string`

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:37](https://github.com/isdk/ai-tool-sqlite.js/blob/e5c256d26ef27aead78ba0d9137e44349549f4ef/src/sqlite-res.ts#L37)

___

### func

• `Optional` **func**: `TFunc`

#### Inherited from

FuncItem.func

#### Defined in

packages/ai-tool/dist/index-Dgo3ZXPQ.d.ts:44

___

### initDir

• **initDir**: `undefined` \| `string`

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:38](https://github.com/isdk/ai-tool-sqlite.js/blob/e5c256d26ef27aead78ba0d9137e44349549f4ef/src/sqlite-res.ts#L38)

___

### name

• `Optional` **name**: `string`

#### Inherited from

FuncItem.name

#### Defined in

packages/ai-tool/dist/index-Dgo3ZXPQ.d.ts:36

___

### params

• `Optional` **params**: `FuncParams` \| `FuncParam`[]

#### Inherited from

FuncItem.params

#### Defined in

packages/ai-tool/dist/index-Dgo3ZXPQ.d.ts:37

___

### result

• `Optional` **result**: `string`

#### Inherited from

FuncItem.result

#### Defined in

packages/ai-tool/dist/index-Dgo3ZXPQ.d.ts:38

___

### scope

• `Optional` **scope**: `any`

#### Inherited from

FuncItem.scope

#### Defined in

packages/ai-tool/dist/index-Dgo3ZXPQ.d.ts:39

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

packages/ai-tool/dist/index-Dgo3ZXPQ.d.ts:41

___

### tags

• `Optional` **tags**: `string` \| `string`[]

#### Inherited from

FuncItem.tags

#### Defined in

packages/ai-tool/dist/index-Dgo3ZXPQ.d.ts:40
