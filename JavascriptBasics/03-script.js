//The Return keyword.
//Often we want a function to send back an out value aka returning a value

//Example 1
function square(num) {
	return num * num;
}

//Here is one way of showing the returned value
console.log("6 squared is: " + square(6));

//This is another way where the returned square function value is stored in a new variable
var result = square(4);
console.log("4 squared is: " + result);




//Example2
function capitalize(str) {
	if(typeof str === "number") {
		return "That is not a string you dingus!";
	}
	return str.charAt(0).toUpperCase() + str.slice(1);
}

var city = "troy";
console.log(capitalize(city));

var num = 37;
console.log(capitalize(num));