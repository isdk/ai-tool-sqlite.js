[@isdk/ai-tool-sqlite](../README.md) / [Exports](../modules.md) / IKVCreateFtsLanguageOptions

# Interface: IKVCreateFtsLanguageOptions

Contains options tailored to a specific language's FTS setup, including plugin paths and configurations.

## Table of contents

### Properties

- [name](IKVCreateFtsLanguageOptions.md#name)
- [plugin](IKVCreateFtsLanguageOptions.md#plugin)
- [tokenize](IKVCreateFtsLanguageOptions.md#tokenize)

## Properties

### name

• **name**: `string`

The language identifier, such as 'zh' for Chinese or 'en' for English.

#### Defined in

packages/kvsqlite/dist/index.d.ts:49

___

### plugin

• `Optional` **plugin**: [`IKVCreateFtsPluginOptions`](IKVCreateFtsPluginOptions.md)

#### Defined in

packages/kvsqlite/dist/index.d.ts:50

___

### tokenize

• `Optional` **tokenize**: `string`

Defines the tokenization method or plugin identifier to be used.

#### Defined in

packages/kvsqlite/dist/index.d.ts:54
