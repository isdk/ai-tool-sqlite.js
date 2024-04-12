import { IKVObjItem, KVSqlite, KVSqliteCollection } from '../src/kvsqlite'

function testCollection(db: KVSqliteCollection | KVSqlite) {
  it('should insert an object', () => {
    const objId = 'testObj';
    const testObject: IKVObjItem = { _id: objId, key1: 'value1' };

    db.set(testObject);

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
