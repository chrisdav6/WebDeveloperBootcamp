
//Problem 1 - Print all numbers between -10 and 19
var num = -10;
console.log("Print all numbers between -10 and 19");

while(num <= 19) {
	console.log("Problem 1 - " + num);
	num++;
}



//Problem 2 - Print all even numbers between 10 and 40
var num2 = 10;
console.log("Print all even numbers between 10 and 40");

while(num2 <= 40) {
	if(num2 % 2 === 0) {
		console.log("Problem 2 - " + num2);
	}
	num2++;
}



//Problem 3 - Print all odd numbers between 300 and 333
var num3 = 300;
console.log("Print all odd numbers between 300 and 333");

while(num3 <= 333) {
	if(num3 % 2 !== 0) {
		console.log("Problem 3 - " + num3);
	}
	num3++;
}



//Problem 4 - Print all numbers divisible by both 3 and 5 between 5 and 50
var num4 = 5;
console.log("Print all numbers divisible by both 3 and 5 between 5 and 50");

while(num4 <= 50) {
	if(num4 % 3 === 0 && num4 % 5 === 0) {
		console.log("Problem 4 - " + num4 + " - divisible by both 3 and 5");
	}
	num4++;
}