[**@isdk/ai-tool-sqlite**](../README.md)

***

[@isdk/ai-tool-sqlite](../globals.md) / IKVCreateFtsLanguageOptions

# Interface: IKVCreateFtsLanguageOptions

Defined in: packages/kvsqlite/dist/index.d.ts:53

Contains options tailored to a specific language's FTS setup, including plugin paths and configurations.

## Properties

### name

> **name**: `string`

Defined in: packages/kvsqlite/dist/index.d.ts:57

The language identifier, such as 'zh' for Chinese or 'en' for English.

***

### options?

> `optional` **options**: `string`

Defined in: packages/kvsqlite/dist/index.d.ts:66

Additional tokenize options for the language.

***

### plugin?

> `optional` **plugin**: [`IKVCreateFtsPluginOptions`](IKVCreateFtsPluginOptions.md)

Defined in: packages/kvsqlite/dist/index.d.ts:58

***

### tokenize?

> `optional` **tokenize**: `string`

Defined in: packages/kvsqlite/dist/index.d.ts:62

Defines the tokenization method or plugin identifier to be used.
