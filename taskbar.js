function taskClicked(w) {
	console.log(w);
	if (w.classList.contains("minimized"))  {
		w.classList.toggle("minimized");
	}
	w.parentNode.appendChild(w);
}

var taskBar = document.getElementById("taskbarlist");
var taskTemplate = document.getElementById("taskTemplate");

for (let widget of widgets) {
	var newTask = taskTemplate.content.cloneNode(true);
	var taskDiv = newTask.querySelector(".task");
	taskDiv.addEventListener("click", () => taskClicked(widget));
	taskBar.appendChild(taskDiv);		
}

function updateTaskBar() {
	for (var widget of widgets) {
		console.log(widget.classList.contains("minimized"));
	}
} 
