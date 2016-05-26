$( document ).ready(function() {
    $(".home_race_image_link").hover(function(){
  		var thisSrc = $(this).attr("data-background");
        $(this).stop().animate({'bottom': '8px'}, 500);
		$(".container").css({
			"background-image": "url(" + thisSrc + ")",
			"-webkit-transition": "background-image 0.7s ease-in-out",
			"transition": "background-image 0.7s ease-in-out"
		});
			
    }, function(){
        $(this).stop().animate({'bottom': '0px'}, 500);
        $(".container").css({
			"background-image": "url('images/imperial_guard_war.jpg')",
			"-webkit-transition": "background-image 0.7s ease-in-out",
			"transition": "background-image 0.7s ease-in-out"
		});
    });

    $(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});
});
