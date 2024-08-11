[@isdk/ai-tool-sqlite](../README.md) / [Exports](../modules.md) / IKVCreateFtsPluginOptions

# Interface: IKVCreateFtsPluginOptions

## Indexable

▪ [name: `string`]: `any`

An object holding additional configurations for the plugin related to this language.

## Table of contents

### Properties

- [load](IKVCreateFtsPluginOptions.md#load)
- [path](IKVCreateFtsPluginOptions.md#path)

## Properties

### load

• `Optional` **load**: (`db`: [`KVSqlite`](../classes/KVSqlite.md), `options`: [`IKVCreateFtsPluginOptions`](IKVCreateFtsPluginOptions.md)) => `void`

#### Type declaration

▸ (`db`, `options`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `db` | [`KVSqlite`](../classes/KVSqlite.md) |
| `options` | [`IKVCreateFtsPluginOptions`](IKVCreateFtsPluginOptions.md) |

##### Returns

`void`

#### Defined in

packages/kvsqlite/dist/index.d.ts:36

___

### path

• **path**: `string`

The path to the plugin specific to this language.

#### Defined in

packages/kvsqlite/dist/index.d.ts:35
