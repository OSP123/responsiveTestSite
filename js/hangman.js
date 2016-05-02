$( document ).ready(function() {

	var guessedWord = "california";
	var hiddenWord = ["-","-","-","-","-","-","-","-","-","-"];
	var missedGuesses = 0;

	$(".correct_letters").html(hiddenWord.join(""));

	$("#guess_button").on("click", function() {
		if ($("#guess_field").val().length < 2) {
			if ( guessedWord.indexOf($("#guess_field").val()) === -1) {
				alert("sorry, that's a letter!");
				$(".missed_letters").html($(".missed_letters").html() + $("#guess_field").val());
				missedGuesses++;
				switch (missedGuesses) {
					case 1: 
						$("#hangman_image").attr("src", "images/Hangman-1.png");
						break;
					case 2:
						$("#hangman_image").attr("src", "images/Hangman-2.png");
						break;
					case 3:
						$("#hangman_image").attr("src", "images/Hangman-3.png");
						break;
					case 4:
						$("#hangman_image").attr("src", "images/Hangman-4.png");
						break;
					case 5:
						$("#hangman_image").attr("src", "images/Hangman-5.png");
						break;
					case 6:
						$("#hangman_image").attr("src", "images/Hangman-6.png");
						break;
				}
				if (missedGuesses >= 6) {
					alert("Sorry, that's the end of the game :(");
				}
				$("#guess_field").val("");
			} else {
				alert("good work!");
				for(var i=0; i < guessedWord.length; i++) {
			    	if (guessedWord[i] === $("#guess_field").val()) {
			    		hiddenWord[i] = guessedWord[i];
			    	}
				}
				hiddenWord.join("");
				$(".correct_letters").html(hiddenWord);
				$("#guess_field").val("");
				if (hiddenWord.join("") == guessedWord) {
					alert("Congrats, you won!");
				}
			}
		} else {
			alert("Please input only one letter");
			$("#guess_field").val("");
		}

	})
});