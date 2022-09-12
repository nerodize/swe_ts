var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.printNameArrow = function () {
        var _this = this;
        setTimeout(function () {
            console.log("Arrow: ".concat(_this.name));
        }, 100);
    };
    Person.prototype.printNameFunction = function () {
        setTimeout(function () {
            console.log("Function: ".concat(this.name));
        }, 100);
    };
    return Person;
}());
var person = new Person('Alex');
person.printNameArrow();
person.printNameFunction();
