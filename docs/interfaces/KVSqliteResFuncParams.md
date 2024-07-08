[@isdk/ai-tool-sqlite](../README.md) / [Exports](../modules.md) / KVSqliteResFuncParams

# Interface: KVSqliteResFuncParams

## Hierarchy

- `ResServerFuncParams`

  ↳ **`KVSqliteResFuncParams`**

## Table of contents

### Properties

- [\_id](KVSqliteResFuncParams.md#_id)
- [\_req](KVSqliteResFuncParams.md#_req)
- [\_res](KVSqliteResFuncParams.md#_res)
- [act](KVSqliteResFuncParams.md#act)
- [collection](KVSqliteResFuncParams.md#collection)
- [filter](KVSqliteResFuncParams.md#filter)
- [id](KVSqliteResFuncParams.md#id)
- [overwrite](KVSqliteResFuncParams.md#overwrite)
- [page](KVSqliteResFuncParams.md#page)
- [query](KVSqliteResFuncParams.md#query)
- [size](KVSqliteResFuncParams.md#size)
- [val](KVSqliteResFuncParams.md#val)

## Properties

### \_id

• `Optional` **\_id**: `string`

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:25](https://github.com/isdk/ai-tool-sqlite.js/blob/7285b68dc861f40bf3933f0fbf14e3d01892f056/src/sqlite-res.ts#L25)

___

### \_req

• `Optional` **\_req**: `IncomingMessage`

#### Inherited from

ResServerFuncParams.\_req

#### Defined in

packages/ai-tool/dist/index-japi6bEq.d.ts:391

___

### \_res

• `Optional` **\_res**: `ServerResponse`\<`IncomingMessage`\>

#### Inherited from

ResServerFuncParams.\_res

#### Defined in

packages/ai-tool/dist/index-japi6bEq.d.ts:392

___

### act

• `Optional` **act**: `string`

#### Inherited from

ResServerFuncParams.act

#### Defined in

packages/ai-tool/dist/index-japi6bEq.d.ts:528

___

### collection

• `Optional` **collection**: `string`

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:32](https://github.com/isdk/ai-tool-sqlite.js/blob/7285b68dc861f40bf3933f0fbf14e3d01892f056/src/sqlite-res.ts#L32)

___

### filter

• `Optional` **filter**: `Record`\<`string`, `any`\> \| `Record`\<`string`, `any`\>[]

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:28](https://github.com/isdk/ai-tool-sqlite.js/blob/7285b68dc861f40bf3933f0fbf14e3d01892f056/src/sqlite-res.ts#L28)

___

### id

• `Optional` **id**: `string` \| `number`

#### Inherited from

ResServerFuncParams.id

#### Defined in

packages/ai-tool/dist/index-japi6bEq.d.ts:526

___

### overwrite

• `Optional` **overwrite**: `boolean`

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:31](https://github.com/isdk/ai-tool-sqlite.js/blob/7285b68dc861f40bf3933f0fbf14e3d01892f056/src/sqlite-res.ts#L31)

___

### page

• `Optional` **page**: `number`

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:30](https://github.com/isdk/ai-tool-sqlite.js/blob/7285b68dc861f40bf3933f0fbf14e3d01892f056/src/sqlite-res.ts#L30)

___

### query

• `Optional` **query**: `string`

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:27](https://github.com/isdk/ai-tool-sqlite.js/blob/7285b68dc861f40bf3933f0fbf14e3d01892f056/src/sqlite-res.ts#L27)

___

### size

• `Optional` **size**: `number`

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:29](https://github.com/isdk/ai-tool-sqlite.js/blob/7285b68dc861f40bf3933f0fbf14e3d01892f056/src/sqlite-res.ts#L29)

___

### val

• `Optional` **val**: `any`

#### Overrides

ResServerFuncParams.val

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:26](https://github.com/isdk/ai-tool-sqlite.js/blob/7285b68dc861f40bf3933f0fbf14e3d01892f056/src/sqlite-res.ts#L26)
