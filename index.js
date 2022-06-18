const characters = [
    {name: 'Dalal', height: 150, gender: 'female', mass: 120, eye_color: 'black',},
    {name: 'Layla', height: 145, gender: 'female', mass: 70, eye_color: 'brown',},
    {name: 'Atallah', height: 210, gender: 'male', mass: 80, eye_color: 'black',},
    {name: 'Tsneem', height: 130, gender: 'female', mass: 60, eye_color: 'blue',},
];


// Get array of objects with just name and height properties
const nameAndHeight = characters.map(character => ({ name: character.name, height: character.height }));
console.log(nameAndHeight);


// Get array of all first names
const firstNames = characters.map(character => character.name.split(" ")[0])
console.log(firstNames);


// Get total mass of all characters
const totalMass = characters.reduce((acc, curr) => acc + curr.mass, 0);
console.log(totalMass);


// Get total number of characters in all the character names
const nameLength = characters.reduce((acc, curr) => acc + curr.name.length, 0);
console.log(nameLength);


// Get characters with mass greater than 100
const massGreaterThan100 = characters.filter((character) => character.mass > 100);
console.log(massGreaterThan100);


// Get all female characters
const femaleCharacters = characters.filter((character) => character.gender === 'female');
console.log(femaleCharacters);


// Sort by name
let sortedName = characters.sort((a,b) => a.name - b.name);
console.log(sortedName);


// Sort by gender
let sortedGender = characters.sort((a,b) => a.gender - b.gender);
console.log(sortedGender);



// Does every character have blue eyes?
const blueEye = characters.every(character => character.eye_color === "blue");
console.log(blueEye)


// Is every character male?
const isMale = characters.every((character) => character.gender ==="male");
console.log(isMale);


// Is there at least one male character?
const oneMale = characters.some(character => character.gender === "male");
console.log(oneMale);



// Is there at least one character that has mass less than 50?
const massLessThan50 = characters.some(character => character.mass < 50);
console.log(massLessThan50);
