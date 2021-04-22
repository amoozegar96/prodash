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
//----------------popovers-----------------
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
});
//----------------popovers-----------------
//----------------tooltip-----------------
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
});
//----------------tooltip-----------------
//----------------toast-----------------
var toastElList = [].slice.call(document.querySelectorAll('.toast'))
var toastList = toastElList.map(function (toastEl) {
    return new bootstrap.Toast(toastEl)
})
var liveToastBtn = document.getElementById('liveToastBtn'),
liveToast = document.getElementById('liveToast');
liveToastBtn.addEventListener('click', function () {
    var showToast = new bootstrap.Toast(liveToast);
    showToast.show()
})
//----------------toast-----------------
