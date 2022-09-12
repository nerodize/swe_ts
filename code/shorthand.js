// showing the basics of shorhand props.
var ageSh = 22;
var nameSh = 'Alexander Seitz';
var description = { ageSh: ageSh, nameSh: nameSh }; // actual shp: ageSh: ageSh, nameSh: nameSh ==> : for assigning properties from an object.
console.log("Here is the full name and the age: ".concat(description.nameSh, ", ").concat(description.ageSh, "y/o"));
// Better 
console.log('--------------------\n');
var grades = [1.3, 2.3, 3.7];
var id = 77642;
var currentSem = 4;
var student = {
    grades: grades,
    id: id,
    currentSem: currentSem,
    save: function () {
        // save data
    }
};
// weird code...
console.log("Student: ".concat(id, ", is currently in ").concat(currentSem, "th semester \n--------------------\ngrades:"));
// prints out every grade.
grades.forEach(function (value) {
    console.log("".concat(value));
});
var anotherStudent = {
    id: id
};
console.log("\n ".concat(anotherStudent.id, " ist ein Hs"));
