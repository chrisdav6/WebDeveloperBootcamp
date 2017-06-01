var age = parseInt(prompt("Enter your age in dingus years!", ""));

while(!age) {
	age = parseInt(prompt("C'mon, i dont have all day, enter your age!", ""));
}

var calulation = age * 365;

document.write("Well there Samphia Dangus, you have been on earth " + calulation + " days, im very proud of you!");