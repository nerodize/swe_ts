// destructoring with JSON-Objects
const obj = {
    age: 22,
    fullName: 'Alexander Seitz',
    height: 1.84,
    faceit: 'level 6',
    depression: true,
};

const { fullName, height, depression } = obj;
console.log(`The student: ${fullName} is ${height}m tall and is depressed? ${depression}`);

console.log('--------------\n');

// Destructoring with the rest Property
const { age, ...result } = obj;
console.log(`the rest of the fields is in 'result': ${result.faceit}`);



console.log('--------------\n');

// destructoring with arrays
const destArray = [21, 'Emelie Hötzel', 1.64, 'N/A', true];
const [, herName, herHeight, , depressed] = destArray;

console.log(`The goat: ${herName} is ${herHeight}m tall and is depressed? ${depressed}`);

