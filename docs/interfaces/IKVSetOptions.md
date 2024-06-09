[@isdk/ai-tool-sqlite](../README.md) / [Exports](../modules.md) / IKVSetOptions

# Interface: IKVSetOptions

## Hierarchy

- `Options`

  ↳ **`IKVSetOptions`**

## Indexable

▪ [name: `string`]: `any`

## Table of contents

### Properties

- [collection](IKVSetOptions.md#collection)
- [collections](IKVSetOptions.md#collections)
- [fileMustExist](IKVSetOptions.md#filemustexist)
- [id](IKVSetOptions.md#id)
- [ignoreExists](IKVSetOptions.md#ignoreexists)
- [location](IKVSetOptions.md#location)
- [nativeBinding](IKVSetOptions.md#nativebinding)
- [overwrite](IKVSetOptions.md#overwrite)
- [readonly](IKVSetOptions.md#readonly)
- [singleValue](IKVSetOptions.md#singlevalue)
- [timeout](IKVSetOptions.md#timeout)
- [verbose](IKVSetOptions.md#verbose)

## Properties

### collection

• `Optional` **collection**: `string`

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:22](https://github.com/isdk/ai-tool-sqlite.js/blob/e7311db52ae92bc8b044507d9c239bcd77e10f6e/src/kvsqlite.ts#L22)

___

### collections

• `Optional` **collections**: `string`[]

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:23](https://github.com/isdk/ai-tool-sqlite.js/blob/e7311db52ae92bc8b044507d9c239bcd77e10f6e/src/kvsqlite.ts#L23)

___

### fileMustExist

• `Optional` **fileMustExist**: `boolean`

#### Inherited from

Database.Options.fileMustExist

#### Defined in

node_modules/.pnpm/@types+better-sqlite3@7.6.10/node_modules/@types/better-sqlite3/index.d.ts:110

___

### id

• `Optional` **id**: `string`

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:20](https://github.com/isdk/ai-tool-sqlite.js/blob/e7311db52ae92bc8b044507d9c239bcd77e10f6e/src/kvsqlite.ts#L20)

___

### ignoreExists

• `Optional` **ignoreExists**: `boolean`

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:26](https://github.com/isdk/ai-tool-sqlite.js/blob/e7311db52ae92bc8b044507d9c239bcd77e10f6e/src/kvsqlite.ts#L26)

___

### location

• `Optional` **location**: `string`

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:21](https://github.com/isdk/ai-tool-sqlite.js/blob/e7311db52ae92bc8b044507d9c239bcd77e10f6e/src/kvsqlite.ts#L21)

___

### nativeBinding

• `Optional` **nativeBinding**: `string`

#### Inherited from

Database.Options.nativeBinding

#### Defined in

node_modules/.pnpm/@types+better-sqlite3@7.6.10/node_modules/@types/better-sqlite3/index.d.ts:113

___

### overwrite

• `Optional` **overwrite**: `boolean`

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:24](https://github.com/isdk/ai-tool-sqlite.js/blob/e7311db52ae92bc8b044507d9c239bcd77e10f6e/src/kvsqlite.ts#L24)

___

### readonly

• `Optional` **readonly**: `boolean`

#### Inherited from

Database.Options.readonly

#### Defined in

node_modules/.pnpm/@types+better-sqlite3@7.6.10/node_modules/@types/better-sqlite3/index.d.ts:109

___

### singleValue

• `Optional` **singleValue**: `boolean`

#### Defined in

[packages/ai-tool-sqlite/src/kvsqlite.ts:25](https://github.com/isdk/ai-tool-sqlite.js/blob/e7311db52ae92bc8b044507d9c239bcd77e10f6e/src/kvsqlite.ts#L25)

___

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

Database.Options.timeout

#### Defined in

node_modules/.pnpm/@types+better-sqlite3@7.6.10/node_modules/@types/better-sqlite3/index.d.ts:111

___

### verbose

• `Optional` **verbose**: (`message?`: `unknown`, ...`additionalArgs`: `unknown`[]) => `void`

#### Type declaration

▸ (`message?`, `...additionalArgs`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `unknown` |
| `...additionalArgs` | `unknown`[] |

##### Returns

`void`

#### Inherited from

Database.Options.verbose

#### Defined in

node_modules/.pnpm/@types+better-sqlite3@7.6.10/node_modules/@types/better-sqlite3/index.d.ts:112
