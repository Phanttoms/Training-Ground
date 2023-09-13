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

//sumArray(null)
//sumArray([ ])
//sumArray([ 3 ])
//sumArray([ 3, 5 ])
//sumArray([ 6, 2, 1, 8, 10 ])

*/
/*
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    const ar = s.split("");
    let result = [];

    for (let i = 0; i < ar.length; i++) {
        if (s[i] !== "!") {
            result.push(s[i]);
        }
    }
   
    console.log(result.join(""));
    return result.join("");
}

removeExclamationMarks("Hello World!")

// Solution stylé
// function removeExclamationMarks(s) {
//    return s.replace(/!/gi, '');
// }

*/
/*
// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.
// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

function feast(beast, dish) {
    const b = beast.split("");
    const d = dish.split("");
    
    if (b[0] === d[0] && b[b.length -1] === d[d.length -1]) {
        console.log(true);
        return true;
    } else {
        console.log(false);
        return false;
    }

}

feast("great blue heron", "garlic naan")
feast("brown bear", "bear claw")

*/

