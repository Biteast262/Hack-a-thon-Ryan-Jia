// #1 Find the Missing Number 
// https://edabit.com/challenge/rgdT9sZ4QhsKhaSw9
//Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.
function missingNum(array) {
	for(var i=1; i< 11; i++){
		if(array.indexOf(i) == -1) return i
	}
}

// #2 Ping Pong!
// https://edabit.com/challenge/S7oxczk4Rtu99kaZ8
// A game of table tennis almost always sounds like Ping! followed by Pong! Therefore, you know that Player 2 has won if you hear Pong! as the last sound (since Player 1 didn't return the ball back).

// Given an array of Ping!, create a function that inserts Pong! in between each element. Also:

// If win equals true, end the list with Pong!.
// If win equals false, end with Ping! instead.

function pingPong(arr, win) {
	var gameArr = new Array()
	for (var i=0; i < arr.length; i++){
		gameArr.push('Ping!')
		gameArr.push('Pong!');
	}
	if (!win) {
		gameArr.pop();
	}
	return gameArr;
}

// #3 Array of Multiples
// https://edabit.com/challenge/ebcd4Xu8TLizaj6dm
// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num up to length.

function arrayOfMultiples (num, length) {
	var finalArr = new Array;
	for (var i = 1; i <= length; i++){
		finalArr.push(i * num);
	}
	return finalArr;
}

//#4 Count the Letters and Digits
//https://edabit.com/challenge/2ndkdWJpycphvhmv8
/*Write a function that takes a string and calculates the number of letters and digits within it. Return the result as an object.
Examples:
countAll("Hello World") ➞ { "LETTERS":  10, "DIGITS": 0 }

countAll("H3ll0 Wor1d") ➞ { "LETTERS":  7, "DIGITS": 3 }

countAll("149990") ➞ { "LETTERS": 0, "DIGITS": 6 }*/

//Copyed from William Lambeth's soultion. Not full understand yet
function countAll(str) {
	var characs = str.split('');
	var letters = 0;
	var digits = 0;
	
	for (var i = 0; i < characs.length; i++){
		if (characs[i] !== " "){
			if (isNaN(characs[i]))
				letters++;
			else digits++;
		}
	}
	
	var answer = {
		"LETTERS": letters, 
		"DIGITS": digits
	}
	
	return answer;
}