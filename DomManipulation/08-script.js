//Dom Manipulation 8 - Color Changer Exercise

//Select the button
var button = document.querySelector("button");

//Select the body
var body = document.querySelector("body");

var isPurple = false;

//Toggle the body background color when the button is clicked
button.addEventListener("click", function() {
	body.style.backgroundColor = "purple";
	
	if(isPurple) {
		body.style.backgroundColor = "white";
	}else {
		body.style.backgroundColor = "purple";
	}
	isPurple = !isPurple;
});




//This can be done alot easier using the classList.toggle

//Select the button
var button2 = document.querySelector(".button2");

//Select the body
var body = document.querySelector("body");

button2.addEventListener("click", function() {
	body.classList.toggle("toggled");
});
