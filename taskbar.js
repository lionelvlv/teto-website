function taskClicked(widget) {
	if (widget.classList.contains("minimized"))  {
		widget.classList.remove("minimized");	
	}
	widget.parentNode.appendChild(widget); // bring to foreground 
	updateTaskBar();
}

var taskBar = document.getElementById("taskbarlist");
var taskTemplate = document.getElementById("taskTemplate");
var widgets = [];

function addTask(widget) {
	var newTask = taskTemplate.content.cloneNode(true);
	var taskDiv = newTask.querySelector(".task");
	var titleElement = taskDiv.querySelector(".widgetName");
	titleElement.innerHTML = widget.title;
	taskDiv.addEventListener("click", () => taskClicked(widget));
	taskBar.appendChild(taskDiv);

	widget.task = taskDiv;

	widgets.push(widget);
}

function removeTask(widget) {
	widget.task.remove();
	widgets = widgets.filter((w) => !(w === widget));
}


function updateTaskBar() {	
	for (let widget of widgets) {
		if (widget.classList.contains("minimized")) {
				widget.task.classList.add("taskMinimized");	
		}
		else {
			widget.task.classList.remove("taskMinimized");	
		}
	}
} 
