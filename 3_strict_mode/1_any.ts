export const upperCase = (str) => {
  return str.toUpperCase();
}

/**
 * Alternatives to any
 */

// object type
 Object.keys

// partially typed interface
interface IDbRecord {
  id: number;
  [key: string]: unknown;
}

const a: IDbRecord = {
  id: 323,
  anyOtheProps: 'test',
}

export interface IDog {
  name: string;
}

const dog: IDog = {
  name: 'Soso'
}
const t = dog['unknown-prop'];

