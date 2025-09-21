[**@isdk/ai-tool-sqlite**](../README.md)

***

[@isdk/ai-tool-sqlite](../globals.md) / IKVCreateFtsOptions

# Interface: IKVCreateFtsOptions

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1453

Represents options for creating an FTS (Full-Text Search) table in SQLite with additional support for multiple languages and plugins.

## Properties

### exclude?

> `optional` **exclude**: `string`[]

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1461

Lists fields to be excluded from full-text search.

***

### fields?

> `optional` **fields**: `string`[]

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1470

***

### include?

> `optional` **include**: `string`[]

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1465

Specifies fields that should be indexed in the FTS table.

***

### language?

> `optional` **language**: `string` \| [`IKVCreateFtsLanguageOptions`](IKVCreateFtsLanguageOptions.md)

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1474

Configures the language for full-text search.

***

### prefix?

> `optional` **prefix**: `string`

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1469

Configures prefix matching behavior.

***

### skipIndexed?

> `optional` **skipIndexed**: `boolean`

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1483

Control Inclusion of Indexed Fields in FTS Indexing

* When skipIndexed is set to true, fields that are already indexed will be automatically excluded from the FTS (Full-Text Search) indexing process by adding them to the unindexed list.
* When set to false, this behavior is disabled, and all specified fields will be included in the FTS indexing process regardless of whether they are already indexed.

defaults to `true`

***

### unIndexed?

> `optional` **unIndexed**: `string`[]

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1457

Specifies fields that should not be indexed in the FTS table.
