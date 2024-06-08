var gradientInfo = document.getElementById("gradientInfo");
var firstColor = document.getElementById("firstColor");
var secondColor = document.getElementById("secondColor");
var body = document.getElementById("gradient");
var randomGradientBtn = document.getElementById("randomGradientBtn")


function backgroundGradientInfo() {
	return getComputedStyle(body).backgroundImage
}

function changeLetterColor() {
	if((firstColor.value === "#000000" || firstColor.value === "rgb(0,0,0)" || firstColor.value === "rgba(0,0,0,1)") && 
	(secondColor.value === "#000000" || secondColor.value === "rgb(0,0,0)" || secondColor.value === "rgba(0,0,0,1)")) {
		body.style.color = "rgba(255, 255, 255,.8)"
	} else {
		body.style.color = "rgba(0,0,0,.5)"
	}
}

function setGradient() {
	body.style.background = `linear-gradient(to right, ${firstColor.value} , ${secondColor.value})`;
	gradientInfo.textContent =	`Color Background : ${backgroundGradientInfo()}`;
	changeLetterColor()
}
	
function getRandomHexColor() {
		var letters = '0123456789ABCDEF';
		var color = '#';
		for (let i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
}

function getRandomGradient() {
	var firstColorRandom = getRandomHexColor()
	var secondColorRandom = getRandomHexColor()
	body.style.background = `linear-gradient(to right, ${firstColorRandom} , ${secondColorRandom})`;
	gradientInfo.textContent =	`Color Background : ${backgroundGradientInfo()}`;
	changeLetterColor()
};
	
gradientInfo.innerHTML = `Color Background : ${backgroundGradientInfo()}`
firstColor.addEventListener("input", setGradient);
secondColor.addEventListener("input", setGradient);
randomGradientBtn.addEventListener("click", getRandomGradient);