// https://edabit.com/challenge/rgdT9sZ4QhsKhaSw9
// #1 Find the Missing Number 
//Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.
function missingNum(array) {
	for(var i=1; i< 11; i++){
		if(array.indexOf(i) == -1) return i
	}
}

