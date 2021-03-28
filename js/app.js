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
        LI_LOGOS = $('#main-top .logos-mn-t .logo-item'),
        /* 3- Contact Us */
        CONTACT_FORM = $("#contact-us .c-form"),
        CONTACT_CHILDREN = {
            username: CONTACT_FORM.find("#username"),
            city: CONTACT_FORM.find("#city"),
            phone: CONTACT_FORM.find("#phone"),
            email: CONTACT_FORM.find("#email"),
            message: CONTACT_FORM.find("#message")
        },
        SUBMIT_BTN = CONTACT_FORM.find(".btn-contact-us"),
        COUNTRIES_CODES = [
            "Afghanistan",
            "Albania",
            "Algeria",
            "American Samoa",
            "Andorra",
            "Angola",
            "Anguilla",
            "Antarctica",
            "Antigua and Barbuda",
            "Argentina",
            "Armenia",
            "Aruba",
            "Australia",
            "Austria",
            "Azerbaijan",
            "Bahamas (the)",
            "Bahrain",
            "Bangladesh",
            "Barbados",
            "Belarus",
            "Belgium",
            "Belize",
            "Benin",
            "Bermuda",
            "Bhutan",
            "Bolivia (Plurinational State of)",
            "Bonaire, Sint Eustatius and Saba",
            "Bosnia and Herzegovina",
            "Botswana",
            "Bouvet Island",
            "Brazil",
            "British Indian Ocean Territory (the)",
            "Brunei Darussalam",
            "Bulgaria",
            "Burkina Faso",
            "Burundi",
            "Cabo Verde",
            "Cambodia",
            "Cameroon",
            "Canada",
            "Cayman Islands (the)",
            "Central African Republic (the)",
            "Chad",
            "Chile",
            "China",
            "Christmas Island",
            "Cocos (Keeling) Islands (the)",
            "Colombia",
            "Comoros (the)",
            "Congo (the Democratic Republic of the)",
            "Congo (the)",
            "Cook Islands (the)",
            "Costa Rica",
            "Croatia",
            "Cuba",
            "Curaçao",
            "Cyprus",
            "Czechia",
            "Côte d'Ivoire",
            "Denmark",
            "Djibouti",
            "Dominica",
            "Dominican Republic (the)",
            "Ecuador",
            "Egypt",
            "El Salvador",
            "Equatorial Guinea",
            "Eritrea",
            "Estonia",
            "Eswatini",
            "Ethiopia",
            "Falkland Islands (the) [Malvinas]",
            "Faroe Islands (the)",
            "Fiji",
            "Finland",
            "France",
            "French Guiana",
            "French Polynesia",
            "French Southern Territories (the)",
            "Gabon",
            "Gambia (the)",
            "Georgia",
            "Germany",
            "Ghana",
            "Gibraltar",
            "Greece",
            "Greenland",
            "Grenada",
            "Guadeloupe",
            "Guam",
            "Guatemala",
            "Guernsey",
            "Guinea",
            "Guinea-Bissau",
            "Guyana",
            "Haiti",
            "Heard Island and McDonald Islands",
            "Holy See (the)",
            "Honduras",
            "Hong Kong",
            "Hungary",
            "Iceland",
            "India",
            "Indonesia",
            "Iran (Islamic Republic of)",
            "Iraq",
            "Ireland",
            "Isle of Man",
            "Israel",
            "Italy",
            "Jamaica",
            "Japan",
            "Jersey",
            "Jordan",
            "Kazakhstan",
            "Kenya",
            "Kiribati",
            "Korea (the Democratic People's Republic of)",
            "Korea (the Republic of)",
            "Kuwait",
            "Kyrgyzstan",
            "Lao People's Democratic Republic (the)",
            "Latvia",
            "Lebanon",
            "Lesotho",
            "Liberia",
            "Libya",
            "Liechtenstein",
            "Lithuania",
            "Luxembourg",
            "Macao",
            "Madagascar",
            "Malawi",
            "Malaysia",
            "Maldives",
            "Mali",
            "Malta",
            "Marshall Islands (the)",
            "Martinique",
            "Mauritania",
            "Mauritius",
            "Mayotte",
            "Mexico",
            "Micronesia (Federated States of)",
            "Moldova (the Republic of)",
            "Monaco",
            "Mongolia",
            "Montenegro",
            "Montserrat",
            "Morocco",
            "Mozambique",
            "Myanmar",
            "Namibia",
            "Nauru",
            "Nepal",
            "Netherlands (the)",
            "New Caledonia",
            "New Zealand",
            "Nicaragua",
            "Niger (the)",
            "Nigeria",
            "Niue",
            "Norfolk Island",
            "Northern Mariana Islands (the)",
            "Norway",
            "Oman",
            "Pakistan",
            "Palau",
            "Palestine, State of",
            "Panama",
            "Papua New Guinea",
            "Paraguay",
            "Peru",
            "Philippines (the)",
            "Pitcairn",
            "Poland",
            "Portugal",
            "Puerto Rico",
            "Qatar",
            "Republic of North Macedonia",
            "Romania",
            "Russian Federation (the)",
            "Rwanda",
            "Réunion",
            "Saint Barthélemy",
            "Saint Helena, Ascension and Tristan da Cunha",
            "Saint Kitts and Nevis",
            "Saint Lucia",
            "Saint Martin (French part)",
            "Saint Pierre and Miquelon",
            "Saint Vincent and the Grenadines",
            "Samoa",
            "San Marino",
            "Sao Tome and Principe",
            "Saudi Arabia",
            "Senegal",
            "Serbia",
            "Seychelles",
            "Sierra Leone",
            "Singapore",
            "Sint Maarten (Dutch part)",
            "Slovakia",
            "Slovenia",
            "Solomon Islands",
            "Somalia",
            "South Africa",
            "South Georgia and the South Sandwich Islands",
            "South Sudan",
            "Spain",
            "Sri Lanka",
            "Sudan (the)",
            "Suriname",
            "Svalbard and Jan Mayen",
            "Sweden",
            "Switzerland",
            "Syrian Arab Republic",
            "Taiwan",
            "Tajikistan",
            "Tanzania, United Republic of",
            "Thailand",
            "Timor-Leste",
            "Togo",
            "Tokelau",
            "Tonga",
            "Trinidad and Tobago",
            "Tunisia",
            "Turkey",
            "Turkmenistan",
            "Turks and Caicos Islands (the)",
            "Tuvalu",
            "Uganda",
            "Ukraine",
            "United Arab Emirates (the)",
            "United Kingdom of Great Britain and Northern Ireland (the)",
            "United States Minor Outlying Islands (the)",
            "United States of America (the)",
            "Uruguay",
            "Uzbekistan",
            "Vanuatu",
            "Venezuela (Bolivarian Republic of)",
            "Viet Nam",
            "Virgin Islands (British)",
            "Virgin Islands (U.S.)",
            "Wallis and Futuna",
            "Western Sahara",
            "Yemen",
            "Zambia",
            "Zimbabwe",
            "Åland Islands"
        ];
    // ----
    let is_valid = [];

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
            companySort: companyST,
            companyLN
        } = $(this).data("comain"),
            // ---- Modifing Img Of Main
            main_self = $("#main-top"),
            // ---- Modifing Title Of Main
            title_main = $("#main-top .box .title-1");
        title_main.text(companyST + "boats");
        main_self.css({
            backgroundImage: `url(${imgBG.slice(1)})`
        });
        // Add Link To Main Section 
        $("#main-top").attr("href", companyLN);
        // Change Color Of Header OF back is Black
        /* if (companyST == "cobalt") {
            $("#main-top .box h6,#main-top .box h1,#main-top .box p").css("color", "#af8f3b");
        } else {
            $("#main-top .box h6,#main-top .box h1,#main-top .box p").css("color", "");
        } */
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
    /* Add Countries For Selection */
    COUNTRIES_CODES.sort().forEach(code => {
        // ----
        let arr_cou_sf = code.split(" ");
        if (arr_cou_sf.length > 4) {
            // ----
            CONTACT_CHILDREN["city"].append(`<option value="${code.toLowerCase()}">${arr_cou_sf.slice(0,4).join(",").replace(/,/gi," ")}</option>`);
        } else {
            CONTACT_CHILDREN["city"].append(`<option value="${code.toLowerCase()}">${code.toUpperCase()}</option>`);
        }
    });
    /* Handel Errors */
    SUBMIT_BTN.on("click", function(c) {
        c.preventDefault();
        // ----
        for (let key in CONTACT_CHILDREN) {
            // ----
            if (CONTACT_CHILDREN[key].val() == "") {
                CONTACT_CHILDREN[key].addClass("invalid");
                CONTACT_CHILDREN[key].removeClass("is-valid");
                is_valid.push(key);
            } else {
                CONTACT_CHILDREN[key].removeClass("invalid");
                CONTACT_CHILDREN[key].addClass("is-valid");
                is_valid = [];
            }
        }
        if (is_valid.length == 0) {
            $(this).text("Sent!");
            setTimeout(_ => {
                location.reload()
            }, 350)
        } else {
            $(this).text("Empty");
        }
    });
    //  ? 7 ) Footer      

    // ! Public FN

});