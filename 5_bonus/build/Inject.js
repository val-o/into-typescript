"use strict";
exports.__esModule = true;
require("reflect-metadata");
exports.Inject = function (target, key) {
    console.log(Reflect.getMetadata('design:type', target, key));
};
