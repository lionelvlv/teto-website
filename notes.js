widgetScripts["notes"] = (widget) => {
	var noteText = widget.querySelector(".noteText");

	function build() {
		generateDropdown('File', ["New", "Open", "Save", "Save As"], [newNote, openNote, saveNote, saveAs], widget); 
		generateDropdown('Edit', ["Undo", "Cut", "Copy", "Paste", "Delete"], [undoNoteText, cutNoteText, copyNoteText, pasteNoteText, deleteNoteText], widget); 
		// generateDropdown('Format', ["Word Wrap", "Font"], [wordwrapNote, fontNote], dropdownContainer); 
		// generateDropdown('View', ["Status Bar"], [noteStatusBar], dropdownContainer); 
		// generateDropdown('Help', ["Help Topics", "About Notepad"], [helpTopicsNote, aboutNote], dropdownContainer); 
	}

	build();

// HELPERS
	function unsavedChangesCheck() {
		console.log("unsaved changes");
	}

	function unsavedWarningPopup() {
		console.log("unsaved warning");
	}

// ############################################################### 
	function newNote() {
		if (unsavedChangesCheck()) {
			unsavedWarningPopup();
		}
		console.log("new note");
		updateName("Untitled", widget);
		noteText.value = "";
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
		document.execCommand("undo");
	}

	function cutNoteText() {
		noteText.focus();
		document.execCommand("cut");

	}

	function copyNoteText() {
		noteText.focus();
		document.execCommand("copy");

	}

	function pasteNoteText() {
		noteText.focus();
		document.execCommand("paste");
	}

	function deleteNoteText() {
		noteText.focus();
		document.execCommand("delete");
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
