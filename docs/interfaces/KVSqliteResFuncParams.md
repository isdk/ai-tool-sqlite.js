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

[packages/ai-tool-sqlite/src/sqlite-res.ts:22](https://github.com/isdk/ai-tool-sqlite.js/blob/e7311db52ae92bc8b044507d9c239bcd77e10f6e/src/sqlite-res.ts#L22)

___

### \_req

• `Optional` **\_req**: `IncomingMessage`

#### Inherited from

ResServerFuncParams.\_req

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:391

___

### \_res

• `Optional` **\_res**: `ServerResponse`\<`IncomingMessage`\>

#### Inherited from

ResServerFuncParams.\_res

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:392

___

### act

• `Optional` **act**: `string`

#### Inherited from

ResServerFuncParams.act

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:539

___

### filter

• `Optional` **filter**: `Record`\<`string`, `any`\> \| `Record`\<`string`, `any`\>[]

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:25](https://github.com/isdk/ai-tool-sqlite.js/blob/e7311db52ae92bc8b044507d9c239bcd77e10f6e/src/sqlite-res.ts#L25)

___

### id

• `Optional` **id**: `string` \| `number`

#### Inherited from

ResServerFuncParams.id

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:537

___

### overwrite

• `Optional` **overwrite**: `boolean`

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:28](https://github.com/isdk/ai-tool-sqlite.js/blob/e7311db52ae92bc8b044507d9c239bcd77e10f6e/src/sqlite-res.ts#L28)

___

### page

• `Optional` **page**: `number`

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:27](https://github.com/isdk/ai-tool-sqlite.js/blob/e7311db52ae92bc8b044507d9c239bcd77e10f6e/src/sqlite-res.ts#L27)

___

### query

• `Optional` **query**: `string`

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:24](https://github.com/isdk/ai-tool-sqlite.js/blob/e7311db52ae92bc8b044507d9c239bcd77e10f6e/src/sqlite-res.ts#L24)

___

### size

• `Optional` **size**: `number`

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:26](https://github.com/isdk/ai-tool-sqlite.js/blob/e7311db52ae92bc8b044507d9c239bcd77e10f6e/src/sqlite-res.ts#L26)

___

### val

• `Optional` **val**: `any`

#### Overrides

ResServerFuncParams.val

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:23](https://github.com/isdk/ai-tool-sqlite.js/blob/e7311db52ae92bc8b044507d9c239bcd77e10f6e/src/sqlite-res.ts#L23)
