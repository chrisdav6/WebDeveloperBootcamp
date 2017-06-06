//Dom Manipulation 1 - Select and Manipulate

//Select the link
var link = document.querySelector("a");
//Change the color of the link
link.style.color = "red";

//Select the H2
var h2 = document.querySelector("h2");
//Change the color of the H2
h2.style.color = "green";




//Select the body and change the color every second
var body = document.querySelector("body");
var isBlue = false;

setInterval(function() {
	if(isBlue) {
		body.style.background = "white";
		console.log("white");
	}else {
		body.style.background = "#3498db";
		console.log("blue");
	}
	isBlue = !isBlue;
},10000);