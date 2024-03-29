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
        var scrollPage = $('.anchorBtn' + (i));
        var page = $('.subanchor' + (i));
        $(scrollPage).click(function(){
            $('html,body').animate({
                scrollTop: $(page).offset().top - 50 +"px"
                
            },1000);
        });
    });
    $('.goTopBtn').click(function(){
        $('html,body').animate({
            scrollTop: $('.kv').offset().top - 50 + "px"
        },500);
    });
   
    // logo滑超過範圍變換顏色
    $(window).scroll(function(){
        var logoPC = window.innerHeight * 1;
        var logo = window.innerHeight * .2;
        var scroll = $(window).scrollTop();
        if(screen.width > 768){
            if(scroll > 30){
                $('.kv .contBox').addClass('on');
            } 
            if(scroll > 650){
                $('.page1 .title').addClass('on');
            } 
            if(scroll > 1200){
                $('.page1 .logoBox').addClass('on');
            }  
        }
        if(screen.width < 767){
            if(scroll > 30){
                $('.kv .contBox').addClass('on');
            } 
            if(scroll > 30){
                $('.page1 .title').addClass('on');
            } 
            if(scroll > 100){
                $('.page1 .logoBox').addClass('on');
            } 
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