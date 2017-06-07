//Dom Manipulation 9 - Score Keeper Project

//Keep track of score
var p1Score = 0;
var p2Score = 0;

//Keep track of game progress
var gameOver = false;
var winningScore = 0;

//Select Score Display Spans
var p1Span = document.querySelector(".p1Display");
var p2Span = document.querySelector(".p2Display");

//Select Playing to display span
var playingToSpan = document.querySelector(".playingTo");

//Select the input
var numInput = document.querySelector(".scoreInput");

//Add input change event listener
numInput.addEventListener("change", function() {
	var playScore = parseInt(this.value);
	winningScore = playScore;
	playingToSpan.textContent = playScore;
	reset();
});

//Select Buttons
var p1Button = document.querySelector(".btnP1");
var p2Button = document.querySelector(".btnP2");
var resetButton = document.querySelector(".btnReset");

//Add Button click event listeners
p1Button.addEventListener("click", function() {
	if(!gameOver) {
		p1Score++;
		if(p1Score === winningScore) {
			p1Span.classList.add("win");
			gameOver = true;
		}
		p1Span.textContent = p1Score;
	}
});

p2Button.addEventListener("click", function() {
	if(!gameOver) {
		p2Score++;
		if(p2Score === winningScore) {
			p2Span.classList.add("win");
			gameOver = true;
		}
		p2Span.textContent = p2Score;
	}
});

resetButton.addEventListener("click", function() {
	reset();
});

function reset() {
	p1Score = 0;
	p2Score = 0;
	p1Span.textContent = p1Score;
	p2Span.textContent = p2Score;
	p1Span.classList.remove("win");
	p2Span.classList.remove("win");
	gameOver = false;
}
