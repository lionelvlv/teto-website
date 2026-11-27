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

	// View	var filedropdowncontent = document.createElement("div");
	// 	filedropdowncontent.className = "dropdown-content"; 

	// 	filedropdown.appendChild(filedropdowncontent);
	// 	dropdownContainer.appendChild(filedropdown);
	// }

	// generateDropdowns();
	//
	
	function build() {
		generateDropdown('File', ["New", "Open", "Save", "Save As"], [newNote, openNote, saveNote, saveAs], dropdownContainer); 
		generateDropdown('Edit', ["Undo", "Cut", "Copy", "Paste", "Delete"], [undoNoteText, cutNoteText, copyNoteText, pasteNoteText, deleteNoteText], dropdownContainer); 
		generateDropdown('Format', ["Word Wrap", "Font"], [wordwrapNote, fontNote], dropdownContainer); 
		generateDropdown('View', ["Status Bar"], [noteStatusBar], dropdownContainer); 
		generateDropdown('Help', ["Help Topics", "About Notepad"], [helpTopicsNote, aboutNote], dropdownContainer); 
	}

	build();

	function updateNoteName(name) {
		updateName(name, widget);
	}

	function newNote() {
		console.log("new note");
		updateNoteName("test");
	}

	function saveNote() {
		console.log("save note");
	}

	function saveAs() {
		console.log("save as");
	}

	function openNote() {
		console.log("open notes"); 
	}

// ############################################################### 
	function undoNoteText() {
		console.log("undo");
	}

	function cutNoteText() {
		console.log("cut");
	}

	function copyNoteText() {
		console.log("copy");
	}

	function pasteNoteText() {
		console.log("paste");
	}

	function deleteNoteText() {
		console.log("delete");
	}

// ############################################################### 
	
	function wordwrapNote() {
		console.log("word wrap note");
	}

	function fontNote() {
		console.log("font note");
	}
// ############################################################### 

	function noteStatusBar() {
		console.log("status bar");
	}
// ############################################################### 

	function helpTopicsNote() {
		console.log("help topics note");
	}

	function aboutNote() {
		console.log("about note");
	}

	

}
