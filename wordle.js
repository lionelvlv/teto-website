var desktop = document.getElementById("desktop");
var wordlerows = document.getElementById("wordlerows"); 
var word = "apple"
const MAX_GUESSES = 6;
const ROW_LENGTH = 5;

var currGuess = 1;
var currGuessLen = 0;
var currRowIndex = 0;
guess = "";

// handle input PER ROW while widget is FOCUSED
document.addEventListener("keydown", function(event) {
	// console.log("key " + event.key + " pressed!")
	var key = event.key;
	console.log(key + " is " + isValidInput(key));
	if (isValidInput(key) && currGuessLen < ROW_LENGTH) {
		var currElem = getElem(currGuessLen, currRow);
		currGuessLen++;
		guess = guess + key;
		currElem.text.innerHTML = key;
	} else if (currGuessLen == ROW_LENGTH && isValidWord(guess)) {
		processRow(currRowIndex, guess);
	}
});

function getElem(colIndex, rowIndex) {
	var row = getWordlerow(colIndex);


}

function getWordlerow(colIndex) {
	return wordlerows.children[colIndex];
}

function buildBoard() {
	for (let i = 0; i < MAX_GUESSES; i++) {
		var row = document.createElement("div");
		row.id = "row " + i;
		row.className = "wordle-row";
		row.style.setProperty("display", "flex");
		row.style.setProperty("flex-direction", "row");
		for (let j = 0; j < ROW_LENGTH; j++) {
			var elem = document.createElement("div");
			elem.className = "wordle-elem";
			elem.style.setProperty("background-color", "grey");
			elem.style.setProperty("width", "20px");
			elem.style.setProperty("margin", "5px");
			elem.style.setProperty("padding", "5px");
			elem.style.setProperty("height", "20px");
			// decision: each elem knows it's correct letter
			elem.letter = word[i];
			var text = document.createElement('div');
			//text.innerHTML = '<input type="text" id="wordle-row-' + (i+1) + '-elem-' + (j+1) +'"'+ ' style="width: 20px; margin: 5px;">'
			text.innerHTML = '<p id="wordle-row-' + (i+1) + '-elem-' + (j+1) +'"'+ ' style="width:20px; height:20px;"></p>'
			elem.appendChild(text);
			row.appendChild(elem);
		}
		wordlerows.appendChild(row);
	}
}

buildBoard();

function getWordleRow(index) {
	// TODO how to get row?
}

// need to reference 5-word dictionary, if not valid word, do not process input
function isValidWord(word) {
	// TODO how to valid word?
	return true;
}

function isValidInput(str) {
	// @SOURCE: https://stackoverflow.com/questions/9862761/how-to-check-if-character-is-a-letter-in-javascript
	//
	return str.length === 1 && str.match(/[a-z]/i);
}

// assume valid guess
function processRow(index, guess) {
	var correct = 0;
	var currRow = getWordleRow(index);
	for (let i=0; i++; i < ROW_LENGTH) {
		currDiv = currRow[i];
		currGuessLetter = guess[i];
		correctLetter = word[i];

		if (currGuessLetter == correctLetter) {
			rightLetter(currDiv);
			correct++;
		// TODO handle the case where there's multiple letters but only 1 is valid
		} else if (word.includes(currGuessLetter)) {
			wrongBox(currDiv);
		} else {
			wrongLetter(currDiv);
		}
	}

	if (correct == 5) {
		winGame();
	}

	currGuess++;

	if (currGuess == MAX_GUESSES) {
		fail();
	}
	
}

// right letter in right spot? green
// right letter in wrong spot? yellow
// wrong letter? grey
function wrongLetter(div) {
	div.style.setProperty("background-color", "red");
}

function rightLetter(div) {
	div.style.setProperty("background-color", "green");
}

function wrongBox(div) {
	div.style.setProperty("background-color", "yellow");
}
