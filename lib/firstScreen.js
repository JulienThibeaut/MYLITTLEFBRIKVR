$(window).scroll(function() {
    $(".parallax-mirror:last img").css({
    'opacity' : 1-(($(this).scrollTop())/1000)
    });
});
