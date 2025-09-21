[**@isdk/ai-tool-sqlite**](../README.md)

***

[@isdk/ai-tool-sqlite](../globals.md) / IKVCreateFtsLanguageOptions

# Interface: IKVCreateFtsLanguageOptions

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1435

Contains options tailored to a specific language's FTS setup, including plugin paths and configurations.

## Properties

### name

> **name**: `string`

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1439

The language identifier, such as 'zh' for Chinese or 'en' for English.

***

### options?

> `optional` **options**: `string`

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1448

Additional tokenize options for the language.

***

### plugin?

> `optional` **plugin**: [`IKVCreateFtsPluginOptions`](IKVCreateFtsPluginOptions.md)

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1440

***

### tokenize?

> `optional` **tokenize**: `string`

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1444

Defines the tokenization method or plugin identifier to be used.
