function closeWidget(e) {
		var x = e.parentNode.parentNode.parentNode.parentNode;
		x.task.remove();
		x.remove();
		updateTaskBar();
}

function restore(widget, recalculate, e) {
		if (recalculate) {
			var newPosX = e.pageX - parseInt(widget.previousSize.sizeX) / 2;
			widget.style.setProperty("left", newPosX + "px");
			relX = -parseInt(widget.previousSize.sizeX) / 2;
			relY = - e.pageY;
		}
		else {
			widget.style.setProperty("left", widget.previousSize.xPos);
			widget.style.setProperty("top", widget.previousSize.yPos);
		}

		widget.style.setProperty("width", widget.previousSize.sizeX);
		widget.style.setProperty("height", widget.previousSize.sizeY);
		widget.classList.toggle("maximized");
		updateTaskBar();
}

function maximizeWidget(e) {
		var x = e.parentNode.parentNode.parentNode.parentNode;
		x.parentNode.appendChild(x);
		x.previousSize = {sizeX: x.style.getPropertyValue("width"), sizeY: x.style.getPropertyValue("height"), 
											xPos: x.style.getPropertyValue("left"), yPos: x.style.getPropertyValue("top")};
		console.log(x.style.getPropertyValue("top"));
		x.style.setProperty("left", 0 + "px");
		x.style.setProperty("top", 0 + "px");
		var desktop = document.getElementById("desktop");
		x.style.setProperty("width", desktop.clientWidth + "px");
		x.style.setProperty("height", desktop.clientHeight + "px");
		x.classList.toggle("maximized");
		updateTaskBar();
}
function minimizeWidget(e) {
		var x = e.parentNode.parentNode.parentNode.parentNode;
		x.classList.toggle("minimized");
		updateTaskBar();
}
var relX = 0;
var rely = 0;

function clicked(event) {
	if (event.target.classList.contains("barButton")) {
		return;
	}
	var element = event.currentTarget.parentNode.parentNode;

	element.parentNode.appendChild(element);
	var rect = element.getBoundingClientRect();
	relX = rect.left - event.pageX;
	relY = rect.top - event.pageY;
	element.classList.toggle("selected");
	if (element.classList.contains("maximized")) {
		restore(element, true, event);
	}
}
document.onmousemove = handleMouseMove;
function resize(event) {
	console.log(event);
}
function handleMouseMove(event) {
	var x = event.pageX;
	var y = event.pageY;
	
	const selected = document.getElementsByClassName("selected")[0];
	if (selected) {
		const elementStyle = selected.style;
		elementStyle.setProperty("left", (x + relX).toString() + "px");
		elementStyle.setProperty("top", (y + relY).toString() + "px");
	}
}
document.onmousedown = mouseDown;
document.onmouseup   = mouseUp;
var mouseState = "up";
function mouseMove(ev) {

    if(mouseState=='down') {
        console.log('mouse down state')
    }

    if (mouseState=='up')  {
        console.log('mouse up state')
    }
}

function mouseDown(ev) {
    mouseState = "down";
}

function mouseUp(ev) {
	const selected = document.getElementsByClassName("selected")[0];
	if (selected) {selected.classList.toggle("selected");}
	mouseState = "up";
}
