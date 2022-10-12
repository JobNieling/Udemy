const numbers = [1, 2, 3];

// they will always take a function as parameter.
// in the map function we have to return the new value of where we want to turn the old array into.
// this will return every element in the array!
// this new array will be stored in doubleNumArray
const doubleNumArray = numbers.map((num) => {
    return num * 2;
});

console.log(numbers); // [1, 2, 3]
console.log(doubleNumArray); // [2, 4, 6]