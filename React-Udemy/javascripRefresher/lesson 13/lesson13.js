// normal functions
// function printMyName(name) {
//     console.log(name);
// }

// printMyName('Max');

// arrow functions
const printMyName = (name, age) => {
    console.log(name, age);
}

printMyName('Kim', 18);

// return arraw function
const multiply = (number) => {
    return number * 2;
}

console.log(multiply(2));

// one line arrow function
const singleLineMultiply = number => number * 2;

console.log(singleLineMultiply(8));