widgetScripts['wordle'] = (widget) => { 
	var wordlerows = widget.querySelector(".wordle-rows"); 
	var word = "apple"
	const MAX_GUESSES = 6;
	const ROW_LENGTH = 5;

	var currGuess = 0;
	var currGuessLen = 0;
	var currRowIndex = 0;
	var guess = { text: "", };

	document.addEventListener("keydown", function(event) {
		// console.log("key " + event.key + " pressed!")
		var key = event.key;
		// console.log(key + " is " + isValidInput(key));
		var colIndex = currGuessLen;
		if (isBackspace(event)) {
			if (guess.text.length > 0 && colIndex > 0) {
				var currElem = getElem(colIndex - 1, currRowIndex);
				currElem.children[0].innerHTML = "";
				currElem.correct = false;
				currGuessLen -= 1;
				// string pop here 
				guess.text = guess.text.substring(0, guess.text.length - 1);
			}
			return;
		}

		if ((currGuessLen < ROW_LENGTH) && isValidInput(key)) {
			var currElem = getElem(colIndex, currRowIndex);
			currElem.children[0].innerHTML = key;
			guess.text = guess.text + key;
			currElem.correct = word[colIndex] == guess.text[colIndex];
			currGuessLen++;
		} 
		// @SOURCE: https://stackoverflow.com/questions/7060750/detect-the-enter-key-in-a-text-input-field
		if ((isEnter(event)) && currGuessLen >= ROW_LENGTH && isValidWord(guess)) {
			// process row here
			letterMap = new Map();
			for (let z = 0; z < word.length; z++) {
				var currChar = word[z];
				if (!letterMap.hasOwnProperty("currChar")) {
					letterMap[currChar] = 1;
				} else {
					letterMap[currChar] += 1;
				}
			}
			for (let i=0; i < ROW_LENGTH; i++) {
				var currElem = getElem(i, currRowIndex);
				if (guess.text[i] == word[i]) {
					rightLetter(currElem); 
					letterMap[guess.text[i]] -= 1;
				} else {
					wrongLetter(currElem);
				}

			}
			// process yellows
			for (let i=0; i < ROW_LENGTH; i++) {
				if (!(guess.text[i] == word[i]) && (letterMap[guess.text[i]] > 0)) {
					wrongBox(currElem);
					letterMap[guess.text[i]] -= 1;
				}
			}
			if (guess.text == word) {
				addPromptButton();
				return;

			} else {
				currGuess++;
				nextRow();
			}
			// INVALID INPUT HANDLED HERE
		} else if (currGuessLen >= (ROW_LENGTH) && isEnter(event)) {
			// delay due to alert
			setTimeout(() => {resetRow();}, 100);
		} 

		if (currGuess >= MAX_GUESSES) {
			addPromptButton();
			return;
		}
	});

	function isEnter(event) {
		return (event.key === 'Enter' || event.keyCode === 13);
	}

	function isBackspace(event) {
		return (event.keyCode == 8 || event.keyCode == 46);
	}
	function getElem(colIndex, rowIndex) {
		var row = getWordlerow(rowIndex);
		return row.children[colIndex];
	}

	function getWordlerow(rowIndex) {
		return wordlerows.children[rowIndex];
	}

	function endGame() {
		var goodbye = widget.querySelector(".wordle-button-container");
		goodbye.remove();
		resetRows();
		currGuess = 0;
		currRowIndex = 0;
		currGuessLen=0;
		guess.text="";
	}

	function addPromptButton() {
		var div = document.createElement("div");
		div.className = "wordle-button-container";
		var button = document.createElement("div")
		button.innerHTML = '<button type="button" class="wordle-button">play again?</button>';
		button.addEventListener("click", () => endGame());
		div.appendChild(button);
		wordlerows.appendChild(div);
	}
	function resetRows() {
		for (let i=0; i<ROW_LENGTH; i++) {
			for (let j=0; j<MAX_GUESSES; j++) {
				// console.log(i,j);dd
				var elem = getElem(i, j);
				// console.log(elem);
				elem.children[0].innerHTML = "";
				elem.style.setProperty("background-color", "grey");
			}
		}
	}

	function buildBoard() {
		for (let i = 0; i < MAX_GUESSES; i++) {
			var row = document.createElement("div");
			row.className = "wordle-row-" + i;
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
				text.innerHTML = '<p class="wordle-row-' + (i+1) + '-elem-' + (j+1) +'"'+ ' style="width:20px; height:20px;"></p>'
				elem.appendChild(text);
				row.appendChild(elem);
			}
			wordlerows.appendChild(row);
		}
	}

	buildBoard();

	// need to reference 5-word dictionary, if not valid word, do not process input
	function isValidWord(word) {
		// TODO how to valid word?
		return true;
	}

	function nextRow() {
		currRowIndex++;
		guess.text="";
		currGuessLen=0;
	}

	function resetRow() {
		alert("not a valid word!");
		guess.text="";
		currGuessLen=0;
		for (let i = 0; i < ROW_LENGTH; i++) {
			// console.log(i, j);
			var elem = getElem(i, currRowIndex); 
			elem.children[0].innerHTML = "";
			elem.correct = false;
			elem.style.setProperty("background-color", "grey");
		}
	}
	function isValidInput(str) {
		// @SOURCE: https://stackoverflow.com/questions/9862761/how-to-check-if-character-is-a-letter-in-javascript
		return str.length === 1 && str.match(/[a-z]/i);
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
}

makeWindow("wordle", "Wordle", 210, 350, 0, 0);



