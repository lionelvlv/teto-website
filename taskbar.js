function taskClicked(w) {
	console.log(w);
	if (w.classList.contains("minimized"))  {
		w.classList.toggle("minimized");
	}
	w.parentNode.appendChild(w);
	updateTaskBar();
}

var taskBar = document.getElementById("taskbarlist");
var taskTemplate = document.getElementById("taskTemplate");

for (let widget of widgets) {
	var newTask = taskTemplate.content.cloneNode(true);
	var taskDiv = newTask.querySelector(".task");
	var widgetName = taskDiv.querySelector(".widgetName");
	widgetName.innerHTML = widget.widgetName;
	widget.task = taskDiv;
	taskDiv.addEventListener("click", () => taskClicked(widget));
	taskBar.appendChild(taskDiv);		
}

function updateTaskBar() {
	for (var widget of widgets) {
		if (widget.classList.contains("minimized")) {
				widget.task.classList.add("taskMinimized");	
		}
		else {
			console.log("test");
			widget.task.classList.remove("taskMinimized");	
		}
	}
} 
