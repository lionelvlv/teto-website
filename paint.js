widgetScripts["paint"] = (widget) => {
	var redButton = widget.querySelector(".paint_red");
	var greenButton = widget.querySelector(".paint_green");
	var blueButton = widget.querySelector(".paint_blue");
	var whiteButton = widget.querySelector(".paint_white");
	var blackButton = widget.querySelector(".paint_black");
	var color = "#ff0000"

	function addEventColor(button, c) {
		button.addEventListener("click", () => {color=c});
	}
	addEventColor(redButton, "#ff0000");
	addEventColor(greenButton, "#00ff00");
	addEventColor(blueButton, "#0000ff");
	addEventColor(whiteButton, "#ffffff");
	addEventColor(blackButton, "#000000");

	var mousePos = {x: 0, y:0}
	var c = widget.querySelector(".paint_canvas");
	c.addEventListener("mousemove", mouseOver);
	function mouseOver(event) {
					var slider = widget.querySelector(".paint_range");
					var rect = event.target.getBoundingClientRect();
					var mousePosNew = {
														x: event.pageX - rect.left,
														y: event.pageY - rect.top};
	 
					if (mouseState == "down") {
						var c = widget.querySelector(".paint_canvas");
						var ctx = c.getContext("2d")
						ctx.beginPath();
						ctx.lineCap = "round";
						ctx.lineWidth = slider.value;
						ctx.moveTo(mousePos.x, mousePos.y);
						ctx.strokeStyle = color;
						ctx.lineTo(mousePosNew.x, mousePosNew.y);
						ctx.stroke();
					}
					mousePos = mousePosNew;
	}
}
makeWindow("paint", "Paint", 600, 250, 460, 0);
