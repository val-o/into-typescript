var Dog = (function () {
    function Dog(name) {
        this.name = name;
    }
    return Dog;
}());
function writeDbRecord(dbRecord) {
    throw new Error('not implemented');
}
var dog = new Dog('Soso');
writeDbRecord(dog);
