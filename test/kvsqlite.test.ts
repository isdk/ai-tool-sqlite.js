import { IKVObjItem, KVSqlite, KVSqliteCollection, KV_VALUE_SYMBOL } from '../src/kvsqlite'

function testCollection(db: KVSqliteCollection | KVSqlite) {
  it('should insert an object', () => {
    const objId = 'testObj';
    const testObject: IKVObjItem = { _id: objId, key1: 'value1' };

    db.set(testObject);

    expect(db.get(objId)).toEqual({ _id: objId, key1: 'value1' });
  });

  it('should insert an id with object', () => {
    const objId = 'testObj';
    const testObject: IKVObjItem = { _id: 'ignoreIt', key1: 'value1' };

    db.set(objId, testObject);

    expect(db.get(objId)).toEqual({ _id: objId, key1: 'value1' });
  });

  it('should update an existing object by overwrite', () => {
    const objId = 'updateObj';
    const initialData: IKVObjItem = { _id: objId, key1: 'initialValue1' };

    db.set(initialData);

    const newData: IKVObjItem = { ...initialData, key2: 'newValue2', key3: 50 };
    // the default is overwrite
    db.set({ ...newData }, { overwrite: true });

    expect(db.get(objId)).toEqual({ _id: objId, key1: 'initialValue1', key2: 'newValue2', key3: 50 });
  });

  it('should update an existing object by default overwrite', () => {
    const objId = 'updateObj';
    const initialData: IKVObjItem = { _id: objId, key1: 'initialValue1' };

    db.set(initialData);

    const newData: IKVObjItem = { _id: objId, key2: 'newValue2', key3: 50 };
    // the default is overwrite
    db.set({ ...newData });

    expect(db.get(objId)).toEqual({ _id: objId, key2: 'newValue2', key3: 50 });
  });

  it('should not update an existing object when option is false', () => {
    const objId = 'noUpdateObj';
    const initialData: IKVObjItem = { _id: objId, key1: 'initialValue1' };

    db.set(initialData);

    const newData: IKVObjItem = { _id: objId, key2: 'newValue2', key3: 50 };
    db.set({ ...newData }, { overwrite: false }); // Should not overwrite initialValue1 with newValue2 or initialize other keys

    expect(db.get(objId)).toEqual({ _id: objId, key1: 'initialValue1', key2: 'newValue2', key3: 50 });
  });

  it('should delete an object', () => {
    const objId = 'deleteObj';
    const testObject: IKVObjItem = { _id: objId };

    db.set(testObject);
    expect(db.isExists(objId)).toBeTruthy();

    db.del(objId);
    expect(db.isExists(objId)).toBeFalsy();
  });

  it('should delete multi objects', () => {
    let result: any = db.bulkDocs([
      {_id: '1', [KV_VALUE_SYMBOL]: 1123},
      {_id: '2', [KV_VALUE_SYMBOL]: 'ba1'},
      {_id: '3', [KV_VALUE_SYMBOL]: 3121},
    ]);
    expect(result).toHaveLength(3)

    db.del(['1','2','3']);
    expect(db.list()).toHaveLength(0)
  });

  it('should delete all', () => {
    const objId = 'deleteObj';
    const testObject: IKVObjItem = { _id: objId };

    db.set(testObject);
    expect(db.isExists(objId)).toBeTruthy();

    testObject._id = '34'
    db.set(testObject);
    expect(db.isExists(testObject._id)).toBeTruthy();
    expect(db.count()).toEqual(2)

    db.del();
    expect(db.isExists(objId)).toBeFalsy();
    expect(db.isExists(objId)).toBeFalsy();
  });

  it('should check if an object exists', () => {
    const objId = 'existsObj';
    const testObject: IKVObjItem = { _id: objId };

    db.set(testObject);
    expect(db.isExists(objId)).toBeTruthy();
  });

  it('should return false for non-existent object', () => {
    const objId = 'nonexistentObj';
    expect(db.isExists(objId)).toBeFalsy();
  });

  it('should list all objects', () => {
    const objId1 = 'listObj1';
    const objId2 = 'listObj2';
    const testObject1: IKVObjItem = { _id: objId1, value: 'test1'};
    const testObject2: IKVObjItem = { _id: objId2, value: 'test2'};

    db.set(testObject1);
    db.set(testObject2);
    let result = db.list()
    expect(result).toStrictEqual([{ _id: objId1, value: 'test1'}, { _id: objId2, value: 'test2'}])
  });

  it('should list some objects', () => {
    const objId1 = 'searchObj1';
    const objId2 = 'searchObj2';
    const objId3 = 'Obj3';
    const objId4 = 'Ob3';
    const testObject1: IKVObjItem = { _id: objId1, value: 'test1'};
    const testObject2: IKVObjItem = { _id: objId2, value: 'test2'};
    const testObject3: IKVObjItem = { _id: objId3, value: 'test3'};
    const testObject4: IKVObjItem = { _id: objId4, value: 'test4'};

    db.set(testObject1);
    db.set(testObject2);
    db.set(testObject3);
    db.set(testObject4);
    let result = db.list('search%')
    expect(result).toStrictEqual([{ _id: objId1, value: 'test1'}, { _id: objId2, value: 'test2'}])
    result = db.list('%Obj%')
    expect(result).toStrictEqual([{ _id: objId1, value: 'test1'}, { _id: objId2, value: 'test2'}, { _id: objId3, value: 'test3'}])
  })

  it('should list objects by page', () => {
    const objId1 = 'searchObj1';
    const objId2 = 'searchObj2';
    const objId3 = 'Obj3';
    const objId4 = 'Ob3';
    const testObject1: IKVObjItem = { _id: objId1, value: 'test1'};
    const testObject2: IKVObjItem = { _id: objId2, value: 'test2'};
    const testObject3: IKVObjItem = { _id: objId3, value: 'test3'};
    const testObject4: IKVObjItem = { _id: objId4, value: 'test4'};

    db.set(testObject1);
    db.set(testObject2);
    db.set(testObject3);
    db.set(testObject4);
    let result = db.list(undefined, 2)
    expect(result).toStrictEqual([{ _id: objId1, value: 'test1'}, { _id: objId2, value: 'test2'}])
    result = db.list(undefined, 2, 1)
    expect(result).toStrictEqual([{ _id: objId3, value: 'test3'},{ _id: objId4, value: 'test4'}])
  })

  it('should getExtends document', () => {
    let result:any = db.bulkDocs([
      {_id: 'getExtends/test/.a', [KV_VALUE_SYMBOL]: 123},
      {_id: 'getExtends/test/.b', [KV_VALUE_SYMBOL]: 'ba'},
      {_id: 'getExtends/test/.c', [KV_VALUE_SYMBOL]: 321},
    ]);
    result = db.getExtends('getExtends/test');
    expect(result).toMatchObject({_id: 'getExtends/test', a: 123, b: 'ba', c: 321});

    result = db.getExtends('getExtends/test', ['b', 'c']);
    expect(result).toMatchObject({_id: 'getExtends/test', b: 'ba', c: 321});

  })

  it('should get an extend properties value if singleValue', () => {
    let result: any = db.bulkDocs([
      {_id: 'getExtends/tests/.a', [KV_VALUE_SYMBOL]: 1123},
      {_id: 'getExtends/tests/.b', [KV_VALUE_SYMBOL]: 'ba1'},
      {_id: 'getExtends/tests/.c', [KV_VALUE_SYMBOL]: 3121},
    ]);
    result = db.getExtends('getExtends/tests', 'b', {singleValue: true});
    expect(result).toEqual('ba1');
  });

  it('should get an extend property value', () => {
    let result: any = db.bulkDocs([
      {_id: 'getExtends/tests/.a', [KV_VALUE_SYMBOL]: 1123},
      {_id: 'getExtends/tests/.b', [KV_VALUE_SYMBOL]: 'ba1'},
      {_id: 'getExtends/tests/.c', [KV_VALUE_SYMBOL]: 3121},
    ]);
    result = db.getExtend('getExtends/tests', 'b');
    expect(result).toEqual('ba1');
  })

  it('should set extend property', () => {
    db.setExtend('setExtend/test', 'a', 12)
    db.setExtend('setExtend/test', '.b', 1)
    let result = db.getExtend('setExtend/test', 'b');
    expect(result).toEqual(1);
    result = db.getExtend('setExtend/test', 'a');
    expect(result).toEqual(12);
  })

  it('should set extend properties', () => {
    db.setExtends('setExtends/test', {a: 12, b: 1})
    const result = db.getExtends('setExtends/test')
    expect(result).toMatchObject({_id: 'setExtends/test', a: 12, b: 1});
  })
}

describe('KVSqlite class', () => {
  // Initialize the database
  const db = new KVSqlite(':memory:');

  beforeEach(() => {
    // db.prepare('DELETE FROM kv').run()
    // delete all
    db.del()
  });

  testCollection(db)

  describe('KVSqliteCollection class', () => {
    const table = db.create('test')
    beforeEach(() => {
      // delete all
      table?.del()
    });
    testCollection(table!)
  })
});
