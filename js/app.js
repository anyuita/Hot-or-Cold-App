
$(document).ready(function()
{	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

var secretNumber;
var $userFeedback = $("#feedback");
var count = 0;
var correct = false;

newGame();

function newGame () {
	numberGenerator();
	count = 0;
	$("#count").text(count);
	$("#guessList").html("");
	$userFeedback.html("Make your Guess!");
	coreect = false;
}

function numberGenerator () {
	secretNumber = Math.floor((Math.random() * 100) + 1);
	console.log(secretNumber);
}

$("form").submit(function(event) {
	event.preventDefault();
	var userGuess = $("#userGuess").val();
	$("#userGuess").val("");
	if (correct === false) {
		testUserGuess(userGuess);
		guessCounter();
		listOfGuesses(userGuess);
	};
});

$(".new").click(function(event) {
		event.preventDefault();
		newGame();
});

function guessCounter() {
	count++;
	$("#count").text(count);
};

function listOfGuesses(userGuess) {
	$("#guessList").append("<li>" + userGuess + "</li>");
}

function testUserGuess (guess) {
	var difference = Math.abs(guess - secretNumber);
	if (guess < 1 || guess > 100 || !parseInt(guess)) {
		$userFeedback.html("Follow directions, dimwit. Guess a number between 1 and 100.");
	}
	else if (difference >= 50) {
		$userFeedback.html("Hell hath frozen over");
	}
	else if (difference >= 40) {
		$userFeedback.html("Hell is vaguely thawing");
	}
	else if (difference >= 30) {
		$userFeedback.html("Congratulations, hell is room temperature");
	}
	else if (difference >= 15) {
		$userFeedback.html("It's gettin' hot in here...");
	}
	else if (difference >= 5) {
		$userFeedback.html("The beaches are burning! Run for your lives!");
	}
	else if (difference >= 1) {
		$userFeedback.html("Well, now you're in the middle of the sun. Happy?");
	}
	else if (difference === 0) {
		$userFeedback.html("Stick a fork in ya, 'cause you're done, buckaroo! Guess correct!");
		correct = true;
	}
}
});