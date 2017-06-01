var firstName = prompt("What is you first name ya dingus?", "");

while(firstName === "") {
	firstName = prompt("C'mon, what's your first name?", "");
}

var lastName = prompt("C'mon, gimmie your last name too, Jeez!", "");

while(lastName === "") {
	lastName = prompt("Jeez! Just gimmie your last name!", "");
}

var age = prompt("What's your dang age?");

while(age === "") {
	age = prompt("THE AGE! Give it to me!", "");
}

document.write("Well there dingus, it looks like your name is " + firstName + " " + lastName + " and you are " + age + " years old! I don't care!")