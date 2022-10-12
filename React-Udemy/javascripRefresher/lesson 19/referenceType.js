// Objects and arrays are reference types

const person = {
    name: 'Oma'
}

const secondPerson = {
    ...person
};

// this will change the name of person, 
// because it will copy the pointer to the exact same memory.
person.name = 'Mama';
secondPerson.name = 'Opa';

console.log(person);
console.log(secondPerson);