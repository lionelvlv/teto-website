widgetScripts["file-explorer"] = (widget) => {
	var fileExplorerBody = widget.querySelector(".file-explorer-body");
	var dropdownContainer = fileExplorerBody.children[0];
	var actionBar = fileExplorerBody.children[1];
	var addressBar = fileExplorerBody.children[2];
	var main = fileExplorerBody.children[3];
	var folders = main[1];
	var sidebar = main[0];
	var footer = fileExplorerBody.children[4];

	generateDropdown("File", ["Open", "New", "Create Shortcut", "Delete", "Rename", "Properties", "Close"], [], dropdownContainer);
	generateDropdown("Edit", ["Undo", "Cut", "Copy", "Paste", "Paste Shortcut"], [], dropdownContainer);
	generateDropdown("View", [], [], dropdownContainer);
	generateDropdown("Tools", [], [], dropdownContainer);
	generateDropdown("Help", [], [], dropdownContainer);
}
