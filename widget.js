// Finds widget from click event on titlebar button. This works for now, but should be temporary.
function widgetFromButton(e) {
		return e.parentNode.parentNode.parentNode.parentNode;
}

function closeWidget(e) {
		var widget = widgetFromButton(e);

		if ("closeCallback" in widget) {
			widget.closeCallback();
		}
		removeTask(widget);
		widget.remove();
		updateTaskBar();
}

function restore(widget, x, y) {
		var rs = widget.restoreState;
		
		widget.style.left = (x === undefined) ? rs.x : x; 
		widget.style.top = (y === undefined) ? rs.y : y;

		widget.style.width = rs.width;
		widget.style.height = rs.height;

		widget.classList.toggle("maximized");
		updateTaskBar();
}

function maximizeWidget(e) {
		var widget = widgetFromButton(e);

		// When the restore button is pressed this is needed;
		widget.restoreState = {
											height: widget.style.height, 
											width: widget.style.width, 
											x: widget.style.left, 
											y: widget.style.top};

		//Top left corner as big as possible OwO
		var desktop = document.getElementById("desktop");
		widget.style.left = 0 + "px";
		widget.style.top = 0 + "px";
		widget.style.width = desktop.clientWidth + "px";
		widget.style.height = desktop.clientHeight + "px";

		widget.classList.toggle("maximized");
		updateTaskBar();

		document.body.classList.add("surprise");
}

function minimizeWidget(e) {
		var widget = widgetFromButton(e);
		widget.classList.toggle("minimized");
		updateTaskBar();
}

var dragData = {
	selected: null, // widget which is currently being dragged.
	clickX : 0, // position of mouse relative to widget coords when titlebar was clicked. 
	clickY : 0,
	dragTitle: false,
	dragLeft : false,
	dragRight: false,
	dragBottom: false,
};


function titleBarDrag(e, widget) {
	// The buttons also have click listeners. This avoids a double invocation of restore. 
	if (e.target.classList.contains("barButton")) {
		return;
	}

	widget.parentNode.appendChild(widget); // bring to foreground;

	// Restore to previous dimensions when dragged while maximized.
	if (widget.classList.contains("maximized")) {
			var rs = widget.restoreState;

			// Positions widget so that mouse is at center of titlebar after restore;
			var x = (e.pageX - parseInt(rs.width) / 2) + "px";

			// We then need to update clickX/Y to correspond to this ^.	
			dragData.clickX = parseInt(rs.width) / 2;
			dragData.clickY = e.pageY;

			restore(widget, x, 0);
	}
}

function drag(e, widget) {
	var rect = widget.getBoundingClientRect();
	dragData.clickX = e.pageX - rect.left;
	dragData.clickY = e.pageY - rect.top;
	dragData.selected = widget;
	dragData.dragTitle = false;
	dragData.dragLeft = false;
	dragData.dragRight = false;
	dragData.dragBottom = false;
	if (e.target.closest(".widgetBar")) {
		dragData.dragTitle = true;
		titleBarDrag(e, widget);
	}
	if (dragData.clickX < 20) {
		dragData.dragLeft = true;
	}
	if (dragData.clickX > widget.offsetWidth - 20) {
		dragData.dragRight = true;
	}
	if (dragData.clickY > widget.offsetHeight - 20) {
		dragData.dragBottom = true;
	}
}
function over(e, widget) {
	var rect = widget.getBoundingClientRect();
	clickX = e.pageX - rect.left;
	clickY = e.pageY - rect.top;

	widget.style.cursor = "initial";
	if (clickY < 20) {
		return;
	}
	left = false;
	right = false;
	down = false;
	if (clickX < 20) {
		widget.style.cursor = "e-resize";
		left = true;
	}
	if (clickX > widget.offsetWidth - 20) {
		right = true;
		widget.style.cursor = "e-resize";
	}
	if (clickY > widget.offsetHeight - 20) {
		down = true;
		widget.style.cursor = "n-resize";
	}
	if (down) {
		if (right) {
			widget.style.cursor = "nw-resize";
		}
		if (left) {
			widget.style.cursor = "ne-resize";
		}
	}
	
}
function updateName(name, widget) {
	updateTaskBar(widget, name);
	var titleElement = widget.querySelector(".widgetName");
	titleElement.innerHTML = name; 
}

function click(event, widget) {
//	widget.parentNode.appendChild(widget); // bring to foreground;
}

function frameBufferGlitch(widget) {
	var desktop = document.getElementById("desktop");
	var clone = widget.cloneNode(true);
	clone.classList.remove("selectable");
	clone.classList.remove("highlighted");
	clone.style["pointer-events"] = "none";
	desktop.appendChild(clone);
	widget.parentNode.appendChild(widget); // bring to foreground;
}

function mouseMove(e) {
	if (dragData.selected) {
		if (dragData.dragTitle) {
			const s = dragData.selected.style;
			s.left = (e.pageX - dragData.clickX).toString() + "px";
			s.top = (e.pageY - dragData.clickY).toString() + "px";
//		frameBufferGlitch(dragData.selected);
		}
		var s = dragData.selected;
		if (dragData.dragRight) {
			document.body.style.cursor = "e-resize";
			s.style.width = (e.pageX - parseInt(s.style.left)) + "px";
		} 
		if (dragData.dragLeft) {
			document.body.style.cursor = "w-resize";
			var rightSide = parseInt(s.style.left) + parseInt(s.style.width);
			var newWidth = rightSide - e.pageX;
			s.style.left = (e.pageX) + "px";
			s.style.width = newWidth + "px"; 
		}
		if (dragData.dragBottom) {
			s.style.height = (e.pageY - parseInt(s.style.top)) + "px";
			document.body.style.cursor = "n-resize";
			if (dragData.dragRight) {
				document.body.style.cursor = "nw-resize";
			}
			if (dragData.dragLeft) {
				document.body.style.cursor = "ne-resize";
			}
		}
	}
}
