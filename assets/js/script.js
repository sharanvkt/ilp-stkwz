    

    // Countdown timer
    var countdownElement = document.getElementById('countdown');
    var countdownTime = 5 * 60 * 60 ; // Initial countdown time in seconds

    function updateCountdown() {
        var hours = Math.floor(countdownTime / 3600);
        var minutes = Math.floor((countdownTime % 3600) / 60);
        var seconds = countdownTime % 60;

        // Format the time and update the countdown element
        countdownElement.textContent = hours.toString().padStart(2, '0') + " : " + minutes.toString().padStart(2, '0') + " : " + seconds.toString().padStart(2, '0');

        // Decrease the countdown time by 1 second
        countdownTime--;

        // If countdown reaches zero, stop the countdown
        if (countdownTime < 0) {
            clearInterval(countdownInterval);
            countdownElement.textContent = "00 : 00 : 00";
        }
    }

    // Update countdown every second
    var countdownInterval = setInterval(updateCountdown, 1000);

    // Initial update to avoid 1 second delay
    updateCountdown();

 


 
    // Countdown timer
    var countdownsBox = document.getElementById('time');
    var countdownAdd = 5 * 60; // Initial countdown time in seconds

    function updateCountdownstime() {
        var minutes = Math.floor(countdownAdd / 60);
        var seconds = countdownAdd % 60;

        // Format the time and update the countdown element
        countdownsBox.textContent = minutes.toString().padStart(2, '0') + " : " + seconds.toString().padStart(2, '0');

        // Decrease the countdown time by 1 second
        countdownAdd--;

        // If countdown reaches zero, stop the countdown
        if (countdownAdd < 0) {
            clearInterval(countdownInterval);
            countdownsBox.textContent = "00:00";
        }
    }


    // Update countdown every second
    var countdownInterval = setInterval(updateCountdownstime, 1000);

    // Initial update to avoid 1 second delay
    updateCountdownstime();




// Countdown timer
var countdownsElement = document.getElementById('time_ticking');
var messageDiv = document.getElementById('message'); // Get the message div
var timetickWrapDiv = document.querySelector('.timetick_wrap'); // Get the timetick_wrap div
var countdownTimes = 5 * 60; // Initial countdown time in seconds

function updateCountdowns() {
    var minutes = Math.floor(countdownTimes / 60);
    var seconds = countdownTimes % 60;

    // Format the time and update the countdown element
    countdownsElement.textContent = minutes.toString().padStart(2, '0') + " : " + seconds.toString().padStart(2, '0');

    // Decrease the countdown time by 1 second
    countdownTimes--;

    // If countdown reaches zero, stop the countdown and show the message
    if (countdownTimes < 0) {
        clearInterval(countdownInterval);
        countdownsElement.textContent = "00 : 00";
        messageDiv.style.display = 'block'; // Show the message div
        timetickWrapDiv.style.display = 'none'; // Hide the timetick_wrap div
    }
}

// Update countdown every second
var countdownInterval = setInterval(updateCountdowns, 1000);

// Initial update to avoid 1 second delay
updateCountdowns();





 //trading career section  
 var swiper = new Swiper('.sliders', {
  slidesPerView: 4,
  centeredSlides: true,
  loop: true,
  spaceBetween: 0,
  grabCursor: true,
  parallax: true,
  autoplay: {
    delay: 5000,
  },
  speed: 300, 
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
     clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    
    768: {
      slidesPerView: 2,
      spaceBetween: 10
    },
   
     992: {
      slidesPerView: 4,
      spaceBetween: 10
    } 
  }
});



$(document).ready(function() {
    const textes = $(".resp-animate span");
    const textCounts = textes.length;
    let indexs = 0;
    const textInTimers = 3000;
    const textOutTimers = 2800;

    function animateTexts() {
        textes.removeClass("text-ins text-outs");
        textes.eq(indexs).addClass("text-ins");
         setTimeout(function() {
            textes.eq(indexs).addClass("text-outs");
        }, textOutTimers);


        setTimeout(function() {
            indexs = (indexs + 1) % textCounts;
            animateTexts();
        }, textInTimers);
    }

    animateTexts();
});


$(document).ready(function() {
    const textes = $(".animate-text span");
    const textCounts = textes.length;
    let indexs = 0;
    const textInTimers = 3000;
    const textOutTimers = 2800;

    function animateTexts() {
        textes.removeClass("text-ins text-outs");
        textes.eq(indexs).addClass("text-ins");
        setTimeout(function() {
            textes.eq(indexs).addClass("text-outs");
        }, textOutTimers);

        setTimeout(function() {
            indexs = (indexs + 1) % textCounts;
            animateTexts();
        }, textInTimers);
    }

    animateTexts();
});

 

//this mobile menu and page scroll stop
    $(document).ready(function() {

        $('.hamburger').click(() => {
            $('body').toggleClass('overflow-hidden');
            $('.menu').toggleClass('nav-open');
            $('.hamburger').toggleClass('nav-open');
            console.log($('.menu').hasClass('nav-open'));
            if ($('.menu').hasClass('nav-open')) {
                $('#sports, #sports-sub').addClass('active');

            } else {
                $('.active').removeClass('active');

                // window.addEventListener('load', navigateToSection());
            }
        });
        if (!$('.menu').hasClass('nav-open')) {
            console.log('called condition');
            window.addEventListener('load', navigateToSection());
        }
    });
  


$('.testi_wrap').slick({
    centerPadding: '0',
    dots: false,
    infinite:false,
    arrows: true,
    // autoplay: true,
    autoplaySpeed: 5000, 
    speed: 500, 
    slidesToShow: 3, 
    centerMode: true,
    centeredSlides: true,
  initialSlide: 1,
    prevArrow: "<button type='button' class='slick-prev pull-left'><img src='assets/images/feedback/left-arrow.png' alt='left-arrow'></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><img src='assets/images/feedback/right-arrow.png' alt='right-arrow'></button>",
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
            centerMode: false,
        }
    }, {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
        }
    }]
});



//AOS animation disble 
window.addEventListener('load', function() {
    AOS.init({
        disable: function() {
            var maxWidth = 992;
            return window.innerWidth < maxWidth;
        }
    });
});  