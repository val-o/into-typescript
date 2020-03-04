"use strict";
exports.__esModule = true;
var a_1 = require("./a");
exports.a = function (b) { return function (c) {
    return c + b;
}; };
var s = new a_1.A();
exports.readA = function (ins) {
    console.log(ins);
};
var myObj = {
    a: "s"
};
function LogMethod(target, propertyKey, descriptor) {
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
}
function LogClass(target) {
    console.log(target);
}
var LogProp = function (target, propertyKey) {
    console.log(target);
    console.log(propertyKey);
};
var Demo = (function () {
    function Demo() {
    }
    Demo.prototype.foo = function (bar) {
    };
    return Demo;
}());
var demo = new Demo();
