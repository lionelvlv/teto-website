var mousePos = {x: 0, y:0}
var color = "#ff0000"
var c = document.getElementById("myCanvas");
c.addEventListener("mousemove", mouseOver);
function mouseOver(event) {
				var slider = document.getElementById("myRange");
				var rect = event.target.getBoundingClientRect();
				var mousePosNew = {
													x: event.pageX - rect.left,
													y: event.pageY - rect.top};
 
				if (mouseState == "down") {
					var c = document.getElementById("myCanvas");
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
