/**
 * Sometimes you need to write your custom guards to get rid of 'as' everywhere
 * Use case: you have js collection of items with different types, but you are interested only in one, and have time to only type one.
 */

interface IDbRecord {
  id: number;
  createdAt: Date;
  data: object;
}

const isDbRecord = (obj: object): obj is IDbRecord => {
  if ((obj as IDbRecord).id) {
    return true;
  }
  return false;
};

const dbRecord = {
  id: 0,
  createdAt: new Date("01/01/2001"),
  data: {}
};

const someItems: any[] = [
  { dog: true },
  dbRecord,
  { cat: { age: 4 } },
  dbRecord
];

/**
 * 
 */
someItems.filter(isDbRecord).forEach(db => db.data);

export {};
