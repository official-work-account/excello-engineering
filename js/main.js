(function ($) {
  "use strict";

  $(document).ready(function () {
    // Gallery carousel
    $(".gallery-carousel").owlCarousel({
      // center: true,
      autoplay: true,
      smartSpeed: 1000,
      margin: 5,
      dots: false,
      loop: true,
      responsive: {
        0: {
          items: 1.15,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });

    // Client carousel
    $(".client-carousel").owlCarousel({
      autoplay: true,
      loop: true,
      margin: 25,
      nav: false,
      dots: false,
      responsive: {
        0: {
          items: 1.25,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 5,
        },
      },
    });

    // Dropdown on mouse hover
    function toggleNavbarMethod() {
      if ($(window).width() > 992) {
        $(".navbar .dropdown")
          .on("mouseover", function () {
            $(".dropdown-toggle", this).trigger("click");
          })
          .on("mouseout", function () {
            $(".dropdown-toggle", this).trigger("click").blur();
          });
      } else {
        $(".navbar .dropdown").off("mouseover").off("mouseout");
      }
    }
    toggleNavbarMethod();
    $(window).resize(toggleNavbarMethod);
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Date and time picker
  $("#date").datetimepicker({
    format: "L",
  });
  $("#time").datetimepicker({
    format: "LT",
  });

  // const text = serviceOptions.options[serviceOptions.selectedIndex].text;

  // Services carousel
  $(".services-carousel").owlCarousel({
    autoplay: true,
    autoplayHoverPause: true,
    smartSpeed: 1000,
    margin: 30,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      576: {
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

  // Auto update of years of experience
  var currentYear = new Date().getFullYear();
  const experience = document.getElementsByClassName("experience");
  const text = " years of experience";
  experience[0].innerHTML = currentYear - 2011 + text;
  experience[1].innerHTML = currentYear - 2011 + text;

  // Team carousel
  $(".team-carousel").owlCarousel({
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 1500,
    margin: 30,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      576: {
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

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    center: true,
    autoplay: true,
    smartSpeed: 1000,
    margin: 30,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
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

  // $(".gallery-carousel").owlCarousel({
  //   loop: true,
  //   margin: 10,
  //   nav: true,
  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //     600: {
  //       items: 3,
  //     },
  //     1000: {
  //       items: 5,
  //     },
  //   },
  // });
})(jQuery);
