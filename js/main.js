(function ($) {


    /*---------------------
     event-slider-active
    --------------------- */
    $(".event-slider-active").owlCarousel({
        autoPlay: 5000, //Set AutoPlay to 5 seconds
        items: 1,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [979, 1]
    });
    /*---------------------
     test-slider-active
    --------------------- */
    $(".test-slider-active").owlCarousel({
        autoPlay: false,
        items: 1,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [979, 1],
        singleItem: true,
        transitionStyle: "backSlide"
    });
    /*---------------------
     countdown js
    --------------------- */
    // var leftSecond = (new Date("May 13, 2018 09:00:00")).getTime();
    $('#countdown1').ClassyCountdown({
        theme: "white",
        now: $.now() / 1000,
        end: (new Date("May 17, 2018 08:00:00")).getTime() / 1000,
        labels: true,
        style: {
            element: "",
            textResponsive: .5,
            days: {
                gauge: {
                    thickness: .03,
                    bgColor: "rgba(255,255,255,0.07)",
                    fgColor: "#ff9900"
                },
                textCSS: 'font-family:\'Roboto Slab\'; font-size:25px; font-weight:300; color:#fff;'
            },
            hours: {
                gauge: {
                    thickness: .04,
                    bgColor: "rgba(255,255,255,0.07)",
                    fgColor: "#ff9900"
                },
                textCSS: 'font-family:\'Roboto Slab\'; font-size:25px; font-weight:300; color:#fff;'
            },
            minutes: {
                gauge: {
                    thickness: .03,
                    bgColor: "rgba(255,255,255,0.07)",
                    fgColor: "#ff9900"
                },
                textCSS: 'font-family:\'Roboto Slab\'; font-size:25px; font-weight:300; color:#fff;'
            },
            seconds: {
                gauge: {
                    thickness: .03,
                    bgColor: "rgba(255,255,255,0.07)",
                    fgColor: "#ff9900"
                },
                textCSS: 'font-family:\'Roboto Slab\'; font-size:25px; font-weight:300; color:#fff;'
            }

        },
        onEndCallback: function () {
            console.log("Time out!");
        }
    });
    /*---------------------
	 countdown js
	--------------------- */
    $(window).scroll(function () {
        var to = $(window).scrollTop();
        if (to > 30) {
            $('#bottom').fadeIn();
        } else {
            $('#bottom').fadeOut();
        }
    });
    $('#bottom').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });



})(jQuery);
