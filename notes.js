widgetScripts["notes"] = (widget) => {
	var newNotesbtn = widget.querySelector(".new-notes-file-btn");
	var saveNotesbtn = widget.querySelector(".save-notes-file-btn");
	var saveAsNotesbtn = widget.querySelector(".save2-notes-file-btn");
	var openNotesbtn = widget.querySelector(".open-notes-file-btn");


	newNotesbtn.addEventListener("click", () => newNote());
	saveNotesbtn.addEventListener("click", () => saveNotes());
	openNotesbtn.addEventListener("click", () => openNotes());
	saveAsNotesbtn.addEventListener("click", () => saveAs());

	function newNote() {
		console.log("new note");
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
