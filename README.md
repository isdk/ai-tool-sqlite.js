## ai-tool-sqlite

key/value store

schema:

```sql
/* JSONB requires Sqlite3 version 3.45.0 (2024-01-15) */
CREATE TABLE IF NOT EXISTS kv (key TEXT PRIMARY KEY, val JSONB)
```

```js
const sqlite=require('better-sqlite3')
const db = sqlite('./test.db')
db.prepare('CREATE TABLE IF NOT EXISTS kv (key TEXT PRIMARY KEY, val JSONB)').run()
db.prepare('INSERT INTO kv (key, val) VALUES (?, jsonb(?))').run('key1', JSON.stringify(['a', 'b']))
// convert jsonb to json sting
db.prepare('select key, json(val) as val from kv').all()
// 只返回值
db.prepare('SELECT json(val) FROM kv WHERE key = ?').pluck().get('key2');
```

您还可以使用命名参数。 SQLite3 为命名参数提供了 3 种不同的语法（ @foo 、 :foo 和 $foo ），所有这些语法都受 better-sqlite3 支持。

```js
// The following are equivalent.
const stmt = db.prepare('INSERT INTO people VALUES (@firstName, @lastName, @age)');
const stmt = db.prepare('INSERT INTO people VALUES (:firstName, :lastName, :age)');
const stmt = db.prepare('INSERT INTO people VALUES ($firstName, $lastName, $age)');
const stmt = db.prepare('INSERT INTO people VALUES (@firstName, :lastName, $age)');

stmt.run({
  firstName: 'John',
  lastName: 'Smith',
  age: 45
});
```
