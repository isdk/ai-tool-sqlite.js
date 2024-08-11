[@isdk/ai-tool-sqlite](../README.md) / [Exports](../modules.md) / IKVCreateFtsOptions

# Interface: IKVCreateFtsOptions

Represents options for creating an FTS (Full-Text Search) table in SQLite with additional support for multiple languages and plugins.

## Table of contents

### Properties

- [exclude](IKVCreateFtsOptions.md#exclude)
- [fields](IKVCreateFtsOptions.md#fields)
- [language](IKVCreateFtsOptions.md#language)
- [prefix](IKVCreateFtsOptions.md#prefix)
- [unIndexed](IKVCreateFtsOptions.md#unindexed)

## Properties

### exclude

• `Optional` **exclude**: `string`[]

Lists fields to be excluded from full-text search.

#### Defined in

packages/kvsqlite/dist/index.d.ts:67

___

### fields

• `Optional` **fields**: `string`[]

#### Defined in

packages/kvsqlite/dist/index.d.ts:72

___

### language

• `Optional` **language**: `string` \| [`IKVCreateFtsLanguageOptions`](IKVCreateFtsLanguageOptions.md)

Configures the language for full-text search.

#### Defined in

packages/kvsqlite/dist/index.d.ts:76

___

### prefix

• `Optional` **prefix**: `string`

Configures prefix matching behavior.

#### Defined in

packages/kvsqlite/dist/index.d.ts:71

___

### unIndexed

• `Optional` **unIndexed**: `string`[]

Specifies fields that should not be indexed in the FTS table.

#### Defined in

packages/kvsqlite/dist/index.d.ts:63
