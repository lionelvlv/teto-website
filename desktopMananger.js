var widgetScripts = [];
var widgetTemplate = document.getElementById("widgetTemplate");
var desktop = document.getElementById("desktop");
const WINDOWS_STARTUP_SOUND = new Audio("./assets/sounds/startupsound.mp3");
desktop.addEventListener("click", startUpSound)

function startUpSound() {
	WINDOWS_STARTUP_SOUND.volume = 0.3;
	// WINDOWS_STARTUP_SOUND.play();
	// so this shit only plays once
	desktop.removeEventListener("click", startUpSound);
}

function makeWidget(id, name = "default", w = 200, h = 200, x = 100, y = 100) {
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
	widget.addEventListener("mousedown", (event) => drag(event, widget));
	widget.addEventListener("mousemove", (event) => over(event, widget));
  // Chromium doesn't preserve the state of mouse events when the div is moved. (guess)
	// I'm using click so that buttons can be triggerd before div is moved to foreground.
	widget.addEventListener("click", (event) => click(event, widget));

	if (id in widgetScripts) {
		 widgetScripts[id](widget); // A function should be added to this for each widget.
	}

	addTask(widget);
	updateTaskBar();
}

document.onmousemove = (e) => {
	mouseMove(e);
	if (icon_onmousemove) {
		icon_onmousemove(e);
	}
};

document.onmousedown = mouseDown;
document.onmouseup = mouseUp;
var mouseState = "up"; // Globally useful so it belongs here. Only used in paint.js currently. 
function mouseDown(ev) {
    mouseState = "down";
}

function mouseUp(ev) {
	dragData.selected = null;
	document.body.style.cursor = "initial";
	mouseState = "up";
	if (icon_onmouseup) {
		icon_onmouseup(ev);
	}
}
