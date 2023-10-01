/*
// Write a method, that will get an integer array as parameter and will process every number from this array.
// Return a new array with processing every number of the input-array like this:
// If the number has an integer square root, take this, otherwise square the number.

function squareOrSquareRoot(array) {
  let result = [];
  for (const element of array) {
    if (Math.sqrt(element) === Math.floor(Math.sqrt(element))) {
      result.push(Math.sqrt(element));
    } else {
      result.push(element * element);
    }
  }
  console.log(result)
  return result;
}

squareOrSquareRoot([4, 3, 9, 7, 2, 1]) // [2, 9, 3, 49, 4, 1]
squareOrSquareRoot([100, 101, 5, 5, 1, 1]) // [10, 10201, 25, 25, 1, 1]

*/
/*
// In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.
// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

function move (position, roll) {
  console.log(position + (roll * 2));
  return position + (roll * 2);
}

move(0, 4) // 8
move(3, 6) // 15
move(2, 5) // 12

*/
/*
// write me a function stringy that takes a size and returns a string of alternating 1s and 0s.

function stringy(size) {
  let ar = [];
  for (let i = 0; i < size; i++) {
    if (ar[ar.length -1] === 1) {
      ar.push(0);
    } else {
      ar.push(1);
    }
  }
  console.log(ar.join(""));
  // return ar.join("");
}

//stringy(3)
//stringy(12)
//stringy(5)
stringy(49)

*/

/*
String.prototype.isUpperCase = function() {
  console.log(this.map((x) => x === x.toUpperCase()));
}

*/
/*
// Create a method to see whether the string is ALL CAPS

function isUpperCase(x) {
  if (x.toUpperCase() === x) {
    console.log("upper");
    return
  } else {
    console.log("lower");
    return
  }
}

isUpperCase('HELLO I AM DONALD')
isUpperCase('c')
isUpperCase('BOB WALKS HIS DOG EVERY DAY.')
isUpperCase('HeLLO I AM DONaLD')

*/
/*
// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

function findMultiples(integer, limit) {
  let result = [];
  let num = 0;
  for (let i = 0; i < limit; i++) {
    num += integer;
    if (num <= limit) { 
      result.push(num);
    }
  }
  console.log(result)
  return result;
}

findMultiples(5, 25) // [5, 10, 15, 20, 25]
findMultiples(4, 27) // [4, 8, 12, 16, 20, 24]

*/
/*
// You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!
// Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

function fixTheMeerkat(arr) {
  console.log(arr.reverse());
  return arr.reverse();
}

fixTheMeerkat(["tail", "body", "head"])
fixTheMeerkat(["tails", "body", "heads"])
fixTheMeerkat(["lower legs", "torso", "upper legs"])

*/
/*
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

function moveZeros(arr) {
  let result = [];
  let zero = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      result.push(arr[i]);
    } else {
      zero.push(arr[i]);
    }
  }
  console.log(result.concat(zero));
  return result.concat(zero);
}

moveZeros([1,2,0,1,0,1,0,3,0,1]) // [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]

*/
