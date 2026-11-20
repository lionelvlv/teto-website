var pear = document.getElementById("pear");
var widgetBox = document.getElementById("pear-box");

var magicNumber = 0;
var currX = 0;
var currY = 0;
var velocityX = 5;
var velocityY = 5;
const pearSize = 50; 
var width = widgetBox.offsetWidth;
var height = widgetBox.offsetHeight;

function changeColor() {
	magicNumber = magicNumber + 1;
	pear.style.filter = "hue-rotate(" + magicNumber + "deg)";
}

window.setInterval(changeColor, 10);
window.setInterval(bounce, 10);

function bounce() {
	var width = widgetBox.offsetWidth;
	var height = widgetBox.offsetHeight;
	

	currX = currX + velocityX;
	currY = currY + velocityY;

	// update velocity
	if (currX >= width - pearSize || currX <= 0) {
		var randomX = getRandomArbitrary(0.95, 1.05);
		velocityX = -velocityX * randomX;
	} 

	if (currY >= height - pearSize || currY <= 0) {
		var randomY = getRandomArbitrary(0.95, 1.05);
		velocityY = -velocityY * randomY;
	}

	currX = Math.max(Math.min(currX, width - pearSize), 0);
	currY = Math.max(Math.min(currY, height - pearSize), 0);

	console.log(velocityX, velocityY);
	pear.style.setProperty("left", currX + "px");
	pear.style.setProperty("top", currY + "px");
}

// @SOURCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
