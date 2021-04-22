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
    $(".black-page").fadeIn();
    $("html").css({overflow: "hidden"});
    e.stopPropagation();
    e.preventDefault();
});

var get_hash = window.location.hash
$("[href='"+get_hash+"']").addClass("color-sun");
$("[href='"+get_hash+"']").parents(".accordion-collapse").siblings("h2").find(".accordion-button").trigger("click");
$(".sidebar a").click(function () {
    $(this).addClass("color-sun").parent().siblings("li").find("a").removeClass("color-sun")
})