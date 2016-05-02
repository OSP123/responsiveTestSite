$( document ).ready(function() {
  // $("a[href='#top']").click(function() {
  // 	$("html, body").animate({ scrollTop: 0 }, 500);
  // 	return false;
  // });

  // $("a").hover(
  // function () {
  //   // code on hover over
  //   $(this).css({"color": "yellow", "font-size": "24px"});
  //   $(".header").text("banana");
  // },
  // function () {
  //   // code on away from hover
  //   $(this).css({"color": "black", "font-size": "12px"});
  //   $(".header").text("Sass");
  // });

  $("a.cool").on("click", function(e){
  	$("#someButton").fadeToggle(750, "linear");
  });

  // $(".container").draggable();

});