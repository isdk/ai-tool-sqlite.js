[**@isdk/ai-tool-sqlite**](../README.md)

***

[@isdk/ai-tool-sqlite](../globals.md) / KVSqlite

# Class: KVSqlite

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:741

Represents a SQLite database with extended functionality for managing collections and documents.

This class extends the `Database` class and provides additional methods for creating, managing, and querying collections.
It supports operations such as creating collections, inserting and retrieving documents, and handling full-text search.

## Extends

- `Database`

## Constructors

### Constructor

> **new KVSqlite**(`filename?`, `options?`): `KVSqlite`

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:769

Constructs a new instance of KVSqlite.

This constructor initializes a new KVSqlite instance with the specified filename and options.
It handles the creation of directories, prepares SQL statements, sets serialization and deserialization options,
and initializes collections as specified in the options.

#### Parameters

##### filename?

The filename or buffer for the SQLite database file.

`string` | `Buffer`\<`ArrayBufferLike`\>

##### options?

[`IKVSetOptions`](../interfaces/IKVSetOptions.md) & [`IKVCreateOptions`](../interfaces/IKVCreateOptions.md) & [`IKVCreateExOptions`](../interfaces/IKVCreateExOptions.md)

Optional settings including serialization, deserialization, ID, and collection configurations.

#### Returns

`KVSqlite`

#### Overrides

`Database.constructor`

## Properties

### collections

> **collections**: [`IKVCollections`](../interfaces/IKVCollections.md)

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:750

***

### ftsLoaded

> **ftsLoaded**: `object`

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:747

#### Index Signature

\[`lang`: `string`\]: `boolean`

***

### id

> **id**: `undefined` \| `string`

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:745

The unique id of the database.

***

### inTransaction

> **inTransaction**: `boolean`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/@types+better-sqlite3@7.6.13/node\_modules/@types/better-sqlite3/index.d.ts:57

#### Inherited from

`Database.inTransaction`

***

### memory

> **memory**: `boolean`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/@types+better-sqlite3@7.6.13/node\_modules/@types/better-sqlite3/index.d.ts:53

#### Inherited from

`Database.memory`

***

### name

> **name**: `string`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/@types+better-sqlite3@7.6.13/node\_modules/@types/better-sqlite3/index.d.ts:55

#### Inherited from

`Database.name`

***

### open

> **open**: `boolean`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/@types+better-sqlite3@7.6.13/node\_modules/@types/better-sqlite3/index.d.ts:56

#### Inherited from

`Database.open`

***

### preIsExists

> **preIsExists**: `Statement`

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:746

***

### readonly

> **readonly**: `boolean`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/@types+better-sqlite3@7.6.13/node\_modules/@types/better-sqlite3/index.d.ts:54

#### Inherited from

`Database.readonly`

***

### serdeOptions

> **serdeOptions**: [`IKVSerdeOptions`](../interfaces/IKVSerdeOptions.md)

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:751

***

### SqliteError

> `static` **SqliteError**: *typeof* `SqliteErrorClass`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/@types+better-sqlite3@7.6.13/node\_modules/@types/better-sqlite3/index.d.ts:97

#### Inherited from

`Database.SqliteError`

## Methods

### \_tableInfo()

> **\_tableInfo**(`options?`): `undefined` \| `Required`\<[`IKVFieldOptions`](../interfaces/IKVFieldOptions.md)\>

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1001

#### Parameters

##### options?

[`IKVSetOptions`](../interfaces/IKVSetOptions.md)

#### Returns

`undefined` \| `Required`\<[`IKVFieldOptions`](../interfaces/IKVFieldOptions.md)\>

***

### aggregate()

> **aggregate**\<`T`\>(`name`, `options`): `this`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/@types+better-sqlite3@7.6.13/node\_modules/@types/better-sqlite3/index.d.ts:74

#### Type Parameters

##### T

`T`

#### Parameters

##### name

`string`

##### options

`RegistrationOptions` & `object`

#### Returns

`this`

#### Inherited from

`Database.aggregate`

***

### backup()

> **backup**(`destinationFile`, `options?`): `Promise`\<`BackupMetadata`\>

Defined in: @isdk/ai-tools/node\_modules/.pnpm/@types+better-sqlite3@7.6.13/node\_modules/@types/better-sqlite3/index.d.ts:87

#### Parameters

##### destinationFile

`string`

##### options?

`BackupOptions`

#### Returns

`Promise`\<`BackupMetadata`\>

#### Inherited from

`Database.backup`

***

### buildWhereClause()

> **buildWhereClause**(`filter`, `options?`): `string`

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:969

Builds a SQL WHERE clause from the provided filter conditions for a specified collection.

This function constructs a SQL WHERE clause based on the given filter conditions and options.
If no collection is specified, it defaults to the `DefaultKVCollection`.

#### Parameters

##### filter

`Record`\<`string`, `any`\>

A record of key-value pairs representing the filter conditions.

##### options?

[`IKVSetOptions`](../interfaces/IKVSetOptions.md)

Optional settings including the collection name and other options.

#### Returns

`string`

A string representing the SQL WHERE clause.

***

### bulkDocs()

> **bulkDocs**(`objs`, `options?`): [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)[]

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:864

Inserts or updates multiple documents in a specified collection.

This function performs a bulk operation to insert or update multiple documents in the specified collection.
If no collection is specified, it defaults to the `DefaultKVCollection`.

#### Parameters

##### objs

[`IKVObjItem`](../interfaces/IKVObjItem.md)[]

An array of objects representing the documents to insert or update.

##### options?

[`IKVSetOptions`](../interfaces/IKVSetOptions.md)

Optional settings including the collection name and other options.

#### Returns

[`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)[]

An array of results from the insert or update operations.

***

### close()

> **close**(): `this`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/@types+better-sqlite3@7.6.13/node\_modules/@types/better-sqlite3/index.d.ts:85

#### Returns

`this`

#### Inherited from

`Database.close`

***

### count()

> **count**(`query?`, `options?`): `number`

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:923

Counts the number of records in a specified collection based on the provided query.

This function returns the count of records that match the specified query in the specified collection.
If no collection is specified, it defaults to the `DefaultKVCollection`.

#### Parameters

##### query?

An optional string or object representing the query conditions.

`string` | `Record`\<`string`, `any`\>

##### options?

[`IKVSetOptions`](../interfaces/IKVSetOptions.md)

Optional settings including the collection name.

#### Returns

`number`

The number of records matching the query.

***

### create()

> **create**(`name`, `options?`): `undefined` \| [`KVSqliteCollection`](KVSqliteCollection.md)

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:796

Creates a new collection in the database.

This function creates a new collection (table) with the specified name and options.
If the collection already exists, it does nothing and returns the existing collection instance.

#### Parameters

##### name

`string`

The name of the collection to create.

##### options?

Optional settings for the collection, including fields, FTS configuration, and JSONB usage.

[`IKVCreateOptions`](../interfaces/IKVCreateOptions.md) | [`IKVCreateExOptions`](../interfaces/IKVCreateExOptions.md)

#### Returns

`undefined` \| [`KVSqliteCollection`](KVSqliteCollection.md)

The newly created collection instance.

***

### createCollections()

> **createCollections**(`collections`, `options?`): `void`

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:780

Creates multiple collections in the database.

This function creates multiple collections (tables) based on the provided array of collection names or configuration objects.
Each element in the array can be either a string representing the collection name or an object containing collection options.
If a collection already exists, it does nothing for that collection.

#### Parameters

##### collections

(`string` \| [`IKVCreateOptions`](../interfaces/IKVCreateOptions.md) \| [`IKVCreateExOptions`](../interfaces/IKVCreateExOptions.md))[]

An array of collection names or configuration objects.

##### options?

Optional default settings for the collections, used if individual collection options are not provided.

[`IKVCreateOptions`](../interfaces/IKVCreateOptions.md) | [`IKVCreateExOptions`](../interfaces/IKVCreateExOptions.md)

#### Returns

`void`

***

### createIndex()

> **createIndex**(`indexName`, `fields`, `options?`): [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:936

#### Parameters

##### indexName

`string`

##### fields

`string` | `string`[]

##### options?

[`IKVSetOptions`](../interfaces/IKVSetOptions.md)

#### Returns

[`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)

***

### createJsonIndex()

> **createJsonIndex**(`indexName`, `fields`, `options?`): [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:935

#### Parameters

##### indexName

`string`

##### fields

`string` | `string`[]

##### options?

[`IKVSetOptions`](../interfaces/IKVSetOptions.md)

#### Returns

[`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)

***

### defaultSafeIntegers()

> **defaultSafeIntegers**(`toggleState?`): `this`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/@types+better-sqlite3@7.6.13/node\_modules/@types/better-sqlite3/index.d.ts:86

#### Parameters

##### toggleState?

`boolean`

#### Returns

`this`

#### Inherited from

`Database.defaultSafeIntegers`

***

### del()

> **del**(`_id?`, `options?`): [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md) \| [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)[]

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:901

Deletes records from a specified collection based on the provided ID, array of IDs, or filter conditions.

This function deletes records from the specified collection using the provided ID, array of IDs, or filter conditions.
If no collection is specified, it defaults to the `DefaultKVCollection`.

#### Parameters

##### \_id?

An optional ID, array of IDs, or filter object representing the records to delete.

[`IKVDocumentId`](../type-aliases/IKVDocumentId.md) | [`IKVDocumentId`](../type-aliases/IKVDocumentId.md)[] | `Record`\<`string`, `any`\>

##### options?

[`IKVSetOptions`](../interfaces/IKVSetOptions.md)

Optional settings including the collection name.

#### Returns

[`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md) \| [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)[]

The result of the delete operation(s).

***

### drop()

> **drop**(`name`): `void`

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:816

Drops a specified collection from the database.

This function removes a collection (table) from the database. It throws an error if the collection is a system collection
(e.g., `SYS_KV_COLLECTION` or `DefaultKVCollection`). It also cleans up related entries in the system collection.

#### Parameters

##### name

`string`

The name of the collection to drop.

#### Returns

`void`

#### Throws

An error if the collection is a system collection.

***

### dump()

> **dump**(): `string`

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1008

Generates a SQL dump string for the database.

#### Returns

`string`

The SQL dump string

***

### enableFts()

> **enableFts**(`collection?`, `options?`): `void`

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1010

#### Parameters

##### collection?

`string`

##### options?

[`IKVCreateFtsOptions`](../interfaces/IKVCreateFtsOptions.md)

#### Returns

`void`

***

### exec()

> **exec**(`source`): `this`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/@types+better-sqlite3@7.6.13/node\_modules/@types/better-sqlite3/index.d.ts:63

#### Parameters

##### source

`string`

#### Returns

`this`

#### Inherited from

`Database.exec`

***

### function()

#### Call Signature

> **function**(`name`, `cb`): `this`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/@types+better-sqlite3@7.6.13/node\_modules/@types/better-sqlite3/index.d.ts:65

##### Parameters

###### name

`string`

###### cb

(...`params`) => `any`

##### Returns

`this`

##### Inherited from

`Database.function`

#### Call Signature

> **function**(`name`, `options`, `cb`): `this`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/@types+better-sqlite3@7.6.13/node\_modules/@types/better-sqlite3/index.d.ts:69

##### Parameters

###### name

`string`

###### options

`RegistrationOptions`

###### cb

(...`params`) => `any`

##### Returns

`this`

##### Inherited from

`Database.function`

***

### get()

> **get**(`_id`, `options?`): [`IKVObjItem`](../interfaces/IKVObjItem.md)

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:876

Retrieves the value of an extended property for a document in a specified collection based on the specified property name.

This function fetches the value of a specific property for a document using the provided document ID and property name.
If no collection is specified, it defaults to the `DefaultKVCollection`.

#### Parameters

##### \_id

[`IKVDocumentId`](../type-aliases/IKVDocumentId.md)

##### options?

[`IKVSetOptions`](../interfaces/IKVSetOptions.md)

Optional settings including the collection name.

#### Returns

[`IKVObjItem`](../interfaces/IKVObjItem.md)

The value of the specified property.

***

### getCollection()

> **getCollection**(`name`): [`KVSqliteCollection`](KVSqliteCollection.md)

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:806

Retrieves a collection by name.

This function returns the collection instance for the specified name. If the collection does not exist in memory,
it checks if the collection exists in the database and initializes it if necessary.

#### Parameters

##### name

`string`

The name of the collection to retrieve.

#### Returns

[`KVSqliteCollection`](KVSqliteCollection.md)

The collection instance if it exists, otherwise `undefined`.

***

### getExtend()

> **getExtend**(`docId`, `aPropName?`, `options?`): `any`

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:877

#### Parameters

##### docId

[`IKVDocumentId`](../type-aliases/IKVDocumentId.md)

##### aPropName?

`string`

##### options?

[`IKVSetOptions`](../interfaces/IKVSetOptions.md)

#### Returns

`any`

***

### getExtends()

> **getExtends**(`docId`, `aPropName?`, `options?`): [`IKVObjItem`](../interfaces/IKVObjItem.md)

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:890

Retrieves extended properties for a document in a specified collection based on the specified property names or patterns.

This function fetches properties for a document using the provided document ID and property names or patterns.
It supports retrieving single or multiple properties and can return either a single value or an object containing all properties.
If no collection is specified, it defaults to the `DefaultKVCollection`.

#### Parameters

##### docId

[`IKVDocumentId`](../type-aliases/IKVDocumentId.md)

The ID of the document.

##### aPropName?

An optional string or array of strings representing the property names or patterns.

`string` | `string`[]

##### options?

[`IKVSetOptions`](../interfaces/IKVSetOptions.md)

Optional settings including the collection name and whether to return a single value.

#### Returns

[`IKVObjItem`](../interfaces/IKVObjItem.md)

The retrieved properties as an object or a single value if `singleValue` is true.

***

### getSerdeOptions()

> **getSerdeOptions**(`options?`): [`IKVSerdeOptions`](../interfaces/IKVSerdeOptions.md)

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:785

#### Parameters

##### options?

`any`

#### Returns

[`IKVSerdeOptions`](../interfaces/IKVSerdeOptions.md)

***

### getSysConfig()

> **getSysConfig**(`key`, `collection?`): `any`

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:783

#### Parameters

##### key

`string`

##### collection?

`string`

#### Returns

`any`

***

### isCollectionExists()

> **isCollectionExists**(`collection`): `boolean`

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:988

Checks if a collection (table) exists in the database.

This function determines whether a specified collection (table) exists in the database.

#### Parameters

##### collection

`string`

The name of the collection to check.

#### Returns

`boolean`

A boolean indicating whether the collection exists.

***

### isExists()

> **isExists**(`_id`, `options?`): `boolean`

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:912

Checks if a record with the specified ID exists in a specified collection.

This function determines whether a record with the given ID exists in the specified collection.
If no collection is specified, it defaults to the `DefaultKVCollection`.

#### Parameters

##### \_id

[`IKVDocumentId`](../type-aliases/IKVDocumentId.md)

The ID of the record to check.

##### options?

[`IKVSetOptions`](../interfaces/IKVSetOptions.md)

Optional settings including the collection name.

#### Returns

`boolean`

A boolean indicating whether the record exists.

***

### isManagedTable()

> **isManagedTable**(`name`): `undefined` \| `false` \| [`IKVFieldOption`](../interfaces/IKVFieldOption.md)

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1009

#### Parameters

##### name

`string`

#### Returns

`undefined` \| `false` \| [`IKVFieldOption`](../interfaces/IKVFieldOption.md)

***

### isTypeExists()

> **isTypeExists**(`type`, `name`): `boolean`

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:979

Checks if a database object of a specified type and name exists.

This function determines whether a specified database object (e.g., table, index) exists in the database.

#### Parameters

##### type

`string`

The type of the database object (e.g., 'table', 'index').

##### name

`string`

The name of the database object to check.

#### Returns

`boolean`

A boolean indicating whether the database object exists.

***

### list()

> **list**(`query?`, `options?`): [`IKVObjItem`](../interfaces/IKVObjItem.md)[]

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:934

Lists records from a specified collection based on the provided query and options.

This function retrieves records from the specified collection, applying optional filters, sorting, pagination,
and field selection. If no collection is specified, it defaults to the `DefaultKVCollection`.

#### Parameters

##### query?

A string or object representing the query conditions.

`string` | [`IKVSetOptions`](../interfaces/IKVSetOptions.md)

##### options?

[`IKVSetOptions`](../interfaces/IKVSetOptions.md)

Optional settings including the collection name, size, page, sort order, and field names.

#### Returns

[`IKVObjItem`](../interfaces/IKVObjItem.md)[]

An array of objects representing the listed records.

***

### loadExtension()

> **loadExtension**(`path`): `this`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/@types+better-sqlite3@7.6.13/node\_modules/@types/better-sqlite3/index.d.ts:84

#### Parameters

##### path

`string`

#### Returns

`this`

#### Inherited from

`Database.loadExtension`

***

### loadFtsLanguage()

> **loadFtsLanguage**(`options?`): `void`

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:989

#### Parameters

##### options?

[`IKVCreateFtsOptions`](../interfaces/IKVCreateFtsOptions.md)

#### Returns

`void`

***

### pragma()

> **pragma**(`source`, `options?`): `unknown`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/@types+better-sqlite3@7.6.13/node\_modules/@types/better-sqlite3/index.d.ts:64

#### Parameters

##### source

`string`

##### options?

`PragmaOptions`

#### Returns

`unknown`

#### Inherited from

`Database.pragma`

***

### prepare()

> **prepare**\<`BindParameters`, `Result`\>(`source`): `BindParameters` *extends* `unknown`[] ? `Statement`\<`BindParameters`\<`BindParameters`\>, `Result`\> : `Statement`\<\[`BindParameters`\], `Result`\>

Defined in: @isdk/ai-tools/node\_modules/.pnpm/@types+better-sqlite3@7.6.13/node\_modules/@types/better-sqlite3/index.d.ts:59

#### Type Parameters

##### BindParameters

`BindParameters` *extends* \{ \} \| `unknown`[] = `unknown`[]

##### Result

`Result` = `unknown`

#### Parameters

##### source

`string`

#### Returns

`BindParameters` *extends* `unknown`[] ? `Statement`\<`BindParameters`\<`BindParameters`\>, `Result`\> : `Statement`\<\[`BindParameters`\], `Result`\>

#### Inherited from

`Database.prepare`

***

### search()

> **search**(`filter`, `options?`): [`IKVObjItem`](../interfaces/IKVObjItem.md)[]

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:958

Searches for records in a specified collection based on the provided filter conditions.

This function performs a search operation on the specified collection using the given filter conditions and options.
If no collection is specified, it defaults to the `DefaultKVCollection`.

#### Parameters

##### filter

`Record`\<`string`, `any`\>

A record of key-value pairs representing the filter conditions.

##### options?

[`IKVSetOptions`](../interfaces/IKVSetOptions.md)

Optional settings including the collection name and other search options.

#### Returns

[`IKVObjItem`](../interfaces/IKVObjItem.md)[]

An array of objects representing the search results.

***

### searchEx()

> **searchEx**(`query`, `options?`): [`IKVObjItem`](../interfaces/IKVObjItem.md)[]

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:947

Executes an advanced search query on a specified collection.

This function performs an advanced search operation on the specified collection using the provided query string or object and options.
If no collection is specified, it defaults to the `DefaultKVCollection`.

#### Parameters

##### query

A string or record of key-value pairs representing the search query.

`string` | `Record`\<`string`, `string`\>

##### options?

[`IKVSetOptions`](../interfaces/IKVSetOptions.md)

Optional settings including the collection name and other search options.

#### Returns

[`IKVObjItem`](../interfaces/IKVObjItem.md)[]

An array of objects representing the search results.

***

### searchFts()

> **searchFts**(`query`, `options?`): `object`[]

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1021

Searches the full-text search (FTS) index for records matching the provided query.

This function delegates the search operation to the specified collection's `searchFts` method.
If no collection is specified in the options, it defaults to the `DefaultKVCollection`.

#### Parameters

##### query

A record or array of records representing the search query.

`Record`\<`string`, `any`\> | `Record`\<`string`, `any`\>[]

##### options?

[`IKVSetOptions`](../interfaces/IKVSetOptions.md)

Optional settings including the collection name and other search options.

#### Returns

`object`[]

An array of objects representing the search results.

***

### serialize()

> **serialize**(`options?`): `Buffer`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/@types+better-sqlite3@7.6.13/node\_modules/@types/better-sqlite3/index.d.ts:90

#### Parameters

##### options?

`SerializeOptions`

#### Returns

`Buffer`

#### Inherited from

`Database.serialize`

***

### set()

> **set**(`docId`, `obj?`, `options?`): [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:828

Sets or updates a document in a specified collection.

This function inserts or updates a document in the specified collection using the provided document ID and object.
It supports different parameter configurations and defaults to the `DefaultKVCollection` if no collection is specified.

#### Parameters

##### docId

The ID of the document or an object representing the document.

[`IKVObjItem`](../interfaces/IKVObjItem.md) | [`IKVDocumentId`](../type-aliases/IKVDocumentId.md)

##### obj?

An optional object representing the document or options.

[`IKVObjItem`](../interfaces/IKVObjItem.md) | [`IKVSetOptions`](../interfaces/IKVSetOptions.md)

##### options?

[`IKVSetOptions`](../interfaces/IKVSetOptions.md)

Optional settings including the collection name and other options.

#### Returns

[`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)

The result of the set operation.

***

### setExtend()

> **setExtend**(`docId`, `key`, `value`, `options?`): [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:841

Sets an extended property for a document in a specified collection.

This function updates or inserts a specific property for a document using the provided document ID, key, and value.
If no collection is specified, it defaults to the `DefaultKVCollection`.

#### Parameters

##### docId

[`IKVDocumentId`](../type-aliases/IKVDocumentId.md)

The ID of the document.

##### key

`string`

The key of the property to set.

##### value

`any`

The value of the property to set.

##### options?

[`IKVSetOptions`](../interfaces/IKVSetOptions.md)

Optional settings including the collection name and other options.

#### Returns

[`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)

The result of the set operation.

***

### setExtends()

> **setExtends**(`docId`, `aDoc`, `options?`): [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)[]

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:853

Sets multiple extended properties for a document in a specified collection.

This function updates or inserts multiple properties for a document using the provided document ID and an object of properties.
If no collection is specified, it defaults to the `DefaultKVCollection`.

#### Parameters

##### docId

[`IKVDocumentId`](../type-aliases/IKVDocumentId.md)

The ID of the document.

##### aDoc

`any`

An object containing the properties to set.

##### options?

[`IKVSetOptions`](../interfaces/IKVSetOptions.md)

Optional settings including the collection name and other options.

#### Returns

[`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)[]

An array of results from the set operations.

***

### setSysConfig()

> **setSysConfig**(`key`, `value`, `collection?`): `undefined` \| [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:784

#### Parameters

##### key

`string`

##### value

`any`

##### collection?

`string`

#### Returns

`undefined` \| [`KVSqliteRunResult`](../interfaces/KVSqliteRunResult.md)

***

### sqlSchema()

#### Call Signature

> **sqlSchema**(`options?`): [`ISqliteSqlMasterFields`](../interfaces/ISqliteSqlMasterFields.md)[]

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1002

##### Parameters

###### options?

[`ISqliteSqlSchemaOptions`](../interfaces/ISqliteSqlSchemaOptions.md)

##### Returns

[`ISqliteSqlMasterFields`](../interfaces/ISqliteSqlMasterFields.md)[]

#### Call Signature

> **sqlSchema**(`name`, `options?`): [`ISqliteSqlMasterFields`](../interfaces/ISqliteSqlMasterFields.md)

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1003

##### Parameters

###### name

`string`

###### options?

[`ISqliteSqlSchemaOptions`](../interfaces/ISqliteSqlSchemaOptions.md)

##### Returns

[`ISqliteSqlMasterFields`](../interfaces/ISqliteSqlMasterFields.md)

***

### table()

> **table**(`name`, `options`): `this`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/@types+better-sqlite3@7.6.13/node\_modules/@types/better-sqlite3/index.d.ts:88

#### Parameters

##### name

`string`

##### options

`VirtualTableOptions`

#### Returns

`this`

#### Inherited from

`Database.table`

***

### tableInfo()

> **tableInfo**(`collection?`, `options?`): `undefined` \| `Required`\<[`IKVFieldOptions`](../interfaces/IKVFieldOptions.md)\>

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1000

Retrieves information about the table structure for a specified collection.

This function fetches detailed information about the table structure, including field names, types, constraints, and default values.
If no collection is specified, it defaults to the `DefaultKVCollection`.

#### Parameters

##### collection?

The name of the collection or an object containing options.

`string` | [`IKVSetOptions`](../interfaces/IKVSetOptions.md)

##### options?

[`IKVSetOptions`](../interfaces/IKVSetOptions.md)

Optional settings including the collection name and other options.

#### Returns

`undefined` \| `Required`\<[`IKVFieldOptions`](../interfaces/IKVFieldOptions.md)\>

An object containing detailed information about the table fields.

***

### transaction()

> **transaction**\<`F`\>(`fn`): `Transaction`\<`F`\>

Defined in: @isdk/ai-tools/node\_modules/.pnpm/@types+better-sqlite3@7.6.13/node\_modules/@types/better-sqlite3/index.d.ts:62

#### Type Parameters

##### F

`F` *extends* `VariableArgFunction`

#### Parameters

##### fn

`F`

#### Returns

`Transaction`\<`F`\>

#### Inherited from

`Database.transaction`

***

### tryUpgradeVer()

> **tryUpgradeVer**(`ver?`): `void`

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:781

#### Parameters

##### ver?

`number`

#### Returns

`void`

***

### unsafeMode()

> **unsafeMode**(`unsafe?`): `this`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/@types+better-sqlite3@7.6.13/node\_modules/@types/better-sqlite3/index.d.ts:89

#### Parameters

##### unsafe?

`boolean`

#### Returns

`this`

#### Inherited from

`Database.unsafeMode`

***

### usingJsonb()

> **usingJsonb**(`collection?`): `undefined` \| `boolean`

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:782

#### Parameters

##### collection?

`string`

#### Returns

`undefined` \| `boolean`

***

### dump()

> `static` **dump**(`db`): `string`

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:758

Generates a SQL dump string for a given SQLite database.

#### Parameters

##### db

The path to the SQLite database file or a SQLite database instance.

`string` | `Database`

#### Returns

`string`

The SQL dump string.
