$( document ).ready(function() {
    $(".home_race_image_link").hover(function(){
        $(this).stop().animate({'bottom': '8px'}, 500);
    }, function(){
        $(this).stop().animate({'bottom': '0px'}, 500);
    });
});
