// Function #1: Array Slice
const foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];

function slice() {

    const modifiedFood = foods.slice(1, 4);
    return modifiedFood;

}
console.log(slice());
//Expected output: [burger, fingerShips, donuts]

//Function #2: Array Splice


    foods.splice(2, 0, 'noodles', 'icecream');

console.log("Using Splice=>" + foods);
//Expected output: [pizza, burger, noodles, icecream, fingerShips, donuts, springRoll];

//Function #3: Filter
const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];

function isEven(numberArr) {

    let evenNum = numberArr.filter(function (num) {
        return num % 2 == 0;
    });
    return evenNum;
}
console.log("Even Number is=> " + isEven(numberArray));

//3.1 Prime Number

function isPrime(arr) {
    let primenumbers = "The prime numbers are: " + arr.filter((number) => {

        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return false;
        }
        return true;
    });
    return primenumbers;
}
// 3.2 Non-Prime Numbers
console.log(isPrime(numberArray)); // 2 3

function nonPrime(arr) {
    let nonPrimenumbers = "The Non-prime numbers are: " + arr.filter((number) => {

        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return true;
        }
        return false;
    });
    return nonPrimenumbers;
}

console.log(nonPrime(numberArray));

//Function #5: Lambda

function isEven(num) {

    return num.filter(n => n % 2 == 0);

}
console.log("Even Number by Lambda Expression: " + isEven(numberArray));

//Function #6: Map
const myArray = [11, 34, 20, 5, 53, 16];
function findSquareOfNumbers(myArray) {
    let squareOfNumber = myArray.map(m => m * m);
    return squareOfNumber;
}
console.log("Squares are=>" + findSquareOfNumbers(myArray));

//Function #7: Reduce

const numbers = [2, 3, 5, 10];

function multiply(myArray) {

    return myArray.reduce(function (initial, item) {
        return initial * item;
    }, 1);

}
console.log("Multiplication=>" + multiply(numbers));

let newArray = myArray.map(function findSquareOfNumbers(myArray) {
    return (myArray * myArray);
}).reduce(function multiply(initial, myArray) {
    return (initial * myArray);
}, 1);
console.log("Using Map and reduce=> "+newArray);