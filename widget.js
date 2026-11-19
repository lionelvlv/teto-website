var relX = 0;
var rely = 0;

function clicked(event) {
	var element = event.currentTarget.parentNode;
	var rect = element.getBoundingClientRect();
	relX = rect.left - event.pageX;
	relY = rect.top - event.pageY;
	element.classList.toggle("selected");
}
const widgets = document.getElementsByClassName("widgetBG");
for (const i of widgets) {
	i.addEventListener("click", clicked);
}
document.onmousemove = handleMouseMove;
function handleMouseMove(event) {
	console.log(relX);
	var x = event.pageX;
	var y = event.pageY;
	
	const selected = document.getElementsByClassName("selected")[0];
	if (selected) {	
		const elementStyle = selected.style;
		elementStyle.setProperty("left", (x + relX).toString() + "px");
		elementStyle.setProperty("top", (y + relY).toString() + "px");
	}
}
