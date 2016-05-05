$( document ).ready(function() {
	var arrayOfQuotes = [
	"You can do anything, but not everything.",
	"Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.",
	"The richest man is not he who has the most, but he who needs the least.",
	"You miss 100 percent of the shots you never take.",
	"Courage is not the absence of fear, but rather the judgement that something else is more important than fear.",
	"You must be the change you wish to see in the world.",
	"When hungry, eat your rice; when tired, close your eyes. Fools may laugh at me, but wise men will know what I mean.",
	"The third-rate mind is only happy when it is thinking with the majority. The second-rate mind is only happy when it is thinking with the minority. The first-rate mind is only happy when it is thinking.",
	"To the man who only has a hammer, everything he encounters begins to look like a nail.",
	"We are what we repeatedly do; excellence, then, is not an act but a habit.",
	"A wise man gets more use from his enemies than a fool from his friends."
	];

	var lastIndex = 0;
	$(".quote_insert").html(arrayOfQuotes[lastIndex]);

	$("#quote_button").on("click", function() {
		var randomIndex = Math.floor((Math.random() * arrayOfQuotes.length));
		while (randomIndex === lastIndex) {
			randomIndex = Math.floor((Math.random() * arrayOfQuotes.length));
		}
		$(".quote_insert").html(arrayOfQuotes[randomIndex]);
		lastIndex = randomIndex;
	})
});