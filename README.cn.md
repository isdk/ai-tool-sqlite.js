# ai-tool-sqlite

SQlite(>=3.45.0) key/value store

## KVSqliteResFunc

以AI 资源 ResServer API形式提供, 数据库资源: `/sqlite/db`

参数:

* dbPath: 数据库文件路径

## SqliteStore Tool API

通过`createSqliteStore`创建注册一个SqliteStore函数就是一个数据库,

## KVSqlite Class

KVSqlite类是对`better-sqlite3`库中Database类的扩展，专为在SQLite数据库中管理键值对而设计。它引入了一种结构化的方式来与这些键值对交互并进行操作，提供了创建、检索、更新和删除操作的方法。该类集成了多种功能和设计选择，以增强其功能性和灵活性：

### Interface and Type Definitions

* `IKVObjItem`: 定义单个键值对对象的结构，必须包含一个类型为string的`_id`属性，并可包含任意类型的其他属性。
* `IKVSetOptions`: 扩展了better-sqlite3库中Database.Options接口，加入了针对KVSqlite类特有的选项，如id、location、collection、collections和overwrite。这些选项允许对数据库连接细节、集合管理及数据操作行为进行更细致的控制。
* `IKVCollections`: 表示类似字典的映射，其中键为集合名称（字符串），值为KVSqliteCollection类的实例。

### Constructor

* 接收两个参数：filename（可选，为字符串或Buffer类型）代表SQLite数据库文件路径，options（同样可选）需符合IKVSetOptions接口。
* 使用给定的filename和options调用Database构造函数初始化基础super实例。
* 如果提供store `id`选项，则基于此设置`id`属性。
* 若数据库未以只读模式打开（!this.readonly），则根据collections和collection选项创建一个或多个集合，确保始终存在名为'kv'的默认集合。

### Collections Management

* 维护一个内部`collections`属性，类型为`IKVCollections`，其中保存着对应于不同命名集合的已实例化的`KVSqliteCollection`对象引用。
* 提供一个create方法，对于给定的name创建一个新的KVSqliteCollection实例并将其存储在collections映射中，若该集合尚不存在。

### Key-Value Pair Operations

* 提供一系列CRUD（增删改查）方法，对指定集合内的键值对执行操作：
  * `set(obj: IKVObjItem, options?: IKVSetOptions)`:在由`options.collection`指定或默认的'kv'集合中插入或更新键值对(obj)。将操作委托给对应的`KVSqliteCollection.set()`方法。
  * `get(_id: string, options?: IKVSetOptions)`: 从指定集合或默认集合中检索由_id标识的键值对。返回封装在`IKVObjItem`接口中的检索到的项。
  * `del(_id?: string, options?: IKVSetOptions)`: 根据提供的_id从指定集合中删除键值对，若未提供_id则删除默认集合中的所有项。将操作委托给对应的`KVSqliteCollection.del()`方法。
  * `isExists(_id: string, options?: IKVSetOptions)`: 检查指定集合或默认集合中是否存在由_id标识的键值对。返回一个布尔值表示存在与否。
  * `count(query?: string, options?: IKVSetOptions)`: 统计指定集合或默认集合中键值对的数量，可选地根据LIKE查询应用过滤条件。将操作委托给对应的`KVSqliteCollection.count()`方法。

总之，KVSqlite类提供了一个全面且可定制的接口，用于管理存储在SQLite数据库中的键值对。它利用底层的better-sqlite3库，并通过引入自己的面向集合的API引入专门功能，使其适用于需要轻量级、持久化键值存储解决方案且具备高级查询能力的应用场景。

## KVSqliteCollection Class

`KVSqliteCollection` 类代表一个容器，用于在 KVSqlite 数据库系统中管理特定的键值对集合。此类封装了对集合执行各种操作所需的逻辑，包括添加、更新、检索、删除、检查存在性以及计数项目。以下是 KVSqliteCollection 类的关键方面：

### 内部状态与初始化

KVSqliteCollection 类主要维护以下内部状态：

1. Name: 通过构造函数接收并存储的字符串变量，代表该集合的唯一名称。这是与其他 KVSqliteCollection 实例区分的重要标识。
2. Database Reference: 作为构造函数的参数传递并存储的一个 KVSqlite 类实例引用，表示当前 KVSqliteCollection 所关联的数据库上下文。该引用使得 KVSqliteCollection 可以直接与底层数据库交互。
3. Prepared Statements: 初始化了一系列预编译的 SQL 语句，这些语句封装了针对键值对集合的基本操作，如添加、更新、检查存在性、获取、删除单个项、删除所有项以及计数项。每个预编译语句都作为一个类属性存储，便于后续高效执行。具体包括：
   * `preAdd`: 插入新的键值对。
   * `preUpdate`: 更新已有键值对。
   * `preExists`: 检查指定 `_id` 的键值对是否存在。
   * `preGet`: 根据 `_id` 获取键值对的值。
   * `preDel`: 删除指定 `_id` 的键值对。
   * `preDelAll`: 删除集合内的所有键值对。
   * `preCount`: 计算集合内键值对总数。
   * `preCountW`: 使用 LIKE 查询条件计算符合条件的键值对总数。

在 KVSqliteCollection 类的构造函数中进行了如下初始化操作：

1. **Table Creation**: 如果关联的 `KVSqlite` 实例不是只读模式，构造函数会调用 `createTableSql` 函数生成创建表的 SQL 语句，并使用 `db.prepare().run()` 执行该语句，确保与当前集合同名的表已在数据库中创建且符合预期结构。这个表用于存储实际的键值对数据。
2. **Prepared Statements Initialization**: 构造函数接下来初始化所有的预编译 SQL 语句。每条语句都是根据集合名称动态构建的，确保其作用于正确的表。这些语句使用 db.prepare() 方法创建，并赋值给对应的类属性。这样，当需要执行诸如插入、更新、查询等操作时，可以直接调用预编译好的语句，提高了执行效率并减少了潜在的 SQL 注入风险。

`KVSqliteCollection` 类在其内部状态中持有一个唯一的集合名称、对关联数据库的引用，以及一组预编译的 SQL 语句。在构造函数中，它首先确保与集合同名的数据库表已创建，随后初始化所有预编译语句以便高效地执行后续的键值对操作。这样的设计使得 `KVSqliteCollection` 能够作为一个独立且高效的单元，管理特定键值对集合在 `KVSqlite` 数据库中的存储与操作。

### 预编译语句

为了优化性能并减少重复解析开销， `KVSqliteCollection` 类在构造时声明并初始化一系列 SQLite 预编译语句。这些语句对应于管理键值对相关的常见数据库操作，如插入、更新、检查存在性、获取、删除单个项、删除所有项以及计数项。每个语句绑定到一个特定属性（如 `preAdd`、`preUpdate`、`preExists` 等）并使用提供的 `name` 和适当的 SQL 语法构建。预编译语句使在整个 `KVSqliteCollection` 实例生命周期内高效执行这些操作成为可能。

### Key-Value Pair Operations On a Collection

* **Setting Items**: `_set` 方法负责处理键值对的插入或更新。它接受一个 `IKVObjItem`（`obj`）和可选的 `IKVSetOptions`（`options`）。在内部，它从输入对象中提取 `_id`，临时移除它，然后检查集合中是否已存在具有相同 `_id` 的记录。如果存在，方法确定是否完全覆盖现有记录（`options.overwrite === true`）还是将新属性合并到现有记录中（`options.overwrite !== false`）。在这两种情况下，更新后的记录都被序列化为 JSON 并传递给相应的预编译语句（`preUpdate` 或 `preAdd`）以对数据库执行。
* **Getting Items**: `get` 方法通过 `_id` 获取单个键值对。它使用 `preGet` 预编译语句执行 SELECT 查询，反序列化返回的 JSON 值，将 `_id` 添加回结果，并返回重构的 `IKVObjItem`。
* **Deleting Items**: del 方法支持通过其 `_id` 删除特定键值对或在不提供 `_id` 时从集合中移除所有项。它相应地调用相应的预编译语句（`preDel` 或 `preDelAll`）。
* **检查存在性**: `isExists` 方法使用 `preExists` 预编译语句查询数据库，确定集合中是否存在具有给定 `_id` 的键值对。它返回布尔结果。
* **Counting Items**: `count` 方法允许计数集合中的项数量，可选地在提供时按 `LIKE` 查询进行过滤。它根据是否存在查询参数使用 `preCount` 或 `preCountW` 预编译语句。

### 事务支持

虽然并未直接提及，但 set 方法将对 _set 的调用包装在父 KVSqlite 实例提供的事务中。这确保了插入/更新操作的原子性，防止在事务失败期间出现部分更新或不一致状态。

总之，KVSqliteCollection 类充当 KVSqlite 数据库系统中特定键值对集合的专用管理器。它通过预编译语句处理低级别的数据库交互，为键值对上的 CRUD 操作提供干净的 API，并通过事务支持确保数据一致性。通过在 KVSqlite 类中维护 KVSqliteCollection 实例的映射，可以在同一 SQLite 数据库中高效管理和访问多个集合。

### 索引支持

* **createIndex(indexName: string, fields: string|string[])**: `createIndex` 方法允许为val对象创建索引。它使用 SQLite 的 `CREATE INDEX` 语句创建索引，并记录索引名称以备后续查询使用。
  * 例如: `collection.createIndex('name', 'name')`
  * 使用 `EXPLAIN QUERY PLAN SELECT * FROM ...`检查是否使用索引。
* **search(query: string, size?: number, page:number = 0)**: `search` 方法允许搜索val对象中的内容.
  * `query`: 待搜索的内容, eg: `val->>'$.name' = 'something'`
