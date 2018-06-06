var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2= document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomColor = document.getElementById('random');




function setGradient () {
	body.style.background = "linear-gradient(to right, "
	 + color1.value
	 + ", " 
	 + color2.value 
	 + ")";

	css.textContent = body.style.background + ";";
}

function randomBackground () {
	let randomHue1 = 'rgb(' + (Math.floor(Math.random() * 256)) 
	+ ',' 
	+ (Math.floor(Math.random() * 256)) 
	+ ',' 
	+ (Math.floor(Math.random() * 256)) 
	+ ')';
	let randomHue2 = 'rgb(' + (Math.floor(Math.random() * 256)) 
	+ ',' 
	+ (Math.floor(Math.random() * 256)) 
	+ ',' 
	+ (Math.floor(Math.random() * 256)) 
	+ ')';

		function setGradient2 () {
			body.style.background = "linear-gradient(to right, "
			 + randomHue1
			 + ", " 
			 + randomHue2 
			 + ")";

			css.textContent = body.style.background + ";";
		}
	setGradient2();
}


setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomColor.addEventListener("click", randomBackground);


