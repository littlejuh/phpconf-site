(function ($) {
    "use strict";
})(jQuery);

/*-----------------------------------------------------------------------------------*/
/*  MAIN BANNER HEIGHT
 /*-----------------------------------------------------------------------------------*/
function setBannerHeight(){
    var bannerContainer = window.innerHeight - $('nav').height();
    var textBannerHeight = $('.main-banner .text-banner').height();
    var height = textBannerHeight > bannerContainer ? textBannerHeight : bannerContainer;
    $('.main-banner').css('min-height', height + 'px');
}
$(document).ready(function(){
    setBannerHeight();
});
$(window).resize(function(){
    setBannerHeight();
});

/*-----------------------------------------------------------------------------------*/
/*	LOADING
 /*-----------------------------------------------------------------------------------*/
$(window).load(function () {
    $(".carousel-wrapper:not(.wow)").css("visibility", "visible");
    $(".circle-progress-wrapper strong").css("visibility", "visible");
    $(".basic-carousel").css("visibility", "visible");

    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    $('body').delay(350).css({
        'overflow': 'visible'
    });
    /*-----------------------------------------------------------------------------------*/
    /*	CIRCLE PROGRESS
     /*-----------------------------------------------------------------------------------*/
    var circle1 = new ProgressBar.Circle('.circle.first', {
        color: '#f5ae56',
        strokeWidth: 2,
        trailWidth: 2,
        trailColor: '#E4E4E4',
        duration: 4500,
        easing: 'easeInOut',
        text: {
            value: '0.01'
        },
        step: function (state, bar) {
            bar.setText((bar.value() * 100).toFixed(0));
        }
    });

    circle1.animate(0.01);

    var circle2 = new ProgressBar.Circle('.circle.second', {
        color: '#ef6578',
        trailColor: 'rgba(255,255,255,0.1)',
        strokeWidth: 2,
        trailWidth: 2,
        duration: 4500,
        easing: 'easeInOut',
        text: {
            value: '1'
        },
        step: function (state, bar) {
            bar.setText((bar.value() * 100).toFixed(0));
        }
    });

    circle2.animate(1);

    var circle3 = new ProgressBar.Circle('.circle.third', {
        color: '#67b7d4',
        trailColor: 'rgba(255,255,255,0.1)',
        strokeWidth: 2,
        trailWidth: 2,
        duration: 4500,
        easing: 'easeInOut',
        text: {
            value: '1'
        },
        step: function (state, bar) {
            bar.setText((bar.value() * 100).toFixed(0));
        }
    });

    circle3.animate(1);

    var circle4 = new ProgressBar.Circle('.circle.fourth', {
        color: '#53cfc2',
        trailColor: 'rgba(255,255,255,0.1)',
        strokeWidth: 2,
        trailWidth: 2,
        duration: 4500,
        easing: 'easeInOut',
        text: {
            value: '1'
        },
        step: function (state, bar) {
            bar.setText((bar.value() * 100).toFixed(0));
        }
    });

    circle4.animate(1);
});
$(document).ready(function () {
    /*-----------------------------------------------------------------------------------*/
    /* WIDTH CLASS
     /*-----------------------------------------------------------------------------------*/
    assign_bootstrap_mode();
    $(window).resize(function () {
        assign_bootstrap_mode();
    });
    function assign_bootstrap_mode() {
        width = $(window).width();
        var mode = '';
        if (width < 768) {
            mode = "mode-xs";
        } else if (width < 992) {
            mode = "mode-sm";
        } else if (width < 1200) {
            mode = "mode-md";
        } else if (width > 1200) {
            mode = "mode-lg";
        }
        $("body").removeClass("mode-xs").removeClass("mode-sm").removeClass("mode-md").removeClass("mode-lg").addClass(mode);
    }

    /*-----------------------------------------------------------------------------------*/
    /*	REVOLUTION
     /*-----------------------------------------------------------------------------------*/

    /*if(window.innerWidth > 991){
        $('.tp-fullscreen').revolution({
            delay: 9000,
            startwidth: 1170,
            startheight: 750,
            hideThumbs: 200,
            hideArrowsOnMobile: "off",
            fullWidth: "on",
            fullScreen: "on",
            soloArrowLeftHOffset: 0,
            soloArrowRightHOffset: 0,
            fullScreenOffsetContainer: ".mode-xs .navbar"
        });
    }
    else{
        $('.tp-fullscreen-mobile').revolution({
            delay: 9000,
            startwidth: 1170,
            startheight: 750,
            hideThumbs: 200,
            hideArrowsOnMobile: "off",
            fullWidth: "on",
            fullScreen: "on",
            soloArrowLeftHOffset: 0,
            soloArrowRightHOffset: 0
            //fullScreenOffsetContainer: ".mode-xs .navbar"
        });
    }*/

    /*$('.tp-fullwidth').revolution({
        delay: 9000,
        startwidth: 1170,
        startheight: 650,
        hideThumbs: 200,
        hideArrowsOnMobile: "off",
        fullWidth: "on",
        fullScreen: "off",
        soloArrowLeftHOffset: 0,
        soloArrowRightHOffset: 0
    });
    $('.tp-banner').revolution({
        delay: 9000,
        startwidth: 1170,
        startheight: 550,
        hideThumbs: 200,
        hideArrowsOnMobile: "off",
        fullWidth: "off",
        fullScreen: "off",
        soloArrowLeftHOffset: 0,
        soloArrowRightHOffset: 0
    });*/
    /*-----------------------------------------------------------------------------------*/
    /*	MODAL
     /*-----------------------------------------------------------------------------------*/
    
    $(".open-contact-form").animatedModal({
        modalTarget: 'contato',
        animatedIn: 'lightSpeedIn',
        animatedOut: 'bounceOutDown',
        animationDuration: '0.6s',
        color: 'rgba(252, 252, 252, 0.97)'
    });
    /*-----------------------------------------------------------------------------------*/
    /*	STICKY HEADER
     /*-----------------------------------------------------------------------------------*/
    var menu = $('.navbar'),
        pos = menu.offset();
    $(window).scroll(function () {
        if ($(this).scrollTop() > pos.top + menu.height() && menu.hasClass('default') && $(this).scrollTop() > 300) {
            menu.fadeOut('fast', function () {
                $(this).removeClass('default').addClass('fixed').fadeIn('fast');
            });
        } else if ($(this).scrollTop() <= pos.top + 300 && menu.hasClass('fixed')) {
            menu.fadeOut(0, function () {
                $(this).removeClass('fixed').addClass('default').fadeIn(0);
            });
        }
    });
    /*-----------------------------------------------------------------------------------*/
    /*	MENU
     /*-----------------------------------------------------------------------------------*/
    $('.js-activated').dropdownHover({
        instantlyCloseOthers: false,
        delay: 0
    }).dropdown();
    $('.dropdown-menu a, .social .dropdown-menu, .social .dropdown-menu input').click(function (e) {
        e.stopPropagation();
    });
    $('.btn.responsive-menu').on('click', function () {
        $(this).toggleClass('opn');
    });
    $('.navbar .nav li a').on('click', function () {
        $('.navbar .navbar-collapse.in').collapse('hide');
        $('.btn.responsive-menu').removeClass('opn');
    });
    /*-----------------------------------------------------------------------------------*/
    /*	VIDEO
     /*-----------------------------------------------------------------------------------*/
    $('.player').fitVids();
    /*-----------------------------------------------------------------------------------*/
    /*	IMAGE ICON HOVER
     /*-----------------------------------------------------------------------------------*/
    $('.icon-overlay a').prepend('<span class="icn-more"></span>');
    /*-----------------------------------------------------------------------------------*/
    /*	TOGGLE
     /*-----------------------------------------------------------------------------------*/
    $('.panel-group').find('.panel-default:has(".in")').addClass('panel-active');

    $('.panel-group').on('shown.bs.collapse', function (e) {
        $(e.target).closest('.panel-default').addClass(' panel-active');
    }).on('hidden.bs.collapse', function (e) {
        $(e.target).closest('.panel-default').removeClass(' panel-active');
    });
    /*-----------------------------------------------------------------------------------*/
    /*	PARALLAX MOBILE
     /*-----------------------------------------------------------------------------------*/
    if (navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i)) {
        $('.parallax').addClass('mobile');
    }
    /*-----------------------------------------------------------------------------------*/
    /*	DATA REL
     /*-----------------------------------------------------------------------------------*/
    $('a[data-rel]').each(function () {
        $(this).attr('rel', $(this).data('rel'));
    });
    /*-----------------------------------------------------------------------------------*/
    /*	RETINA
     /*-----------------------------------------------------------------------------------*/
    $('.retina').retinise();
    
    /*-----------------------------------------------------------------------------------*/
    /*	LOCALSCROLL
     /*-----------------------------------------------------------------------------------*/
    $('.navbar, .scroll').localScroll({
        hash: true
    });
    /*-----------------------------------------------------------------------------------*/
    /*	TOOLTIP
     /*-----------------------------------------------------------------------------------*/
    if ($("[rel=tooltip]").length) {
        $("[rel=tooltip]").tooltip();
    }
    /*-----------------------------------------------------------------------------------*/
    /*	PRETTIFY
     /*-----------------------------------------------------------------------------------*/
    window.prettyPrint && prettyPrint()
});

$(function () {
    /*-----------------------------------------------------------------------------------*/
    /*	SCROLL NAVIGATION HIGHLIGHT
     /*-----------------------------------------------------------------------------------*/
    headerWrapper = parseInt($('.navbar').height(), 10);

    var header_height = $('.navbar').height();
    var shrinked_header_height = 68;

    $('.onepage section').css('padding-top', shrinked_header_height + 'px');
    $('.onepage section').css('margin-top', -(shrinked_header_height) + 'px');
    $('.onepage section:first-of-type').css('padding-top', header_height + 'px');
    $('.onepage section:first-of-type').css('margin-top', -(header_height) + 'px');

    offsetTolerance = -(header_height);
    //Detecting user's scroll
    $(window).scroll(function () {
        //Check scroll position
        scrollPosition = parseInt($(this).scrollTop(), 10);
        //Move trough each menu and check its position with scroll position then add current class
        $('.onepage .navbar ul a').each(function () {
            thisHref = $(this).attr('href');
            thisTruePosition = parseInt($(thisHref).offset().top, 10);
            thisPosition = thisTruePosition - headerWrapper - offsetTolerance;
            if (scrollPosition >= thisPosition) {
                $('.current').removeClass('current');
                $('.navbar ul a[href=' + thisHref + ']').parent('li').addClass('current');
            }
        });
        //If we're at the bottom of the page, move pointer to the last section
        bottomPage = parseInt($(document).height(), 10) - parseInt($(window).height(), 10);
        if (scrollPosition == bottomPage || scrollPosition >= bottomPage) {
            $('.current').removeClass('current');
            $('.navbar ul a:last').parent('li').addClass('current');
        }
    });
});

/*-----------------------------------------------------------------------------------*/
/*	WOW ANIMATION
 /*-----------------------------------------------------------------------------------*/
new WOW().init();