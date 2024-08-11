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
- [dictPath](IKVSetOptions.md#dictpath)
- [fieldNames](IKVSetOptions.md#fieldnames)
- [fileMustExist](IKVSetOptions.md#filemustexist)
- [ftsQueryStyle](IKVSetOptions.md#ftsquerystyle)
- [id](IKVSetOptions.md#id)
- [ignoreExists](IKVSetOptions.md#ignoreexists)
- [location](IKVSetOptions.md#location)
- [mapped](IKVSetOptions.md#mapped)
- [nativeBinding](IKVSetOptions.md#nativebinding)
- [order](IKVSetOptions.md#order)
- [overwrite](IKVSetOptions.md#overwrite)
- [page](IKVSetOptions.md#page)
- [query](IKVSetOptions.md#query)
- [readonly](IKVSetOptions.md#readonly)
- [singleValue](IKVSetOptions.md#singlevalue)
- [size](IKVSetOptions.md#size)
- [sort](IKVSetOptions.md#sort)
- [timeout](IKVSetOptions.md#timeout)
- [usingJsonb](IKVSetOptions.md#usingjsonb)
- [verbose](IKVSetOptions.md#verbose)

## Properties

### collection

• `Optional` **collection**: `string`

#### Defined in

packages/kvsqlite/dist/index.d.ts:14

___

### collections

• `Optional` **collections**: `string`[]

#### Defined in

packages/kvsqlite/dist/index.d.ts:15

___

### dictPath

• `Optional` **dictPath**: `string`

#### Defined in

packages/kvsqlite/dist/index.d.ts:20

___

### fieldNames

• `Optional` **fieldNames**: `string`[]

#### Defined in

packages/kvsqlite/dist/index.d.ts:22

___

### fileMustExist

• `Optional` **fileMustExist**: `boolean`

#### Inherited from

Database.Options.fileMustExist

#### Defined in

node_modules/.pnpm/@types+better-sqlite3@7.6.10/node_modules/@types/better-sqlite3/index.d.ts:110

___

### ftsQueryStyle

• `Optional` **ftsQueryStyle**: `string` \| ``false``

#### Defined in

packages/kvsqlite/dist/index.d.ts:19

___

### id

• `Optional` **id**: `string`

#### Defined in

packages/kvsqlite/dist/index.d.ts:12

___

### ignoreExists

• `Optional` **ignoreExists**: `boolean`

#### Defined in

packages/kvsqlite/dist/index.d.ts:18

___

### location

• `Optional` **location**: `string`

#### Defined in

packages/kvsqlite/dist/index.d.ts:13

___

### mapped

• `Optional` **mapped**: `boolean`

#### Defined in

packages/kvsqlite/dist/index.d.ts:28

___

### nativeBinding

• `Optional` **nativeBinding**: `string`

#### Inherited from

Database.Options.nativeBinding

#### Defined in

node_modules/.pnpm/@types+better-sqlite3@7.6.10/node_modules/@types/better-sqlite3/index.d.ts:113

___

### order

• `Optional` **order**: ``"ASC"`` \| ``"DESC"``

#### Defined in

packages/kvsqlite/dist/index.d.ts:24

___

### overwrite

• `Optional` **overwrite**: `boolean`

#### Defined in

packages/kvsqlite/dist/index.d.ts:16

___

### page

• `Optional` **page**: `number`

#### Defined in

packages/kvsqlite/dist/index.d.ts:26

___

### query

• `Optional` **query**: `string`

#### Defined in

packages/kvsqlite/dist/index.d.ts:27

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

packages/kvsqlite/dist/index.d.ts:17

___

### size

• `Optional` **size**: `number`

#### Defined in

packages/kvsqlite/dist/index.d.ts:25

___

### sort

• `Optional` **sort**: `string` \| `string`[]

#### Defined in

packages/kvsqlite/dist/index.d.ts:23

___

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

Database.Options.timeout

#### Defined in

node_modules/.pnpm/@types+better-sqlite3@7.6.10/node_modules/@types/better-sqlite3/index.d.ts:111

___

### usingJsonb

• `Optional` **usingJsonb**: `boolean`

#### Defined in

packages/kvsqlite/dist/index.d.ts:21

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
