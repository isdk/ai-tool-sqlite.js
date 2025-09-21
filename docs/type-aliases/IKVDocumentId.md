[**@isdk/ai-tool-sqlite**](../README.md)

***

[@isdk/ai-tool-sqlite](../globals.md) / IKVDocumentId

# Type Alias: IKVDocumentId

> **IKVDocumentId** = `string` \| `number`

Defined in: @isdk/ai-tools/packages/kvsqlite/dist/index.d.ts:1389

## Example

```ts
// 如果要map:
updateKVFieldSymbol(KV_TYPE_SYMBOL, KV_TYPE_FIELD_NAME)

const table = db.create(mainTableName, {
  fields: {[sourceFieldName]: {name: sourceFieldName, type: 'TEXT',}, [KV_TYPE_SYMBOL]: {}},
  fts: {
    unIndexed: [sourceFieldName, KV_TYPE_SYMBOL, '_id'],
  },
  indexes: [
    {name: KV_TYPE_FIELD_NAME, fields: [KV_TYPE_FIELD_NAME], unique: false},
  ],
}) as KVSqliteCollection
```
