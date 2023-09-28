/*
// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 parameter:n, n is the number of hotdogs a customer will buy, different numbers have different prices (refer to the following table), return how much money will the customer spend to buy that number of hotdogs.

function saleHotdogs(n){
  let result = 0;

  if (n < 5) {
    result = n * 100;
  } else if (n >= 5 && n < 10) {
    result = n * 95;
  } else {
    result = n * 90;
  }

  console.log(result);
  return result;
}

saleHotdogs(  1) //  100
saleHotdogs(  4) //  400
saleHotdogs(  5) //  475
saleHotdogs(  9) //  855
saleHotdogs( 10) //  900

*/
/*
// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()

function expressionMatter(a, b, c) {
  const op1 = a * (b + c);
  const op2 = a * b * c;
  const op3 = a + b * c;
  const op4 = (a + b) * c;
  const op5 = a + b + c;
  let result = 0;

  for (let i = 0; i < 5; i++) {
    if (result < op1) {
      result = op1;
    } else if (result < op2) {
      result = op2;
    } else if (result < op3) {
      result = op3;
    } else if (result < op4) {
      result = op4;
    } else if (result < op5) {
      result = op5;
    }
  }

  
  console.log(result);
  return result;
}

expressionMatter(2, 1, 2) // 6
expressionMatter(2, 1, 1) // 4
expressionMatter(1, 1, 1) // 3
expressionMatter(1, 2, 3) // 9

*/
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
