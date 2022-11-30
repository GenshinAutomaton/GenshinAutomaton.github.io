/* jQuery Pre loader
 -----------------------------------------------*/
$(window).load(function(){
    var system = {};
    var p = navigator.platform;
    system.win = p.indexOf("Win") == 0;
    system.mac = p.indexOf("Mac") == 0;
    system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
    if (system.win || system.mac || system.xll) {//如果是电脑跳转到
        $('.preloader').fadeOut(1000); // set duration in brackets
        //电脑登录
    } else {  //如果是手机,跳转到
        window.alert("当前暂时支持电脑使用，请使用电脑打开!")
        window.location.href = "#";
    }
});

$(document).ready(function() {
    /* Back top*/
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.go-top').fadeIn(200);
        } else {
            $('.go-top').fadeOut(200);
        }
    });
    // Animate the scroll to top
    $('.go-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 300);
    })

    new WOW({ mobile: false }).init();
});