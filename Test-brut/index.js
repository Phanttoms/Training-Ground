/*
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

function duplicateCount(text) {
	const array = text.toUpperCase().split("").sort();
	let result = [];
	let final = 0;

	for (let i = 0; i < array.length; i++) {
		if (array[i] === array[i + 1]) {
			result.push(array[i]);
		}
	}

	for (let j = 0; j < result.length; j++) {
		if (result[j] !== result[j + 1]) {
			final++;
		}
	}

	console.log(final);
	return final;
}

duplicateCount(""); // 0
duplicateCount("abcde"); // 0
duplicateCount("aabbcde"); // 2
duplicateCount("aabBcde"); // 2 "should ignore case"
duplicateCount("Indivisibility"); // 1
duplicateCount("Indivisibilities"); // 2 "characters may not be adjacent"
*/
/*
//

function canIPlay(now, start, end) {
	if (start <= now && now < end) {
		console.log(true);
		return true;
	} else if (start > end && (now >= start || now < end)) {
		console.log(true);
		return true;
	} else {
		console.log(false);
		return false;
	}
}

canIPlay(12, 10, 14); // true "12:00 should match to 10:00-14:00 prime-time"
canIPlay(12, 13, 14); // false "12:00 shouldn't match to 13:00-14:00 prime-time"
canIPlay(15, 12, 15); // false "15:00 shouldn't match to 12:00-15:00 prime-time"
canIPlay(23, 22, 1); // true "23:00 should match to 22:00-01:00 prime-time"
*/
