$(document).ready(function () {
    // loading script
    $.fakeLoader({
        timeToHide: 700,
        bgColor: '#151d2b',
        spinner: "spinner5"
    });

    //scroll top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.scroll-top:hidden').stop(true, true).fadeIn();
        } else {
            $('.scroll-top').stop(true, true).fadeOut();
        }
    });
    $(function () {
        $(".scroll-top").click(function () {
            $("html,body").animate({scrollTop: $("body").offset().top}, "1000");
            return false
        })
    });
});
