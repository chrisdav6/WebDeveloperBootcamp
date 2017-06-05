//Array Iteration

//Using a for loop Example 1
var colors = [
	"red",
	"orange",
	"blue",
	"green"
];

console.log("For Loop");

for(var i = 0; i < colors.length; i++) {
	console.log(colors[i]);
}





//Using a for loop Example 2
var comments = [
	"I really liked this post",
	"You gave me some great ideas, Thanks!",
	"This is the worst thing i have ever read :(",
	"I don't care!"
];

document.write("Using For Loop<br>");

for(var i = 0; i < comments.length; i++) {
	var p = document.createElement("p");
	p.className = "comment";

	var text = document.createTextNode("Comment " + (i + 1) + " - " + comments[i]);
	
	p.appendChild(text);
	document.body.appendChild(p);
}





//Javascript provides an easy built in way of iterating over an array: forEach()

//Using forEach Loop with an anonymous function Example 1
var colors = [
	"red",
	"orange",
	"blue",
	"green"
];

console.log("ForEach Loop");

colors.forEach(function(color) {
	console.log(color);
});





//Using forEach Loop with an anonymous function Example 2
var comments = [
	"I really liked this post",
	"You gave me some great ideas, Thanks!",
	"This is the worst thing i have ever read :(",
	"I don't care!"
];

document.write("Using For Each Loop<br>");

comments.forEach(function(comment, index) {
	var p = document.createElement("p");
	p.className = "comment";

	var text = document.createTextNode("Comment " + (index + 1) + " - " + comment);
	
	p.appendChild(text);
	document.body.appendChild(p);
});






//Using forEach Loop with an named function Example 1
var cars = [
	"Honda",
	"Acura",
	"Audi",
	"BMW"
];

function listCars(car) {
	console.log("*******");
	console.log(car);
}

cars.forEach(listCars);






//Array Iteration Exercise using for loop

//Create Empty array
var numbers = [];

//Populate empty array with numbers
for(var i = 1; i < 50; i++) {
	numbers.push(i);
}

//Log only numbers that are divisible by 3
for(var i = 0; i < numbers.length; i++) {
	if(numbers[i] % 3 === 0) {
		console.log(numbers[i]);
	}
}