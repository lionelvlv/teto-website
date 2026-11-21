var widgets = [];
var widgetScripts = [];
var template = document.getElementById("widgetTemplate");
var desktop = document.getElementById("desktop");
function makeWindow(id, name, w, h, x, y) {
	// console.log(contents);
	var contents = document.getElementById(id).content.cloneNode(true);
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
	if (id in widgetScripts) {
		 widgetScripts[id](newWidget);
	}
	const widgetBar = newWidget.querySelector(".widgetBar");
	widgetBar.addEventListener("mousedown", clicked);
	addTask(newWidget);
	updateTaskBar();
}

