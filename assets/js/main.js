$(function(){
    /**
     * 
     * 언어선택
     */
     $('#btnLang').click(function(){
        url = $('#langList').val();
        // console.log(url);
        window.open(url);
    })




    /**
     * 첫번째 슬라이드
     */
     const slide1 = new Swiper(".slide1 .swiper", {
        loop:true,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
          },
        pagination: {
            el: ".fraction",
            type: "fraction",
        },
        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
          },
        
    });

    $('.slide1 .autoplay').click(function(){

        if ($(this).hasClass('active')) {
            slide1.autoplay.start();
            $(this).removeClass('active');
        } else {
            slide1.autoplay.stop();
            $(this).addClass('active');
        }
    })

    const slide2 = new Swiper(".slide2 .swiper", {
        loop:true,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
          },
        pagination: {
            el: ".fraction",
            type: "fraction",
        },
        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
          },
        
    });

    $('.slide2 .autoplay').click(function(){

        if ($(this).hasClass('active')) {
            slide2.autoplay.start();
            $(this).removeClass('active');
        } else {
            slide2.autoplay.stop();
            $(this).addClass('active');
        }
    })

    $('.sc-slide h3').click(function(e){
        e.preventDefault();
        $('.sc-slide .group-slide').removeClass('active');
        $(this).parent().addClass('active');

    })


    /**
     * 두번째 슬라이드
     * @disableOnInteraction - 조작후재생유무
     * @autiplay.stop
     */
     const bannerSlide = new Swiper(".sc-banner2 .swiper", {
        slidesPerView: 3,
        spaceBetween: 43,
        loop:true,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
          },
        pagination: {
            el: ".fraction",
            type: "fraction",
        },
        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
          },
        
    });

    $('.sc-banner2 .autoplay').click(function(){

        if ($(this).hasClass('active')) {
            bannerSlide.autoplay.start();
            $(this).removeClass('active');
        } else {
            bannerSlide.autoplay.stop();
            $(this).addClass('active');
        }
    })

    /**
     * 관련사이트
     * @다른영역 클릭 시 닫기
     * 
     */
    $('.btn-related').click(function(){
        if ($(this).hasClass('active')) {
            $('.txt-related').addClass('active');
            $('.sc-related .sub-area').stop().slideUp();
            $('.btn-related').removeClass('active');
        } else {
            $('.sc-related .sub-area').stop().slideUp();
            $(this).siblings('.sc-related .sub-area').slideDown(300);
            $('.btn-related').removeClass('active');
            $(this).addClass('active');  
        }
    })

    $('body').click(function(e){

        if(!$('.sc-related').has(e.target).length){
            $('.btn-related').removeClass('active');
            $('.sc-related .sub-area').stop().slideUp();
        }
    })


    /**
     * 버튼 탑
     */
    $(window).scroll(function(){
        curr=$(this).scrollTop();
        if (curr > 0) {
            $('.btn-top').addClass('active');
        } else {
            $('.btn-top').removeClass('active');
        }
    })

    $('.btn-top').click(function(e){
        e.preventDefault();
        window.scrollTo({top:0,behavior:'smooth'});
    })
})

