//Often we want to write functions that take inputs called parameters
function square(num) {
	console.log(num * num);
}
//When we call the square function we need to pass in a value called an argument
square(5);
square(10);
square(15);






//Another example
function sayHello(name) {
	if(name === "Terry Bruge-Hiplo") {
		console.log("Hello there ya hunk, " + name + "!");
	}else {
		console.log("Hello there ya dingus, " + name + "!");
	}
}

sayHello("Sampia Dangus");
sayHello("Terry Bruge-Hiplo");
sayHello("Doug Prishpreed");






//Another example using multiple parameters and arguments
function sayHello(name1, name2, name3) {
	console.log("Hello there dinguses, " + name1 + ", " + name2 + " and " + name3 + "!");
}

sayHello("Sampia Dangus", "Terry Bruge-Hiplo", "Doug Prishpreed");