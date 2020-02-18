$(document).ready(function () {
    "use strict";

    var header = $('.header');

    setHeader();

    $(window).on('resize', function () {
        setHeader();
    });

    $(document).on('scroll', function () {
        setHeader();
    });

    //header
    function setHeader() {
        if ($(window).scrollTop() > 50) {
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

    // animation
    new WOW().init();
});
