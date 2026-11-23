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
											height: widget.style.width, 
											width: widget.style.height, 
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
};

function drag(e, widget) {
	// The buttons also have click listeners. This avoids a double invocation of restore. 
	if (e.target.classList.contains("barButton")) {
		return;
	}

	widget.parentNode.appendChild(widget); // bring to foreground;

	var rect = widget.getBoundingClientRect();
	dragData.clickX = e.pageX - rect.left;
	dragData.clickY = e.pageY - rect.top;
	dragData.selected = widget;
	
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

function click(widget) {
	widget.parentNode.appendChild(widget); // bring to foreground;
}

document.onmousemove = mouseMove;
function mouseMove(e) {
	if (dragData.selected) {
		const s = dragData.selected.style;
		s.left = (e.pageX - dragData.clickX).toString() + "px";
		s.top = (e.pageY - dragData.clickY).toString() + "px";
	}
}

