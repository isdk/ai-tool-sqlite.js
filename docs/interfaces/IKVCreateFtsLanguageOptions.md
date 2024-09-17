[**@isdk/ai-tool-sqlite**](../README.md) • **Docs**

***

[@isdk/ai-tool-sqlite](../globals.md) / IKVCreateFtsLanguageOptions

# Interface: IKVCreateFtsLanguageOptions

Contains options tailored to a specific language's FTS setup, including plugin paths and configurations.

## Properties

### name

> **name**: `string`

The language identifier, such as 'zh' for Chinese or 'en' for English.

#### Defined in

packages/kvsqlite/dist/index.d.ts:49

***

### plugin?

> `optional` **plugin**: [`IKVCreateFtsPluginOptions`](IKVCreateFtsPluginOptions.md)

#### Defined in

packages/kvsqlite/dist/index.d.ts:50

***

### tokenize?

> `optional` **tokenize**: `string`

Defines the tokenization method or plugin identifier to be used.

#### Defined in

packages/kvsqlite/dist/index.d.ts:54
