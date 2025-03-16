[**@isdk/ai-tool-sqlite**](../README.md)

***

[@isdk/ai-tool-sqlite](../globals.md) / IKVCreateFtsOptions

# Interface: IKVCreateFtsOptions

Defined in: packages/kvsqlite/dist/index.d.ts:71

Represents options for creating an FTS (Full-Text Search) table in SQLite with additional support for multiple languages and plugins.

## Properties

### exclude?

> `optional` **exclude**: `string`[]

Defined in: packages/kvsqlite/dist/index.d.ts:79

Lists fields to be excluded from full-text search.

***

### fields?

> `optional` **fields**: `string`[]

Defined in: packages/kvsqlite/dist/index.d.ts:84

***

### language?

> `optional` **language**: `string` \| [`IKVCreateFtsLanguageOptions`](IKVCreateFtsLanguageOptions.md)

Defined in: packages/kvsqlite/dist/index.d.ts:88

Configures the language for full-text search.

***

### prefix?

> `optional` **prefix**: `string`

Defined in: packages/kvsqlite/dist/index.d.ts:83

Configures prefix matching behavior.

***

### unIndexed?

> `optional` **unIndexed**: `string`[]

Defined in: packages/kvsqlite/dist/index.d.ts:75

Specifies fields that should not be indexed in the FTS table.
