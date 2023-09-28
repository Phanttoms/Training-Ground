/*
// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.
// return an array containing all of the strings in the input array except those that match strings in geese

function gooseFilter (birds) {
  let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  let result = [];
  for (const element of birds) {
    switch (element) {
      case geese[0] :
      case geese[1] :
      case geese[2] :
      case geese[3] :
      case geese[4] :
        console.log("yolo");
        break;
      default : 
        result.push(element);
        break;
    }
  }
  console.log(result);
  return result;
}

gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"])
// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

*/
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