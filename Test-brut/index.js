/*
const a = 3;
const b = 6;
const isMajeur = undefined;
const notes = [6, 12, 14, 50, "yolo", [1, 2, 3]];

//----------------
*/
/*

let a = "salut";
let b = a;

console.log("yolo les noobs")

if (true) {
    console.log("wesh")
}

//--------------------
*/
/*

const year = 2023;
const birthyear = prompt('Quel est votre année de naissance ?');
const age = year - birthyear;

if (age <= 13) {
    console.log("Le Roi Lion")
} else if ( age <= 18) {
    console.log("matrix")
} else {
    console.log("La coline a des yeux")
}

//--------------------
*/
/*

const a = prompt("Rentrez un 1er chiffre");
const b = prompt("rentrez un 2eme chiffre");
const result = a * b;

if (result >= 0) {
    console.log("positif")
} else if (result < 0) {
    console.log("negatif")
} else {
    console.log("operation invalide")
}

//--------------------------------
*/
/*

const num = [4, 8, 15, 16, 23, 42];

for (let i in num) {
    console.log(num[i])
}

//----------------------------------
*/
/*

const num = prompt("Rentrez un chiffre entre 1 et 10" );

if (num > 10 || num < 1) {
    console.log("c'est pas bon frer")
} else {
    for (let i = num; i >= 1; i--) {
        console.log(i)
    }
}

//-----------------------------------
*/
/*

const guess = 48;
const num = prompt("Devinez le nombre") * 1;

if (num === guess) {
    console.log("Bravo frer")
} else if (num < guess) {
    console.log("Plus bro")
} else if (num > guess) {
    console.log("Moins bro")
} else {
    console.log("J'ai dit un nombre !!")
}

*/

/*
// Solution avec boucle

const guess = 8
while(true) {
    const chiffre = prompt('Votre chiffre') * 1
    if (chiffre < guess) {
        console.log('Plus')
    } else if (chiffre > guess) {
        console.log('Moins')
    } else {
        break
    }
}
console.log('Bravo ! vous avez deviné')

//---------------------------------------
*/
/*

function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

const solution = getRandomInt(10);
console.log(solution);

function isRight(n) {
    return solution === n;
}

function guess() {
    const number = prompt("Entrez un chiffre") * 1;
    return isRight(number);
}

for (i = 0; i < 3; i++) {
    if (guess()) {
        console.log("GG");
        break;
    } else if (i === 2) {
        console.log("noob");
    }
}

//-------------------------------------------
*/
/*

function isPremier(n) {
    for (i = 2; i < n; i++) {
        if(n % i === 0) {
            return false;
        }
    } 
    return n > 1;
}

console.log(isPremier());

//--------------------------------------------
*/
/*
// Exercice
// Créez une fonction qui vérifier l’égalité de deux paramètres a et b. La valeur et le type de paramètres doivent être testés afin d’avoir une égalité. La fonction doit renvoyer TRUE si les paramètres sont égaux et FALSE s’ils sont différents.

function checkEq(a, b) {
    return a === b;
}

// Afficher la sortie
console.log(checkEq(5, 5));
console.log(checkEq(5, 0));
console.log(checkEq(5, false));
console.log(checkEq(5, "5"));

//--------
*/
/*
// Créez une fonction qui renvoie TRUE si une chaîne est vide et sinon renvoie FALSE.

function isEmpty(str) {
	return str === "";
}

// Afficher la sortie
console.log(isEmpty("1"));
console.log(isEmpty("WayToLearnX"));
console.log(isEmpty("  "));
console.log(isEmpty(""));
console.log(isEmpty(''));

//-------
*/
/*
// Avec deux chaînes, str1 et str2, renvoyez une seule chaîne au format « str1 | str2 ».

function concatStr(str1, str2) {
	return `${str1} | ${str2}`;
}

// Afficher la sortie
console.log(concatStr("True", "False"));
console.log(concatStr("On", "Off"));
console.log(concatStr("A", "B"));

//---------
*/
/*
// Créez une fonction qui prend un nom et renvoie un message d’accueil sous la forme d’une chaîne. N’utilisez pas une fonction normale mais utilisez une fonction fléchée(Arrow)

const msg = name => `Hello ${name}, Welcome to WayToLearnX!`;

// Afficher la sortie
console.log(msg("Thomas"));
console.log(msg("Alex"));
console.log(msg("Emily"));

//--------
*/
/*
// Écrivez une fonction qui renvoie la longueur d’une chaîne. Utiliser une fonction récursive.

function size(str, n = 0) {
    if(str[n] === undefined) {
      return n;
    }
   return size(str, n + 1);
}

// Afficher la sortie
console.log(size("alex"));
console.log(size("x"));
console.log(size(""));

//------
*/
/*
// Créez une fonction qui prend deux chaînes str1 et str2 comme arguments et renvoie TRUE si le nombre total de caractères dans la première chaîne est égal au nombre total de caractères dans la deuxième chaîne sinon renvoie FALSE.

function compareSize(str1, str2) {
	return str1.length === str2.length;
}

// Afficher la sortie
console.log(compareSize("AA", "BB"));
console.log(compareSize("123", "1"));
console.log(compareSize("Ali", "Bob"));

//------
*/
/*
// Créez une fonction qui prend la hauteur et la largeur et trouve le périmètre d’un rectangle.

function getPerimeter(height, width) {
	return (height + width) * 2;
}

// Afficher la sortie
console.log(getPerimeter(2, 6));
console.log(getPerimeter(3, 10));
console.log(getPerimeter(1, 5));

//------
*/
/*
// Créez une fonction qui prend un nombre comme argument et renvoie « pair » pour les nombres pairs et « impair » pour les nombres impairs.

function check(n) {
	if (n % 2 === 0) {
        return "Pairs";
    } else {
        return "Impair"
    }
}

// Afficher la sortie
console.log(check(2));
console.log(check(7));
console.log(check(22));

//------
*/
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

//------
*/
/*
// Créez une fonction qui ajoute une sous-chaîne à la fin de chaque chaîne du tableau.

function addEnd(tableau, fin) {
// solution 1	return `"${tableau[0] + fin}", "${tableau[1] + fin}", "${tableau[2] + fin}"`
// solution 2    return tableau.map(mot => mot + fin);
}

// Afficher la sortie
console.log(addEnd(["accept", "achet", "adapt"], "able"));
console.log(addEnd(["aim", "act", "ard"], "ant"));

//-------
*/
/*
// Créez une fonction qui vérifie si l’argument est un entier ou une chaîne. Renvoie « int » s’il s’agit d’un entier et « string » s’il s’agit d’une chaîne.

function checkIntOrStr(x) {
	if (typeof x === "number") {
        return "int";
    } else if (typeof x === "string") {
        return "string";
    }
}

// Afficher la sortie
console.log(checkIntOrStr("WayToLearnX"));
console.log(checkIntOrStr(1));
console.log(checkIntOrStr("250"));

//--------
*/
/*
// Créez une fonction qui prend une phrase et renvoie le nombre de mots.

function count(str) {
	return str.split(" ").length;
}

// Afficher la sortie
console.log(count("Welcome to WayToLearnX"));
console.log(count("Hello World"));
console.log(count("I am going to my school"));

//------
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

//------
*/
/*
// Créez une fonction pour supprimer toutes les valeurs nulles d’un tableau.

function deleteNull(tab) {
	return tab.filter(i => i !== null)
}

// Afficher la sortie
console.log(deleteNull(["Alex", null, "Emily", "Bob"]));
console.log(deleteNull([0, 1, null, 2, null, 3]));
console.log(deleteNull([null, null, null]));

//------
*/
/*
// Une année bissextile a un jour ajouté à février pour être synchronisée avec l’année saisonnière. Une année bissextile apparaît avec une fréquence régulière, déterminée par la règle ci-dessous:
// Une année doit être divisible par 400 ou divisible par 4 et non pas 100.
// Vous devez implémenter une fonction qui renvoie TRUE si c’est une année bissextile, ou FALSE si ce n’est pas le cas.

function bissextile(year) {
	if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
        return true;
    } else {
        return false;
    }
}

// Afficher la sortie
console.log(bissextile(2020));
console.log(bissextile(1400));
console.log(bissextile(2000));

//------
*/
/*
// Créez une fonction qui trouve tous les nombres pairs de 1 au nombre donné.

function nbrPaire(n) {
    let paire = [];
  
    for (let i = 1; i <= n; i++) {
      if (i % 2 === 0) {
        paire.push(i);
      }
    }
    
    return paire;
}

// Afficher la sortie
console.log(nbrPaire(6));
console.log(nbrPaire(4));
console.log(nbrPaire(2));

//-----
*/
/*
// Convert number to reversed array of digits

function digitize(n) {
    const digits = String(n).split("").reverse().map(Number)
    console.log(digits)
}

digitize(35231)

*/