var widgetScripts = [];
var widgetTemplate = document.getElementById("widgetTemplate");
var desktop = document.getElementById("desktop");

function makeWidget(id, name, w, h, x, y) {
	// Grab contents of widget from <template id="$id"> and create a clone of it. 
	var contents = document.getElementById(id).content.cloneNode(true);
	// Similarly grab widget template and clone it.
	var widget = widgetTemplate.content.querySelector(".widget").cloneNode(true);
	// Puts contents inside widget. 
	widget.appendChild(contents);

	var titleElement = widget.querySelector(".widgetName");
	titleElement.innerHTML = name; 
	widget.title = name; // Used by taskbar.js
	
	desktop.appendChild(widget);

	widget.style.width = w + "px";
	widget.style.height = h + "px";
	widget.style.left = x + "px";
	widget.style.top = y + "px";

	const widgetBar = widget.querySelector(".widgetBar");
	widgetBar.addEventListener("mousedown", (event) => drag(event, widget));
  // Chromium doesn't preserve the state of mouse events when the div is moved. (guess)
	// I'm using click so that buttons can be triggerd before div is moved to foreground.
	widget.addEventListener("click", (event) => click(event, widget));

	if (id in widgetScripts) {
		 widgetScripts[id](widget); // A function should be added to this for each widget.
	}

	addTask(widget);
	updateTaskBar();
}

document.onmousedown = mouseDown;
document.onmouseup = mouseUp;
var mouseState = "up"; // Globally useful so it belongs here. Only used in paint.js currently. 
function mouseDown(ev) {
    mouseState = "down";
}

function mouseUp(ev) {
	dragData.selected = null;
	mouseState = "up";
}
