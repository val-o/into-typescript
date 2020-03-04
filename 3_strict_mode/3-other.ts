export interface IDog {
  name: string;
}

const dog: IDog = {
  name: 'Soso'
}

/**
 * suppressImplicitAnyIndexErrors
 */

const t = dog['unknown-prop'];


/**
 * 
 * --noImplicitAny, 
 * --noImplicitThis, 
 * --alwaysStrict, 
 * --strictBindCallApply, 
 * --strictNullChecks, 
 * --strictFunctionTypes and 
 * --strictPropertyInitialization.
 */