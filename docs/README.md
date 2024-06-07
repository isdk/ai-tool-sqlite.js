@isdk/ai-tool-sqlite / [Exports](modules.md)

# ai-tool-sqlite

SQlite(>=3.45.0) key/value store

## KVSqliteResFunc

The AI RESTful ResServer API.

Parameters:

* dbPath: Path to the database file.

## SqliteStore Tool API

An AI SqliteStore Tool function via `createSqliteStore` represents a database.

## KVSqlite Class

The KVSqlite class serves as an extension of the Database class from the better-sqlite3 library, tailored specifically for managing key-value pairs within a SQLite database. It introduces a structured way to interact with and manipulate these pairs, providing methods for creation, retrieval, update, and deletion operations. The class integrates several features and design choices that enhance its functionality and flexibility:

### Interface and Type Definitions

* `IKVObjItem`: Defines the structure of a single key-value pair object, which must have an `_id` property of type string and can contain additional properties of any type.
* `IKVSetOptions`: Extends Database.Options from the better-sqlite3 library to include custom options specific to the KVSqlite class, such as id, location, collection, collections, and overwrite. These options allow for more granular control over database connection details, collection management, and data manipulation behavior.
* `IKVCollections`: Represents a dictionary-like mapping where keys are collection names (strings) and values are instances of the KVSqliteCollection class.

### Constructor

* Accepts two parameters: filename (optional, either a string or Buffer) representing the path to the SQLite database file, and options (also optional) conforming to the IKVSetOptions interface.
* Initializes a base super instance using the Database constructor with the given filename and options.
* Sets the store `id` property based on the `id` option provided, if present.
* If the database is not opened in read-only mode (!this.readonly), it creates one or more collections according to the collections and collection options, ensuring that the default collection named 'kv' always exists.

### Collections Management

* Maintains an internal collections property of type IKVCollections, which holds references to instantiated KVSqliteCollection objects corresponding to different named collections.
* Offers a create method to instantiate a new KVSqliteCollection instance for a given name and store it in the collections map if it does not already exist.

### Key-Value Pair Operations

* Provides a set of CRUD (Create, Read, Update, Delete) methods acting on key-value pairs within specified collections:
  * `set(obj: IKVObjItem, options?: IKVSetOptions)`: Inserts or updates a key-value pair (obj) in the collection specified by options.collection or the default collection 'kv'. Delegates the operation to the corresponding `KVSqliteCollection.set()` method.
  * `get(_id: string, options?: IKVSetOptions)`: Retrieves a key-value pair identified by `_id` from the specified collection or the default collection. Returns the retrieved item wrapped in an `IKVObjItem` interface.
  * `del(_id?: string, options?: IKVSetOptions)`: Deletes a key-value pair with the given `_id` from the specified collection or all items in the default collection if no `_id` is provided. Delegates the operation to the corresponding `KVSqliteCollection.del()` method.
  * `isExists(_id: string, options?: IKVSetOptions)`: Checks whether a key-value pair with the given `_id` exists in the specified collection or the default collection. Returns a boolean indicating presence or absence.
  * `count(query?: string, options?: IKVSetOptions)`: Counts the number of key-value pairs in the specified collection or the default collection, optionally applying a filter based on a LIKE query. Delegates the operation to the corresponding `KVSqliteCollection.count()` method.

In summary, the KVSqlite class provides a comprehensive and customizable interface for managing key-value pairs stored in a SQLite database. It leverages the underlying better-sqlite3 library while introducing specialized functionality through its own collection-oriented API, making it suitable for applications requiring a lightweight, persistent key-value storage solution with advanced querying capabilities.

## KVSqliteCollection Class

The `KVSqliteCollection` class represents a container for managing a particular collection of key-value pairs within the `KVSqlite` database system. This class encapsulates the logic necessary for performing various operations on the collection, including adding, updating, retrieving, deleting, checking existence, and counting items. Key aspects of the `KVSqliteCollection` class are detailed below:

### Internal State and Initialization

The KVSqliteCollection class maintains the following internal states:

1. `Name`: A string variable received and stored via the constructor, representing the unique name of the collection. This serves as a crucial identifier distinguishing the current `KVSqliteCollection` instance from others.
2. `Database Reference`: An instance reference to the `KVSqlite` class passed as a parameter to and stored in the constructor. This reference enables the `KVSqliteCollection` to interact directly with the underlying database context.
3. `Prepared Statements`: Initializes a set of precompiled SQL statements encapsulating fundamental operations on the key-value pair collection, such as adding, updating, checking existence, fetching, deleting individual items, deleting all items, and counting items. Each precompiled statement is stored as a class property for efficient execution later. Specifically:
   * `preAdd`: Inserts a new key-value pair.
   * `preUpdate`: Updates an existing key-value pair.
   * `preExists`: Checks if a key-value pair with a specified `_id` exists.
   * `preGet`: Retrieves the value of a key-value pair based on its `_id`.
   * `preDel`: Deletes a key-value pair with a specified `_id`.
   * `preDelAll`: Deletes all key-value pairs in the collection.
   * `preCount`: Calculates the total number of key-value pairs in the collection.
   * `preCountW`: Counts key-value pairs matching a LIKE query condition.

During the KVSqliteCollection class construction, the following initialization steps occur:

1. **Table Creation**: If the associated `KVSqlite` instance is not in read-only mode, the constructor calls the `createTableSql` function to generate a SQL statement for creating the table and executes it using `db.prepare().run()`. This ensures that a table with the same name as the current collection is created in the database and has the expected structure for storing key-value pair data.
2. **Prepared Statements Initialization**: The constructor proceeds to initialize all precompiled SQL statements. Each statement is dynamically constructed based on the collection name, ensuring it operates on the correct table. These statements are created using `db.prepare()` and assigned to their corresponding class properties. As a result, when executing operations like inserts, updates, or queries, precompiled statements can be invoked directly, enhancing efficiency and mitigating potential SQL injection risks.

The `KVSqliteCollection` class holds an exclusive collection name, a reference to the associated database, and a set of precompiled SQL statements in its internal state. During construction, it first ensures that a database table corresponding to the collection name is created, followed by initializing all precompiled statements to efficiently handle subsequent key-value pair operations. This design enables the `KVSqliteCollection` to function as an independent and efficient unit managing a specific key-value pair collection within the `KVSqlite` database.

### Prepared Statements

To optimize performance and reduce repetitive parsing overhead, the `KVSqliteCollection` class declares and initializes a series of SQLite prepared statements at construction time. These statements correspond to common database operations relevant to managing key-value pairs, such as inserting, updating, checking existence, fetching, deleting individual items, deleting all items, and counting items. Each statement is bound to a specific property (e.g., `preAdd`, `preUpdate`, `preExists`, etc.) and is constructed using the provided name and appropriate SQL syntax. Prepared statements enable efficient execution of these operations throughout the lifetime of the `KVSqliteCollection` instance.

### Key-Value Pair Operations On a Collection

* **Setting Items**: The `_set` method is responsible for handling the insertion or update of a key-value pair. It accepts an `IKVObjItem` (obj) and optional IKVSetOptions (options). Internally, it extracts the `_id` from the input object, removes it temporarily, and then checks if a record with the same `_id` already exists in the collection. If it does, the method determines whether to overwrite the existing record entirely (`options.overwrite === true`) or merge the new properties into the existing record (`options.overwrite !== false`). In both cases, the updated record is serialized as JSON and passed to the appropriate prepared statement (preUpdate or preAdd) for execution against the database.
* **Getting Items**: The get method retrieves a single key-value pair by its `_id`. It uses the preGet prepared statement to execute a SELECT query, deserializes the returned JSON value, adds the `_id` back to the result, and returns the reconstructed `IKVObjItem`.
* **Deleting Items**: The del method supports deleting a specific key-value pair by its `_id` or removing all items from the collection when no `_id` is provided. It invokes the corresponding prepared statements (`preDel` or `preDelAll`) accordingly.
* **Checking Existence**: The `isExists` method queries the database using the `preExists` prepared statement to determine if a key-value pair with the given `_id` exists in the collection. It returns a boolean result.
* **Counting Items**: The count method allows for counting the number of items in the collection, optionally filtering by a `LIKE` query when provided. It utilizes the `preCount` or `preCountW` prepared statements based on the presence of a query parameter.

### Transaction Support

Although not directly mentioned, the `set` method wraps the call to `_set` within a transaction provided by the parent `KVSqlite` instance. This ensures atomicity for the insert/update operation, guarding against partial updates or inconsistent state in case of failures during the transaction.

In summary, the `KVSqliteCollection` class serves as a dedicated manager for a specific collection of key-value pairs within the KVSqlite database system. It handles the low-level database interactions via prepared statements, provides a clean API for CRUD operations on key-value pairs, and ensures data consistency through transactional support. By maintaining a mapping of `KVSqliteCollection` instances within the KVSqlite class, multiple collections can be efficiently managed and accessed within the same SQLite database.
