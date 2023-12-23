$(document).ready(function(){
    // AOS動態引入
    AOS.init();

   
    $('.float-goTopBtn').click(function(){
        $('html,body').animate({
            scrollTop: $('.anchor1').offset().top - 50 + "px"
        },500);
    });
    $('.float-socialBtn').click(function(){
        $('.float-socialBlock').toggleClass('on');
    });
    // 依數列滾動到頁面
    $.each(Array(8),function(i){
        var scrollPage = $('.navBtn' + (i));
        var page = $('.anchor' + (i));
        $(scrollPage).click(function(){
            menuClose();
            $('html,body').animate({
                scrollTop: $(page).offset().top - 0 +"px"
                
            },1000);
        });
    });
    // 計數
    function counted(){
        $(".counter").each(function () {
            var count = $(this);
            var countTo = count.attr('data-count');
            // console.log(countTo);
            $({countNum:count.text()}).animate({
                    countNum:countTo,
                },
                {
                    duration:3000,
                    easing:'linear',
                    step:function(){
                        count.text(Math.floor(this.countNum));
                    },
                    complete:function(){
                        count.text(this.countNum);
                    }
            });
        });
    }
    
    // logo滑超過範圍變換顏色
    $(window).scroll(function(){
        var logoPC = window.innerHeight * 1;
        var logo = window.innerHeight * .2;
        var scroll = $(window).scrollTop();

        if(scroll > 30){
            $('.kv .contBox').addClass('on');
        } 
        if(scroll > 650){
            $('.page1 .title').addClass('on');
        } 
        if(scroll > 1200){
            $('.page1 .logoBox').addClass('on');
        } 
        if(scroll > 3000){
            counted();
        } 
    });
    function getScrollTop() {
        var bodyTop = 0;
        if (typeof window.pageY0ffset != "undefined") {
            bodyTop = window.pageY0ffset;
        } else if (typeof document.compatMode != "undefined" &&
            document.compatMode != "BackCompat") {
            bodyTop = document.documentElement.scrollTop;
        } else if (typeof document.body != "undefined") {
            bodyTop = document.body.scrollTop;
        }
        return bodyTop;
    }

});