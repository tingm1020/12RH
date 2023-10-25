$(document).ready(function(){
    // Loading要先做的動作
    // $('.loading').addClass('on');
    $(window).on('load',function(){});


    
    // 選單展開
    function menuOpen(){
        $('.navOpen,.menuBox').addClass('on');
    }
    function menuClose(){
        $('.navOpen,.menuBox,.innerBox .navBtnOpen').removeClass('on');
    }
    $('.navOpen').click(function(){
        if($('.menuBox').hasClass('on')){
            menuClose();
        } else{
            menuOpen();
        }
    });
    $('.navBtnOpen').click(function(){
        if($(this).hasClass('on')){
            $(this).removeClass('on');
        } else{
            $(this).addClass('on');
        }
    });
    $('.dropBtn').click(function(){
        if($('.navOpen,.menuBox').hasClass('on')){
            menuClose();
        }
    })
    $('.float-goTopBtn').click(function(){
        $('html,body').animate({
            scrollTop: $('.anchor1').offset().top - 50 + "px"
        },500);
    });
    $('.float-socialBtn').click(function(){
        $('.float-socialBlock').toggleClass('on');
    });
    // 依數列滾動到頁面
    $.each(Array(9),function(i){
        var scrollPage = $('.anchorBtn' + (i));
        var anchor = $('.subanchor' + (i));
        $(scrollPage).click(function(){
            menuClose();
            $('html,body').animate({
                scrollTop: $(anchor).offset().top - 80 +"px"
            },0);
        });
    });



    
    
    $('.newsCont .box').mouseover(function(){
        if(screen.width > 499){
            $(this).addClass('on');
        }
    });
    $('.newsCont .box').mouseout(function(){
        if(screen.width > 499){
           $(this).removeClass('on'); 
        }
    });
    // tableCont2 B. 上方標籤切換
    $('.selectBtn').click(function(){
        if($(this).hasClass('selectTab1')){
            $('.selectTab2').removeClass('on');
            $(this).addClass('on');
            $('.tabTable').removeClass('tab2').addClass('tab1').html('<table class="table"><tbody><tr class="headTr"><td class="tdB nB">表格一</td><td class="mainTd">列標一</td><td class="mainTd">列標二</td><td class="mainTd">列標三</td></tr><tr class="trB"><td class="tdB nB">任一欄</td><td class="t1">測試文字</td><td class="t1">測試文字</td><td class="t1">測試文字</td></tr><tr class="trB"><td class="tdB nB">任一欄</td><td class="t1">測試文字</td><td class="t1">測試文字</td><td class="t1">測試文字</td></tr><tr><td class="tdB nB nBB">最後一欄</td><td class="t1 nBB">測試文字</td><td class="t1 nBB">測試文字</td><td class="t1 nBB">測試文字</td></tr></tbody></table>');
        }
        if($(this).hasClass('selectTab2')){
            $('.selectTab1').removeClass('on');
            $(this).addClass('on');
            $('.tabTable').removeClass('tab1').addClass('tab2').html('<table class="table"><tbody><tr class="headTr"><td class="tdB nB">表格二</td><td class="mainTd">列標一</td><td class="mainTd">列標二</td><td class="mainTd">列標三</td></tr><tr class="trB"><td class="tdB nB">任一欄</td><td class="t1">測試文字</td><td class="t1">測試文字</td><td class="t1">測試文字</td></tr><tr class="trB"><td class="tdB nB">任一欄</td><td class="t1">測試文字</td><td class="t1">測試文字</td><td class="t1">測試文字</td></tr><tr><td class="tdB nB nBB">最後一欄</td><td class="t1 nBB">測試文字</td><td class="t1 nBB">測試文字</td><td class="t1 nBB">測試文字</td></tr></tbody></table>');
        }
    });
    // logo滑超過範圍變換顏色
    $(window).scroll(function(){
        var wrap = window.innerHeight * .7;
        var wrapOver = window.innerHeight * 4.1;
        if(getScrollTop() > wrap){
            $('.anchorBox').addClass('fixed');
        } else{
            $('.anchorBox').removeClass('fixed');
            if($('.anchorBox').hasClass('fixed')){
                $(this).removeClass('on');
            }
        }
        if(getScrollTop() > wrapOver){
            $('.anchorBox').removeClass('fixed');
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