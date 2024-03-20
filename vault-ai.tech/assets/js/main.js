(function($) {
    ("use strict");

    // Initiate the wowjs
    new WOW().init();

    // Back to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $(".back-to-top").fadeIn("slow");
        } else {
            $(".back-to-top").fadeOut("slow");
        }
    });
    $(".back-to-top").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 500, "easeInOutExpo");
        return false;
    });

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000,
    });

    // Screenshot carousel
    $(".screenshot-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        dots: true,
        items: 1,
    });

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>',
        ],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
        },
    });
})(jQuery);

/**
 * Initiate Pure Counter
 */
new PureCounter();

/* typed js */

/**
 * Easy selector helper function
 */
const select = (el, all = false) => {
    el = el.trim();
    if (all) {
        return [...document.querySelectorAll(el)];
    } else {
        return document.querySelector(el);
    }
};

/**
 * Easy event listener function
 */
const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
        if (all) {
            selectEl.forEach((e) => e.addEventListener(type, listener));
        } else {
            selectEl.addEventListener(type, listener);
        }
    }
};

/**
 * Intro type effect
 */
const typed = select(".typed");
if (typed) {
    let typed_strings = typed.getAttribute("data-typed-items");
    typed_strings = typed_strings.split(",");
    new Typed(".typed", {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
    });
}

// ------------ works sliders -----------
var swiper = new Swiper(".screenshots-slider.style-4 .swiper-container", {
    slidesPerView: 5,
    spaceBetween: 0,
    centeredSlides: true,
    speed: 1000,
    pagination: false,
    navigation: false,
    mousewheel: false,
    keyboard: true,
    autoplay: {
        delay: 4000,
    },
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        480: {
            slidesPerView: 2,
        },
        787: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 5,
        },
    },
});

// Page loading animation
$(window).on("load", function() {
    $("#js-preloader").addClass("loaded");
});

// Page loading animation
$(window).on("load", function() {
    if ($(".cover").length) {
        $(".cover").parallax({
            imageSrc: $(".cover").data("image"),
            zIndex: "1",
        });
    }

    $("#preloader").animate({
            opacity: "0",
        },
        600,
        function() {
            setTimeout(function() {
                $("#preloader").css("visibility", "hidden").fadeOut();
            }, 300);
        }
    );
});

// Sticky Navbar
$(window).scroll(function() {
    if ($(this).scrollTop() > 45) {
        $(".navbar").addClass("sticky-top shadow-sm");
    } else {
        $(".navbar").removeClass("sticky-top shadow-sm");
    }
});

// Smooth scrolling on the navbar links
$(".navbar-nav a").on("click", function(event) {
    if (this.hash !== "") {
        event.preventDefault();

        $("html, body").animate({
                scrollTop: $(this.hash).offset().top - 45,
            },
            500,
            "easeInOutExpo"
        );

        if ($(this).parents(".navbar-nav").length) {
            $(".navbar-nav .active").removeClass("active");
            $(this).closest("a").addClass("active");
        }
    }
});

/**
 * Clients Slider
 */
new Swiper(".clients-slider", {
    speed: 2000,
    loop: true,
    autoplay: {
        delay: 200,
        disableOnInteraction: false,
    },
    slidesPerView: "auto",
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        480: {
            slidesPerView: 3,
            spaceBetween: 60,
        },
        640: {
            slidesPerView: 4,
            spaceBetween: 80,
        },
        992: {
            slidesPerView: 6,
            spaceBetween: 120,
        },
    },
});

/**
 * Sticky header on scroll
 */
// $(window).scroll(function () {
//   var scroll = $(window).scrollTop();
//   var box = $(".header-text").height();
//   var header = $("header").height();

//   if (scroll >= box - header) {
//     $("header").addClass("background-header");
//   } else {
//     $("header").removeClass("background-header");
//   }
// });

// Menu Dropdown Toggle
if ($(".menu-trigger").length) {
    $(".menu-trigger").on("click", function() {
        $(this).toggleClass("active");
        $(".header-area .nav").slideToggle(200);
    });
}

/**
 * Navbar links active state on scroll
 */
// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('nav ul li');
// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');
//         if(top >= offset && top < offset + height) {
//             navLinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('nav ul li a[href*=' + id + ']').classList.add('active');
//             });
//         };
//     });
// };

(function() {
    "use strict";

    var carousels = function() {
        $(".owl-carousel1").owlCarousel({
            loop: true,
            center: true,
            margin: 0,
            responsiveClass: true,
            nav: false,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                680: {
                    items: 2,
                    nav: false,
                    loop: false
                },
                1000: {
                    items: 3,
                    nav: true
                }
            }
        });
    };

    (function($) {
        carousels();
    })(jQuery);
})();

//NAVIGATION//
// const items = document.querySelectorAll('nav ul li');

// items.forEach(item => {
//   item.addEventListener("click", function () {
//     items.forEach(a => {
//       a.classList.remove("active");
//     });
//     item.classList.add("active");
//   });
// });

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var box = $(".header-text").height();
    var header = $("header").height();

    if (scroll >= box - header) {
        $('#bottom-navbar').removeClass('display-none');
    } else {
        $('#bottom-navbar').addClass('display-none');
    }
});

/**
 * Navbar links active state on scroll
 */
$('a').click(function() {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500);
    return false;
});

var topMenu = $("nav"),
    topMenuHeight = topMenu.outerHeight() + 15,
    menuItems = topMenu.find("a"),
    scrollItems = menuItems.map(function() {
        var item = $($(this).attr("href"));
        if (item.length) {
            return item;
        }
    });

$(window).scroll(function() {
    var fromTop = $(this).scrollTop() + topMenuHeight;

    var cur = scrollItems.map(function() {
        if ($(this).offset().top < fromTop)
            return this;
    });
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";
    menuItems
        .parent().removeClass("active")
        .end().filter("[href='#" + id + "']").parent().addClass("active");
});