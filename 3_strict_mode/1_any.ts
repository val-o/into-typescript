/**
 * what's wrong here?
 */
export const upperCase = (str) => {
  return str.toUpperCase();
}

/**
 * Alternatives to any
 */

// broad types
const obj: object = {a: 3, b: 4};
const fn: Function = (a,b,c) => 4;


// partially typed interface
interface IDbRecord {
  id: number;
  [key: string]: unknown;
}

const a: IDbRecord = {
  id: 323,
  anyOtheProps: 'test',
}

