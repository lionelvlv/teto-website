function taskbar(n) {
	var widget;
	if (n == 1) {
		widget = document.getElementById("paint");
	}
	if (n == 2) {
		widget = document.getElementById("DVD");
	}
	if (n == 3) {
		widget = document.getElementById("player");
	}			
	if (n == 4) {
		widget = document.getElementById("placeholder");
	}			
	if (widget.classList.contains("minimized"))  {
		widget.classList.toggle("minimized");
	}
	widget.parentNode.appendChild(widget);
} 
