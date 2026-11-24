widgetScripts["terminal2"] = (widget) => {
	var terminalHistory = widget.querySelector(".terminalHistory");
	var inputField = widget.querySelector(".terminalInput");

	var oldLog = console.log;

	function captureConsole() {
		console.log = (msg) => {
			terminalHistory.innerHTML += msg;	
			oldLog(msg);
		};
	}
	function releaseConsole() {
		console.log = oldLog;
	}
	document.addEventListener("keydown", (event) => {
		if (event.key == "Enter") {		
			terminalHistory.innerHTML += (inputField.value + "<br>");
			captureConsole();
			try {
				console.log(eval(inputField.value) + "<br>");
			}	
			catch(e) {
				console.log(e + "<br>");
			}
			releaseConsole();
			
			inputField.value = "";
		}
	});
};

