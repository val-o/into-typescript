interface IDbRecord {
  id: number;
  createdAt: Date;
  data: object;
}

export const isDbRecord = (obj: object): obj is IDbRecord => {
  if ((obj as IDbRecord).id) {
    return true;
  }
  return false;
};

const t = {
  id: 0,
  createdAt: new Date("01/01/2001"),
  data: {}
};

if (isDbRecord(t)) {
  console.log(t.data);
}
