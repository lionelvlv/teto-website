
function closeWidget(e) {
		var x = e.parentNode.parentNode.parentNode;
		x.remove();
}

function maximizeWidget(e) {
		var x = e.parentNode.parentNode.parentNode;
		x.style.setProperty("left", 0 + "px");
		x.style.setProperty("top", 0 + "px");
		x.style.setProperty("width", document.body.clientWidth + "px");
		x.style.setProperty("height", document.body.clientHeight + "px");
}
function minimizeWidget(e) {
		var x = e.parentNode.parentNode.parentNode;
		x.style.setProperty("width", 150 + "px");
		x.style.setProperty("height", 150 + "px");
}
var relX = 0;
var rely = 0;

function clicked(event) {
	var element = event.currentTarget.parentNode;
	var rect = element.getBoundingClientRect();
	relX = rect.left - event.pageX;
	relY = rect.top - event.pageY;
	element.classList.toggle("selected");
}
const widgets = document.getElementsByClassName("widgetUI");
for (const i of widgets) {
	i.addEventListener("mousedown", clicked);
}
document.onmousemove = handleMouseMove;

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
