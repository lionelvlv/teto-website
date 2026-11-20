var widgetBox = document.getElementById("pear-box");
var spawnButton = document.getElementById("spawn");
var spawnSlider = document.getElementById("pear-slider");
const pearSize = 50; 
var width = widgetBox.offsetWidth;
var height = widgetBox.offsetHeight;
var pears = [];
spawn();

function pearFactory() {
	return {
			currX: 0,
			currY: 0,
			velocityX: 5,
			velocityY: 5,
			pear: "icon.png",
			magicNumber: 0, 
	};
}

function spawnRange() {
	var maxPears = spawnSlider.value; 
	console.log(maxPears);
	for (let i = 0; i < maxPears; i++) {
		spawn();
	} 
}

function spawn() {
	const currPear = document.createElement("img");
	var currPearObj = pearFactory();
	currPear.src = currPearObj.pear;
	currPear.style.position = "absolute";
	currPear.style.width = pearSize + "px";
	currPearObj.pear = currPear; 
	currPear.style.setProperty("left", currPearObj.currX + "px");
	currPear.style.setProperty("top", currPearObj.currY + "px");
	pears.push(currPearObj);
	widgetBox.appendChild(currPearObj.pear);
}


function deletePearRange() {
	var maxPears = Math.min(spawnSlider.value, pears.length);
	console.log(maxPears);
	for (let i = 0; i < maxPears; i++) {
		deletePear();
	}
}

function deletePear() {
	var p = pears.pop();
	widgetBox.removeChild(p.pear);
}

function changeColor() {
	for (var p of pears) {
		p.magicNumber = p.magicNumber + 1;
		p.pear.style.filter = "hue-rotate(" + p.magicNumber + "deg)";
	}
}

window.setInterval(changeColor, 10);
window.setInterval(bounce, 10);

function bounce() {
	var width = widgetBox.offsetWidth;
	var height = widgetBox.offsetHeight;
	
	for (var p of pears) {
		p.currX = p.currX + p.velocityX;
		p.currY = p.currY + p.velocityY;

		// update velocity
		if (p.currX >= width - pearSize || p.currX <= 0) {
			var randomX = getRandomArbitrary(0.95, 1.05);
			p.velocityX = -p.velocityX * randomX;
		} 

		if (p.currY >= height - pearSize || p.currY <= 0) {
			var randomY = getRandomArbitrary(0.95, 1.05);
			p.velocityY = -p.velocityY * randomY;
		}

		p.currX = Math.max(Math.min(p.currX, width - pearSize), 0);
		p.currY = Math.max(Math.min(p.currY, height - pearSize), 0);

		p.pear.style.setProperty("left", p.currX + "px");
		p.pear.style.setProperty("top", p.currY + "px");
	}
}

// @SOURCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
