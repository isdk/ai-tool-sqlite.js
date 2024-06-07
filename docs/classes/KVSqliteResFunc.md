[@isdk/ai-tool-sqlite](../README.md) / [Exports](../modules.md) / KVSqliteResFunc

# Class: KVSqliteResFunc\<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`KVSqliteResFuncParams`](../interfaces/KVSqliteResFuncParams.md) |

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
- [hasOwnProperty](KVSqliteResFunc.md#hasownproperty)
- [initDB](KVSqliteResFunc.md#initdb)
- [initialize](KVSqliteResFunc.md#initialize)
- [intDBFromDir](KVSqliteResFunc.md#intdbfromdir)
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
- [updateDBFromDir](KVSqliteResFunc.md#updatedbfromdir)
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
| `T` | extends [`KVSqliteResFuncParams`](../interfaces/KVSqliteResFuncParams.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` \| `Function` \| `FuncItem` |
| `options` | `any` |

#### Returns

[`KVSqliteResFunc`](KVSqliteResFunc.md)\<`T`\>

#### Overrides

ResServerTools.constructor

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:41](https://github.com/isdk/ai-tool-sqlite.js/blob/3a8af7e372deb90905c47b3a58d4c8157346e3cc/src/sqlite-res.ts#L41)

## Properties

### $attributes

• **$attributes**: `Properties`

#### Inherited from

ResServerTools.$attributes

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/advance.d.ts:5

___

### action

• **action**: ``"list"`` \| ``"get"`` \| ``"put"`` \| ``"post"`` \| ``"delete"`` \| ``"patch"`` \| ``"res"``

#### Inherited from

ResServerTools.action

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:550

___

### allowExportFunc

• `Optional` **allowExportFunc**: `boolean`

#### Inherited from

ResServerTools.allowExportFunc

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:396

___

### apiRoot

• `Optional` **apiRoot**: `string`

#### Inherited from

ResServerTools.apiRoot

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:130

___

### constructor

• **constructor**: `Function`

The initial value of Object.prototype.constructor is the standard built-in Object constructor.

#### Inherited from

ResServerTools.constructor

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:125

___

### db

• **db**: [`KVSqlite`](KVSqlite.md)

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:39](https://github.com/isdk/ai-tool-sqlite.js/blob/3a8af7e372deb90905c47b3a58d4c8157346e3cc/src/sqlite-res.ts#L39)

___

### dbPath

• **dbPath**: `undefined` \| `string`

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:37](https://github.com/isdk/ai-tool-sqlite.js/blob/3a8af7e372deb90905c47b3a58d4c8157346e3cc/src/sqlite-res.ts#L37)

___

### defaultOptions

• **defaultOptions**: `Object`

The default options for export and assign

#### Type declaration

| Name | Type |
| :------ | :------ |
| `assign?` | `IMergeOptions` |
| `export?` | `IMergeOptions` |

#### Inherited from

ResServerTools.defaultOptions

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:74

___

### fetchOptions

• `Optional` **fetchOptions**: `any`

#### Inherited from

ResServerTools.fetchOptions

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:132

___

### initDir

• **initDir**: `undefined` \| `string`

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:38](https://github.com/isdk/ai-tool-sqlite.js/blob/3a8af7e372deb90905c47b3a58d4c8157346e3cc/src/sqlite-res.ts#L38)

___

### methods

• **methods**: `string`[]

#### Inherited from

ResServerTools.methods

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:542

___

### name

• `Optional` **name**: `string`

#### Inherited from

ResServerTools.name

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:22

___

### nonExported1stChar

• **nonExported1stChar**: `string`

the property with the default prefix '$' will not be exported.

#### Inherited from

ResServerTools.nonExported1stChar

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:78

___

### params

• **params**: `FuncParams`

#### Inherited from

ResServerTools.params

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:551

___

### result

• `Optional` **result**: `string`

#### Inherited from

ResServerTools.result

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:24

___

### scope

• `Optional` **scope**: `any`

#### Inherited from

ResServerTools.scope

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:25

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

#### Inherited from

ResServerTools.setup

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:27

___

### stream

• `Optional` **stream**: `boolean`

#### Inherited from

ResServerTools.stream

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:133

___

### tags

• `Optional` **tags**: `string` \| `string`[]

#### Inherited from

ResServerTools.tags

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:26

___

### dataPath

▪ `Static` **dataPath**: `string`

#### Inherited from

ResServerTools.dataPath

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:43

___

### items

▪ `Static` **items**: `Funcs`

#### Inherited from

ResServerTools.items

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:42

## Accessors

### apiRoot

• `get` **apiRoot**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

ResServerTools.apiRoot

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:403

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

[packages/ai-tool-sqlite/src/sqlite-res.ts:181](https://github.com/isdk/ai-tool-sqlite.js/blob/3a8af7e372deb90905c47b3a58d4c8157346e3cc/src/sqlite-res.ts#L181)

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

[packages/ai-tool-sqlite/src/sqlite-res.ts:171](https://github.com/isdk/ai-tool-sqlite.js/blob/3a8af7e372deb90905c47b3a58d4c8157346e3cc/src/sqlite-res.ts#L171)

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

[packages/ai-tool-sqlite/src/sqlite-res.ts:161](https://github.com/isdk/ai-tool-sqlite.js/blob/3a8af7e372deb90905c47b3a58d4c8157346e3cc/src/sqlite-res.ts#L161)

___

### arr2ObjParams

▸ **arr2ObjParams**(`params`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any`[] |

#### Returns

`any`[]

#### Inherited from

ResServerTools.arr2ObjParams

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:61

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

#### Inherited from

ResServerTools.assign

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

#### Inherited from

ResServerTools.assignProperty

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

#### Inherited from

ResServerTools.assignPropertyTo

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

#### Inherited from

ResServerTools.assignTo

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

#### Overrides

ResServerTools.cast

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:77](https://github.com/isdk/ai-tool-sqlite.js/blob/3a8af7e372deb90905c47b3a58d4c8157346e3cc/src/sqlite-res.ts#L77)

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

#### Inherited from

ResServerTools.clone

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

#### Inherited from

ResServerTools.cloneTo

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

#### Inherited from

ResServerTools.defineProperties

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:89

___

### delete

▸ **delete**(`«destructured»`): [`SqliteRunResult`](../interfaces/SqliteRunResult.md) \| [`SqliteRunResult`](../interfaces/SqliteRunResult.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`KVSqliteResFuncParams`](../interfaces/KVSqliteResFuncParams.md) |

#### Returns

[`SqliteRunResult`](../interfaces/SqliteRunResult.md) \| [`SqliteRunResult`](../interfaces/SqliteRunResult.md)[]

#### Overrides

ResServerTools.delete

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:145](https://github.com/isdk/ai-tool-sqlite.js/blob/3a8af7e372deb90905c47b3a58d4c8157346e3cc/src/sqlite-res.ts#L145)

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

#### Inherited from

ResServerTools.exportTo

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

#### Inherited from

ResServerTools.func

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:555

___

### get

▸ **get**(`«destructured»`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`KVSqliteResFuncParams`](../interfaces/KVSqliteResFuncParams.md) |

#### Returns

`T`

#### Overrides

ResServerTools.get

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:91](https://github.com/isdk/ai-tool-sqlite.js/blob/3a8af7e372deb90905c47b3a58d4c8157346e3cc/src/sqlite-res.ts#L91)

___

### getDocsFromDir

▸ **getDocsFromDir**(`dir`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `dir` | `string` |

#### Returns

`any`[]

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:66](https://github.com/isdk/ai-tool-sqlite.js/blob/3a8af7e372deb90905c47b3a58d4c8157346e3cc/src/sqlite-res.ts#L66)

___

### getFunc

▸ **getFunc**(`name?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Returns

`any`

#### Inherited from

ResServerTools.getFunc

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:67

___

### getFuncWithPos

▸ **getFuncWithPos**(`name?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Returns

`any`

#### Inherited from

ResServerTools.getFuncWithPos

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:72

___

### getMethodFromParams

▸ **getMethodFromParams**(`params`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `ResServerFuncParams` |

#### Returns

`undefined` \| `string`

#### Inherited from

ResServerTools.getMethodFromParams

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:554

___

### getProperties

▸ **getProperties**(): `PropDescriptors`

Get the defined attributes.

#### Returns

`PropDescriptors`

the descriptors of properties object

**`Abstract`**

#### Inherited from

ResServerTools.getProperties

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:98

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

#### Inherited from

ResServerTools.hasOwnProperty

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:140

___

### initDB

▸ **initDB**(`initDir?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `initDir` | `undefined` \| `string` |

#### Returns

`void`

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:55](https://github.com/isdk/ai-tool-sqlite.js/blob/3a8af7e372deb90905c47b3a58d4c8157346e3cc/src/sqlite-res.ts#L55)

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

#### Inherited from

ResServerTools.initialize

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:139

___

### intDBFromDir

▸ **intDBFromDir**(`dir`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dir` | `string` |

#### Returns

`void`

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:61](https://github.com/isdk/ai-tool-sqlite.js/blob/3a8af7e372deb90905c47b3a58d4c8157346e3cc/src/sqlite-res.ts#L61)

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

#### Inherited from

ResServerTools.isPrototypeOf

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

#### Inherited from

ResServerTools.isSame

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

#### Inherited from

ResServerTools.isStream

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:408

___

### list

▸ **list**(`options?`): `T`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`KVSqliteResFuncParams`](../interfaces/KVSqliteResFuncParams.md) |

#### Returns

`T`[]

#### Overrides

ResServerTools.list

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:84](https://github.com/isdk/ai-tool-sqlite.js/blob/3a8af7e372deb90905c47b3a58d4c8157346e3cc/src/sqlite-res.ts#L84)

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

#### Inherited from

ResServerTools.mergeTo

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

#### Inherited from

ResServerTools.obj2ArrParams

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:62

___

### post

▸ **post**(`model`): [`SqliteRunResult`](../interfaces/SqliteRunResult.md) \| [`SqliteRunResult`](../interfaces/SqliteRunResult.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | [`KVSqliteResFuncParams`](../interfaces/KVSqliteResFuncParams.md) |

#### Returns

[`SqliteRunResult`](../interfaces/SqliteRunResult.md) \| [`SqliteRunResult`](../interfaces/SqliteRunResult.md)[]

#### Overrides

ResServerTools.post

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:121](https://github.com/isdk/ai-tool-sqlite.js/blob/3a8af7e372deb90905c47b3a58d4c8157346e3cc/src/sqlite-res.ts#L121)

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

#### Inherited from

ResServerTools.propertyIsEnumerable

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:152

___

### put

▸ **put**(`model`): [`SqliteRunResult`](../interfaces/SqliteRunResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | [`KVSqliteResFuncParams`](../interfaces/KVSqliteResFuncParams.md) |

#### Returns

[`SqliteRunResult`](../interfaces/SqliteRunResult.md)

#### Overrides

ResServerTools.put

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:103](https://github.com/isdk/ai-tool-sqlite.js/blob/3a8af7e372deb90905c47b3a58d4c8157346e3cc/src/sqlite-res.ts#L103)

___

### register

▸ **register**(): `boolean` \| `ToolFunc`

#### Returns

`boolean` \| `ToolFunc`

#### Inherited from

ResServerTools.register

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:59

___

### run

▸ **run**(`params?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | `any` |

#### Returns

`Promise`\<`any`\>

#### Inherited from

ResServerTools.run

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:64

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

#### Inherited from

ResServerTools.runAs

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:65

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

#### Inherited from

ResServerTools.runAsSync

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:66

___

### runSync

▸ **runSync**(`params?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | `any` |

#### Returns

`any`

#### Inherited from

ResServerTools.runSync

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:63

___

### runWithPos

▸ **runWithPos**(`...params`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...params` | `any`[] |

#### Returns

`Promise`\<`any`\>

#### Inherited from

ResServerTools.runWithPos

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:70

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

#### Inherited from

ResServerTools.runWithPosAs

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:71

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

#### Inherited from

ResServerTools.runWithPosAsSync

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:69

___

### runWithPosSync

▸ **runWithPosSync**(`...params`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...params` | `any`[] |

#### Returns

`any`

#### Inherited from

ResServerTools.runWithPosSync

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:68

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

ResServerTools.toJSON

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:182

___

### toLocaleString

▸ **toLocaleString**(): `string`

Returns a date converted to a string using the current locale.

#### Returns

`string`

#### Inherited from

ResServerTools.toLocaleString

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

#### Inherited from

ResServerTools.toObject

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:181

___

### toString

▸ **toString**(): `string`

Returns a string representation of an object.

#### Returns

`string`

#### Inherited from

ResServerTools.toString

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:128

___

### unregister

▸ **unregister**(): `any`

#### Returns

`any`

#### Inherited from

ResServerTools.unregister

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:60

___

### updateDBFromDir

▸ **updateDBFromDir**(`dir?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dir` | `undefined` \| `string` |

#### Returns

`void`

#### Defined in

[packages/ai-tool-sqlite/src/sqlite-res.ts:70](https://github.com/isdk/ai-tool-sqlite.js/blob/3a8af7e372deb90905c47b3a58d4c8157346e3cc/src/sqlite-res.ts#L70)

___

### valueOf

▸ **valueOf**(): `Object`

Returns the primitive value of the specified object.

#### Returns

`Object`

#### Inherited from

ResServerTools.valueOf

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

#### Inherited from

ResServerTools.assign

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

#### Inherited from

ResServerTools.assign

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

#### Inherited from

ResServerTools.assign

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

#### Inherited from

ResServerTools.assign

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

#### Inherited from

ResServerTools.create

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

#### Inherited from

ResServerTools.create

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

#### Inherited from

ResServerTools.defineProperties

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

#### Inherited from

ResServerTools.defineProperty

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

#### Inherited from

ResServerTools.entries

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

#### Inherited from

ResServerTools.entries

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

#### Inherited from

ResServerTools.freeze

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

#### Inherited from

ResServerTools.freeze

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

#### Inherited from

ResServerTools.freeze

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

#### Inherited from

ResServerTools.fromEntries

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

#### Inherited from

ResServerTools.fromEntries

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

#### Inherited from

ResServerTools.get

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:44

___

### getAllByTag

▸ **getAllByTag**(`tagName`): `ToolFunc`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagName` | `string` |

#### Returns

`ToolFunc`[]

#### Inherited from

ResServerTools.getAllByTag

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:47

___

### getByTag

▸ **getByTag**(`tagName`): `undefined` \| `ToolFunc`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagName` | `string` |

#### Returns

`undefined` \| `ToolFunc`

#### Inherited from

ResServerTools.getByTag

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:46

___

### getFunc

▸ **getFunc**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Inherited from

ResServerTools.getFunc

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:50

___

### getFuncWithPos

▸ **getFuncWithPos**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Inherited from

ResServerTools.getFuncWithPos

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:53

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

#### Inherited from

ResServerTools.getOwnPropertyDescriptor

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

#### Inherited from

ResServerTools.getOwnPropertyDescriptors

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

#### Inherited from

ResServerTools.getOwnPropertyNames

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

#### Inherited from

ResServerTools.getOwnPropertySymbols

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:317

___

### getProperties

▸ **getProperties**(): `PropDescriptors`

get all properties descriptor include inherited.

#### Returns

`PropDescriptors`

#### Inherited from

ResServerTools.getProperties

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

#### Inherited from

ResServerTools.getPrototypeOf

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:167

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

#### Inherited from

ResServerTools.is

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

#### Inherited from

ResServerTools.isExtensible

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

#### Inherited from

ResServerTools.isFrozen

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

#### Inherited from

ResServerTools.isSealed

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

#### Inherited from

ResServerTools.keys

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

#### Inherited from

ResServerTools.keys

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:323

___

### list

▸ **list**(): `Funcs`

#### Returns

`Funcs`

#### Inherited from

ResServerTools.list

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:45

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

#### Inherited from

ResServerTools.preventExtensions

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

#### Inherited from

ResServerTools.register

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:54

▸ **register**(`func`, `options`): `boolean` \| `ToolFunc`

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | `Function` |
| `options` | `FuncItem` |

#### Returns

`boolean` \| `ToolFunc`

#### Inherited from

ResServerTools.register

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:55

▸ **register**(`name`, `options?`): `boolean` \| `ToolFunc`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` \| `Function` \| `ToolFunc` \| `FuncItem` |
| `options?` | `FuncItem` |

#### Returns

`boolean` \| `ToolFunc`

#### Inherited from

ResServerTools.register

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:56

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

#### Inherited from

ResServerTools.run

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:48

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

#### Inherited from

ResServerTools.runSync

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:49

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

#### Inherited from

ResServerTools.runWithPos

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:51

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

#### Inherited from

ResServerTools.runWithPosSync

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:52

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

#### Inherited from

ResServerTools.seal

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

#### Inherited from

ResServerTools.setApiRoot

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:404

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

#### Inherited from

ResServerTools.setPrototypeOf

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:337

___

### toJSON

▸ **toJSON**(): `Object`

#### Returns

`Object`

#### Inherited from

ResServerTools.toJSON

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:405

___

### unregister

▸ **unregister**(`name`): `undefined` \| `ToolFunc`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`undefined` \| `ToolFunc`

#### Inherited from

ResServerTools.unregister

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:57

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

#### Inherited from

ResServerTools.values

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

#### Inherited from

ResServerTools.values

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2017.object.d.ts:30
