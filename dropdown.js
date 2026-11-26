function generateDropdowns(objList, parentElem) {
	var div = document.createElement("div");
	div.className = "dropdown";
	for (obj of objList) {
		currName = obj.name;
		currFunc = obj.content;
		var currDiv = document.createElement("button");
		currDiv.className = "dropdown-content";
		currDiv.addEventListener("click", currFunc);
		text = document.createElement("p");
		text.innerHTML = currName;
		currDiv.appendChild(text);
		div.appendChild(currDiv);
	}
	parentElem.appendChild(div);
}

function generateObjList2d(name, content) {
	return {name: name, content: content,};
}
