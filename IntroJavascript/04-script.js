var age = parseInt(prompt("Enter your dang age dingus!", ""));

while(!age) {
	age = parseInt(prompt("C'mon, don't be a hunk, enter your dang age already!", ""));
}

if(age < 0) {
	document.write("Dang! You cannot get in, you havent been born yet since you age is " + age);
}else if(age < 18) {
	document.write("So sorry ya dingus, you are only " + age + " and can not get in!");
}else if(age < 21) {
	document.write("Alright! You can get in but so sorry ya dingus - no drinking, you are only " + age );
}else if(age === 21) {
	document.write("You are " + age + ". I don't care!");
}else {
	document.write("Well done ya dingus - you can get in and drink since you are " + age );
}

if(age % 2 === 0) {
	document.write("<br>and your age even");
} else {
	document.write("<br>and your age odd");
}

if(age % Math.sqrt(age) === 0) {
	document.write("<br>Dang! And your age is a perfect sqaure!");
}