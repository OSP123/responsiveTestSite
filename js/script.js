$( document ).ready(function() {
	$(".changeAdd").click(function () {
		$("h1").addClass("potato");
	});
	$(".changeRemove").click(function () {
		$("h1").removeClass("potato");
	});
	$(".theme1").click(function () {
		$("h1").toggleClass("h1_pretty");
		$("body").toggleClass("body_pretty");
		$("div").toggleClass("div_pretty");
	});
	$(".cool").attr("href", "https://www.google.com");
});
