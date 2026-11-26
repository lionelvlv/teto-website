widgetScripts["notes"] = (widget) => {
	var newNotesbtn = widget.querySelector(".new-notes-file-btn");
	var saveNotesbtn = widget.querySelector(".save-notes-file-btn");
	var saveAsNotesbtn = widget.querySelector(".save2-notes-file-btn");
	var openNotesbtn = widget.querySelector(".open-notes-file-btn");

	var dropdownContainer = widget.querySelector(".dropdown-container");

	// newNotesbtn.addEventListener("click", () => newNote());
	// saveNotesbtn.addEventListener("click", () => saveNotes());
	// openNotesbtn.addEventListener("click", () => openNotes());
	// saveAsNotesbtn.addEventListener("click", () => saveAs());

	// function generateDropdowns() {
	// 	var filedropdown = document.createElement("div");
	// 	filedropdown.className = "dropdown";
	// 	filedropdown.innerHTML = "File";

	// 	var filedropdowncontent = document.createElement("div");
	// 	filedropdowncontent.className = "dropdown-content"; 

	// 	filedropdown.appendChild(filedropdowncontent);
	// 	dropdownContainer.appendChild(filedropdown);
	// }

	// generateDropdowns();

	function updateNoteName(name) {
		updateName(name, widget);
	}

	function newNote() {
		console.log("new note");
		updateNoteName("test");
	}

	function saveNotes() {
		console.log("save note");
	}

	function saveAs() {
		console.log("save as");
	}

	function openNotes() {
		console.log("open notes"); 
	}

	

}
