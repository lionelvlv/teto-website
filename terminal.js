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

	document.addEventListener("keydown", function(event) {
		if (!widget.classList.contains("highlighted")) {
			return;
		}
		console.log(key);
		var key = event.key;
		text.innerHTML += key; 
	})

	function updateCaret() {
		if (caret.style.visibility == "visible") {
			caret.style.visibility = "hidden";
		} else {
			caret.style.visibility = "visible";
		}
	}
	window.setInterval(updateCaret, 500);



}
