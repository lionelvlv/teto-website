widgetScripts["terminal2"] = (widget) => {
	var terminalHistory = widget.querySelector(".terminalHistory");
	var inputField = widget.querySelector(".terminalInput");
	var previousCommands = [""];
	var previousSelected = 0;
	var oldLog = console.log;

	function captureConsole() {
		console.log = (msg) => {
			terminalHistory.innerHTML += msg + "<br>";	
		//	oldLog(msg);
		};
	}
	function releaseConsole() {
		console.log = oldLog;
	}
	widget.addEventListener("click", (event) => {
		inputField.select();	
	});
	document.addEventListener("keydown", (event) => {
		if (!widget.classList.contains("highlighted")) {
			return;
		}
		if (previousSelected != previousCommands.length - 1) {
			if (inputField.value != previousCommands[previousSelected]) {
				previousSelected = previousCommands.length - 1;
			}
		}	
		if (event.key == "ArrowUp") {
			if (previousSelected == previousCommands.length - 1) {
				previousCommands[previousCommands.length - 1] = inputField.value;
			}
			previousSelected -= 1;
			if(previousSelected < 0) {
				previousSelected = 0;
			}
			inputField.value = previousCommands[previousSelected];
		}
		if (event.key == "ArrowDown") {
			previousSelected += 1;	
			if(previousSelected > previousCommands.length - 1) {
				previousSelected = previousCommands.length - 1;
			}
			inputField.value = previousCommands[previousSelected];
		}
			
		if (event.key == "Enter") {
			terminalHistory.innerHTML += (inputField.value + "<br>");
			captureConsole();
			try {
			 	if(previousCommands[previousCommands.length - 2] != inputField.value) {
						previousSelected = previousCommands.length;	
						previousCommands[previousCommands.length - 1] = inputField.value;
						previousCommands.push("");
				}

				let output = eval(inputField.value);
				if (output) {
					console.log(output);
				}
			}	
			catch(e) {
				console.log("<span style='color:red;'>" + e + "</span>");
			}
			releaseConsole();
			inputField.value = "";
			inputField.scrollIntoView(false);
		}
	});
};

