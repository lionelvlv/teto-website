// TETO MUSIC PLAYER
// play/pause button
// stop button
// skip button
// audio visualizer
// volume slider

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement
widgetScripts["terminal"] = (widget) => {
	var terminalBox = widget.querySelector(".widgetContent");
	var caret = widget.querySelector(".terminal_caret");
	var textContainer = widget.querySelector(".terminal_text_container");
	var text = widget.querySelector(".terminalText");
	var charPos = 0;
	var currRow = 0;
	
	document.addEventListener("keydown", function(event) {
		if (!widget.classList.contains("highlighted")) {
			return;
		}
		var key = event.key;
		if (!isInvalidInput(event.keyCode)) {
			text.innerHTML += key; 
			charPos++;
		} else if (event.keycode == 8 || event.key === "Backspace" || event.key === "Delete") {
			backspaceAction(charPos, currRow);
		} else if (event.key == "Space") {
			text.innerHTML += " ";
			charPos++;
		} else if (event.key == "Enter") {
			var prompt = text.innerHTML;
			if (prompt == "") {
				return;
			}
			var newLine = document.createElement("p");
			newLine.className = "terminalText"
			charPos = 0;
			currRow++;
			text = newLine;
			textContainer.appendChild(newLine);
			console.log(prompt);
		}
	})

	function updateCaret() {
		if (caret.style.visibility == "visible") {
			caret.style.visibility = "hidden";
		} else {
			caret.style.visibility = "visible";
		}
	}
	window.setInterval(updateCaret, 500);

	function backspaceAction(pos) {
		if (pos == 0) {
			currRow = Math.max(currRow--, 0);
			text = textContainer.children[currRow];
			charPos = textContainer.children[currRow].innerHTML.length;
			console.log(currRow, charPos);
		} else {
			text.innerHTML = replaceChar(text.innerHTML, '', pos - 1); 
			charPos = Math.max(charPos--, 0);
		}
	}

	// @SOURCE https://www.geeksforgeeks.org/javascript/how-to-replace-a-character-at-a-particular-index-in-javascript/
	function replaceChar(origString, replaceChar, index) {
    let firstPart = origString.substr(0, index);
    let lastPart = origString.substr(index + 1);

    let newString = firstPart + replaceChar + lastPart;
    return newString;
	}

	function isInvalidInput(keyCode) {
		// @SOURCE: https://stackoverflow.com/questions/9862761/how-to-check-if-character-is-a-letter-in-javascript
		codes = [13, 9, 18, 8, 38, 37, 40, 39, 35, 34, 33, 46, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 16, 20, 17, 91]; 	
		return codes.includes(keyCode);
	}
}
