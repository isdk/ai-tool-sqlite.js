[@isdk/ai-tool-sqlite](../README.md) / [Exports](../modules.md) / KVSqliteResFunc

# Class: KVSqliteResFunc\<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`KVSqliteResFuncParams`](../interfaces/KVSqliteResFuncParams.md) = [`KVSqliteResFuncParams`](../interfaces/KVSqliteResFuncParams.md) |

## Hierarchy

- `ResServerTools`

  ↳ **`KVSqliteResFunc`**

## Table of contents

### Constructors

- [constructor](KVSqliteResFunc.md#constructor)

### Properties

- [$attributes](KVSqliteResFunc.md#$attributes)
- [action](KVSqliteResFunc.md#action)
- [allowExportFunc](KVSqliteResFunc.md#allowexportfunc)
- [apiRoot](KVSqliteResFunc.md#apiroot)
- [constructor](KVSqliteResFunc.md#constructor-1)
- [db](KVSqliteResFunc.md#db)
- [dbPath](KVSqliteResFunc.md#dbpath)
- [defaultOptions](KVSqliteResFunc.md#defaultoptions)
- [fetchOptions](KVSqliteResFunc.md#fetchoptions)
- [initDir](KVSqliteResFunc.md#initdir)
- [initingData](KVSqliteResFunc.md#initingdata)
- [methods](KVSqliteResFunc.md#methods)
- [name](KVSqliteResFunc.md#name)
- [nonExported1stChar](KVSqliteResFunc.md#nonexported1stchar)
- [params](KVSqliteResFunc.md#params)
- [result](KVSqliteResFunc.md#result)
- [scope](KVSqliteResFunc.md#scope)
- [setup](KVSqliteResFunc.md#setup)
- [stream](KVSqliteResFunc.md#stream)
- [tags](KVSqliteResFunc.md#tags)
- [dataPath](KVSqliteResFunc.md#datapath)
- [items](KVSqliteResFunc.md#items)

### Accessors

- [apiRoot](KVSqliteResFunc.md#apiroot-1)

### Methods

- [$count](KVSqliteResFunc.md#$count)
- [$createCollection](KVSqliteResFunc.md#$createcollection)
- [$deleteCollection](KVSqliteResFunc.md#$deletecollection)
- [$search](KVSqliteResFunc.md#$search)
- [$searchEx](KVSqliteResFunc.md#$searchex)
- [arr2ObjParams](KVSqliteResFunc.md#arr2objparams)
- [assign](KVSqliteResFunc.md#assign)
- [assignProperty](KVSqliteResFunc.md#assignproperty)
- [assignPropertyTo](KVSqliteResFunc.md#assignpropertyto)
- [assignTo](KVSqliteResFunc.md#assignto)
- [cast](KVSqliteResFunc.md#cast)
- [clone](KVSqliteResFunc.md#clone)
- [cloneTo](KVSqliteResFunc.md#cloneto)
- [defineProperties](KVSqliteResFunc.md#defineproperties)
- [delete](KVSqliteResFunc.md#delete)
- [exportTo](KVSqliteResFunc.md#exportto)
- [func](KVSqliteResFunc.md#func)
- [get](KVSqliteResFunc.md#get)
- [getDocsFromDir](KVSqliteResFunc.md#getdocsfromdir)
- [getFunc](KVSqliteResFunc.md#getfunc)
- [getFuncWithPos](KVSqliteResFunc.md#getfuncwithpos)
- [getMethodFromParams](KVSqliteResFunc.md#getmethodfromparams)
- [getProperties](KVSqliteResFunc.md#getproperties)
- [hasAsyncFeature](KVSqliteResFunc.md#hasasyncfeature)
- [hasOwnProperty](KVSqliteResFunc.md#hasownproperty)
- [initDB](KVSqliteResFunc.md#initdb)
- [initData](KVSqliteResFunc.md#initdata)
- [initDataFromDir](KVSqliteResFunc.md#initdatafromdir)
- [initialize](KVSqliteResFunc.md#initialize)
- [isPrototypeOf](KVSqliteResFunc.md#isprototypeof)
- [isSame](KVSqliteResFunc.md#issame)
- [isStream](KVSqliteResFunc.md#isstream)
- [list](KVSqliteResFunc.md#list)
- [mergeTo](KVSqliteResFunc.md#mergeto)
- [obj2ArrParams](KVSqliteResFunc.md#obj2arrparams)
- [post](KVSqliteResFunc.md#post)
- [propertyIsEnumerable](KVSqliteResFunc.md#propertyisenumerable)
- [put](KVSqliteResFunc.md#put)
- [register](KVSqliteResFunc.md#register)
- [run](KVSqliteResFunc.md#run)
- [runAs](KVSqliteResFunc.md#runas)
- [runAsSync](KVSqliteResFunc.md#runassync)
- [runSync](KVSqliteResFunc.md#runsync)
- [runWithPos](KVSqliteResFunc.md#runwithpos)
- [runWithPosAs](KVSqliteResFunc.md#runwithposas)
- [runWithPosAsSync](KVSqliteResFunc.md#runwithposassync)
- [runWithPosSync](KVSqliteResFunc.md#runwithpossync)
- [toJSON](KVSqliteResFunc.md#tojson)
- [toLocaleString](KVSqliteResFunc.md#tolocalestring)
- [toObject](KVSqliteResFunc.md#toobject)
- [toString](KVSqliteResFunc.md#tostring)
- [unregister](KVSqliteResFunc.md#unregister)
- [updateDataFromDir](KVSqliteResFunc.md#updatedatafromdir)
- [valueOf](KVSqliteResFunc.md#valueof)
- [assign](KVSqliteResFunc.md#assign-1)
- [create](KVSqliteResFunc.md#create)
- [defineProperties](KVSqliteResFunc.md#defineproperties-1)
- [defineProperty](KVSqliteResFunc.md#defineproperty)
- [entries](KVSqliteResFunc.md#entries)
- [freeze](KVSqliteResFunc.md#freeze)
- [fromEntries](KVSqliteResFunc.md#fromentries)
- [get](KVSqliteResFunc.md#get-1)
- [getAllByTag](KVSqliteResFunc.md#getallbytag)
- [getByTag](KVSqliteResFunc.md#getbytag)
- [getFunc](KVSqliteResFunc.md#getfunc-1)
- [getFuncWithPos](KVSqliteResFunc.md#getfuncwithpos-1)
- [getOwnPropertyDescriptor](KVSqliteResFunc.md#getownpropertydescriptor)
- [getOwnPropertyDescriptors](KVSqliteResFunc.md#getownpropertydescriptors)
- [getOwnPropertyNames](KVSqliteResFunc.md#getownpropertynames)
- [getOwnPropertySymbols](KVSqliteResFunc.md#getownpropertysymbols)
- [getProperties](KVSqliteResFunc.md#getproperties-1)
- [getPrototypeOf](KVSqliteResFunc.md#getprototypeof)
- [hasAsyncFeature](KVSqliteResFunc.md#hasasyncfeature-1)
- [is](KVSqliteResFunc.md#is)
- [isExtensible](KVSqliteResFunc.md#isextensible)
- [isFrozen](KVSqliteResFunc.md#isfrozen)
- [isSealed](KVSqliteResFunc.md#issealed)
- [keys](KVSqliteResFunc.md#keys)
- [list](KVSqliteResFunc.md#list-1)
- [preventExtensions](KVSqliteResFunc.md#preventextensions)
- [register](KVSqliteResFunc.md#register-1)
- [run](KVSqliteResFunc.md#run-1)
- [runSync](KVSqliteResFunc.md#runsync-1)
- [runWithPos](KVSqliteResFunc.md#runwithpos-1)
- [runWithPosSync](KVSqliteResFunc.md#runwithpossync-1)
- [seal](KVSqliteResFunc.md#seal)
- [setApiRoot](KVSqliteResFunc.md#setapiroot)
- [setPrototypeOf](KVSqliteResFunc.md#setprototypeof)
- [toJSON](KVSqliteResFunc.md#tojson-1)
- [unregister](KVSqliteResFunc.md#unregister-1)
- [values](KVSqliteResFunc.md#values)

## Constructors

### constructor

• **new KVSqliteResFunc**\<`T`\>(`name`, `options?`): [`KVSqliteResFunc`](KVSqliteResFunc.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`KVSqliteResFuncParams`](../interfaces/KVSqliteResFuncParams.md) = [`KVSqliteResFuncParams`](../interfaces/KVSqliteResFuncParams.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` \| `Function` \| `FuncItem` |
| `options` | `any` |

#### Returns

[`KVSqliteResFunc`](KVSqliteResFunc.md)\<`T`\>

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:51](https://github.com/isdk/ai-tool-sqlite.js/blob/e5c256d26ef27aead78ba0d9137e44349549f4ef/src/sqlite-res.ts#L51)

## Properties

### $attributes

• **$attributes**: `Properties`

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/advance.d.ts:5

___

### action

• **action**: ``"list"`` \| ``"get"`` \| ``"put"`` \| ``"post"`` \| ``"delete"`` \| ``"patch"`` \| ``"res"``

#### Defined in

packages/ai-tool/dist/index-Dgo3ZXPQ.d.ts:565

___

### allowExportFunc

• `Optional` **allowExportFunc**: `boolean`

#### Defined in

packages/ai-tool/dist/index-Dgo3ZXPQ.d.ts:422

___

### apiRoot

• `Optional` **apiRoot**: `string`

#### Defined in

packages/ai-tool/dist/index-Dgo3ZXPQ.d.ts:154

___

### constructor

• **constructor**: `Function`

The initial value of Object.prototype.constructor is the standard built-in Object constructor.

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:125

___

### db

• **db**: [`KVSqlite`](KVSqlite.md)

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:48](https://github.com/isdk/ai-tool-sqlite.js/blob/e5c256d26ef27aead78ba0d9137e44349549f4ef/src/sqlite-res.ts#L48)

___

### dbPath

• **dbPath**: `undefined` \| `string`

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:46](https://github.com/isdk/ai-tool-sqlite.js/blob/e5c256d26ef27aead78ba0d9137e44349549f4ef/src/sqlite-res.ts#L46)

___

### defaultOptions

• **defaultOptions**: `Object`

The default options for export and assign

#### Type declaration

| Name | Type |
| :------ | :------ |
| `assign?` | `IMergeOptions` |
| `export?` | `IMergeOptions` |

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:74

___

### fetchOptions

• `Optional` **fetchOptions**: `any`

#### Defined in

packages/ai-tool/dist/index-Dgo3ZXPQ.d.ts:156

___

### initDir

• **initDir**: `undefined` \| `string`

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:47](https://github.com/isdk/ai-tool-sqlite.js/blob/e5c256d26ef27aead78ba0d9137e44349549f4ef/src/sqlite-res.ts#L47)

___

### initingData

• **initingData**: `undefined` \| `boolean`

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:49](https://github.com/isdk/ai-tool-sqlite.js/blob/e5c256d26ef27aead78ba0d9137e44349549f4ef/src/sqlite-res.ts#L49)

___

### methods

• **methods**: `string`[]

#### Defined in

packages/ai-tool/dist/index-Dgo3ZXPQ.d.ts:557

___

### name

• `Optional` **name**: `string`

#### Defined in

packages/ai-tool/dist/index-Dgo3ZXPQ.d.ts:36

___

### nonExported1stChar

• **nonExported1stChar**: `string`

the property with the default prefix '$' will not be exported.

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:78

___

### params

• **params**: `FuncParams`

#### Defined in

packages/ai-tool/dist/index-Dgo3ZXPQ.d.ts:566

___

### result

• `Optional` **result**: `string`

#### Defined in

packages/ai-tool/dist/index-Dgo3ZXPQ.d.ts:38

___

### scope

• `Optional` **scope**: `any`

#### Defined in

packages/ai-tool/dist/index-Dgo3ZXPQ.d.ts:39

___

### setup

• `Optional` **setup**: (`this`: `ToolFunc`, `options?`: `FuncItem`) => `void`

#### Type declaration

▸ (`this`, `options?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ToolFunc` |
| `options?` | `FuncItem` |

##### Returns

`void`

#### Defined in

packages/ai-tool/dist/index-Dgo3ZXPQ.d.ts:41

___

### stream

• `Optional` **stream**: `boolean`

#### Defined in

packages/ai-tool/dist/index-Dgo3ZXPQ.d.ts:157

___

### tags

• `Optional` **tags**: `string` \| `string`[]

#### Defined in

packages/ai-tool/dist/index-Dgo3ZXPQ.d.ts:40

___

### dataPath

▪ `Static` **dataPath**: `string`

#### Defined in

packages/ai-tool/dist/index-Dgo3ZXPQ.d.ts:62

___

### items

▪ `Static` **items**: `Funcs`

#### Defined in

packages/ai-tool/dist/index-Dgo3ZXPQ.d.ts:61

## Accessors

### apiRoot

• `get` **apiRoot**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

packages/ai-tool/dist/index-Dgo3ZXPQ.d.ts:429

## Methods

### $count

▸ **$count**(`options?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`KVSqliteResFuncParams`](../interfaces/KVSqliteResFuncParams.md) |

#### Returns

`number`

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:210](https://github.com/isdk/ai-tool-sqlite.js/blob/e5c256d26ef27aead78ba0d9137e44349549f4ef/src/sqlite-res.ts#L210)

___

### $createCollection

▸ **$createCollection**(`«destructured»`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`KVSqliteResFuncParams`](../interfaces/KVSqliteResFuncParams.md) |

#### Returns

`boolean`

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:216](https://github.com/isdk/ai-tool-sqlite.js/blob/e5c256d26ef27aead78ba0d9137e44349549f4ef/src/sqlite-res.ts#L216)

___

### $deleteCollection

▸ **$deleteCollection**(`«destructured»`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`KVSqliteResFuncParams`](../interfaces/KVSqliteResFuncParams.md) |

#### Returns

`boolean`

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:227](https://github.com/isdk/ai-tool-sqlite.js/blob/e5c256d26ef27aead78ba0d9137e44349549f4ef/src/sqlite-res.ts#L227)

___

### $search

▸ **$search**(`options?`): `T`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`KVSqliteResFuncParams`](../interfaces/KVSqliteResFuncParams.md) |

#### Returns

`T`[]

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:200](https://github.com/isdk/ai-tool-sqlite.js/blob/e5c256d26ef27aead78ba0d9137e44349549f4ef/src/sqlite-res.ts#L200)

___

### $searchEx

▸ **$searchEx**(`options?`): `T`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`KVSqliteResFuncParams`](../interfaces/KVSqliteResFuncParams.md) |

#### Returns

`T`[]

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:190](https://github.com/isdk/ai-tool-sqlite.js/blob/e5c256d26ef27aead78ba0d9137e44349549f4ef/src/sqlite-res.ts#L190)

___

### arr2ObjParams

▸ **arr2ObjParams**(`params`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any`[] |

#### Returns

`any`[]

#### Defined in

packages/ai-tool/dist/index-Dgo3ZXPQ.d.ts:81

___

### assign

▸ **assign**(`src`, `options?`): `this`

Assign the values from the src object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `src` | `any` | the source object |
| `options?` | `IMergeOptions` | - |

#### Returns

`this`

this object

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:106

___

### assignProperty

▸ **assignProperty**(`src`, `name`, `value`, `attrs?`, `options?`): `void`

Assign a property of src to this object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `src` | `any` | the src object |
| `name` | `string` | the property name to assign |
| `value` | `any` | the property value to assign |
| `attrs?` | `any` | the attributes object |
| `options?` | `IMergeOptions` |  |

#### Returns

`void`

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:117

___

### assignPropertyTo

▸ **assignPropertyTo**(`dest`, `src`, `name`, `value`, `attrs?`, `options?`): `void`

Assign the property value from the src to destination object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dest` | `any` | The destination object |
| `src` | `any` | The src object |
| `name` | `string` | The property name |
| `value` | `any` | The property value |
| `attrs?` | `any` | The attributes object of the property |
| `options?` | `IMergeOptions` |  |

#### Returns

`void`

**`Abstract`**

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:131

___

### assignTo

▸ **assignTo**(`dest?`, `options?`): `any`

Assign this attributes to the dest object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dest?` | `any` | the destination object |
| `options?` | `IMergeOptions` | - |

#### Returns

`any`

the dest object

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:191

___

### cast

▸ **cast**(`key`, `value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

#### Returns

`any`

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:104](https://github.com/isdk/ai-tool-sqlite.js/blob/e5c256d26ef27aead78ba0d9137e44349549f4ef/src/sqlite-res.ts#L104)

___

### clone

▸ **clone**(`options?`): `any`

Create a new object with the same values of attributes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `IMergeOptions` |

#### Returns

`any`

the new object

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:155

___

### cloneTo

▸ **cloneTo**(`dest`, `options?`): `any`

Create and assign the values to the destination object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dest` | `any` | the destination object |
| `options?` | `IMergeOptions` |  |

#### Returns

`any`

the new dest object

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:148

___

### defineProperties

▸ **defineProperties**(`aProperties`): `any`

Define the attributes of this object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aProperties` | `SimplePropDescriptors` | the defined attributes of the object |

#### Returns

`any`

**`Abstract`**

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:89

___

### delete

▸ **delete**(`options`): [`SqliteRunResult`](../interfaces/SqliteRunResult.md) \| [`SqliteRunResult`](../interfaces/SqliteRunResult.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`KVSqliteResFuncParams`](../interfaces/KVSqliteResFuncParams.md) |

#### Returns

[`SqliteRunResult`](../interfaces/SqliteRunResult.md) \| [`SqliteRunResult`](../interfaces/SqliteRunResult.md)[]

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:173](https://github.com/isdk/ai-tool-sqlite.js/blob/e5c256d26ef27aead78ba0d9137e44349549f4ef/src/sqlite-res.ts#L173)

___

### exportTo

▸ **exportTo**(`dest`, `options?`): `any`

Export attributes to the dest json object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dest` | `any` | the destination object |
| `options?` | `IExportOptions` | - |

#### Returns

`any`

the dest object.

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:173

___

### func

▸ **func**(`params`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `ResServerFuncParams` |

#### Returns

`any`

#### Defined in

packages/ai-tool/dist/index-Dgo3ZXPQ.d.ts:570

___

### get

▸ **get**(`options`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`KVSqliteResFuncParams`](../interfaces/KVSqliteResFuncParams.md) |

#### Returns

`T`

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:118](https://github.com/isdk/ai-tool-sqlite.js/blob/e5c256d26ef27aead78ba0d9137e44349549f4ef/src/sqlite-res.ts#L118)

___

### getDocsFromDir

▸ **getDocsFromDir**(`dir`): `Promise`\<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `dir` | `string` |

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:80](https://github.com/isdk/ai-tool-sqlite.js/blob/e5c256d26ef27aead78ba0d9137e44349549f4ef/src/sqlite-res.ts#L80)

___

### getFunc

▸ **getFunc**(`name?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Returns

`any`

#### Defined in

packages/ai-tool/dist/index-Dgo3ZXPQ.d.ts:87

___

### getFuncWithPos

▸ **getFuncWithPos**(`name?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Returns

`any`

#### Defined in

packages/ai-tool/dist/index-Dgo3ZXPQ.d.ts:92

___

### getMethodFromParams

▸ **getMethodFromParams**(`params`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `ResServerFuncParams` |

#### Returns

`undefined` \| `string`

#### Defined in

packages/ai-tool/dist/index-Dgo3ZXPQ.d.ts:569

___

### getProperties

▸ **getProperties**(): `PropDescriptors`

Get the defined attributes.

#### Returns

`PropDescriptors`

the descriptors of properties object

**`Abstract`**

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:98

___

### hasAsyncFeature

▸ **hasAsyncFeature**(`feature`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `feature` | `AsyncFeatureBits` |

#### Returns

`boolean`

#### Defined in

packages/ai-tool/dist/index-Dgo3ZXPQ.d.ts:93

___

### hasOwnProperty

▸ **hasOwnProperty**(`v`): `boolean`

Determines whether an object has a property with the specified name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `PropertyKey` | A property name. |

#### Returns

`boolean`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:140

___

### initDB

▸ **initDB**(`db`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `db` | [`KVSqlite`](KVSqlite.md) |

#### Returns

`void`

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:42](https://github.com/isdk/ai-tool-sqlite.js/blob/e5c256d26ef27aead78ba0d9137e44349549f4ef/src/sqlite-res.ts#L42)

___

### initData

▸ **initData**(`initDir?`, `collection?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `initDir` | `undefined` \| `string` |
| `collection?` | `string` |

#### Returns

`void`

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:66](https://github.com/isdk/ai-tool-sqlite.js/blob/e5c256d26ef27aead78ba0d9137e44349549f4ef/src/sqlite-res.ts#L66)

___

### initDataFromDir

▸ **initDataFromDir**(`dir`, `collection?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `dir` | `string` |
| `collection?` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:72](https://github.com/isdk/ai-tool-sqlite.js/blob/e5c256d26ef27aead78ba0d9137e44349549f4ef/src/sqlite-res.ts#L72)

___

### initialize

▸ **initialize**(`src?`): `this`

Initialize object and assign attribute values from src if src exists.

#### Parameters

| Name | Type |
| :------ | :------ |
| `src?` | `any` |

#### Returns

`this`

this object.

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:139

___

### isPrototypeOf

▸ **isPrototypeOf**(`v`): `boolean`

Determines whether an object exists in another object's prototype chain.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `Object` | Another object whose prototype chain is to be checked. |

#### Returns

`boolean`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:146

___

### isSame

▸ **isSame**(`src`, `options?`): `boolean`

Check the src object whether “equals” this object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `src` | `any` | The source object |
| `options?` | `IMergeOptions` | - |

#### Returns

`boolean`

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:200

___

### isStream

▸ **isStream**(`params`): `undefined` \| `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `ServerFuncParams` |

#### Returns

`undefined` \| `boolean`

#### Defined in

packages/ai-tool/dist/index-Dgo3ZXPQ.d.ts:434

___

### list

▸ **list**(`options?`): `T`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`KVSqliteResFuncParams`](../interfaces/KVSqliteResFuncParams.md) |

#### Returns

`T`[]

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:111](https://github.com/isdk/ai-tool-sqlite.js/blob/e5c256d26ef27aead78ba0d9137e44349549f4ef/src/sqlite-res.ts#L111)

___

### mergeTo

▸ **mergeTo**(`dest`, `options?`): `any`

Merge this attributes to dest object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dest` | `any` | The destination object |
| `options?` | `IMergeOptions` | - |

#### Returns

`any`

the dest object.

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:164

___

### obj2ArrParams

▸ **obj2ArrParams**(`params?`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | `any` |

#### Returns

`any`[]

#### Defined in

packages/ai-tool/dist/index-Dgo3ZXPQ.d.ts:82

___

### post

▸ **post**(`model`): [`SqliteRunResult`](../interfaces/SqliteRunResult.md) \| [`SqliteRunResult`](../interfaces/SqliteRunResult.md)[] \| `Promise`\<[`SqliteRunResult`](../interfaces/SqliteRunResult.md) \| [`SqliteRunResult`](../interfaces/SqliteRunResult.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | [`KVSqliteResFuncParams`](../interfaces/KVSqliteResFuncParams.md) |

#### Returns

[`SqliteRunResult`](../interfaces/SqliteRunResult.md) \| [`SqliteRunResult`](../interfaces/SqliteRunResult.md)[] \| `Promise`\<[`SqliteRunResult`](../interfaces/SqliteRunResult.md) \| [`SqliteRunResult`](../interfaces/SqliteRunResult.md)[]\>

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:149](https://github.com/isdk/ai-tool-sqlite.js/blob/e5c256d26ef27aead78ba0d9137e44349549f4ef/src/sqlite-res.ts#L149)

___

### propertyIsEnumerable

▸ **propertyIsEnumerable**(`v`): `boolean`

Determines whether a specified property is enumerable.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `PropertyKey` | A property name. |

#### Returns

`boolean`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:152

___

### put

▸ **put**(`model`): [`SqliteRunResult`](../interfaces/SqliteRunResult.md) \| `Promise`\<[`SqliteRunResult`](../interfaces/SqliteRunResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | [`KVSqliteResFuncParams`](../interfaces/KVSqliteResFuncParams.md) |

#### Returns

[`SqliteRunResult`](../interfaces/SqliteRunResult.md) \| `Promise`\<[`SqliteRunResult`](../interfaces/SqliteRunResult.md)\>

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:131](https://github.com/isdk/ai-tool-sqlite.js/blob/e5c256d26ef27aead78ba0d9137e44349549f4ef/src/sqlite-res.ts#L131)

___

### register

▸ **register**(): `boolean` \| `ToolFunc`

#### Returns

`boolean` \| `ToolFunc`

#### Defined in

packages/ai-tool/dist/index-Dgo3ZXPQ.d.ts:79

___

### run

▸ **run**(`params?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | `any` |

#### Returns

`Promise`\<`any`\>

#### Defined in

packages/ai-tool/dist/index-Dgo3ZXPQ.d.ts:84

___

### runAs

▸ **runAs**(`name`, `params?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `params?` | `any` |

#### Returns

`Promise`\<`any`\>

#### Defined in

packages/ai-tool/dist/index-Dgo3ZXPQ.d.ts:85

___

### runAsSync

▸ **runAsSync**(`name`, `params?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `params?` | `any` |

#### Returns

`any`

#### Defined in

packages/ai-tool/dist/index-Dgo3ZXPQ.d.ts:86

___

### runSync

▸ **runSync**(`params?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | `any` |

#### Returns

`any`

#### Defined in

packages/ai-tool/dist/index-Dgo3ZXPQ.d.ts:83

___

### runWithPos

▸ **runWithPos**(`...params`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...params` | `any`[] |

#### Returns

`Promise`\<`any`\>

#### Defined in

packages/ai-tool/dist/index-Dgo3ZXPQ.d.ts:90

___

### runWithPosAs

▸ **runWithPosAs**(`name`, `...params`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `...params` | `any`[] |

#### Returns

`Promise`\<`any`\>

#### Defined in

packages/ai-tool/dist/index-Dgo3ZXPQ.d.ts:91

___

### runWithPosAsSync

▸ **runWithPosAsSync**(`name`, `...params`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `...params` | `any`[] |

#### Returns

`any`

#### Defined in

packages/ai-tool/dist/index-Dgo3ZXPQ.d.ts:89

___

### runWithPosSync

▸ **runWithPosSync**(`...params`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...params` | `any`[] |

#### Returns

`any`

#### Defined in

packages/ai-tool/dist/index-Dgo3ZXPQ.d.ts:88

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:182

___

### toLocaleString

▸ **toLocaleString**(): `string`

Returns a date converted to a string using the current locale.

#### Returns

`string`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:131

___

### toObject

▸ **toObject**(`options?`): `any`

Convert the attributes to the json object

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`any`

the json object.

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:181

___

### toString

▸ **toString**(): `string`

Returns a string representation of an object.

#### Returns

`string`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:128

___

### unregister

▸ **unregister**(): `any`

#### Returns

`any`

#### Defined in

packages/ai-tool/dist/index-Dgo3ZXPQ.d.ts:80

___

### updateDataFromDir

▸ **updateDataFromDir**(`dir?`, `collection?`): `Promise`\<`undefined` \| `number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `dir` | `undefined` \| `string` |
| `collection?` | `string` |

#### Returns

`Promise`\<`undefined` \| `number`\>

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:91](https://github.com/isdk/ai-tool-sqlite.js/blob/e5c256d26ef27aead78ba0d9137e44349549f4ef/src/sqlite-res.ts#L91)

___

### valueOf

▸ **valueOf**(): `Object`

Returns the primitive value of the specified object.

#### Returns

`Object`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:134

___

### assign

▸ **assign**\<`T`, `U`\>(`target`, `source`): `T` & `U`

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |
| `U` | `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `T` | The target object to copy to. |
| `source` | `U` | The source object from which to copy properties. |

#### Returns

`T` & `U`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:284

▸ **assign**\<`T`, `U`, `V`\>(`target`, `source1`, `source2`): `T` & `U` & `V`

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |
| `U` | `U` |
| `V` | `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `T` | The target object to copy to. |
| `source1` | `U` | The first source object from which to copy properties. |
| `source2` | `V` | The second source object from which to copy properties. |

#### Returns

`T` & `U` & `V`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:293

▸ **assign**\<`T`, `U`, `V`, `W`\>(`target`, `source1`, `source2`, `source3`): `T` & `U` & `V` & `W`

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |
| `U` | `U` |
| `V` | `V` |
| `W` | `W` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `T` | The target object to copy to. |
| `source1` | `U` | The first source object from which to copy properties. |
| `source2` | `V` | The second source object from which to copy properties. |
| `source3` | `W` | The third source object from which to copy properties. |

#### Returns

`T` & `U` & `V` & `W`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:303

▸ **assign**(`target`, `...sources`): `any`

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `object` | The target object to copy to. |
| `...sources` | `any`[] | One or more source objects from which to copy properties |

#### Returns

`any`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:311

___

### create

▸ **create**(`o`): `any`

Creates an object that has the specified prototype or that has null prototype.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | ``null`` \| `object` | Object to use as a prototype. May be null. |

#### Returns

`any`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:188

▸ **create**(`o`, `properties`): `any`

Creates an object that has the specified prototype, and that optionally contains specified properties.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | ``null`` \| `object` | Object to use as a prototype. May be null |
| `properties` | `PropertyDescriptorMap` & `ThisType`\<`any`\> | JavaScript object that contains one or more property descriptors. |

#### Returns

`any`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:195

___

### defineProperties

▸ **defineProperties**(`aTarget`, `aProperties`, `recreate?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aTarget` | `any` |
| `aProperties` | `PropDescriptors` |
| `recreate?` | `boolean` |

#### Returns

`any`

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/advance.d.ts:11

___

### defineProperty

▸ **defineProperty**\<`T`\>(`o`, `p`, `attributes`): `T`

Adds a property to an object, or modifies attributes of an existing property.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `T` | Object on which to add or modify the property. This can be a native JavaScript object (that is, a user-defined object or a built in object) or a DOM object. |
| `p` | `PropertyKey` | The property name. |
| `attributes` | `PropertyDescriptor` & `ThisType`\<`any`\> | Descriptor for the property. It can be for a data property or an accessor property. |

#### Returns

`T`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:203

___

### entries

▸ **entries**\<`T`\>(`o`): [`string`, `T`][]

Returns an array of key/values of the enumerable properties of an object

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | \{ `[s: string]`: `T`;  } \| `ArrayLike`\<`T`\> | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. |

#### Returns

[`string`, `T`][]

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2017.object.d.ts:36

▸ **entries**(`o`): [`string`, `any`][]

Returns an array of key/values of the enumerable properties of an object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `Object` | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. |

#### Returns

[`string`, `any`][]

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2017.object.d.ts:42

___

### freeze

▸ **freeze**\<`T`\>(`f`): `T`

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Function` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `f` | `T` | Object on which to lock the attributes. |

#### Returns

`T`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:222

▸ **freeze**\<`T`, `U`\>(`o`): `Readonly`\<`T`\>

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |
| `U` | extends `string` \| `number` \| `bigint` \| `boolean` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `T` | Object on which to lock the attributes. |

#### Returns

`Readonly`\<`T`\>

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:228

▸ **freeze**\<`T`\>(`o`): `Readonly`\<`T`\>

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `T` | Object on which to lock the attributes. |

#### Returns

`Readonly`\<`T`\>

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:234

___

### fromEntries

▸ **fromEntries**\<`T`\>(`entries`): `Object`

Returns an object created by key-value entries for properties and methods

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entries` | `Iterable`\<readonly [`PropertyKey`, `T`]\> | An iterable object that contains key-value entries for properties and methods. |

#### Returns

`Object`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2019.object.d.ts:26

▸ **fromEntries**(`entries`): `any`

Returns an object created by key-value entries for properties and methods

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entries` | `Iterable`\<readonly `any`[]\> | An iterable object that contains key-value entries for properties and methods. |

#### Returns

`any`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2019.object.d.ts:32

___

### get

▸ **get**(`name`): `ToolFunc`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`ToolFunc`

#### Defined in

packages/ai-tool/dist/index-Dgo3ZXPQ.d.ts:63

___

### getAllByTag

▸ **getAllByTag**(`tagName`): `ToolFunc`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagName` | `string` |

#### Returns

`ToolFunc`[]

#### Defined in

packages/ai-tool/dist/index-Dgo3ZXPQ.d.ts:66

___

### getByTag

▸ **getByTag**(`tagName`): `undefined` \| `ToolFunc`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagName` | `string` |

#### Returns

`undefined` \| `ToolFunc`

#### Defined in

packages/ai-tool/dist/index-Dgo3ZXPQ.d.ts:65

___

### getFunc

▸ **getFunc**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Defined in

packages/ai-tool/dist/index-Dgo3ZXPQ.d.ts:70

___

### getFuncWithPos

▸ **getFuncWithPos**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Defined in

packages/ai-tool/dist/index-Dgo3ZXPQ.d.ts:73

___

### getOwnPropertyDescriptor

▸ **getOwnPropertyDescriptor**(`o`, `p`): `undefined` \| `PropertyDescriptor`

Gets the own property descriptor of the specified object.
An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | Object that contains the property. |
| `p` | `PropertyKey` | Name of the property. |

#### Returns

`undefined` \| `PropertyDescriptor`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:175

___

### getOwnPropertyDescriptors

▸ **getOwnPropertyDescriptors**\<`T`\>(`o`): \{ [P in string \| number \| symbol]: TypedPropertyDescriptor\<T[P]\> } & \{ `[x: string]`: `PropertyDescriptor`;  }

Returns an object containing all own property descriptors of an object

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `T` | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. |

#### Returns

\{ [P in string \| number \| symbol]: TypedPropertyDescriptor\<T[P]\> } & \{ `[x: string]`: `PropertyDescriptor`;  }

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2017.object.d.ts:48

___

### getOwnPropertyNames

▸ **getOwnPropertyNames**(`o`): `string`[]

Returns the names of the own properties of an object. The own properties of an object are those that are defined directly
on that object, and are not inherited from the object's prototype. The properties of an object include both fields (objects) and functions.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | Object that contains the own properties. |

#### Returns

`string`[]

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:182

___

### getOwnPropertySymbols

▸ **getOwnPropertySymbols**(`o`): `symbol`[]

Returns an array of all symbol properties found directly on object o.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | Object to retrieve the symbols from. |

#### Returns

`symbol`[]

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:317

___

### getProperties

▸ **getProperties**(): `PropDescriptors`

get all properties descriptor include inherited.

#### Returns

`PropDescriptors`

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/advance.d.ts:10

___

### getPrototypeOf

▸ **getPrototypeOf**(`o`): `any`

Returns the prototype of an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | The object that references the prototype. |

#### Returns

`any`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:167

___

### hasAsyncFeature

▸ **hasAsyncFeature**(`feature`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `feature` | `AsyncFeatureBits` |

#### Returns

`boolean`

#### Defined in

packages/ai-tool/dist/index-Dgo3ZXPQ.d.ts:67

___

### is

▸ **is**(`value1`, `value2`): `boolean`

Returns true if the values are the same value, false otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value1` | `any` | The first value. |
| `value2` | `any` | The second value. |

#### Returns

`boolean`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:330

___

### isExtensible

▸ **isExtensible**(`o`): `boolean`

Returns a value that indicates whether new properties can be added to an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | Object to test. |

#### Returns

`boolean`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:258

___

### isFrozen

▸ **isFrozen**(`o`): `boolean`

Returns true if existing property attributes and values cannot be modified in an object, and new properties cannot be added to the object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | Object to test. |

#### Returns

`boolean`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:252

___

### isSealed

▸ **isSealed**(`o`): `boolean`

Returns true if existing property attributes cannot be modified in an object and new properties cannot be added to the object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | Object to test. |

#### Returns

`boolean`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:246

___

### keys

▸ **keys**(`o`): `string`[]

Returns the names of the enumerable string properties and methods of an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `object` | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. |

#### Returns

`string`[]

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:264

▸ **keys**(`o`): `string`[]

Returns the names of the enumerable string properties and methods of an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `Object` | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. |

#### Returns

`string`[]

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:323

___

### list

▸ **list**(): `Funcs`

#### Returns

`Funcs`

#### Defined in

packages/ai-tool/dist/index-Dgo3ZXPQ.d.ts:64

___

### preventExtensions

▸ **preventExtensions**\<`T`\>(`o`): `T`

Prevents the addition of new properties to an object.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `T` | Object to make non-extensible. |

#### Returns

`T`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:240

___

### register

▸ **register**(`name`, `options`): `boolean` \| `ToolFunc`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `options` | `FuncItem` |

#### Returns

`boolean` \| `ToolFunc`

#### Defined in

packages/ai-tool/dist/index-Dgo3ZXPQ.d.ts:74

▸ **register**(`func`, `options`): `boolean` \| `ToolFunc`

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | `Function` |
| `options` | `FuncItem` |

#### Returns

`boolean` \| `ToolFunc`

#### Defined in

packages/ai-tool/dist/index-Dgo3ZXPQ.d.ts:75

▸ **register**(`name`, `options?`): `boolean` \| `ToolFunc`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` \| `Function` \| `ToolFunc` \| `FuncItem` |
| `options?` | `FuncItem` |

#### Returns

`boolean` \| `ToolFunc`

#### Defined in

packages/ai-tool/dist/index-Dgo3ZXPQ.d.ts:76

___

### run

▸ **run**(`name`, `params?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `params?` | `any` |

#### Returns

`Promise`\<`any`\>

#### Defined in

packages/ai-tool/dist/index-Dgo3ZXPQ.d.ts:68

___

### runSync

▸ **runSync**(`name`, `params?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `params?` | `any` |

#### Returns

`any`

#### Defined in

packages/ai-tool/dist/index-Dgo3ZXPQ.d.ts:69

___

### runWithPos

▸ **runWithPos**(`name`, `...params`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `...params` | `any`[] |

#### Returns

`Promise`\<`any`\>

#### Defined in

packages/ai-tool/dist/index-Dgo3ZXPQ.d.ts:71

___

### runWithPosSync

▸ **runWithPosSync**(`name`, `...params`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `...params` | `any`[] |

#### Returns

`any`

#### Defined in

packages/ai-tool/dist/index-Dgo3ZXPQ.d.ts:72

___

### seal

▸ **seal**\<`T`\>(`o`): `T`

Prevents the modification of attributes of existing properties, and prevents the addition of new properties.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `T` | Object on which to lock the attributes. |

#### Returns

`T`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:216

___

### setApiRoot

▸ **setApiRoot**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `string` |

#### Returns

`void`

#### Defined in

packages/ai-tool/dist/index-Dgo3ZXPQ.d.ts:430

___

### setPrototypeOf

▸ **setPrototypeOf**(`o`, `proto`): `any`

Sets the prototype of a specified object o to object proto or null. Returns the object o.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | The object to change its prototype. |
| `proto` | ``null`` \| `object` | The value of the new prototype or null. |

#### Returns

`any`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:337

___

### toJSON

▸ **toJSON**(): `Object`

#### Returns

`Object`

#### Defined in

packages/ai-tool/dist/index-Dgo3ZXPQ.d.ts:431

___

### unregister

▸ **unregister**(`name`): `undefined` \| `ToolFunc`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`undefined` \| `ToolFunc`

#### Defined in

packages/ai-tool/dist/index-Dgo3ZXPQ.d.ts:77

___

### values

▸ **values**\<`T`\>(`o`): `T`[]

Returns an array of values of the enumerable properties of an object

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | \{ `[s: string]`: `T`;  } \| `ArrayLike`\<`T`\> | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. |

#### Returns

`T`[]

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2017.object.d.ts:24

▸ **values**(`o`): `any`[]

Returns an array of values of the enumerable properties of an object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `Object` | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. |

#### Returns

`any`[]

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2017.object.d.ts:30
