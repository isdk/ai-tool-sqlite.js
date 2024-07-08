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

[packages/ai-tool-sqlite/src/sqlite-res.ts:36](https://github.com/isdk/ai-tool-sqlite.js/blob/7285b68dc861f40bf3933f0fbf14e3d01892f056/src/sqlite-res.ts#L36)

___

### func

• `Optional` **func**: `TFunc`

#### Inherited from

FuncItem.func

#### Defined in

packages/ai-tool/dist/index-japi6bEq.d.ts:30

___

### initDir

• **initDir**: `undefined` \| `string`

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:37](https://github.com/isdk/ai-tool-sqlite.js/blob/7285b68dc861f40bf3933f0fbf14e3d01892f056/src/sqlite-res.ts#L37)

___

### name

• `Optional` **name**: `string`

#### Inherited from

FuncItem.name

#### Defined in

packages/ai-tool/dist/index-japi6bEq.d.ts:22

___

### params

• `Optional` **params**: `FuncParams` \| `FuncParam`[]

#### Inherited from

FuncItem.params

#### Defined in

packages/ai-tool/dist/index-japi6bEq.d.ts:23

___

### result

• `Optional` **result**: `string`

#### Inherited from

FuncItem.result

#### Defined in

packages/ai-tool/dist/index-japi6bEq.d.ts:24

___

### scope

• `Optional` **scope**: `any`

#### Inherited from

FuncItem.scope

#### Defined in

packages/ai-tool/dist/index-japi6bEq.d.ts:25

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

packages/ai-tool/dist/index-japi6bEq.d.ts:27

___

### tags

• `Optional` **tags**: `string` \| `string`[]

#### Inherited from

FuncItem.tags

#### Defined in

packages/ai-tool/dist/index-japi6bEq.d.ts:26
