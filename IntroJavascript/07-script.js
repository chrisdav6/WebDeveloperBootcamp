//Version 1
//As long as the word yes or yeah is entered, break out of the loop

var ask = prompt("Are we there yet ya dingus?", "");

while(ask !== "yes" && ask !== "yeah") {
	ask = prompt("Are we there yet ya dingus?", "");
}

alert("Yay, we finally made it! I don't care!");


//Version 2
//As long as the word yes or yeah is contained in the string, break out of the loop

var ask = prompt("Are we there yet ya dingus?", "");

while(ask.indexOf("yes") === -1 && ask.indexOf("yeah") === -1) {
	ask = prompt("Are we there yet ya dingus?", "");
}

alert("Yay, we finally made it! I don't care!");