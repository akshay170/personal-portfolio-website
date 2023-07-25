$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "smooth");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
     typed = new Typed(".typing", {
        strings: ["Developer.", "Trader.","Designer." ,"Student."],
        typeSpeed: 40,
        backSpeed: 40,
        loop: true
    });

     typed = new Typed(".typing-2", {
        strings: [ "coding💻.", "Traveling 🚌🚗🚂.", "Listening Music🎵 🎼🎧.", "Trading📈📉."],
        typeSpeed: 20,
        backSpeed: 50,
        loop: true
    });

    //blink

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: false,
        autoplay: false,
        autoplayTimeOut: 1000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            100:{
                items: 2,
                nav: false
            },
            1000:{
                items: 2,
                nav: false
            }
        }
    });
});