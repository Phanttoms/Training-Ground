/*
// Créez une fonction qui prend une chaîne et renvoie TRUE ou FALSE, selon que les caractères sont en ordre ou non.

function checkOrder(str) {
	const test = str.split("").sort().join("");
    return test === str

}

// Afficher la sortie
console.log(checkOrder("abc"));
console.log(checkOrder("zyx"));
console.log(checkOrder("123"));
console.log(checkOrder("aabbcc"));

*/
/*
// Créez une fonction pour multiplier toutes les valeurs d’un tableau par la longueur du tableau donné.

function mulByLen(tab) {
	return tab.map(i => i * tab.length);
}

// Afficher la sortie
console.log(mulByLen([1, 1, 1]));
console.log(mulByLen([1, 2, 3]));
console.log(mulByLen([0, 0, 0, 0, 2]));

*/
/*
// Convert number to reversed array of digits

function digitize(n) {
    const digits = String(n).split("").reverse().map(Number)
    console.log(digits)
}

digitize(35231)

*/
/*
// Make a simple function called greet that returns the most-famous "hello world!".
// Style Points
// Sure, this is about as easy as it gets. But how clever can you be to create the most creative "hello world" you can think of? What is a "hello world" solution you would want to show your friends?


function greet() {
    const hache = "h";
    const eel = "e";
    const hell = "l";
    const haut = "o";
    const wow = "w";
    const rrr = "r";
    const deer = "d";
    const espace = " ";
    const oh = "!"
    const yolo = [];
 
    for (let i = 0; i <= 69; i++) {
      if (i <= 0) {
        yolo.push(hache);
      } else if (i <= 1) {
        yolo.push(eel);
      } else if (i <= 3) {
        yolo.push(hell);
      } else if (i <= 4) {
        yolo.push(haut);
      } else if (i <= 5) {
        yolo.push(espace);
      } else if (i <= 6) {
        yolo.push(wow);
      } else if (i <= 7) {
        yolo.push(haut);
      } else if (i <= 8) {
        yolo.push(rrr);
      } else if (i <= 9) {
        yolo.push(hell);
      } else if (i <= 10) {
        yolo.push(deer);
      } else if (i <= 11) {
        yolo.push(oh);
      }
    } console.log(yolo.join(""))
  }

  greet()

*/
/*
// Find the average of an ARRAY

function findAverage(array) {
    let num = 0;
    
    for (const element of array) {
        num += element;
    }
    
    if (num === 0) {
        console.log(0);
    } else {
        console.log(num / array.length);
    }
}

findAverage([1, 2, 3, 4]);

*/
/*
// You receive an array with your peers' test scores. Now calculate the average and compare your score!
// Return True if you're better, else False!

function betterThanAverage(classPoints, yourPoints) {
    let allclass = 0;
    let mclass = 0;
    
    for (const element of classPoints) {
        allclass += element;
    }

    if (classPoints.length !== 0) {
        mclass = allclass / classPoints.length;
    }

    if (mclass < yourPoints) {
        console.log(true);
    } else {
        console.log(false);
    }
 
    console.log(mclass);
}

betterThanAverage([2, 3], 5)

*/
/*
// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

function sum (numbers) {
    let result = 0;

    for (const element of numbers) {
        result += element
    }
    
    console.log(result);
};

sum([1, 5.2, 4, 0, -1])

*/
/*
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

function invert(array) {
    let result = [];

    for (const element of array) {
        if (element > 0) {
            result.push(-element)
        } else {
            result.push(Math.abs(element))
        }
        
    } 
    console.log(result);
}

invert([1,2,3,4,5])
invert([])
invert([-1, -72, 69, -32])

*/
/*
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.

function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0) {
      console.log([]);
    }
  
    let pos = [];
    let neg = 0;

    for (const element of input) {
      
      if (element > 0) {
        pos.push(element);
      } else if (element < 0) {
        neg += element;
      }
    }

      console.log([pos.length, neg]);

}

countPositivesSumNegatives([])
countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]);
countPositivesSumNegatives([0, 0])

*/
/*
// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
// Array can contain numbers or strings. X can be either.
// Return true if the array contains the value, false if not.

function check(a, x) {
    console.log(a.includes(x));
}

check([66, 101], 66)

*/
/*
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(x){
    let result = [];
    
    for (const element of x) {
        if (element < 5) {
            result.push(0);
        } else {
            result.push(1);
        }
    }
    console.log(result.join(""));
}

fakeBin('45385593107843568') // '01011110001100111'

*/
/*
// Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

function bmi(weight, height) {
    const b = weight / (height * height);

    if (b <= 18.5) {
        console.log("Underweight");
    } else if (b <= 25) {
        console.log("Normal");
    } else if (b <= 30) {
        console.log("Overweight");
    } else {
        console.log("Obese");
    }
}

bmi(80, 1.80)

*/
/*
// Given a non-empty array of integers, return the result of multiplying the values together in order.

function grow(x){
    const sum = x.reduce((a, c) => a * c);

    console.log(sum)

}

grow([1, 2, 3])

*/
/*
// Build a function that returns an array of integers from n to 1 where n>0.

const reverseSeq = n => {
    let ar = [];
    
    for (let i = n; i >= 1; i--) {
        ar.push(i);
    }
    console.log(ar);
}

reverseSeq(5)

*/
/*
// Create a function with two arguments that will return an array of the first n multiples of x.

function countBy(x, n) {
    let z = [];
    let num = 0;
    

    for (let i = 0; i < n; i++) {
        num += x;
        z.push(num);
    }

  
    console.log(z);
}

countBy(2,5)

*/
/*
// Given a non-negative integer, 3 for example, return a string with a murmur.


const countSheep = function (num){
    let sheeps = [];
    for (let i = 1; i <= num; i++) {
      sheeps.push(`${i} sheep...`);
    }
    console.log(sheeps.join(""));
}

countSheep(3);

*/
/*
// Let's play! You have to return which player won! In case of a draw return Draw!.

function rps(p1, p2) {
    const s = "scissors";
    const r = "rock";
    const p = "paper";

    switch (p1 + p2) {
        case p + p :
        case r + r : 
        case s + s : console.log("Draw!");
        break;
        case s + p :
        case p + r :
        case r + s : console.log("Player 1 won!");
        break;
        case p + s :
        case r + p :
        case s + r : console.log("Player 2 won!");
        break;
    }

}

rps('paper', 'paper')

*/
/*
// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.
// Points are awarded for each match as follows:
// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

function points(games) {
    let result = 0

    for (const e in games) {
        if (games[e][0] > games[e][2]) {
            result += 3;
        } else if (games[e][0] === games[e][2]) {
            result += 1;
        }
    }
    
    console.log(result);
}

points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"])
//points(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"])

*/
/*
// Return the average of the given array rounded down to its nearest integer.

function getAverage(marks){
    //TODO : calculate the downward rounded average of the marks array
    let result = 0;
    
    for (let i = 0; i < marks.length; i++) {
        result += marks[i] / marks.length;
    }
    console.log(Math.floor(result));
}

getAverage([2,2,2,2])

*/
/*
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

function sumArray(array) {
    if (array === null || array === undefined || array.length <= 1) {
        console.log(0);
        return
    }
    
    let all = 0;
    let mmi = Math.min(...array);
    let mma = Math.max(...array); 

    for (let i = 0; i < array.length; i++) {
        all += array[i];
    }
    
    console.log(all - (mmi + mma));
}

sumArray(null)
sumArray([ ])
sumArray([ 3 ])
sumArray([ 3, 5 ])
sumArray([ 6, 2, 1, 8, 10 ])

*/