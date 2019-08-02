//首页历史动态显示
$(document).ready(function(){
    var b,c1,c2,c3;
    //a = $(window).height();    //浏览器窗口高度
    var group1 = $(".history1");
    var group2 = $(".history2");
    var group3 = $(".history3");
    b = $(this).scrollTop();   //页面滚动的高度
    c1 = group1.offset().top;    //元素距离文档（document）顶部的高度
    c2 = group2.offset().top;
    c3 = group3.offset().top;
    console.log(c3-b);
    if (c1-b<455){
        $('.history1Image1').addClass("animated fadeInLeft");
        $('.history1Text1').addClass("animated fadeInLeft");
        $('.history1Text2').addClass("animated fadeIn");
    }
    if (c2-b<560) {
        $('.history2Image1').addClass("animated fadeInUp");
        $('.history2Text1').addClass("animated fadeIn ");
        $('.history2Text2').addClass("animated fadeInUp");
    }
    if (c3-b<555) {
        $('.history3Image1').addClass("animated fadeInLeft");
        $('.history3Text1').addClass("animated fadeInLeft ");
        $('.history3Text2').addClass("animated fadeIn");
    }
    $(window).scroll(function(){
        b = $(this).scrollTop();   //页面滚动的高度
        c1 = group1.offset().top;    //元素距离文档（document）顶部的高度
        c2 = group2.offset().top;
        c3 = group3.offset().top;
        if (c1-b<455){
            $('.history1Image1').addClass("animated fadeInLeft");
            $('.history1Text1').addClass("animated fadeInLeft");
            $('.history1Text2').addClass("animated fadeIn");
        }
        if (c2-b<560) {
            $('.history2Image1').addClass("animated fadeInUp");
            $('.history2Text1').addClass("animated fadeIn ");
            $('.history2Text2').addClass("animated fadeInUp");
        }
        if (c3-b<555) {
            $('.history3Image1').addClass("animated fadeInLeft");
            $('.history3Text1').addClass("animated fadeInLeft ");
            $('.history3Text2').addClass("animated fadeIn");
        }

    });
});
//首页返回顶部
$('.goTop').on('click',function () {
    $('html,body').animate({scrollTop:'0px'},1000);
})