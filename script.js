/*
// Looping Triangle Exercise - Chapter 2 JavaScript
for (var symbol = "#"; symbol.length <= 7; symbol = symbol + "#") {
	console.log(symbol)
}
*/

/*
// FizzBuzz Exercise - Chapter 2 Javascript
for (number = 0; number <= 100; number = number + 1) {
	if (number % 15 == 0) {
		console.log("FizzBuzz")
	}
	else if (number % 3 == 0) {
		console.log("Fizz")
	}
	else if (number % 5 == 0) {
		console.log("Buzz")
	}
	else {
		console.log(number)
	}
}
 */

// Chessboard Exercise - Chapter 2 JavaScript exercise
let size = 8;
let board = "";

for (let height = 0; height <= size; height++) {
	for(let length = 0; length <= size; length++) {
		if ((length + height) % 2 == 0) {
			board += " ";
		}
		else {
			board += "#";
		}
	}
	board += "\n"
}

console.log(board);