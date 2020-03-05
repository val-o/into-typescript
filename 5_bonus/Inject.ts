import 'reflect-metadata';

export const Inject: PropertyDecorator = (target, key) => {
  const injectedType = Reflect.getMetadata('design:type', target, key)
  console.log(`Type was:`)
  console.log(injectedType);
};
