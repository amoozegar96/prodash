//==================
// black page of menu
//==================
$(".black-page , .close-menu i").click(function () {
    $(".menu-items").css({right: -300});
    $(".black-page").fadeOut();
    $("[data-close-btn]").trigger("click")
    $("html").removeAttr("style");
});
$("[data-open-black-page]").click(function () {
    $(".black-page").fadeIn();
});

//==================
// u menu
//==================
$(".u-menu [data-get-content]").mouseover(function () {
    var _self = $(this);
    _self.parent("li").addClass("active").siblings("li").removeClass("active")
    _self.parents(".sidebar").siblings(".content").find("[data-menu-content=" + _self.data("get-content") + "]").addClass("active").siblings().removeClass("active")

})
//==================
// menu rail
//==================
$(document).on("mouseover", ".header-xl .menu ul li", function () {
    $(this).find("a").parents(".menu").find(".rail").css({
        "width": $(this).find("a").width() - $(this).find("i").outerWidth(),
        "opacity": 1,
        "left": $(this).find("a").position().left
    });

});
$(document).on("mouseleave", ".header-xl .menu ul li", function () {
    $(this).find("a").parents(".menu").find(".rail").removeAttr("style");
});

//==================
// modal
//==================
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
});

//==================
// toggle class
//==================
$(document).on("click", "[data-toggle-class]", function (e) {
    var $this = $(this);
    if ($("[data-toggle-class-popup],[data-toggle-class-popup-select]").length) {
        $("[data-toggle-class-popup],[data-toggle-class-popup-select]").removeClass("active");
    }
    $this.toggleClass($this.attr("data-toggle-class"));
    if ($this.hasClass($this.attr("data-toggle-class"))) {
        $this.find(".text-changer").text($this.attr("data-after-text"));
        $("[data-toggle-class-popup=" + $this.attr("data-toggle-class-popup-select") + "]").addClass("active");
    } else {
        $this.find(".text-changer").text($this.attr("data-before-text"));
        $("[data-toggle-class-popup=" + $this.attr("data-toggle-class-popup-select") + "]").removeClass("active");
    }
    if ($this.hasClass("btn-view-purchase-invoice")) {
        $this.parent().siblings(".view-purchase").toggleClass("active");
    }
    e.stopPropagation();
    e.preventDefault();
});
$(window).click(function () {
    $("[data-toggle-class]").each(function () {
        $("[data-toggle-class]." + $(this).attr("data-toggle-class")).removeClass($(this).attr("data-toggle-class"));
    });
    $("[data-toggle-class-popup]").each(function () {
        $("[data-toggle-class-popup]").removeClass("active");
    });
});

//==================
//nice number
//==================

$('[data-number-spinner]').niceNumber({
    autoSize: false,
    autoSizeBuffer: 1,
});

$(document).on("click", ".nice-number", function (e) {
    e.stopPropagation();
});

//==================
// menu btn
//==================
$(".menu-items ul li div i.icon-font-plus-menu").click(function () {
    $(this).parents("ul li").find("ul.menu-down").stop().slideToggle();
    $(this).toggleClass("icon-font-plus-menu");
    $(this).toggleClass("icon-font-remove-menu");
});

$(".menu-small-icon").click(function (e) {
    $(".menu-items").css({right: 0});
    $(".black-page").fadeIn();
    $("html").css({overflow: "hidden"});
    e.stopPropagation();
    e.preventDefault();
});


//==================
//scrollbar
//==================


// $(window).on('ready load resize change', function () {
//     if ($("[data-scroll-no-touch]").length) {
//         $("[data-scroll-no-touch]").each(function () {
//             var $this = $(this);
//             $this.scrollbar({
//                 isRtl: true
//             });
//         });
//     }
// });

if ($(".original-category").length) {
    var this_div = $(".original-category ul").width() / 2;
    $(".original-category").animate({"scrollLeft": 500}, 500);
}

if ($(".chat-list-parent").length) {
    var this_div = $(".chat-list-parent ul").outerHeight(true);
    $(".chat-list-parent[data-scroll-no-touch]").animate({"scrollTop": this_div}, 500);
}

//==================
// slider
//==================

$(window).on('ready load resize orientationchange', function () {
    $('body').each(function () {
        if ($("[data-h]").length) {
            $("[data-h]").matchHeight();
        }
    });
});
$("[data-slider]").each(function () {
    var _self = $(this),
        option = {
            arrows: false,
            rtl: eval(_self.data("rtl")),
            fade: eval(_self.data("fade")),
            speed: 500,
            dots: eval(_self.data("items-nav")),
            infinite: eval(_self.data("loop")),
            slidesToShow: eval(_self.data("disable-number")),
            slidesToScroll: eval(_self.data("to-show")),
            autoplay: eval(_self.data("autoPlay")),
            autoplaySpeed: eval(_self.data("autoPlay-speed")),
            pauseOnHover: eval(_self.data("pauseOnHover")),
            asNavFor: _self.data("nav-for"),
            focusOnSelect: eval(_self.data("focus-select")),
            centerMode: eval(_self.data("center-mode")),
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: eval(_self.attr("data-disable-number-xl").split(",")[0]),
                        slidesToScroll: eval(_self.attr("data-disable-number-xl").split(",")[1])
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: eval(_self.attr("data-disable-number-m").split(",")[0]),
                        slidesToScroll: eval(_self.attr("data-disable-number-m").split(",")[1])
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: eval(_self.attr("data-disable-number-s").split(",")[0]),
                        slidesToScroll: eval(_self.attr("data-disable-number-s").split(",")[1])
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: eval(_self.attr("data-disable-number-xs").split(",")[0]),
                        slidesToScroll: eval(_self.attr("data-disable-number-xs").split(",")[1])
                    }
                },
                {
                    breakpoint: 490,
                    settings: {
                        slidesToShow: eval(_self.attr("data-disable-number-xxs").split(",")[0]),
                        slidesToScroll: eval(_self.attr("data-disable-number-xxs").split(",")[1])
                    }
                }
            ]
        };

    _self.siblings(".chevron-right").click(function () {
        _self.slick('slickPrev');
    });
    _self.siblings(".chevron-left").click(function () {
        _self.slick('slickNext');
    });
    _self.on('afterChange init', function (event, slick, currentSlide, nextSlide) {
        if (_self.find(".slick-slide:last").hasClass("slick-active")) {
            _self.siblings(".chevron-left").addClass("disable")
        } else {
            _self.siblings(".chevron-left").removeClass("disable")
        }
        if (_self.find(".slick-slide:first").hasClass("slick-active")) {
            _self.siblings(".chevron-right").addClass("disable")
        } else {
            _self.siblings(".chevron-right").removeClass("disable")
        }
        $('body').each(function () {
            if ($("[data-h]").length) {
                $("[data-h]").matchHeight();
            }
        });
    });
    _self.slick(option);
    if (option.slidesToShow === _self.find(".item").length) {
        $(".carousel-nav li").click(function () {
            _self.parent().siblings(".slider").find(".carousel-main").slick("slickGoTo", $(this).index());
        });
        _self.slick("destroy");
    }
});

$(window).on("scroll", function () {
    if ($(this).scrollTop() >= 85) {
        $(".header-xl .logo").addClass("active");
    } else {
        $(".header-xl .logo").removeClass("active");
    }
});

//==================
// page loader
//==================
$(window).on("load", function () {
    setTimeout(function () {
        $(".loading-page").fadeOut();
    }, 150);
});

//==================
//countdown login
//==================

var timer2 = "2:00";
var interval = setInterval(function () {


    var timer = timer2.split(':');
    //by parsing integer, I avoid all extra string processing
    var minutes = parseInt(timer[0], 10);
    var seconds = parseInt(timer[1], 10);
    --seconds;
    minutes = (seconds < 0) ? --minutes : minutes;

    if (minutes < 0 && seconds < 0) {
        $('.countdown').hide();
        $('.countdown').siblings("button").removeClass("d-none")
    }
    if (minutes < 0) clearInterval(interval);
    seconds = (seconds < 0) ? 59 : seconds;
    seconds = (seconds < 10) ? '0' + seconds : seconds;
    //minutes = (minutes < 10) ?  minutes : minutes;
    $('.countdown').html(minutes + ':' + seconds);
    timer2 = minutes + ':' + seconds;
}, 1000);

//==================
//Category right-side
//==================
$(".box-right-side span").click(function () {
    $(this).parent().siblings(".menu-content").stop().slideToggle();
    $(this).toggleClass("active");
});


//==================
// toggle class
//==================
$(document).on("click", "[data-toggle-on-class]", function (e) {
    var $this = $(this);
    $this.toggleClass($this.attr("data-toggle-on-class"));
});

//==================
// toggle class
//==================
$(document).on("click", "[data-change-class]", function (e) {
    var $this = $(this);
    console.log();
    if ($this.hasClass($this.attr("data-change-class").split(",")[0])) {
        $this.removeClass($this.attr("data-change-class").split(",")[0]).addClass($this.attr("data-change-class").split(",")[1])
    } else {
        $this.removeClass($this.attr("data-change-class").split(",")[1]).addClass($this.attr("data-change-class").split(",")[0])

    }
});

//==================
// toxic range slider
//==================
if ($(".js-range-slider").length) {
    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 10000000,
        from: 0,
        to: 10000000,
        step: 1000,
        grid: false,
        grid_snap: false,
        from_fixed: false,  // fix position of FROM handle
        to_fixed: false
    });
}

function toFarsiNumber(n) {
    const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

    return n
        .toString()
        .replace(/\d/g, x => farsiDigits[x]);
}

$(".js-range-slider").on("change", function () {
    var $inp = $(this);
    var v = $inp.prop("value");     // input value in format FROM;TO
    var from = $inp.data("from");   // input data-from attribute
    var to = $inp.data("to");       // input data-to attribute
    $(".range-slide").siblings("p").find(".first-price").text(toFarsiNumber(from));
    $(".range-slide").siblings("p").find(".second-price").text(toFarsiNumber(to));
});
//==================
// close btn
//==================
$("[data-close-btn]").click(function () {
    $(this).parents("[data-close-selector]").stop().fadeOut();
    $(".black-page").fadeOut();
});

//==================
// advanced search
//==================
$("[data-open-popup]").click(function (e) {
    $("[data-select-popup=" + $(this).attr("data-open-popup") + "]").stop().fadeIn();
    e.stopPropagation();
    e.preventDefault();
});
// $(window).on('ready load resize change', function () {
    // $("[data-select-popup]").removeAttr("style");
// });

//==================
// light gallery
//==================
'use strict';
/* global jQuery, PhotoSwipe, PhotoSwipeUI_Default, console */
(function ($) {
    // Init empty gallery array
    var container = [];
    // Loop over gallery items and push it to the array
    $('#gallery').find('li').each(function () {
        var $link = $(this).find('a'),
            item = {
                src: $link.attr('href'),
                w: $link.data('width'),
                h: $link.data('height'),
                title: $link.data('caption')
            };
        container.push(item);
    });
    // Define click event on gallery item
    $('#gallery a').click(function (event) {
        // Prevent location change
        event.preventDefault();
        // Define object and gallery options
        var $pswp = $('.pswp')[0],
            options = {
                index: $(this).parent('li').index(),
                bgOpacity: 0.85,
                showHideOpacity: true
            };
        // Initialize PhotoSwipe
        var gallery = new PhotoSwipe($pswp, PhotoSwipeUI_Default, container, options);
        gallery.init();
    });
}(jQuery));


//==================
// rating
//==================
$(document).on("click", ".rating", function () {
    var check_number = $(this).find(".br-current").attr("data-rating-value") == undefined ? 0 : $(this).find(".br-current").attr("data-rating-value");
    $(this).find("[data-set-rating-number]").text(check_number + "/5");
    console.log($(this).find(".br-current").attr("data-rating-value"));
});
if ($('[data-rating]').length) {
    $('[data-rating]').barrating({
        onSelect: function (t, e, n) {
            $(n.currentTarget).parents(".rating").trigger("click");
        }
    });
}
//==================
// drop down
//==================
$("[data-drop-down]").each(function () {
    var $this = $(this);
    $this.find("[data-drop-down-header]").click(function () {
        if (!$this.hasClass("active")) {
            $this.addClass("active");
            $this.find("[data-drop-down-content]").stop().slideDown();
        } else {
            $this.removeClass("active");
            $this.find("[data-drop-down-content]").stop().slideUp();
        }
    });
});


//==================
// change class
//==================
$(document).on("click", "[data-change-class]", function (e) {
    var $this = $(this);
    var _get_after_attr_value = $this.attr("data-after-class").replace(/\./g, ' ');
    var _get_before_attr_value = $this.attr("data-before-class").replace(/\./g, ' ');
    if ($this.is($this.attr("data-before-class"))) {
        $this.addClass(_get_after_attr_value).removeClass(_get_before_attr_value);
    } else {
        $this.removeClass(_get_after_attr_value).addClass(_get_before_attr_value);
    }
    e.stopPropagation();
    e.preventDefault();
});

//==================
// tab click
//==================
$(document).on("click", "[data-tab-click] li", function () {
    var $this = $(this);
    $this.removeClass($(this).parents("[data-siblings-add]").attr("data-siblings-add").replace(/\./g, ' ')).addClass($(this).parents("[data-tab-click]").attr("data-tab-click").replace(/\./g, ' ')).siblings("li").addClass($(this).parents("[data-siblings-add]").attr("data-siblings-add").replace(/\./g, ' ')).removeClass($(this).parents("[data-tab-click]").attr("data-tab-click").replace(/\./g, ' '));
    $this.parents("[data-tab-click]").siblings("[data-tab-items]").find(" > li").eq($this.index()).addClass("active").siblings().removeClass("active");
});


//==================
// profile tabs
//==================
$(".profile-main").height($("[data-main-tab].active").outerHeight(true));
$("[data-main-tab].active").parent("ul").find("> li:not(.active)").css("height", "0");

$("[data-main-tab].active").css("height", "");
$('[data-main-tab] textarea').mousemove(function () {
    var $this = jQuery(this);
    console.log($this.outerHeight());
    $(".profile-main").height($("[data-main-tab].active").outerHeight(true));
});
//==================
// sidebar tab
//==================
$(document).on("click", "[data-sidebar-tab]", function (e) {
    var _self = $(this);
    var _get_data_val = _self.attr("data-sidebar-tab");
    if (!_self.hasClass("active")) {
        $(".profile-main").animate({
            scrollTop: 0
        }, 0);
        $(".sidebar-right").find("[data-sidebar-tab=" + _get_data_val + "]").addClass("active").siblings("[data-sidebar-tab]").removeClass("active");
        $("[data-main-tab=" + _get_data_val + "]").addClass("active").siblings("[data-main-tab]").removeClass("active");
        $("[data-main-tab=" + _get_data_val + "].active").parent("ul").find("> li:not(.active)").css("height", "0");
        $("[data-main-tab=" + _get_data_val + "].active").css("height", "");
        $(".profile-main").height($("[data-main-tab=" + _get_data_val + "].active").outerHeight(true));
        console.log($("[data-main-tab=" + _get_data_val + "].active").outerHeight(true));
    }

    e.stopPropagation();
    e.preventDefault();
});


//==================
// avatar change
//==================
$(document).on("click", ".avatar-change li", function () {
    var _self = $(this);
    _self.addClass("active").siblings("li").removeClass("active")
});

//==================
// avatar change
//==================
$(document).on("click", ".add-address-btn", function () {
    var _self = $(this);
    _self.parents("form").hide().siblings(".add-address").addClass("active")
});

//==================
// show help poopup
//==================
$(document).on("click", ".show-help-poopup", function (e) {
    var _self = $(this);
    _self.siblings(".help-popup").fadeIn();
    e.stopPropagation();
    e.preventDefault();
});

$(window).on('ready load resize change click', function () {
    $("[data-scroll]").each(function (){
       $(this).height($(this).find("[data-give-height]").height())
    });
})
$("[data-scroll]").overlayScrollbars({
    className: "os-theme-dark",
    normalizeRTL:true,
    autoHide: "never",
});

