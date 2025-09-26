[**@isdk/ai-tool-sqlite**](../README.md)

***

[@isdk/ai-tool-sqlite](../globals.md) / KVSqliteResFuncItem

# Interface: KVSqliteResFuncItem

Defined in: [@isdk/ai-tools/packages/ai-tool-sqlite/src/sqlite-res.ts:36](https://github.com/isdk/ai-tool-sqlite.js/blob/2f4fdcf4b214ba449ef126c584c827b0d3d9f601/src/sqlite-res.ts#L36)

## Extends

- `FuncItem`

## Properties

### alias?

> `optional` **alias**: `string` \| `string`[]

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:124

Optional aliases for the function name.

#### Inherited from

`FuncItem.alias`

***

### asyncFeatures?

> `optional` **asyncFeatures**: `number`

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:138

A bitmask representing asynchronous features supported by the function, built from `AsyncFeatureBits`.
This allows the system to understand if a function supports capabilities like cancellation or multi-tasking.

#### See

AsyncFeatureBits from `@src/utils/cancelable-ability.ts`

#### Example

```ts
import { AsyncFeatures } from './utils';
const func = new ToolFunc({
  name: 'cancellableTask',
  asyncFeatures: AsyncFeatures.Cancelable | AsyncFeatures.MultiTask,
  // ...
});
```

#### Inherited from

`FuncItem.asyncFeatures`

***

### dbPath

> **dbPath**: `undefined` \| `string`

Defined in: [@isdk/ai-tools/packages/ai-tool-sqlite/src/sqlite-res.ts:37](https://github.com/isdk/ai-tool-sqlite.js/blob/2f4fdcf4b214ba449ef126c584c827b0d3d9f601/src/sqlite-res.ts#L37)

***

### depends?

> `optional` **depends**: `object`

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:161

A map of dependencies this function has on other tool functions.
Declaring dependencies ensures that they are automatically registered when this function is registered.
This is crucial for building modular functions that rely on each other without needing to manage registration order manually.

#### Index Signature

\[`name`: `string`\]: `ToolFunc`

#### Example

```ts
const helperFunc = new ToolFunc({ name: 'helper', func: () => 'world' });
const mainFunc = new ToolFunc({
  name: 'main',
  depends: {
    helper: helperFunc,
  },
  func() {
    // We can now safely run the dependency
    const result = this.runSync('helper');
    return `Hello, ${result}`;
  }
});
// When mainFunc is registered, helperFunc will be registered automatically.
mainFunc.register();
```

#### Inherited from

`FuncItem.depends`

***

### description?

> `optional` **description**: `string`

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:168

A detailed description of what the function does.

#### Inherited from

`FuncItem.description`

***

### func?

> `optional` **func**: `TFunc`

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:184

The implementation of the tool function.

#### Inherited from

`FuncItem.func`

***

### initDir

> **initDir**: `undefined` \| `string`

Defined in: [@isdk/ai-tools/packages/ai-tool-sqlite/src/sqlite-res.ts:38](https://github.com/isdk/ai-tool-sqlite.js/blob/2f4fdcf4b214ba449ef126c584c827b0d3d9f601/src/sqlite-res.ts#L38)

***

### isApi?

> `optional` **isApi**: `boolean`

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:113

If true, indicates that this function should be treated as a server-side API.

#### Inherited from

`FuncItem.isApi`

***

### name?

> `optional` **name**: `string`

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:70

The unique name of the function.

#### Inherited from

`FuncItem.name`

***

### params?

> `optional` **params**: `FuncParams` \| `FuncParam`[]

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:75

Parameter definitions, which can be an object mapping names to definitions or an array for positional parameters.

#### Inherited from

`FuncItem.params`

***

### result?

> `optional` **result**: `string` \| `Record`\<`string`, `any`\>

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:80

The expected return type of the function, described as a string or a JSON schema object.

#### Inherited from

`FuncItem.result`

***

### scope?

> `optional` **scope**: `any`

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:85

The execution scope or context (`this`) for the function.

#### Inherited from

`FuncItem.scope`

***

### setup()?

> `optional` **setup**: (`this`, `options?`) => `void`

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:108

A lifecycle hook called once during the `ToolFunc` instance's initialization.
It allows for initial setup, state configuration, or property modification on the instance
before it is used or registered. The `this` context is the `ToolFunc` instance itself.

#### Parameters

##### this

`ToolFunc`

##### options?

`FuncItem`

The configuration options for the function.

#### Returns

`void`

#### Example

```ts
const myFunc = new ToolFunc({
  name: 'myFunc',
  customState: 'initial',
  setup() {
    // `this` is the myFunc instance
    this.customState = 'configured';
  }
});
console.log(myFunc.customState); // Outputs: 'configured'
```

#### Inherited from

`FuncItem.setup`

***

### stream?

> `optional` **stream**: `boolean`

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:119

If true, indicates that the function has the *capability* to stream its output.
Whether a specific call is streamed is determined by a `stream` property in the runtime parameters.

#### Inherited from

`FuncItem.stream`

***

### tags?

> `optional` **tags**: `string` \| `string`[]

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:90

Tags for grouping or filtering functions.

#### Inherited from

`FuncItem.tags`

***

### title?

> `optional` **title**: `string`

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:173

A concise, human-readable title for the function, often used in UI or by AI.

#### Inherited from

`FuncItem.title`
