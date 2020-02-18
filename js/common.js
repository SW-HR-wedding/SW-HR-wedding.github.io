$(document).ready(function () {
    // header scrolled
    var header = $('.header');
    setHeader();
    $(window).on('resize', function () {
        setHeader();
    });
    $(document).on('scroll', function () {
        setHeader();
    });

    function setHeader() {
        if ($(window).scrollTop() > 0) {
            header.addClass('scrolled');
        } else {
            header.removeClass('scrolled');
        }
    }

    // loading script
    $.fakeLoader({
        timeToHide: 700,
        bgColor: '#151d2b',
        spinner: "spinner5"
    });

    // header mobile nav
    $('#mobileBtn').click(function () {
        $(this).toggleClass('active');
        $('#full-nav').toggleClass('open');
        $(this).parent('.header').toggleClass('height-auto');
    });

    //scroll top
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0 ) {
            $('#goTop:hidden').stop(true, true).fadeIn();
        } else {
            $('#goTop').stop(true, true).fadeOut();
        }
    });
    $(function(){$("#goTop").click(function(){
        $("html,body").animate({scrollTop:$("body").offset().top},"1000");
        return false})
    });

    // animation
    new WOW().init();
});
