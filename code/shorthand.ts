// showing the basics of shorhand props.
let ageSh = 22;
let nameSh = 'Alexander Seitz';
let description = { ageSh, nameSh }; // actual shp: ageSh: ageSh, nameSh: nameSh ==> : for assigning properties from an object.

console.log(`Here is the full name and the age: ${description.nameSh}, ${description.ageSh}y/o`);

// Better 
console.log('--------------------\n');

let grades = [1.3, 2.3, 3.7];
let id = 77642;
let currentSem = 4;

let student = {
    grades,
    id,
    currentSem,
    save () {
    // save data
    }
};

// weird code...
console.log(`Student: ${id}, is currently in ${currentSem}th semester \n--------------------\ngrades:`);
// prints out every grade.
grades.forEach( (value) => { 
    console.log(`${value}`);
});

// Basically Java Script Object Notation
let anotherStudent = { 
    id, 
};

console.log(`\n ${anotherStudent.id} ist ein Hs`);

