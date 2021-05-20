//==================
// black page of menu
//==================
$(".black-page,.close-icon").click(function () {
    $(".sidebar").removeClass("active");
    $(".black-page").fadeOut();
    $("[data-close-btn]").trigger("click")
    $("html").removeAttr("style");
});
$("[data-open-black-page]").click(function () {
    $(".black-page").fadeIn();
});

//==================
// menu btn
//==================
$(".menu-items ul li div i.icon-font-plus-menu").click(function () {
    $(this).parents("ul li").find("ul.menu-down").stop().slideToggle();
    $(this).toggleClass("icon-font-plus-menu");
    $(this).toggleClass("icon-font-remove-menu");
});

$(".menu-btn").click(function (e) {
    $(".sidebar").addClass("active");
    if ($(".sidebar .active-collapsing").length) {
        $(".sidebar .active-collapsing .collapsing-sidebar").trigger("click");
    }
    $(".black-page").fadeIn();
    $("html").css({overflow: "hidden"});
    e.stopPropagation();
    e.preventDefault();
});

var get_hash = window.location.hash
$("[href='" + get_hash + "']").addClass("color-sun");
$("[href='" + get_hash + "']").parents(".accordion-collapse").siblings("div").find(".accordion-button").trigger("click");
$(".sidebar a").click(function () {
    $(this).addClass("color-sun").parent().siblings("li").find("a").removeClass("color-sun")
});

$("[data-bs-toggle]").click(function () {
    var _self = $(this);
    _self.parents(".active-collapsing").find(".collapsing-sidebar").trigger("click");
});
$(".collapsing-sidebar").click(function () {
    var _self = $(this);
    _self.parents(".sidebar-content:not(.active-collapsing)").find("[aria-expanded=true]").trigger("click");
    _self.parents(".sidebar-content").toggleClass("col-xl-3 col-lg-4").toggleClass("col-xl-1 col-lg-1").toggleClass("active-collapsing");
    _self.parents(".sidebar").toggleClass("col-xl-3 col-lg-4").toggleClass("col-xl-1 col-lg-1").toggleClass("active-collapsing");
    _self.parents(".sidebar").siblings(".content").toggleClass("col-xl-9 col-lg-10").toggleClass("col-xl-11 col-lg-11");
});

if ($("[data-scroll]").length) {
    $("[data-scroll]").overlayScrollbars({
        className: "os-theme-dark",
        normalizeRTL: true,
        autoHide: "never",
        overflowBehavior: {
            x: "hidden",
            y: "scroll"
        },
    });
}
var elem = document.documentElement;
$("#fullscreen").click(function () {
    var _self = $(this);
    if (_self.hasClass("icon-font-fullscreen")) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
        }
        _self.removeClass("icon-font-fullscreen").addClass("icon-font-exit-fullscreen");
    }else if(_self.hasClass("icon-font-exit-fullscreen")){
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            window.top.document.msExitFullscreen();
        }
        _self.addClass("icon-font-fullscreen").removeClass("icon-font-exit-fullscreen");
    }
});
document.addEventListener("fullscreenchange", function() {
    if ((window.fullScreen) || (window.innerWidth == screen.width && window.innerHeight == screen.height)){
        $("#fullscreen").removeClass("icon-font-fullscreen").addClass("icon-font-exit-fullscreen");
    }else{
        $("#fullscreen").addClass("icon-font-fullscreen").removeClass("icon-font-exit-fullscreen");
    }
});