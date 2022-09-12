var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
// destructoring with JSON-Objects
var obj = {
    age: 22,
    fullName: 'Alexander Seitz',
    height: 1.84,
    faceit: 'level 6',
    depression: true
};
var fullName = obj.fullName, height = obj.height, depression = obj.depression;
console.log("The student: ".concat(fullName, " is ").concat(height, "m tall and is depressed? ").concat(depression));
console.log('--------------\n');
// Destructoring with the rest Property
var age = obj.age, result = __rest(obj, ["age"]);
console.log("the rest of the fields is in 'result': ".concat(result.faceit));
console.log('--------------\n');
// destructoring with arrays
var destArray = [21, 'Emelie Hötzel', 1.64, 'N/A', true];
var herName = destArray[1], herHeight = destArray[2], depressed = destArray[4];
console.log("The goat: ".concat(herName, " is ").concat(herHeight, "m tall and is depressed? ").concat(depressed));
function painful(x, y, z) {
    console.log('nothing really!');
}
var painless = function (x, y, z) {
    console.log('nothing really!');
};
painless(12, 'Sieg', ['random']);
