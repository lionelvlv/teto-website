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


function updateTaskBar(widget=null, name=null) {
	if (widget && name) {
		for (currTask of taskBar.children) {
			let taskbarName = currTask.querySelector(".widgetName").innerHTML;
			let widgetName = widget.querySelector(".widgetName").innerHTML
			if (taskbarName == widgetName) {
				currTask.querySelector(".widgetName").innerHTML = name;
				break;
			}
		}
	}
	for (let widget of widgets) {
		if (widget.classList.contains("minimized")) {
				widget.task.classList.add("taskMinimized");	
		}
		else {
			widget.task.classList.remove("taskMinimized");	
		}
	}
} 
