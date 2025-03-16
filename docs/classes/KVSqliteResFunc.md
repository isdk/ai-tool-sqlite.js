[**@isdk/ai-tool-sqlite**](../README.md)

***

[@isdk/ai-tool-sqlite](../globals.md) / KVSqliteResFunc

# Class: KVSqliteResFunc\<T\>

Defined in: [packages/ai-tool-sqlite/src/sqlite-res.ts:41](https://github.com/isdk/ai-tool-sqlite.js/blob/a4b3467483e67b2e8245f2beb5bf1e93f3e0d974/src/sqlite-res.ts#L41)

## Extends

- `ResServerTools`

## Type Parameters

• **T** *extends* [`KVSqliteResFuncParams`](../interfaces/KVSqliteResFuncParams.md) = [`KVSqliteResFuncParams`](../interfaces/KVSqliteResFuncParams.md)

## Indexable

\[`name`: `string`\]: `any`

## Constructors

### new KVSqliteResFunc()

> **new KVSqliteResFunc**\<`T`\>(`name`, `options`): [`KVSqliteResFunc`](KVSqliteResFunc.md)\<`T`\>

Defined in: [packages/ai-tool-sqlite/src/sqlite-res.ts:51](https://github.com/isdk/ai-tool-sqlite.js/blob/a4b3467483e67b2e8245f2beb5bf1e93f3e0d974/src/sqlite-res.ts#L51)

#### Parameters

##### name

`string` | `Function` | `FuncItem`

##### options

`any` = `{}`

#### Returns

[`KVSqliteResFunc`](KVSqliteResFunc.md)\<`T`\>

## Properties

### $attributes

> **$attributes**: `Properties`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/advance.d.ts:5

***

### action

> **action**: `"list"` \| `"get"` \| `"put"` \| `"post"` \| `"delete"` \| `"patch"` \| `"res"`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:842

***

### allowExportFunc?

> `optional` **allowExportFunc**: `boolean`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:686

***

### apiRoot?

> `optional` **apiRoot**: `string`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:149

***

### constructor

> **constructor**: `Function`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:125

The initial value of Object.prototype.constructor is the standard built-in Object constructor.

***

### db

> **db**: [`KVSqlite`](KVSqlite.md)

Defined in: [packages/ai-tool-sqlite/src/sqlite-res.ts:48](https://github.com/isdk/ai-tool-sqlite.js/blob/a4b3467483e67b2e8245f2beb5bf1e93f3e0d974/src/sqlite-res.ts#L48)

***

### dbPath

> **dbPath**: `undefined` \| `string`

Defined in: [packages/ai-tool-sqlite/src/sqlite-res.ts:46](https://github.com/isdk/ai-tool-sqlite.js/blob/a4b3467483e67b2e8245f2beb5bf1e93f3e0d974/src/sqlite-res.ts#L46)

***

### defaultOptions

> **defaultOptions**: `object`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:74

The default options for export and assign

#### assign?

> `optional` **assign**: `IMergeOptions`

#### export?

> `optional` **export**: `IMergeOptions`

***

### fetchOptions?

> `optional` **fetchOptions**: `any`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:151

***

### initDir

> **initDir**: `undefined` \| `string`

Defined in: [packages/ai-tool-sqlite/src/sqlite-res.ts:47](https://github.com/isdk/ai-tool-sqlite.js/blob/a4b3467483e67b2e8245f2beb5bf1e93f3e0d974/src/sqlite-res.ts#L47)

***

### initingData

> **initingData**: `undefined` \| `boolean`

Defined in: [packages/ai-tool-sqlite/src/sqlite-res.ts:49](https://github.com/isdk/ai-tool-sqlite.js/blob/a4b3467483e67b2e8245f2beb5bf1e93f3e0d974/src/sqlite-res.ts#L49)

***

### isApi?

> `optional` **isApi**: `boolean`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:31

***

### methods

> **methods**: `string`[]

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:815

***

### name?

> `optional` **name**: `string`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:25

***

### nonExported1stChar

> **nonExported1stChar**: `string`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:78

the property with the default prefix '$' will not be exported.

***

### params

> **params**: `FuncParams`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:843

***

### result?

> `optional` **result**: `string`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:27

***

### scope?

> `optional` **scope**: `any`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:28

***

### setup()?

> `optional` **setup**: (`this`, `options`?) => `void`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:30

#### Parameters

##### this

`ToolFunc`

##### options?

`FuncItem`

#### Returns

`void`

***

### stream?

> `optional` **stream**: `boolean`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:32

***

### tags?

> `optional` **tags**: `string` \| `string`[]

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:29

***

### dataPath

> `static` **dataPath**: `string`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:53

***

### items

> `static` **items**: `Funcs`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:52

***

### SpecialRpcMethodNames

> `static` **SpecialRpcMethodNames**: `any`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:841

## Accessors

### SpecialRpcMethodNames

#### Get Signature

> **get** **SpecialRpcMethodNames**(): `any`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:820

##### Returns

`any`

***

### apiRoot

#### Get Signature

> **get** `static` **apiRoot**(): `undefined` \| `string`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:693

##### Returns

`undefined` \| `string`

## Methods

### $count()

> **$count**(`options`?): `number`

Defined in: [packages/ai-tool-sqlite/src/sqlite-res.ts:213](https://github.com/isdk/ai-tool-sqlite.js/blob/a4b3467483e67b2e8245f2beb5bf1e93f3e0d974/src/sqlite-res.ts#L213)

#### Parameters

##### options?

[`KVSqliteResFuncParams`](../interfaces/KVSqliteResFuncParams.md)

#### Returns

`number`

***

### $createCollection()

> **$createCollection**(`__namedParameters`): `boolean`

Defined in: [packages/ai-tool-sqlite/src/sqlite-res.ts:219](https://github.com/isdk/ai-tool-sqlite.js/blob/a4b3467483e67b2e8245f2beb5bf1e93f3e0d974/src/sqlite-res.ts#L219)

#### Parameters

##### \_\_namedParameters

[`KVSqliteResFuncParams`](../interfaces/KVSqliteResFuncParams.md)

#### Returns

`boolean`

***

### $deleteCollection()

> **$deleteCollection**(`__namedParameters`): `boolean`

Defined in: [packages/ai-tool-sqlite/src/sqlite-res.ts:230](https://github.com/isdk/ai-tool-sqlite.js/blob/a4b3467483e67b2e8245f2beb5bf1e93f3e0d974/src/sqlite-res.ts#L230)

#### Parameters

##### \_\_namedParameters

[`KVSqliteResFuncParams`](../interfaces/KVSqliteResFuncParams.md)

#### Returns

`boolean`

***

### $search()

> **$search**(`options`?): `T`[]

Defined in: [packages/ai-tool-sqlite/src/sqlite-res.ts:203](https://github.com/isdk/ai-tool-sqlite.js/blob/a4b3467483e67b2e8245f2beb5bf1e93f3e0d974/src/sqlite-res.ts#L203)

#### Parameters

##### options?

[`KVSqliteResFuncParams`](../interfaces/KVSqliteResFuncParams.md)

#### Returns

`T`[]

***

### $searchEx()

> **$searchEx**(`options`?): `T`[]

Defined in: [packages/ai-tool-sqlite/src/sqlite-res.ts:193](https://github.com/isdk/ai-tool-sqlite.js/blob/a4b3467483e67b2e8245f2beb5bf1e93f3e0d974/src/sqlite-res.ts#L193)

#### Parameters

##### options?

[`KVSqliteResFuncParams`](../interfaces/KVSqliteResFuncParams.md)

#### Returns

`T`[]

***

### arr2ObjParams()

> **arr2ObjParams**(`params`): `any`[]

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:72

#### Parameters

##### params

`any`[]

#### Returns

`any`[]

***

### assign()

> **assign**(`src`, `options`?): `this`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:106

Assign the values from the src object.

#### Parameters

##### src

`any`

the source object

##### options?

`IMergeOptions`

#### Returns

`this`

this object

***

### assignProperty()

> **assignProperty**(`src`, `name`, `value`, `attrs`?, `options`?): `void`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:117

Assign a property of src to this object.

#### Parameters

##### src

`any`

the src object

##### name

`string`

the property name to assign

##### value

`any`

the property value to assign

##### attrs?

`any`

the attributes object

##### options?

`IMergeOptions`

#### Returns

`void`

***

### assignPropertyTo()

> `abstract` **assignPropertyTo**(`dest`, `src`, `name`, `value`, `attrs`?, `options`?): `void`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:131

Assign the property value from the src to destination object.

#### Parameters

##### dest

`any`

The destination object

##### src

`any`

The src object

##### name

`string`

The property name

##### value

`any`

The property value

##### attrs?

`any`

The attributes object of the property

##### options?

`IMergeOptions`

#### Returns

`void`

***

### assignTo()

> **assignTo**(`dest`?, `options`?): `any`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:191

Assign this attributes to the dest object

#### Parameters

##### dest?

`any`

the destination object

##### options?

`IMergeOptions`

#### Returns

`any`

the dest object

***

### cast()

> **cast**(`key`, `value`): `any`

Defined in: [packages/ai-tool-sqlite/src/sqlite-res.ts:107](https://github.com/isdk/ai-tool-sqlite.js/blob/a4b3467483e67b2e8245f2beb5bf1e93f3e0d974/src/sqlite-res.ts#L107)

#### Parameters

##### key

`string`

##### value

`any`

#### Returns

`any`

***

### castParams()

> **castParams**(`params`): `RpcMethodsServerFuncParams`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:846

#### Parameters

##### params

`RpcMethodsServerFuncParams`

#### Returns

`RpcMethodsServerFuncParams`

***

### clone()

> **clone**(`options`?): `any`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:155

Create a new object with the same values of attributes.

#### Parameters

##### options?

`IMergeOptions`

#### Returns

`any`

the new object

***

### cloneTo()

> **cloneTo**(`dest`, `options`?): `any`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:148

Create and assign the values to the destination object.

#### Parameters

##### dest

`any`

the destination object

##### options?

`IMergeOptions`

#### Returns

`any`

the new dest object

***

### defineProperties()

> `abstract` **defineProperties**(`aProperties`): `any`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:89

Define the attributes of this object.

#### Parameters

##### aProperties

`SimplePropDescriptors`

the defined attributes of the object

#### Returns

`any`

***

### delete()

> **delete**(`options`): [`SqliteRunResult`](../interfaces/SqliteRunResult.md) \| [`SqliteRunResult`](../interfaces/SqliteRunResult.md)[]

Defined in: [packages/ai-tool-sqlite/src/sqlite-res.ts:176](https://github.com/isdk/ai-tool-sqlite.js/blob/a4b3467483e67b2e8245f2beb5bf1e93f3e0d974/src/sqlite-res.ts#L176)

#### Parameters

##### options

[`KVSqliteResFuncParams`](../interfaces/KVSqliteResFuncParams.md)

#### Returns

[`SqliteRunResult`](../interfaces/SqliteRunResult.md) \| [`SqliteRunResult`](../interfaces/SqliteRunResult.md)[]

***

### exportTo()

> **exportTo**(`dest`, `options`?): `any`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:173

Export attributes to the dest json object.

#### Parameters

##### dest

`any`

the destination object

##### options?

`IExportOptions`

#### Returns

`any`

the dest object.

***

### func()

> **func**(`params`): `any`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:826

#### Parameters

##### params

`RpcMethodsServerFuncParams`

#### Returns

`any`

***

### get()

> **get**(`options`): `T`

Defined in: [packages/ai-tool-sqlite/src/sqlite-res.ts:121](https://github.com/isdk/ai-tool-sqlite.js/blob/a4b3467483e67b2e8245f2beb5bf1e93f3e0d974/src/sqlite-res.ts#L121)

#### Parameters

##### options

[`KVSqliteResFuncParams`](../interfaces/KVSqliteResFuncParams.md)

#### Returns

`T`

***

### getDocsFromDir()

> **getDocsFromDir**(`dir`): `Promise`\<`any`[]\>

Defined in: [packages/ai-tool-sqlite/src/sqlite-res.ts:83](https://github.com/isdk/ai-tool-sqlite.js/blob/a4b3467483e67b2e8245f2beb5bf1e93f3e0d974/src/sqlite-res.ts#L83)

#### Parameters

##### dir

`string`

#### Returns

`Promise`\<`any`[]\>

***

### getFunc()

> **getFunc**(`name`?): `any`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:78

#### Parameters

##### name?

`string`

#### Returns

`any`

***

### getFuncWithPos()

> **getFuncWithPos**(`name`?): `any`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:83

#### Parameters

##### name?

`string`

#### Returns

`any`

***

### getMethodFromParams()

> **getMethodFromParams**(`params`): `undefined` \| `string`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:845

#### Parameters

##### params

`ResServerFuncParams`

#### Returns

`undefined` \| `string`

***

### getProperties()

> `abstract` **getProperties**(): `PropDescriptors`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:98

Get the defined attributes.

#### Returns

`PropDescriptors`

the descriptors of properties object

***

### hasAsyncFeature()

> **hasAsyncFeature**(`feature`): `boolean`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:84

#### Parameters

##### feature

`AsyncFeatureBits`

#### Returns

`boolean`

***

### hasOwnProperty()

> **hasOwnProperty**(`v`): `boolean`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:140

Determines whether an object has a property with the specified name.

#### Parameters

##### v

`PropertyKey`

A property name.

#### Returns

`boolean`

***

### initData()

> **initData**(`initDir`?, `collection`?): `Promise`\<`void`\>

Defined in: [packages/ai-tool-sqlite/src/sqlite-res.ts:66](https://github.com/isdk/ai-tool-sqlite.js/blob/a4b3467483e67b2e8245f2beb5bf1e93f3e0d974/src/sqlite-res.ts#L66)

#### Parameters

##### initDir?

`string`

##### collection?

`string`

#### Returns

`Promise`\<`void`\>

***

### initDataFromDir()

> **initDataFromDir**(`dir`, `collection`?): `Promise`\<`void`\>

Defined in: [packages/ai-tool-sqlite/src/sqlite-res.ts:75](https://github.com/isdk/ai-tool-sqlite.js/blob/a4b3467483e67b2e8245f2beb5bf1e93f3e0d974/src/sqlite-res.ts#L75)

#### Parameters

##### dir

`string`

##### collection?

`string`

#### Returns

`Promise`\<`void`\>

***

### initDB()

> **initDB**(`db`): `void`

Defined in: [packages/ai-tool-sqlite/src/sqlite-res.ts:42](https://github.com/isdk/ai-tool-sqlite.js/blob/a4b3467483e67b2e8245f2beb5bf1e93f3e0d974/src/sqlite-res.ts#L42)

#### Parameters

##### db

[`KVSqlite`](KVSqlite.md)

#### Returns

`void`

***

### initialize()

> **initialize**(`src`?): `this`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:139

Initialize object and assign attribute values from src if src exists.

#### Parameters

##### src?

`any`

#### Returns

`this`

this object.

***

### initRpcMethods()

> **initRpcMethods**(`methods`?): `void`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:821

#### Parameters

##### methods?

`string`[]

#### Returns

`void`

***

### isPrototypeOf()

> **isPrototypeOf**(`v`): `boolean`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:146

Determines whether an object exists in another object's prototype chain.

#### Parameters

##### v

`Object`

Another object whose prototype chain is to be checked.

#### Returns

`boolean`

***

### isSame()

> **isSame**(`src`, `options`?): `boolean`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:200

Check the src object whether “equals” this object.

#### Parameters

##### src

`any`

The source object

##### options?

`IMergeOptions`

#### Returns

`boolean`

***

### isStream()

> **isStream**(`params`): `undefined` \| `boolean`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:85

#### Parameters

##### params

`any`

#### Returns

`undefined` \| `boolean`

***

### list()

> **list**(`options`?): `T`[]

Defined in: [packages/ai-tool-sqlite/src/sqlite-res.ts:114](https://github.com/isdk/ai-tool-sqlite.js/blob/a4b3467483e67b2e8245f2beb5bf1e93f3e0d974/src/sqlite-res.ts#L114)

#### Parameters

##### options?

[`KVSqliteResFuncParams`](../interfaces/KVSqliteResFuncParams.md)

#### Returns

`T`[]

***

### mergeTo()

> **mergeTo**(`dest`, `options`?): `any`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:164

Merge this attributes to dest object.

#### Parameters

##### dest

`any`

The destination object

##### options?

`IMergeOptions`

#### Returns

`any`

the dest object.

***

### obj2ArrParams()

> **obj2ArrParams**(`params`?): `any`[]

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:73

#### Parameters

##### params?

`any`

#### Returns

`any`[]

***

### post()

> **post**(`model`): [`SqliteRunResult`](../interfaces/SqliteRunResult.md) \| [`SqliteRunResult`](../interfaces/SqliteRunResult.md)[] \| `Promise`\<[`SqliteRunResult`](../interfaces/SqliteRunResult.md) \| [`SqliteRunResult`](../interfaces/SqliteRunResult.md)[]\>

Defined in: [packages/ai-tool-sqlite/src/sqlite-res.ts:152](https://github.com/isdk/ai-tool-sqlite.js/blob/a4b3467483e67b2e8245f2beb5bf1e93f3e0d974/src/sqlite-res.ts#L152)

#### Parameters

##### model

[`KVSqliteResFuncParams`](../interfaces/KVSqliteResFuncParams.md)

#### Returns

[`SqliteRunResult`](../interfaces/SqliteRunResult.md) \| [`SqliteRunResult`](../interfaces/SqliteRunResult.md)[] \| `Promise`\<[`SqliteRunResult`](../interfaces/SqliteRunResult.md) \| [`SqliteRunResult`](../interfaces/SqliteRunResult.md)[]\>

***

### propertyIsEnumerable()

> **propertyIsEnumerable**(`v`): `boolean`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:152

Determines whether a specified property is enumerable.

#### Parameters

##### v

`PropertyKey`

A property name.

#### Returns

`boolean`

***

### put()

> **put**(`model`): [`SqliteRunResult`](../interfaces/SqliteRunResult.md) \| `Promise`\<[`SqliteRunResult`](../interfaces/SqliteRunResult.md)\>

Defined in: [packages/ai-tool-sqlite/src/sqlite-res.ts:134](https://github.com/isdk/ai-tool-sqlite.js/blob/a4b3467483e67b2e8245f2beb5bf1e93f3e0d974/src/sqlite-res.ts#L134)

#### Parameters

##### model

[`KVSqliteResFuncParams`](../interfaces/KVSqliteResFuncParams.md)

#### Returns

[`SqliteRunResult`](../interfaces/SqliteRunResult.md) \| `Promise`\<[`SqliteRunResult`](../interfaces/SqliteRunResult.md)\>

***

### register()

> **register**(): `boolean` \| `ToolFunc`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:70

#### Returns

`boolean` \| `ToolFunc`

***

### run()

> **run**(`params`?): `Promise`\<`any`\>

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:75

#### Parameters

##### params?

`any`

#### Returns

`Promise`\<`any`\>

***

### runAs()

> **runAs**(`name`, `params`?): `Promise`\<`any`\>

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:76

#### Parameters

##### name

`string`

##### params?

`any`

#### Returns

`Promise`\<`any`\>

***

### runAsSync()

> **runAsSync**(`name`, `params`?): `any`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:77

#### Parameters

##### name

`string`

##### params?

`any`

#### Returns

`any`

***

### runSync()

> **runSync**(`params`?): `any`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:74

#### Parameters

##### params?

`any`

#### Returns

`any`

***

### runWithPos()

> **runWithPos**(...`params`): `Promise`\<`any`\>

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:81

#### Parameters

##### params

...`any`[]

#### Returns

`Promise`\<`any`\>

***

### runWithPosAs()

> **runWithPosAs**(`name`, ...`params`): `Promise`\<`any`\>

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:82

#### Parameters

##### name

`string`

##### params

...`any`[]

#### Returns

`Promise`\<`any`\>

***

### runWithPosAsSync()

> **runWithPosAsSync**(`name`, ...`params`): `any`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:80

#### Parameters

##### name

`string`

##### params

...`any`[]

#### Returns

`any`

***

### runWithPosSync()

> **runWithPosSync**(...`params`): `any`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:79

#### Parameters

##### params

...`any`[]

#### Returns

`any`

***

### toJSON()

> **toJSON**(): `any`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:182

#### Returns

`any`

***

### toLocaleString()

> **toLocaleString**(): `string`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:131

Returns a date converted to a string using the current locale.

#### Returns

`string`

***

### toObject()

> **toObject**(`options`?): `any`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:181

Convert the attributes to the json object

#### Parameters

##### options?

`any`

#### Returns

`any`

the json object.

***

### toString()

> **toString**(): `string`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:128

Returns a string representation of an object.

#### Returns

`string`

***

### unregister()

> **unregister**(): `any`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:71

#### Returns

`any`

***

### updateDataFromDir()

> **updateDataFromDir**(`dir`, `collection`?): `Promise`\<`undefined` \| `number`\>

Defined in: [packages/ai-tool-sqlite/src/sqlite-res.ts:94](https://github.com/isdk/ai-tool-sqlite.js/blob/a4b3467483e67b2e8245f2beb5bf1e93f3e0d974/src/sqlite-res.ts#L94)

#### Parameters

##### dir

`undefined` | `string`

##### collection?

`string`

#### Returns

`Promise`\<`undefined` \| `number`\>

***

### valueOf()

> **valueOf**(): `Object`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:134

Returns the primitive value of the specified object.

#### Returns

`Object`

***

### assign()

#### Call Signature

> `static` **assign**\<`T`, `U`\>(`target`, `source`): `T` & `U`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:286

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

##### Type Parameters

• **T** *extends* `object`

• **U**

##### Parameters

###### target

`T`

The target object to copy to.

###### source

`U`

The source object from which to copy properties.

##### Returns

`T` & `U`

#### Call Signature

> `static` **assign**\<`T`, `U`, `V`\>(`target`, `source1`, `source2`): `T` & `U` & `V`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:295

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

##### Type Parameters

• **T** *extends* `object`

• **U**

• **V**

##### Parameters

###### target

`T`

The target object to copy to.

###### source1

`U`

The first source object from which to copy properties.

###### source2

`V`

The second source object from which to copy properties.

##### Returns

`T` & `U` & `V`

#### Call Signature

> `static` **assign**\<`T`, `U`, `V`, `W`\>(`target`, `source1`, `source2`, `source3`): `T` & `U` & `V` & `W`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:305

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

##### Type Parameters

• **T** *extends* `object`

• **U**

• **V**

• **W**

##### Parameters

###### target

`T`

The target object to copy to.

###### source1

`U`

The first source object from which to copy properties.

###### source2

`V`

The second source object from which to copy properties.

###### source3

`W`

The third source object from which to copy properties.

##### Returns

`T` & `U` & `V` & `W`

#### Call Signature

> `static` **assign**(`target`, ...`sources`): `any`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:313

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

##### Parameters

###### target

`object`

The target object to copy to.

###### sources

...`any`[]

One or more source objects from which to copy properties

##### Returns

`any`

***

### create()

#### Call Signature

> `static` **create**(`o`): `any`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:188

Creates an object that has the specified prototype or that has null prototype.

##### Parameters

###### o

Object to use as a prototype. May be null.

`null` | `object`

##### Returns

`any`

#### Call Signature

> `static` **create**(`o`, `properties`): `any`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:195

Creates an object that has the specified prototype, and that optionally contains specified properties.

##### Parameters

###### o

Object to use as a prototype. May be null

`null` | `object`

###### properties

`PropertyDescriptorMap` & `ThisType`\<`any`\>

JavaScript object that contains one or more property descriptors.

##### Returns

`any`

***

### defineProperties()

> `static` **defineProperties**(`aTarget`, `aProperties`, `recreate`?): `any`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/advance.d.ts:11

Adds one or more properties to an object, and/or modifies attributes of existing properties.

#### Parameters

##### aTarget

`any`

##### aProperties

`PropDescriptors`

##### recreate?

`boolean`

#### Returns

`any`

***

### defineProperty()

> `static` **defineProperty**\<`T`\>(`o`, `p`, `attributes`): `T`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:203

Adds a property to an object, or modifies attributes of an existing property.

#### Type Parameters

• **T**

#### Parameters

##### o

`T`

Object on which to add or modify the property. This can be a native JavaScript object (that is, a user-defined object or a built in object) or a DOM object.

##### p

`PropertyKey`

The property name.

##### attributes

`PropertyDescriptor` & `ThisType`\<`any`\>

Descriptor for the property. It can be for a data property or an accessor property.

#### Returns

`T`

***

### entries()

#### Call Signature

> `static` **entries**\<`T`\>(`o`): \[`string`, `T`\][]

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2017.object.d.ts:36

Returns an array of key/values of the enumerable own properties of an object

##### Type Parameters

• **T**

##### Parameters

###### o

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

\{\} | `ArrayLike`\<`T`\>

##### Returns

\[`string`, `T`\][]

#### Call Signature

> `static` **entries**(`o`): \[`string`, `any`\][]

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2017.object.d.ts:42

Returns an array of key/values of the enumerable own properties of an object

##### Parameters

###### o

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

\[`string`, `any`\][]

***

### freeze()

#### Call Signature

> `static` **freeze**\<`T`\>(`f`): `T`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:222

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

##### Type Parameters

• **T** *extends* `Function`

##### Parameters

###### f

`T`

Object on which to lock the attributes.

##### Returns

`T`

#### Call Signature

> `static` **freeze**\<`T`, `U`\>(`o`): `Readonly`\<`T`\>

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:228

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

##### Type Parameters

• **T** *extends* `object`

• **U** *extends* `string` \| `number` \| `bigint` \| `boolean` \| `symbol`

##### Parameters

###### o

`T`

Object on which to lock the attributes.

##### Returns

`Readonly`\<`T`\>

#### Call Signature

> `static` **freeze**\<`T`\>(`o`): `Readonly`\<`T`\>

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:234

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

##### Type Parameters

• **T**

##### Parameters

###### o

`T`

Object on which to lock the attributes.

##### Returns

`Readonly`\<`T`\>

***

### fromEntries()

#### Call Signature

> `static` **fromEntries**\<`T`\>(`entries`): `object`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2019.object.d.ts:26

Returns an object created by key-value entries for properties and methods

##### Type Parameters

• **T** = `any`

##### Parameters

###### entries

`Iterable`\<readonly \[`PropertyKey`, `T`\]\>

An iterable object that contains key-value entries for properties and methods.

##### Returns

`object`

#### Call Signature

> `static` **fromEntries**(`entries`): `any`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2019.object.d.ts:32

Returns an object created by key-value entries for properties and methods

##### Parameters

###### entries

`Iterable`\<readonly `any`[]\>

An iterable object that contains key-value entries for properties and methods.

##### Returns

`any`

***

### get()

> `static` **get**(`name`): `ToolFunc`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:54

#### Parameters

##### name

`string`

#### Returns

`ToolFunc`

***

### getAllByTag()

> `static` **getAllByTag**(`tagName`): `ToolFunc`[]

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:57

#### Parameters

##### tagName

`string`

#### Returns

`ToolFunc`[]

***

### getByTag()

> `static` **getByTag**(`tagName`): `undefined` \| `ToolFunc`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:56

#### Parameters

##### tagName

`string`

#### Returns

`undefined` \| `ToolFunc`

***

### getFunc()

> `static` **getFunc**(`name`): `any`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:61

#### Parameters

##### name

`string`

#### Returns

`any`

***

### getFuncWithPos()

> `static` **getFuncWithPos**(`name`): `any`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:64

#### Parameters

##### name

`string`

#### Returns

`any`

***

### getOwnPropertyDescriptor()

> `static` **getOwnPropertyDescriptor**(`o`, `p`): `undefined` \| `PropertyDescriptor`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:175

Gets the own property descriptor of the specified object.
An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype.

#### Parameters

##### o

`any`

Object that contains the property.

##### p

`PropertyKey`

Name of the property.

#### Returns

`undefined` \| `PropertyDescriptor`

***

### getOwnPropertyDescriptors()

> `static` **getOwnPropertyDescriptors**\<`T`\>(`o`): \{ \[P in string \| number \| symbol\]: TypedPropertyDescriptor\<T\[P\]\> \} & `object`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2017.object.d.ts:48

Returns an object containing all own property descriptors of an object

#### Type Parameters

• **T**

#### Parameters

##### o

`T`

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

#### Returns

\{ \[P in string \| number \| symbol\]: TypedPropertyDescriptor\<T\[P\]\> \} & `object`

***

### getOwnPropertyNames()

> `static` **getOwnPropertyNames**(`o`): `string`[]

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:182

Returns the names of the own properties of an object. The own properties of an object are those that are defined directly
on that object, and are not inherited from the object's prototype. The properties of an object include both fields (objects) and functions.

#### Parameters

##### o

`any`

Object that contains the own properties.

#### Returns

`string`[]

***

### getOwnPropertySymbols()

> `static` **getOwnPropertySymbols**(`o`): `symbol`[]

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:319

Returns an array of all symbol properties found directly on object o.

#### Parameters

##### o

`any`

Object to retrieve the symbols from.

#### Returns

`symbol`[]

***

### getProperties()

> `static` **getProperties**(): `PropDescriptors`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/advance.d.ts:10

get all properties descriptor include inherited.

#### Returns

`PropDescriptors`

***

### getPrototypeOf()

> `static` **getPrototypeOf**(`o`): `any`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:167

Returns the prototype of an object.

#### Parameters

##### o

`any`

The object that references the prototype.

#### Returns

`any`

***

### hasAsyncFeature()

> `static` **hasAsyncFeature**(`feature`): `boolean`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:58

#### Parameters

##### feature

`AsyncFeatureBits`

#### Returns

`boolean`

***

### is()

> `static` **is**(`value1`, `value2`): `boolean`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:332

Returns true if the values are the same value, false otherwise.

#### Parameters

##### value1

`any`

The first value.

##### value2

`any`

The second value.

#### Returns

`boolean`

***

### isExtensible()

> `static` **isExtensible**(`o`): `boolean`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:258

Returns a value that indicates whether new properties can be added to an object.

#### Parameters

##### o

`any`

Object to test.

#### Returns

`boolean`

***

### isFrozen()

> `static` **isFrozen**(`o`): `boolean`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:252

Returns true if existing property attributes and values cannot be modified in an object, and new properties cannot be added to the object.

#### Parameters

##### o

`any`

Object to test.

#### Returns

`boolean`

***

### isSealed()

> `static` **isSealed**(`o`): `boolean`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:246

Returns true if existing property attributes cannot be modified in an object and new properties cannot be added to the object.

#### Parameters

##### o

`any`

Object to test.

#### Returns

`boolean`

***

### keys()

#### Call Signature

> `static` **keys**(`o`): `string`[]

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:264

Returns the names of the enumerable string properties and methods of an object.

##### Parameters

###### o

`object`

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

`string`[]

#### Call Signature

> `static` **keys**(`o`): `string`[]

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:325

Returns the names of the enumerable string properties and methods of an object.

##### Parameters

###### o

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

`string`[]

***

### list()

> `static` **list**(): `Funcs`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:55

#### Returns

`Funcs`

***

### preventExtensions()

> `static` **preventExtensions**\<`T`\>(`o`): `T`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:240

Prevents the addition of new properties to an object.

#### Type Parameters

• **T**

#### Parameters

##### o

`T`

Object to make non-extensible.

#### Returns

`T`

***

### register()

#### Call Signature

> `static` **register**(`name`, `options`): `boolean` \| `ToolFunc`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:65

##### Parameters

###### name

`string`

###### options

`FuncItem`

##### Returns

`boolean` \| `ToolFunc`

#### Call Signature

> `static` **register**(`func`, `options`): `boolean` \| `ToolFunc`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:66

##### Parameters

###### func

`Function`

###### options

`FuncItem`

##### Returns

`boolean` \| `ToolFunc`

#### Call Signature

> `static` **register**(`name`, `options`?): `boolean` \| `ToolFunc`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:67

##### Parameters

###### name

`string` | `Function` | `ToolFunc` | `FuncItem`

###### options?

`FuncItem`

##### Returns

`boolean` \| `ToolFunc`

***

### run()

> `static` **run**(`name`, `params`?): `Promise`\<`any`\>

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:59

#### Parameters

##### name

`string`

##### params?

`any`

#### Returns

`Promise`\<`any`\>

***

### runSync()

> `static` **runSync**(`name`, `params`?): `any`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:60

#### Parameters

##### name

`string`

##### params?

`any`

#### Returns

`any`

***

### runWithPos()

> `static` **runWithPos**(`name`, ...`params`): `Promise`\<`any`\>

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:62

#### Parameters

##### name

`string`

##### params

...`any`[]

#### Returns

`Promise`\<`any`\>

***

### runWithPosSync()

> `static` **runWithPosSync**(`name`, ...`params`): `any`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:63

#### Parameters

##### name

`string`

##### params

...`any`[]

#### Returns

`any`

***

### seal()

> `static` **seal**\<`T`\>(`o`): `T`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:216

Prevents the modification of attributes of existing properties, and prevents the addition of new properties.

#### Type Parameters

• **T**

#### Parameters

##### o

`T`

Object on which to lock the attributes.

#### Returns

`T`

***

### setApiRoot()

> `static` **setApiRoot**(`v`): `void`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:694

#### Parameters

##### v

`string`

#### Returns

`void`

***

### setPrototypeOf()

> `static` **setPrototypeOf**(`o`, `proto`): `any`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:339

Sets the prototype of a specified object o to object proto or null. Returns the object o.

#### Parameters

##### o

`any`

The object to change its prototype.

##### proto

The value of the new prototype or null.

`null` | `object`

#### Returns

`any`

***

### toJSON()

> `static` **toJSON**(): `object`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:695

#### Returns

`object`

***

### unregister()

> `static` **unregister**(`name`): `undefined` \| `ToolFunc`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:68

#### Parameters

##### name

`string`

#### Returns

`undefined` \| `ToolFunc`

***

### values()

#### Call Signature

> `static` **values**\<`T`\>(`o`): `T`[]

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2017.object.d.ts:24

Returns an array of values of the enumerable own properties of an object

##### Type Parameters

• **T**

##### Parameters

###### o

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

\{\} | `ArrayLike`\<`T`\>

##### Returns

`T`[]

#### Call Signature

> `static` **values**(`o`): `any`[]

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2017.object.d.ts:30

Returns an array of values of the enumerable own properties of an object

##### Parameters

###### o

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

`any`[]
