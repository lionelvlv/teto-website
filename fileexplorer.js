widgetScripts["file-explorer"] = (widget) => {
	var fileExplorerBody = widget.querySelector(".file-explorer-body");
	var actionBar = fileExplorerBody.querySelector(".action-bar");
	var addressBar = fileExplorerBody.querySelector(".address-bar");
	var main = fileExplorerBody.querySelector(".main");
	var folders = main.querySelector(".folders")
	var sidebar = main.querySelector(".sidebar");
	var footer = fileExplorerBody.querySelector(".footer");

	widget.willHePerform = willHePerform;
	
	generateDropdown("File", ["Open", "New", "Create Shortcut", "Delete", "Rename", "Properties", "Close"], widget);
	generateDropdown("Edit", ["Undo", "Cut", "Copy", "Paste", "Paste Shortcut"], widget);
	generateDropdown("View", [], widget);
	generateDropdown("Tools", [], widget);
	generateDropdown("Help", [], widget);

	function populateFolders() {
		console.log(folders);
		for (let i=0; i<6;i++) {
			let currFolder = document.createElement("div");
			let folderName = document.createElement("span");
			folderName.innerHTML = "test" + i;
			currFolder.className = "folder";
			currFolder.appendChild(folderName);
			currFolder.addEventListener("click", () => console.log("folder" + i));
			folders.appendChild(currFolder);
		}
	}

	populateFolders();

	function willHePerform(id) {
		id = id.toLowerCase();
		switch(id) {
			case "open":
				console.log("open");
				break;
			case "new":
				console.log("new");
				break;
		}
	}

}
