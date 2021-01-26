// only ever assign number type to this variable
let apples: number = 5;

// apples = 'five'; // error

// variables
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false];

// Classes
class Car {}

let car: Car = new Car();

// Object literal
let point: { x: number; y: number; z: number } = {
  x: 10,
  y: 20,
  z: 30,
};

let testString: string;
testString = 'testString';

// Function
// this is nasty, why does this happen twice?
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
// 1) Functions that return type any
const json = '{"x": 10, "y": 11}';
const coordinates: { x: number; y: number } = JSON.parse(json);

// console.log(coordinates);

// 2) when we declare a variable on one line and init it later
let words = ['red', 'green', 'blue'];
let seekingWord = 'green';
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === seekingWord) {
    foundWord = true;
  }
}

// console.log(foundWord);

// 3) when we have a variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
// let numberAboveZero = false;
let numberAboveZero: any = false;

for (let i = 0; i < words.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}

// console.log(numberAboveZero);
