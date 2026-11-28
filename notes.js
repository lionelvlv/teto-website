widgetScripts["notes"] = (widget) => {
	var noteText = widget.querySelector(".noteText");

	widget.willHePerform = willHePerform;

	function build() {
		generateDropdown('File', ["New", "Open", "Save", "Save As"], widget); 
		generateDropdown('Edit', ["Undo", "Cut", "Copy", "Paste", "Delete"], widget); 
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
	
	function willHePerform(id) {
		id = id.toLowerCase();
		switch (id) {
			case "new":
				if (unsavedChangesCheck()) {
					unsavedWarningPopup();
				}
				console.log("new note");
				updateName("Untitled", widget);
				noteText.value = "";
				break;

			case "open":
				console.log("open");
				break;
		}
	}

	function newNote() {
	}

}
