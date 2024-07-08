[@isdk/ai-tool-sqlite](README.md) / Exports

# @isdk/ai-tool-sqlite

## Table of contents

### Classes

- [KVSqliteResFunc](classes/KVSqliteResFunc.md)

### Interfaces

- [KVSqliteResFuncItem](interfaces/KVSqliteResFuncItem.md)
- [KVSqliteResFuncParams](interfaces/KVSqliteResFuncParams.md)
- [SqliteRunResult](interfaces/SqliteRunResult.md)

### Variables

- [StoreCache](modules.md#storecache)
- [StoreCacheName](modules.md#storecachename)

### Functions

- [\_sqliteStore](modules.md#_sqlitestore)
- [createSqliteStore](modules.md#createsqlitestore)

## Variables

### StoreCache

• `Const` **StoreCache**: `ToolFunc`

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-store.ts:8](https://github.com/isdk/ai-tool-sqlite.js/blob/7285b68dc861f40bf3933f0fbf14e3d01892f056/src/sqlite-store.ts#L8)

___

### StoreCacheName

• `Const` **StoreCacheName**: ``"cache.store"``

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-store.ts:6](https://github.com/isdk/ai-tool-sqlite.js/blob/7285b68dc861f40bf3933f0fbf14e3d01892f056/src/sqlite-store.ts#L6)

## Functions

### \_sqliteStore

▸ **_sqliteStore**(`this`, `«destructured»?`): `KVSqlite` \| `IKVObjItem` \| `RunResult` \| `RunResult`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ToolFunc` |
| `«destructured»` | `Object` |
| › `key?` | `string` \| `IKVObjItem` \| `IKVSetOptions` |
| › `options?` | `IKVSetOptions` |
| › `value?` | `IKVObjItem` \| `IKVSetOptions` |

#### Returns

`KVSqlite` \| `IKVObjItem` \| `RunResult` \| `RunResult`[]

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-store.ts:17](https://github.com/isdk/ai-tool-sqlite.js/blob/7285b68dc861f40bf3933f0fbf14e3d01892f056/src/sqlite-store.ts#L17)

___

### createSqliteStore

▸ **createSqliteStore**(`name`, `dbPath?`, `options?`): `ToolFunc`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `dbPath?` | `string` |
| `options?` | `IKVSetOptions` |

#### Returns

`ToolFunc`

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-store.ts:57](https://github.com/isdk/ai-tool-sqlite.js/blob/7285b68dc861f40bf3933f0fbf14e3d01892f056/src/sqlite-store.ts#L57)
