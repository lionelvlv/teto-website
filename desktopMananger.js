var widgets = [];
var template = document.getElementById("widgetTemplate");
var desktop = document.getElementById("desktop");
function makeWindow(id, name, w, h, x, y) {
	var contents = document.getElementById(id);
	var widgetTemplate = template.content.cloneNode(true);
	var newWidget = widgetTemplate.querySelector(".widget");
	var widgetName = newWidget.querySelector(".widgetName");
	newWidget.widgetName = name;
	widgetName.innerHTML = name;
	newWidget.appendChild(contents);
	widgets.push(newWidget);
	desktop.appendChild(newWidget);
	
	newWidget.style.width = w + "px";
	newWidget.style.height = h + "px";
	newWidget.style.left = x + "px";
	newWidget.style.top = y + "px";
}

makeWindow("wordle", "Wordle", 210, 350, 0, 0);
makeWindow("demo", "demo",     250, 250, 210, 0);
makeWindow("paint", "Paint",   600, 250, 460, 0);
makeWindow("pear-box", "Pear", 250, 250, 1060, 0);
makeWindow("player", "player", 250, 300, 1310, 0);



const widgetbars = document.getElementsByClassName("widgetBar");
for (const i of widgetbars) {
	i.addEventListener("mousedown", clicked);
}
