function generateDropdown(dropdownName, namesLst, contentLst, parent) {
	var currDropdown = document.createElement("div");
	currDropdown.className = "dropdown";
	currDropdown.innerHTML = dropdownName;
	generateDropdownHelper(generateObjList(namesLst, contentLst), currDropdown);
	parent.appendChild(currDropdown);
}

function generateDropdownHelper(objList, parentElem) {
	var div = document.createElement("div");
	div.className = "dropdown-content";
	for (obj of objList) {
		currName = obj.name;
		currFunc = obj.content;
		var currDiv = document.createElement("button");
		currDiv.className = "dropdown-btn";
		currDiv.addEventListener("click", currFunc);
	  currDiv.innerHTML = currName;
		div.appendChild(currDiv);
	}
	console.log(div);
	parentElem.appendChild(div);
}

function generateObjList(names, content) {
	var result = []
	for (let i = 0; i < names.length; i++) {
		result.push(generateObj(names[i], content[i]));
	}
	return result;
}

function generateObj(name, content) {
	return {name: name, content: content,};
}
