import 'reflect-metadata';

export const Inject: PropertyDecorator = (target, key) => {
  console.log(Reflect.getMetadata('design:type', target, key));
};
