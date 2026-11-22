var currentlySelected = document.body;

document.body.addEventListener("mousedown", (event) => {
	if (!currentlySelected) {
		currentlySelected = document.body;
	}
	
	currentlySelected.classList.remove("highlighted");
	var x = event.target.closest(".selectable");
	if (x!= null) {
		currentlySelected = x;
	}
	else {
		currentlySelected = document.body;
	}
	currentlySelected.classList.add("highlighted");
	// console.log(currentlySelected);
});
