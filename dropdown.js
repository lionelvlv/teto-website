function generateDropdowns(objList, parentElem) {
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
	parentElem.appendChild(div);
}

function generateObjList2d(name, content) {
	return {name: name, content: content,};
}
