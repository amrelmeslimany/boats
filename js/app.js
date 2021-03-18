$(document).ready(function() {
    /* 
        !Road Map
    * 1 ) Navbar
    * 2 ) Main
    * 3 ) Exploring
    * 4 ) About Us
    * 5 ) Servics
    * 6 ) Contact Us
    * 7 ) Footer
*/
    // ! Variabls
    /* 1- Navbar    */
    const TOPNAV_LINKS = $('a[data-sections]'),
        /* 2- Main Top  */
        LI_LOGOS = $('#main-top .logos-mn-t .logo-item');
    //  ? 1 ) Navbar
    /**
     * Top Nav Direct User
     */
    TOPNAV_LINKS.on("click", function(c) {
        c.preventDefault();
        let name_sc = $(this).data("sections");
        if (name_sc == "#exploring") {
            $("body,html").animate({
                scrollTop: $(name_sc).offset().top - 40
            }, 1000);
        } else {
            $("body,html").animate({
                scrollTop: $(name_sc).offset().top
            }, 1000);
        }

    });
    //  ? 2 ) Main
    /* Add Active Each Logo And change The BG OF MAIN AND HEAD TEXT */
    LI_LOGOS.on("click", function(c) {
        c.preventDefault();
        // ---- Remove Active
        $(this).siblings("li").removeClass("active");
        // ---- Add Aactive
        $(this).addClass("active");
        // ---- Get Data Comain
        let {
            imgSrcBg: imgBG,
            companySort: companyST
        } = $(this).data("comain"),
            // ---- Modifing Img Of Main
            main_self = $("#main-top"),
            // ---- Modifing Title Of Main
            title_main = $("#main-top .box .title-1");
        title_main.text(companyST + "boats");
        console.log(main_self, imgBG.slice(1));
        main_self.css({
            backgroundImage: `url(${imgBG.slice(1)})`
        });
        /* main_self.css({
            background: `${imgBG.slice(1)} no-repeat bottom`
        }); */
    });
    //  ? 3 ) Exploring
    /*
     ? Carousel Reviwing
    */
    $(".owl-carousel").owlCarousel({
        items: 1,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        autoplayTimeout: 10000,
        smartSpeed: 800,
        loop: true
    });
    //  ? 4 ) About Us    
    //  ? 5 ) Servics     
    //  ? 6 ) Contact Us  
    //  ? 7 ) Footer      

    // ! Public FN

});