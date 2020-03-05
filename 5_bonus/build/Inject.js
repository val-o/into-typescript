"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
exports.Inject = (target, key) => {
    const injectedType = Reflect.getMetadata('design:type', target, key);
    console.log(`Type was:`);
    console.log(injectedType);
};
const a = {
    a: 3,
};
