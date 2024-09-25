[**@isdk/ai-tool-sqlite**](../README.md) • **Docs**

***

[@isdk/ai-tool-sqlite](../globals.md) / KVSqliteResFunc

# Class: KVSqliteResFunc\<T\>

## Extends

- `ResServerTools`

## Type Parameters

• **T** *extends* [`KVSqliteResFuncParams`](../interfaces/KVSqliteResFuncParams.md) = [`KVSqliteResFuncParams`](../interfaces/KVSqliteResFuncParams.md)

## Constructors

### new KVSqliteResFunc()

> **new KVSqliteResFunc**\<`T`\>(`name`, `options`): [`KVSqliteResFunc`](KVSqliteResFunc.md)\<`T`\>

#### Parameters

• **name**: `string` \| `Function` \| `FuncItem`

• **options**: `any` = `{}`

#### Returns

[`KVSqliteResFunc`](KVSqliteResFunc.md)\<`T`\>

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:51](https://github.com/isdk/ai-tool-sqlite.js/blob/e3c1ff8a73c1e23a76a3ce2a388503307056f314/src/sqlite-res.ts#L51)

## Properties

### $attributes

> **$attributes**: `Properties`

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/advance.d.ts:5

***

### action

> **action**: `"list"` \| `"get"` \| `"put"` \| `"post"` \| `"delete"` \| `"patch"` \| `"res"`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:431

***

### allowExportFunc?

> `optional` **allowExportFunc**: `boolean`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:276

***

### apiRoot?

> `optional` **apiRoot**: `string`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:160

***

### constructor

> **constructor**: `Function`

The initial value of Object.prototype.constructor is the standard built-in Object constructor.

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:125

***

### db

> **db**: [`KVSqlite`](KVSqlite.md)

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:48](https://github.com/isdk/ai-tool-sqlite.js/blob/e3c1ff8a73c1e23a76a3ce2a388503307056f314/src/sqlite-res.ts#L48)

***

### dbPath

> **dbPath**: `undefined` \| `string`

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:46](https://github.com/isdk/ai-tool-sqlite.js/blob/e3c1ff8a73c1e23a76a3ce2a388503307056f314/src/sqlite-res.ts#L46)

***

### defaultOptions

> **defaultOptions**: `object`

The default options for export and assign

#### assign?

> `optional` **assign**: `IMergeOptions`

#### export?

> `optional` **export**: `IMergeOptions`

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:74

***

### fetchOptions?

> `optional` **fetchOptions**: `any`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:162

***

### initDir

> **initDir**: `undefined` \| `string`

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:47](https://github.com/isdk/ai-tool-sqlite.js/blob/e3c1ff8a73c1e23a76a3ce2a388503307056f314/src/sqlite-res.ts#L47)

***

### initingData

> **initingData**: `undefined` \| `boolean`

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:49](https://github.com/isdk/ai-tool-sqlite.js/blob/e3c1ff8a73c1e23a76a3ce2a388503307056f314/src/sqlite-res.ts#L49)

***

### isApi?

> `optional` **isApi**: `boolean`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:42

***

### methods

> **methods**: `string`[]

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:404

***

### name?

> `optional` **name**: `string`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:36

***

### nonExported1stChar

> **nonExported1stChar**: `string`

the property with the default prefix '$' will not be exported.

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:78

***

### params

> **params**: `FuncParams`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:432

***

### result?

> `optional` **result**: `string`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:38

***

### scope?

> `optional` **scope**: `any`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:39

***

### setup()?

> `optional` **setup**: (`this`, `options`?) => `void`

#### Parameters

• **this**: `ToolFunc`

• **options?**: `FuncItem`

#### Returns

`void`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:41

***

### stream?

> `optional` **stream**: `boolean`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:43

***

### tags?

> `optional` **tags**: `string` \| `string`[]

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:40

***

### dataPath

> `static` **dataPath**: `string`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:64

***

### items

> `static` **items**: `Funcs`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:63

***

### SpecialRpcMethodNames

> `static` **SpecialRpcMethodNames**: `any`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:430

## Accessors

### SpecialRpcMethodNames

> `get` **SpecialRpcMethodNames**(): `any`

#### Returns

`any`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:409

***

### apiRoot

> `get` `static` **apiRoot**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:283

## Methods

### $count()

> **$count**(`options`?): `number`

#### Parameters

• **options?**: [`KVSqliteResFuncParams`](../interfaces/KVSqliteResFuncParams.md)

#### Returns

`number`

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:213](https://github.com/isdk/ai-tool-sqlite.js/blob/e3c1ff8a73c1e23a76a3ce2a388503307056f314/src/sqlite-res.ts#L213)

***

### $createCollection()

> **$createCollection**(`__namedParameters`): `boolean`

#### Parameters

• **\_\_namedParameters**: [`KVSqliteResFuncParams`](../interfaces/KVSqliteResFuncParams.md)

#### Returns

`boolean`

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:219](https://github.com/isdk/ai-tool-sqlite.js/blob/e3c1ff8a73c1e23a76a3ce2a388503307056f314/src/sqlite-res.ts#L219)

***

### $deleteCollection()

> **$deleteCollection**(`__namedParameters`): `boolean`

#### Parameters

• **\_\_namedParameters**: [`KVSqliteResFuncParams`](../interfaces/KVSqliteResFuncParams.md)

#### Returns

`boolean`

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:230](https://github.com/isdk/ai-tool-sqlite.js/blob/e3c1ff8a73c1e23a76a3ce2a388503307056f314/src/sqlite-res.ts#L230)

***

### $search()

> **$search**(`options`?): `T`[]

#### Parameters

• **options?**: [`KVSqliteResFuncParams`](../interfaces/KVSqliteResFuncParams.md)

#### Returns

`T`[]

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:203](https://github.com/isdk/ai-tool-sqlite.js/blob/e3c1ff8a73c1e23a76a3ce2a388503307056f314/src/sqlite-res.ts#L203)

***

### $searchEx()

> **$searchEx**(`options`?): `T`[]

#### Parameters

• **options?**: [`KVSqliteResFuncParams`](../interfaces/KVSqliteResFuncParams.md)

#### Returns

`T`[]

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:193](https://github.com/isdk/ai-tool-sqlite.js/blob/e3c1ff8a73c1e23a76a3ce2a388503307056f314/src/sqlite-res.ts#L193)

***

### arr2ObjParams()

> **arr2ObjParams**(`params`): `any`[]

#### Parameters

• **params**: `any`[]

#### Returns

`any`[]

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:83

***

### assign()

> **assign**(`src`, `options`?): `this`

Assign the values from the src object.

#### Parameters

• **src**: `any`

the source object

• **options?**: `IMergeOptions`

#### Returns

`this`

this object

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:106

***

### assignProperty()

> **assignProperty**(`src`, `name`, `value`, `attrs`?, `options`?): `void`

Assign a property of src to this object.

#### Parameters

• **src**: `any`

the src object

• **name**: `string`

the property name to assign

• **value**: `any`

the property value to assign

• **attrs?**: `any`

the attributes object

• **options?**: `IMergeOptions`

#### Returns

`void`

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:117

***

### assignPropertyTo()

> `abstract` **assignPropertyTo**(`dest`, `src`, `name`, `value`, `attrs`?, `options`?): `void`

Assign the property value from the src to destination object.

#### Parameters

• **dest**: `any`

The destination object

• **src**: `any`

The src object

• **name**: `string`

The property name

• **value**: `any`

The property value

• **attrs?**: `any`

The attributes object of the property

• **options?**: `IMergeOptions`

#### Returns

`void`

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:131

***

### assignTo()

> **assignTo**(`dest`?, `options`?): `any`

Assign this attributes to the dest object

#### Parameters

• **dest?**: `any`

the destination object

• **options?**: `IMergeOptions`

#### Returns

`any`

the dest object

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:191

***

### cast()

> **cast**(`key`, `value`): `any`

#### Parameters

• **key**: `string`

• **value**: `any`

#### Returns

`any`

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:107](https://github.com/isdk/ai-tool-sqlite.js/blob/e3c1ff8a73c1e23a76a3ce2a388503307056f314/src/sqlite-res.ts#L107)

***

### castParams()

> **castParams**(`params`): `RpcMethodsServerFuncParams`

#### Parameters

• **params**: `RpcMethodsServerFuncParams`

#### Returns

`RpcMethodsServerFuncParams`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:435

***

### clone()

> **clone**(`options`?): `any`

Create a new object with the same values of attributes.

#### Parameters

• **options?**: `IMergeOptions`

#### Returns

`any`

the new object

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:155

***

### cloneTo()

> **cloneTo**(`dest`, `options`?): `any`

Create and assign the values to the destination object.

#### Parameters

• **dest**: `any`

the destination object

• **options?**: `IMergeOptions`

#### Returns

`any`

the new dest object

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:148

***

### defineProperties()

> `abstract` **defineProperties**(`aProperties`): `any`

Define the attributes of this object.

#### Parameters

• **aProperties**: `SimplePropDescriptors`

the defined attributes of the object

#### Returns

`any`

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:89

***

### delete()

> **delete**(`options`): [`SqliteRunResult`](../interfaces/SqliteRunResult.md) \| [`SqliteRunResult`](../interfaces/SqliteRunResult.md)[]

#### Parameters

• **options**: [`KVSqliteResFuncParams`](../interfaces/KVSqliteResFuncParams.md)

#### Returns

[`SqliteRunResult`](../interfaces/SqliteRunResult.md) \| [`SqliteRunResult`](../interfaces/SqliteRunResult.md)[]

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:176](https://github.com/isdk/ai-tool-sqlite.js/blob/e3c1ff8a73c1e23a76a3ce2a388503307056f314/src/sqlite-res.ts#L176)

***

### exportTo()

> **exportTo**(`dest`, `options`?): `any`

Export attributes to the dest json object.

#### Parameters

• **dest**: `any`

the destination object

• **options?**: `IExportOptions`

#### Returns

`any`

the dest object.

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:173

***

### func()

> **func**(`params`): `any`

#### Parameters

• **params**: `RpcMethodsServerFuncParams`

#### Returns

`any`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:415

***

### get()

> **get**(`options`): `T`

#### Parameters

• **options**: [`KVSqliteResFuncParams`](../interfaces/KVSqliteResFuncParams.md)

#### Returns

`T`

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:121](https://github.com/isdk/ai-tool-sqlite.js/blob/e3c1ff8a73c1e23a76a3ce2a388503307056f314/src/sqlite-res.ts#L121)

***

### getDocsFromDir()

> **getDocsFromDir**(`dir`): `Promise`\<`any`[]\>

#### Parameters

• **dir**: `string`

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:83](https://github.com/isdk/ai-tool-sqlite.js/blob/e3c1ff8a73c1e23a76a3ce2a388503307056f314/src/sqlite-res.ts#L83)

***

### getFunc()

> **getFunc**(`name`?): `any`

#### Parameters

• **name?**: `string`

#### Returns

`any`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:89

***

### getFuncWithPos()

> **getFuncWithPos**(`name`?): `any`

#### Parameters

• **name?**: `string`

#### Returns

`any`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:94

***

### getMethodFromParams()

> **getMethodFromParams**(`params`): `undefined` \| `string`

#### Parameters

• **params**: `ResServerFuncParams`

#### Returns

`undefined` \| `string`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:434

***

### getProperties()

> `abstract` **getProperties**(): `PropDescriptors`

Get the defined attributes.

#### Returns

`PropDescriptors`

the descriptors of properties object

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:98

***

### hasAsyncFeature()

> **hasAsyncFeature**(`feature`): `boolean`

#### Parameters

• **feature**: `AsyncFeatureBits`

#### Returns

`boolean`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:95

***

### hasOwnProperty()

> **hasOwnProperty**(`v`): `boolean`

Determines whether an object has a property with the specified name.

#### Parameters

• **v**: `PropertyKey`

A property name.

#### Returns

`boolean`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:140

***

### initData()

> **initData**(`initDir`?, `collection`?): `Promise`\<`void`\>

#### Parameters

• **initDir?**: `string`

• **collection?**: `string`

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:66](https://github.com/isdk/ai-tool-sqlite.js/blob/e3c1ff8a73c1e23a76a3ce2a388503307056f314/src/sqlite-res.ts#L66)

***

### initDataFromDir()

> **initDataFromDir**(`dir`, `collection`?): `Promise`\<`void`\>

#### Parameters

• **dir**: `string`

• **collection?**: `string`

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:75](https://github.com/isdk/ai-tool-sqlite.js/blob/e3c1ff8a73c1e23a76a3ce2a388503307056f314/src/sqlite-res.ts#L75)

***

### initDB()

> **initDB**(`db`): `void`

#### Parameters

• **db**: [`KVSqlite`](KVSqlite.md)

#### Returns

`void`

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:42](https://github.com/isdk/ai-tool-sqlite.js/blob/e3c1ff8a73c1e23a76a3ce2a388503307056f314/src/sqlite-res.ts#L42)

***

### initialize()

> **initialize**(`src`?): `this`

Initialize object and assign attribute values from src if src exists.

#### Parameters

• **src?**: `any`

#### Returns

`this`

this object.

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:139

***

### initRpcMethods()

> **initRpcMethods**(`methods`?): `void`

#### Parameters

• **methods?**: `string`[]

#### Returns

`void`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:410

***

### isPrototypeOf()

> **isPrototypeOf**(`v`): `boolean`

Determines whether an object exists in another object's prototype chain.

#### Parameters

• **v**: `Object`

Another object whose prototype chain is to be checked.

#### Returns

`boolean`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:146

***

### isSame()

> **isSame**(`src`, `options`?): `boolean`

Check the src object whether “equals” this object.

#### Parameters

• **src**: `any`

The source object

• **options?**: `IMergeOptions`

#### Returns

`boolean`

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:200

***

### isStream()

> **isStream**(`params`): `undefined` \| `boolean`

#### Parameters

• **params**: `any`

#### Returns

`undefined` \| `boolean`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:96

***

### list()

> **list**(`options`?): `T`[]

#### Parameters

• **options?**: [`KVSqliteResFuncParams`](../interfaces/KVSqliteResFuncParams.md)

#### Returns

`T`[]

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:114](https://github.com/isdk/ai-tool-sqlite.js/blob/e3c1ff8a73c1e23a76a3ce2a388503307056f314/src/sqlite-res.ts#L114)

***

### mergeTo()

> **mergeTo**(`dest`, `options`?): `any`

Merge this attributes to dest object.

#### Parameters

• **dest**: `any`

The destination object

• **options?**: `IMergeOptions`

#### Returns

`any`

the dest object.

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:164

***

### obj2ArrParams()

> **obj2ArrParams**(`params`?): `any`[]

#### Parameters

• **params?**: `any`

#### Returns

`any`[]

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:84

***

### post()

> **post**(`model`): [`SqliteRunResult`](../interfaces/SqliteRunResult.md) \| [`SqliteRunResult`](../interfaces/SqliteRunResult.md)[] \| `Promise`\<[`SqliteRunResult`](../interfaces/SqliteRunResult.md) \| [`SqliteRunResult`](../interfaces/SqliteRunResult.md)[]\>

#### Parameters

• **model**: [`KVSqliteResFuncParams`](../interfaces/KVSqliteResFuncParams.md)

#### Returns

[`SqliteRunResult`](../interfaces/SqliteRunResult.md) \| [`SqliteRunResult`](../interfaces/SqliteRunResult.md)[] \| `Promise`\<[`SqliteRunResult`](../interfaces/SqliteRunResult.md) \| [`SqliteRunResult`](../interfaces/SqliteRunResult.md)[]\>

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:152](https://github.com/isdk/ai-tool-sqlite.js/blob/e3c1ff8a73c1e23a76a3ce2a388503307056f314/src/sqlite-res.ts#L152)

***

### propertyIsEnumerable()

> **propertyIsEnumerable**(`v`): `boolean`

Determines whether a specified property is enumerable.

#### Parameters

• **v**: `PropertyKey`

A property name.

#### Returns

`boolean`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:152

***

### put()

> **put**(`model`): [`SqliteRunResult`](../interfaces/SqliteRunResult.md) \| `Promise`\<[`SqliteRunResult`](../interfaces/SqliteRunResult.md)\>

#### Parameters

• **model**: [`KVSqliteResFuncParams`](../interfaces/KVSqliteResFuncParams.md)

#### Returns

[`SqliteRunResult`](../interfaces/SqliteRunResult.md) \| `Promise`\<[`SqliteRunResult`](../interfaces/SqliteRunResult.md)\>

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:134](https://github.com/isdk/ai-tool-sqlite.js/blob/e3c1ff8a73c1e23a76a3ce2a388503307056f314/src/sqlite-res.ts#L134)

***

### register()

> **register**(): `boolean` \| `ToolFunc`

#### Returns

`boolean` \| `ToolFunc`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:81

***

### run()

> **run**(`params`?): `Promise`\<`any`\>

#### Parameters

• **params?**: `any`

#### Returns

`Promise`\<`any`\>

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:86

***

### runAs()

> **runAs**(`name`, `params`?): `Promise`\<`any`\>

#### Parameters

• **name**: `string`

• **params?**: `any`

#### Returns

`Promise`\<`any`\>

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:87

***

### runAsSync()

> **runAsSync**(`name`, `params`?): `any`

#### Parameters

• **name**: `string`

• **params?**: `any`

#### Returns

`any`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:88

***

### runSync()

> **runSync**(`params`?): `any`

#### Parameters

• **params?**: `any`

#### Returns

`any`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:85

***

### runWithPos()

> **runWithPos**(...`params`): `Promise`\<`any`\>

#### Parameters

• ...**params**: `any`[]

#### Returns

`Promise`\<`any`\>

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:92

***

### runWithPosAs()

> **runWithPosAs**(`name`, ...`params`): `Promise`\<`any`\>

#### Parameters

• **name**: `string`

• ...**params**: `any`[]

#### Returns

`Promise`\<`any`\>

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:93

***

### runWithPosAsSync()

> **runWithPosAsSync**(`name`, ...`params`): `any`

#### Parameters

• **name**: `string`

• ...**params**: `any`[]

#### Returns

`any`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:91

***

### runWithPosSync()

> **runWithPosSync**(...`params`): `any`

#### Parameters

• ...**params**: `any`[]

#### Returns

`any`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:90

***

### toJSON()

> **toJSON**(): `any`

#### Returns

`any`

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:182

***

### toLocaleString()

> **toLocaleString**(): `string`

Returns a date converted to a string using the current locale.

#### Returns

`string`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:131

***

### toObject()

> **toObject**(`options`?): `any`

Convert the attributes to the json object

#### Parameters

• **options?**: `any`

#### Returns

`any`

the json object.

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:181

***

### toString()

> **toString**(): `string`

Returns a string representation of an object.

#### Returns

`string`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:128

***

### unregister()

> **unregister**(): `any`

#### Returns

`any`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:82

***

### updateDataFromDir()

> **updateDataFromDir**(`dir`, `collection`?): `Promise`\<`undefined` \| `number`\>

#### Parameters

• **dir**: `undefined` \| `string` = `...`

• **collection?**: `string`

#### Returns

`Promise`\<`undefined` \| `number`\>

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:94](https://github.com/isdk/ai-tool-sqlite.js/blob/e3c1ff8a73c1e23a76a3ce2a388503307056f314/src/sqlite-res.ts#L94)

***

### valueOf()

> **valueOf**(): `Object`

Returns the primitive value of the specified object.

#### Returns

`Object`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:134

***

### assign()

#### assign(target, source)

> `static` **assign**\<`T`, `U`\>(`target`, `source`): `T` & `U`

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

##### Type Parameters

• **T** *extends* `object`

• **U**

##### Parameters

• **target**: `T`

The target object to copy to.

• **source**: `U`

The source object from which to copy properties.

##### Returns

`T` & `U`

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2015.core.d.ts:286

#### assign(target, source1, source2)

> `static` **assign**\<`T`, `U`, `V`\>(`target`, `source1`, `source2`): `T` & `U` & `V`

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

##### Type Parameters

• **T** *extends* `object`

• **U**

• **V**

##### Parameters

• **target**: `T`

The target object to copy to.

• **source1**: `U`

The first source object from which to copy properties.

• **source2**: `V`

The second source object from which to copy properties.

##### Returns

`T` & `U` & `V`

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2015.core.d.ts:295

#### assign(target, source1, source2, source3)

> `static` **assign**\<`T`, `U`, `V`, `W`\>(`target`, `source1`, `source2`, `source3`): `T` & `U` & `V` & `W`

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

##### Type Parameters

• **T** *extends* `object`

• **U**

• **V**

• **W**

##### Parameters

• **target**: `T`

The target object to copy to.

• **source1**: `U`

The first source object from which to copy properties.

• **source2**: `V`

The second source object from which to copy properties.

• **source3**: `W`

The third source object from which to copy properties.

##### Returns

`T` & `U` & `V` & `W`

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2015.core.d.ts:305

#### assign(target, sources)

> `static` **assign**(`target`, ...`sources`): `any`

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

##### Parameters

• **target**: `object`

The target object to copy to.

• ...**sources**: `any`[]

One or more source objects from which to copy properties

##### Returns

`any`

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2015.core.d.ts:313

***

### create()

#### create(o)

> `static` **create**(`o`): `any`

Creates an object that has the specified prototype or that has null prototype.

##### Parameters

• **o**: `null` \| `object`

Object to use as a prototype. May be null.

##### Returns

`any`

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:188

#### create(o, properties)

> `static` **create**(`o`, `properties`): `any`

Creates an object that has the specified prototype, and that optionally contains specified properties.

##### Parameters

• **o**: `null` \| `object`

Object to use as a prototype. May be null

• **properties**: `PropertyDescriptorMap` & `ThisType`\<`any`\>

JavaScript object that contains one or more property descriptors.

##### Returns

`any`

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:195

***

### defineProperties()

> `static` **defineProperties**(`aTarget`, `aProperties`, `recreate`?): `any`

Adds one or more properties to an object, and/or modifies attributes of existing properties.

#### Parameters

• **aTarget**: `any`

• **aProperties**: `PropDescriptors`

• **recreate?**: `boolean`

#### Returns

`any`

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/advance.d.ts:11

***

### defineProperty()

> `static` **defineProperty**\<`T`\>(`o`, `p`, `attributes`): `T`

Adds a property to an object, or modifies attributes of an existing property.

#### Type Parameters

• **T**

#### Parameters

• **o**: `T`

Object on which to add or modify the property. This can be a native JavaScript object (that is, a user-defined object or a built in object) or a DOM object.

• **p**: `PropertyKey`

The property name.

• **attributes**: `PropertyDescriptor` & `ThisType`\<`any`\>

Descriptor for the property. It can be for a data property or an accessor property.

#### Returns

`T`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:203

***

### entries()

#### entries(o)

> `static` **entries**\<`T`\>(`o`): [`string`, `T`][]

Returns an array of key/values of the enumerable own properties of an object

##### Type Parameters

• **T**

##### Parameters

• **o**: `object` \| `ArrayLike`\<`T`\>

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

[`string`, `T`][]

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2017.object.d.ts:36

#### entries(o)

> `static` **entries**(`o`): [`string`, `any`][]

Returns an array of key/values of the enumerable own properties of an object

##### Parameters

• **o**

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

[`string`, `any`][]

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2017.object.d.ts:42

***

### freeze()

#### freeze(f)

> `static` **freeze**\<`T`\>(`f`): `T`

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

##### Type Parameters

• **T** *extends* `Function`

##### Parameters

• **f**: `T`

Object on which to lock the attributes.

##### Returns

`T`

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:222

#### freeze(o)

> `static` **freeze**\<`T`, `U`\>(`o`): `Readonly`\<`T`\>

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

##### Type Parameters

• **T** *extends* `object`

• **U** *extends* `string` \| `number` \| `bigint` \| `boolean` \| `symbol`

##### Parameters

• **o**: `T`

Object on which to lock the attributes.

##### Returns

`Readonly`\<`T`\>

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:228

#### freeze(o)

> `static` **freeze**\<`T`\>(`o`): `Readonly`\<`T`\>

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

##### Type Parameters

• **T**

##### Parameters

• **o**: `T`

Object on which to lock the attributes.

##### Returns

`Readonly`\<`T`\>

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:234

***

### fromEntries()

#### fromEntries(entries)

> `static` **fromEntries**\<`T`\>(`entries`): `object`

Returns an object created by key-value entries for properties and methods

##### Type Parameters

• **T** = `any`

##### Parameters

• **entries**: `Iterable`\<readonly [`PropertyKey`, `T`], `any`, `any`\>

An iterable object that contains key-value entries for properties and methods.

##### Returns

`object`

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2019.object.d.ts:26

#### fromEntries(entries)

> `static` **fromEntries**(`entries`): `any`

Returns an object created by key-value entries for properties and methods

##### Parameters

• **entries**: `Iterable`\<readonly `any`[], `any`, `any`\>

An iterable object that contains key-value entries for properties and methods.

##### Returns

`any`

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2019.object.d.ts:32

***

### get()

> `static` **get**(`name`): `ToolFunc`

#### Parameters

• **name**: `string`

#### Returns

`ToolFunc`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:65

***

### getAllByTag()

> `static` **getAllByTag**(`tagName`): `ToolFunc`[]

#### Parameters

• **tagName**: `string`

#### Returns

`ToolFunc`[]

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:68

***

### getByTag()

> `static` **getByTag**(`tagName`): `undefined` \| `ToolFunc`

#### Parameters

• **tagName**: `string`

#### Returns

`undefined` \| `ToolFunc`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:67

***

### getFunc()

> `static` **getFunc**(`name`): `any`

#### Parameters

• **name**: `string`

#### Returns

`any`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:72

***

### getFuncWithPos()

> `static` **getFuncWithPos**(`name`): `any`

#### Parameters

• **name**: `string`

#### Returns

`any`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:75

***

### getOwnPropertyDescriptor()

> `static` **getOwnPropertyDescriptor**(`o`, `p`): `undefined` \| `PropertyDescriptor`

Gets the own property descriptor of the specified object.
An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype.

#### Parameters

• **o**: `any`

Object that contains the property.

• **p**: `PropertyKey`

Name of the property.

#### Returns

`undefined` \| `PropertyDescriptor`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:175

***

### getOwnPropertyDescriptors()

> `static` **getOwnPropertyDescriptors**\<`T`\>(`o`): \{ \[P in string \| number \| symbol\]: TypedPropertyDescriptor\<T\[P\]\> \} & `object`

Returns an object containing all own property descriptors of an object

#### Type Parameters

• **T**

#### Parameters

• **o**: `T`

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

#### Returns

\{ \[P in string \| number \| symbol\]: TypedPropertyDescriptor\<T\[P\]\> \} & `object`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2017.object.d.ts:48

***

### getOwnPropertyNames()

> `static` **getOwnPropertyNames**(`o`): `string`[]

Returns the names of the own properties of an object. The own properties of an object are those that are defined directly
on that object, and are not inherited from the object's prototype. The properties of an object include both fields (objects) and functions.

#### Parameters

• **o**: `any`

Object that contains the own properties.

#### Returns

`string`[]

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:182

***

### getOwnPropertySymbols()

> `static` **getOwnPropertySymbols**(`o`): `symbol`[]

Returns an array of all symbol properties found directly on object o.

#### Parameters

• **o**: `any`

Object to retrieve the symbols from.

#### Returns

`symbol`[]

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2015.core.d.ts:319

***

### getProperties()

> `static` **getProperties**(): `PropDescriptors`

get all properties descriptor include inherited.

#### Returns

`PropDescriptors`

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/advance.d.ts:10

***

### getPrototypeOf()

> `static` **getPrototypeOf**(`o`): `any`

Returns the prototype of an object.

#### Parameters

• **o**: `any`

The object that references the prototype.

#### Returns

`any`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:167

***

### hasAsyncFeature()

> `static` **hasAsyncFeature**(`feature`): `boolean`

#### Parameters

• **feature**: `AsyncFeatureBits`

#### Returns

`boolean`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:69

***

### is()

> `static` **is**(`value1`, `value2`): `boolean`

Returns true if the values are the same value, false otherwise.

#### Parameters

• **value1**: `any`

The first value.

• **value2**: `any`

The second value.

#### Returns

`boolean`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2015.core.d.ts:332

***

### isExtensible()

> `static` **isExtensible**(`o`): `boolean`

Returns a value that indicates whether new properties can be added to an object.

#### Parameters

• **o**: `any`

Object to test.

#### Returns

`boolean`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:258

***

### isFrozen()

> `static` **isFrozen**(`o`): `boolean`

Returns true if existing property attributes and values cannot be modified in an object, and new properties cannot be added to the object.

#### Parameters

• **o**: `any`

Object to test.

#### Returns

`boolean`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:252

***

### isSealed()

> `static` **isSealed**(`o`): `boolean`

Returns true if existing property attributes cannot be modified in an object and new properties cannot be added to the object.

#### Parameters

• **o**: `any`

Object to test.

#### Returns

`boolean`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:246

***

### keys()

#### keys(o)

> `static` **keys**(`o`): `string`[]

Returns the names of the enumerable string properties and methods of an object.

##### Parameters

• **o**: `object`

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

`string`[]

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:264

#### keys(o)

> `static` **keys**(`o`): `string`[]

Returns the names of the enumerable string properties and methods of an object.

##### Parameters

• **o**

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

`string`[]

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2015.core.d.ts:325

***

### list()

> `static` **list**(): `Funcs`

#### Returns

`Funcs`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:66

***

### preventExtensions()

> `static` **preventExtensions**\<`T`\>(`o`): `T`

Prevents the addition of new properties to an object.

#### Type Parameters

• **T**

#### Parameters

• **o**: `T`

Object to make non-extensible.

#### Returns

`T`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:240

***

### register()

#### register(name, options)

> `static` **register**(`name`, `options`): `boolean` \| `ToolFunc`

##### Parameters

• **name**: `string`

• **options**: `FuncItem`

##### Returns

`boolean` \| `ToolFunc`

##### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:76

#### register(func, options)

> `static` **register**(`func`, `options`): `boolean` \| `ToolFunc`

##### Parameters

• **func**: `Function`

• **options**: `FuncItem`

##### Returns

`boolean` \| `ToolFunc`

##### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:77

#### register(name, options)

> `static` **register**(`name`, `options`?): `boolean` \| `ToolFunc`

##### Parameters

• **name**: `string` \| `Function` \| `ToolFunc` \| `FuncItem`

• **options?**: `FuncItem`

##### Returns

`boolean` \| `ToolFunc`

##### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:78

***

### run()

> `static` **run**(`name`, `params`?): `Promise`\<`any`\>

#### Parameters

• **name**: `string`

• **params?**: `any`

#### Returns

`Promise`\<`any`\>

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:70

***

### runSync()

> `static` **runSync**(`name`, `params`?): `any`

#### Parameters

• **name**: `string`

• **params?**: `any`

#### Returns

`any`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:71

***

### runWithPos()

> `static` **runWithPos**(`name`, ...`params`): `Promise`\<`any`\>

#### Parameters

• **name**: `string`

• ...**params**: `any`[]

#### Returns

`Promise`\<`any`\>

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:73

***

### runWithPosSync()

> `static` **runWithPosSync**(`name`, ...`params`): `any`

#### Parameters

• **name**: `string`

• ...**params**: `any`[]

#### Returns

`any`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:74

***

### seal()

> `static` **seal**\<`T`\>(`o`): `T`

Prevents the modification of attributes of existing properties, and prevents the addition of new properties.

#### Type Parameters

• **T**

#### Parameters

• **o**: `T`

Object on which to lock the attributes.

#### Returns

`T`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:216

***

### setApiRoot()

> `static` **setApiRoot**(`v`): `void`

#### Parameters

• **v**: `string`

#### Returns

`void`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:284

***

### setPrototypeOf()

> `static` **setPrototypeOf**(`o`, `proto`): `any`

Sets the prototype of a specified object o to object proto or null. Returns the object o.

#### Parameters

• **o**: `any`

The object to change its prototype.

• **proto**: `null` \| `object`

The value of the new prototype or null.

#### Returns

`any`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2015.core.d.ts:339

***

### toJSON()

> `static` **toJSON**(): `object`

#### Returns

`object`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:285

***

### unregister()

> `static` **unregister**(`name`): `undefined` \| `ToolFunc`

#### Parameters

• **name**: `string`

#### Returns

`undefined` \| `ToolFunc`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:79

***

### values()

#### values(o)

> `static` **values**\<`T`\>(`o`): `T`[]

Returns an array of values of the enumerable own properties of an object

##### Type Parameters

• **T**

##### Parameters

• **o**: `object` \| `ArrayLike`\<`T`\>

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

`T`[]

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2017.object.d.ts:24

#### values(o)

> `static` **values**(`o`): `any`[]

Returns an array of values of the enumerable own properties of an object

##### Parameters

• **o**

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

`any`[]

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2017.object.d.ts:30
