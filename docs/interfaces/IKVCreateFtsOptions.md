[**@isdk/ai-tool-sqlite**](../README.md) • **Docs**

***

[@isdk/ai-tool-sqlite](../globals.md) / IKVCreateFtsOptions

# Interface: IKVCreateFtsOptions

Represents options for creating an FTS (Full-Text Search) table in SQLite with additional support for multiple languages and plugins.

## Properties

### exclude?

> `optional` **exclude**: `string`[]

Lists fields to be excluded from full-text search.

#### Defined in

packages/kvsqlite/dist/index.d.ts:67

***

### fields?

> `optional` **fields**: `string`[]

#### Defined in

packages/kvsqlite/dist/index.d.ts:72

***

### language?

> `optional` **language**: `string` \| [`IKVCreateFtsLanguageOptions`](IKVCreateFtsLanguageOptions.md)

Configures the language for full-text search.

#### Defined in

packages/kvsqlite/dist/index.d.ts:76

***

### prefix?

> `optional` **prefix**: `string`

Configures prefix matching behavior.

#### Defined in

packages/kvsqlite/dist/index.d.ts:71

***

### unIndexed?

> `optional` **unIndexed**: `string`[]

Specifies fields that should not be indexed in the FTS table.

#### Defined in

packages/kvsqlite/dist/index.d.ts:63
