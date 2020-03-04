/**
 * Whad does structural typing mean? (duck typing)
 */

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

/**
 * Nominal type checking thread https://github.com/Microsoft/Typescript/issues/202 since 2014
 */