var secretNumber = 7;
var userNumber = parseInt(prompt("Try and guess the number im thinking!", ""));

//If number is left blank, NaN, or zero, ask again
while(!userNumber) {
	userNumber = parseInt(prompt("C'mon, Try and guess the dang number!", ""));
}

//If number is incorrect, keep asking
do{
	//If number is left blank, NaN, or zero, ask again
	while(!userNumber) {
		userNumber = parseInt(prompt("C'mon, Try and guess the dang number!", ""));
	}

	if(userNumber < secretNumber) {
		userNumber = parseInt(prompt("You guessed " + userNumber + " - Too Low - Try Again!"));
	}else if(userNumber > secretNumber) {
		userNumber = parseInt(prompt("You guessed " + userNumber + " - Too High - Try Again!"));
	}
}while(userNumber !== secretNumber);

//When number is correct, tell user they got it
document.write("Congrats you guessed it, my number was " + userNumber + "! I don't care!");

