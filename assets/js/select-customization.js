$(window).on("load", function () {
  var t = document.getElementById("countdown"),
    e = 18e3;
  function o() {
    var o = Math.floor(e / 3600),
      n = Math.floor((e % 3600) / 60),
      s = e % 60;
    (t.textContent =
      o.toString().padStart(2, "0") +
      " : " +
      n.toString().padStart(2, "0") +
      " : " +
      s.toString().padStart(2, "0")),
      --e < 0 && (clearInterval(a), (t.textContent = "00 : 00 : 00"));
  }
  var a = setInterval(o, 1e3);
  o();
  var n = document.getElementById("time"),
    s = 300;
  function r() {
    var t = Math.floor(s / 60),
      e = s % 60;
    (n.textContent =
      t.toString().padStart(2, "0") + " : " + e.toString().padStart(2, "0")),
      --s < 0 && (clearInterval(a), (n.textContent = "00:00"));
  }
  var a = setInterval(r, 1e3);
  r();
  var l = document.getElementById("time_ticking"),
    i = document.getElementById("message"),
    d = document.querySelector(".timetick_wrap"),
    p = 300;
  function u() {
    var t = Math.floor(p / 60),
      e = p % 60;
    (l.textContent =
      t.toString().padStart(2, "0") + " : " + e.toString().padStart(2, "0")),
      --p < 0 &&
        (clearInterval(a),
        (l.textContent = "00 : 00"),
        (i.style.display = "block"),
        (d.style.display = "none"));
  }
  var a = setInterval(u, 1e3);
  u(),
    new Swiper(".slider", {
      effect: "fade",
      speed: 1200,
      autoplay: !0,
      loop: !0,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    }),
    $(document).ready(function () {
      let t = $(".resp-animate span"),
        e = t.length,
        o = 0;
      !(function a() {
        t.removeClass("text-ins text-outs"),
          t.eq(o).addClass("text-ins"),
          setTimeout(function () {
            t.eq(o).addClass("text-outs");
          }, 2800),
          setTimeout(function () {
            (o = (o + 1) % e), a();
          }, 3e3);
      })();
    }),
    $(document).ready(function () {
      let t = $(".animate-text span"),
        e = t.length,
        o = 0;
      !(function a() {
        t.removeClass("text-ins text-outs"),
          t.eq(o).addClass("text-ins"),
          setTimeout(function () {
            t.eq(o).addClass("text-outs");
          }, 2800),
          setTimeout(function () {
            (o = (o + 1) % e), a();
          }, 3e3);
      })();
    }),
    $(document).ready(function () {
      $(".hamburger").click(() => {
        $("body").toggleClass("overflow-hidden"),
          $(".menu").toggleClass("nav-open"),
          $(".hamburger").toggleClass("nav-open"),
          console.log($(".menu").hasClass("nav-open")),
          $(".menu").hasClass("nav-open")
            ? $("#sports, #sports-sub").addClass("active")
            : $(".active").removeClass("active");
      }),
        $(".menu").hasClass("nav-open") ||
          (console.log("called condition"),
          window.addEventListener(
            "load",
            void setTimeout(function () {
              if (!$(".menu").hasClass("nav-open")) {
                var t = document.getElementById("master_art_sec");
                if (t) {
                  e = window.matchMedia("(max-width: 768px)").matches
                    ? 0
                    : window.matchMedia("(max-width: 1024px)").matches
                    ? 100
                    : 300;
                  var e,
                    o = t.getBoundingClientRect().top + window.pageYOffset + e;
                  window.scrollTo({ top: o, behavior: "smooth" });
                }
              }
            }, 5e3)
          ));
    }),
    $(".monster_wrap").slick({
      loop: !0,
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: !0,
      dots: !1,
      autoplaySpeed: 5e3,
      speed: 3e3,
      pauseOnHover: !1,
      pauseOnFocus: !1,
      infinite: !0,
      autoplay: !0,
      prevArrow:
        "<button type='button' class='slick-prev pull-left'><img src='assets/images/arrow/left_arrow.svg' ></button>",
      nextArrow:
        "<button type='button' class='slick-next pull-right'><img src='assets/images/arrow/right_arrow.svg' ></button>",
      responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: !1,
            dots: !0,
          },
        },
        {
          breakpoint: 577,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: !1,
            dots: !0,
          },
        },
      ],
    });
}),
  $(".res_af_img").slick({
    autoplay: !0,
    autoplaySpeed: 5e3,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: !0,
    arrows: !1,
    fade: !0,
  }),
  setTimeout(function () {
    new Vimeo.Player("player-container", {
      id: 816184115,
      autoplay: !0,
      loop: !0,
      title: !1,
      byline: !1,
      portrait: !1,
      muted: !0,
    });
  }, 6e3);
