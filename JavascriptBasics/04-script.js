//Problem One

//Write a function isEven() that takes a single numeric argument and returns true
//if the number is even and false otherwise
console.log("isEven function");

function isEven(num) {
	if(typeof num === "string") {
		return "That's not a number dummy";
	}else if(num % 2 === 0) {
		return true;
	}else {
		return false;
	}
}

console.log(isEven("Steven"));
console.log(isEven(2));
console.log(isEven(3));



//Here is a shorter version of isEven()
//This version will not tell you the argument is not a number, it will only return false
console.log("isEvenShorter version function");

function isEvenShorter(num) {
	return num % 2 === 0;
}

console.log(isEvenShorter("Hi"));






//Problem Two

//Write a function factorial() which takes a single numeric argument
//and returns the factorial of that number
console.log("factorial function");

function factorial(num) {
	var result = 1;

	if(typeof num === "string") {
		return "That's not a number dummy";
	}

	for(var i = 1; i <= num; i++) {
		result *= i;
	}
	return result;
}

console.log(factorial("Hi"));
console.log(factorial(0));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(10));







//Problem Three

//Write a function kebabToSnake() which takes a single kebab-cased
//string argument and returns the snake_cased version
console.log("kebabToSnake function");

function kebabToSnake(str){
	if(typeof str !== "string") {
		return "That is not a string dummy!";
	}
	var newStr = str.replace(/-/g, "_");
	return newStr;
}

console.log(kebabToSnake(5));
console.log(kebabToSnake("hello-there"));
console.log(kebabToSnake("dang-It-I-Dont-care!"));
console.log(kebabToSnake("freak-yeah!"));