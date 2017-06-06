//Dom Manipulation 7 - DOM Events

//Select the button with a class of myButton
var button = document.querySelector(".myButton");

//Select the paragraph
var p = document.querySelector("p");

//Store the textContent into a variable
var originalPText = p.textContent;

//Add a click event handler to the button updates the paragraph text
button.addEventListener("click", function() {
	p.textContent = "Someone has clicked the button!";
});

//Add a click event handler to the p to reset the text
p.addEventListener("click", function() {
	this.textContent = originalPText;
});



//Select all h3s and add a click event handler on each of them
//that will change the color to red when clicked
var h3s = document.querySelectorAll("h3");

for(var i = 0; i < h3s.length; i++) {
	h3s[i].addEventListener("click", function() {
		this.style.color = "red";
	});
}

