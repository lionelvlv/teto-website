widgetScripts["file-explorer"] = (widget) => {
	var fileExplorerBody = widget.querySelector(".file-explorer-body");
	var actionBar = fileExplorerBody.children[0];
	var addressBar = fileExplorerBody.children[1];
	var main = fileExplorerBody.children[2];
	var folders = main[1];
	var sidebar = main[0];
	var footer = fileExplorerBody.children[3];

	generateDropdown("File", ["Open", "New", "Create Shortcut", "Delete", "Rename", "Properties", "Close"], [], widget);
	generateDropdown("Edit", ["Undo", "Cut", "Copy", "Paste", "Paste Shortcut"], [], widget);
	generateDropdown("View", [], [], widget);
	generateDropdown("Tools", [], [], widget);
	generateDropdown("Help", [], [], widget);
}
