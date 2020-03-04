var Model = (function () {
    function Model(id) {
        this.id = id;
    }
    Model.prototype.convertFromString = function () {
        return new this('d');
    };
    return Model;
}());
var MyClass = (function () {
    function MyClass() {
    }
    return MyClass;
}());
