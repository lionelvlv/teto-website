function generateDropdowns(objList, widget) {
	var filedropdown = document.createElement("div");
	filedropdown.className = "dropdown";
	filedropdown.innerHTML = "File";

	var filedropdowncontent = document.createElement("div");
	filedropdowncontent.className = "dropdown-content"; 

	filedropdown.appendChild(filedropdowncontent);
	dropdownContainer.appendchild(filedropdown);
}
	// objList = [
	// {
  // name: "File",
	// content: [{name: "New", content: func}, {name: "Open", content: func}, {name: "Save", content:func}, {name: "Save As", content:func}]
	// },
	// ]

function generateObjList(currName, currContent, lstName, lstContent) {
	objList = [];

	newObj = {
		name: currName,
		content: generateObjList(currContent),
	};

	objList.appendChild(newObj);


}
