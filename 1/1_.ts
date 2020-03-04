export class Dog {
  constructor (
    public name: string
  ) {}
}

interface IDBRecord {
  name: string;
  dateCreated?: number;
}

function writeDbRecord(dbRecord: IDBRecord) {
  throw new Error('not implemented')
}

const dog = new Dog('Soso');
writeDbRecord(dog);