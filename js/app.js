$(document).ready(function () {
  preloaderFadeOutTime = 500;
  function hidePreloader() {
    var preloader = $(".spinner-wrapper");
    preloader.fadeOut(preloaderFadeOutTime);
  }
  hidePreloader();
  /*COUNTER UP PLUGIN*/
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });
  $(".over_counter").counterUp({
    delay: 10,
    time: 500,
  });
  /*COUNTER UP PLUGIN*/

  $(".pop_video").magnificPopup({ type: "iframe" });

  /*SECTION SCROLL*/
  $('a.section-scroll[href*="#"]:not([href="#"])').on(
    "click",
    function (event) {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") ||
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");

        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html,body").animate(
            {
              scrollTop: target.offset().top,
            },
            750
          );
          return false;
        }
      }
    }
  );
  /*SECTION SCROLL*/

  /*ONE PAGE NAV*/
  $("#main_nav").onePageNav({
    currentClass: "active",
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: "",
    easing: "swing",
  });

  /*ONE PAGE NAV*/

  /*FIXED NAVBAR*/
  $(window).scroll(function () {
    var navFixed = $(window).scrollTop();
    if (navFixed > 200) {
      $(".main-nav")
        .removeClass("py-30")
        .addClass(
          "fixed-top py-15 bg-white nav-border animated fadeInDown faster"
        );
      $(".hero_cont").addClass("mt-120");
    } else {
      $(".main-nav")
        .removeClass(
          "fixed-top py-15 bg-white nav-border animated fadeInDown faster"
        )
        .addClass("py-30");
      $(".hero_cont").removeClass("mt-120");
    }
  });

  /*FIXED NAVBAR*/

  /*TYPE IT JS*/
  new TypeIt(".type-text", {
    strings: ["Web Designer", "WP Expert", "Web Developer"],
    startDelay: 700,
    loop: true,
    breakLines: false,
    cursor: true,
    speed: 150,
    lifeLike: true,
    waitUntilVisible: true,
  }).go();

  /*TYPE IT JS*/

  /*Go Top Button*/
  $(".go_top").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1500
    );
  });

  $(".go_top").hide();

  $(window).scroll(function () {
    var ourwindow = $(this).scrollTop();
    if (ourwindow < 500) {
      $(".go_top").fadeOut();
    } else {
      $(".go_top").fadeIn();
    }
  });
  /*Go Top Button*/

  /*MIXIT UP PLUGIN*/
  var containerEl = document.querySelector(".mix_container");
  var mixer = mixitup(containerEl, {
    selectors: {
      control: "[our-mixitup-control]",
    },
  });
  /*MIXIT UP PLUGIN*/

  /*OWL CAROUSEL*/
  $(".all_clients").owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
    },
  });

  /*Pricing Section*/
  $(".btn_cust").click(function () {
    $(this).addClass("active");
    $(this).siblings(".active").removeClass("active");
  });

  $(".wpc").on("click", function () {
    $("#wp").show().addClass("animated slideInLeft");
    $("#wp").siblings().hide();
  });

  $(".htc").on("click", function () {
    $("#ht").show().addClass("animated slideInUp");
    $("#ht").siblings().hide();
  });

  $(".tdc").on("click", function () {
    $("#td").show().addClass("animated slideInRight");
    $("#td").siblings().hide();
  });

  /*====================SIDEBAR NAV======================*/
  var side_nav = document.getElementById("side_nav");
  var bar_open = document.querySelector("#bar_open");
  var bar_close = document.querySelector("#bar_close");

  bar_open.addEventListener("click", () => {
    side_nav.classList.add("active");
    bar_open.style.display = "none";
    bar_close.style.display = "block";
    bar_close.classList.add("animated", "fadeIn");
  });

  bar_close.addEventListener("click", () => {
    side_nav.classList.remove("active");
    bar_open.style.display = "block";
    bar_open.classList.add("animated", "fadeIn");
    bar_close.style.display = "none";
  });
});
