widgetScripts["tetocraft"] = (widget) => {
	var c = widget.querySelector(".tetocraft_canvas");
	var gl = c.getContext("webgl");
	if (!gl) {
		alert("Your browser does not support WebGL.");
	}
	const fieldOfView = (45 * Math.PI) / 180; // in radians
  const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
  const zNear = 0.1;
  const zFar = 100.0;
	var projectionMatrix = mat4.create();
	mat4.perspective(projectionMatrix, fieldOfView, aspect, zNear, zFar);
	console.log(projectionMatrix);
	gl.clearColor(1, 0, 0, 1);
	gl.clear(gl.COLOR_BUFFER_BIT);		
};
