function generateDropdown(dropdownName, namesLst, widget) {
	var currDropdown = document.createElement("div");
	currDropdown.className = "dropdown";
	currDropdown.innerHTML = dropdownName;
	generateDropdownHelper(namesLst, currDropdown, widget);
	widget.querySelector(".dropdown-container").appendChild(currDropdown);
}

function generateDropdownHelper(names, parentElem, widget) {
	var div = document.createElement("div");
	div.className = "dropdown-content";
	for (let i=0; i < names.length; i++) {
		var currDiv = document.createElement("button");
		currDiv.className = "dropdown-btn";
		currDiv.addEventListener("click", () => widget.willHePerform(names[i]));
	  currDiv.innerHTML = names[i];
		div.appendChild(currDiv);
	}
	parentElem.appendChild(div);
}

function generateObj(name, content) {
	return {name: name, content: content,};
}
