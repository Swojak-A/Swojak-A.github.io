// sidenav open

$(document).ready(function () {
    $("#navbar-opener").click(function() {
        $("#sidebar").addClass("sidebar-active");
        console.log("navbar-opener success");
    });
});



// hidden elements - opacity from 0 to 1

$(document).ready(function () {
    $(".hideme").css({ opacity: 0 });
});

$(window).scroll(function () {
    /* Check the location of each desired element */
    $('.hideme').each(function (i) {

        var bottom_of_object = $(this).offset().top + (0.25 * $(this).outerHeight());
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* If the object is completely visible in the window, fade it in */
        if (bottom_of_window > bottom_of_object) {

            $(this).animate({
                'opacity': '1'
            }, 1000);

         }
     });
});

// progress bars animations

var nullWidth = 0;
$(document).ready(function () {
    $(".v75").width(nullWidth + '%');
    $(".v50").width(nullWidth + '%');
    $(".v25").width(nullWidth + '%');
    $(".value").css({ "color": "white" });
});
var valueProgressBarAnimated = false;

$(window).scroll(function () {
    /* Check the location of each desired element */
    $('#skillset-section').each(function (i) {

        var bottom_of_object = $(this).offset().top + (0.25 * $(this).outerHeight());
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* If the object is completely visible in the window, fade it in */
        if (bottom_of_window > bottom_of_object) {

                $(".v75").addClass("progress-bar-transistion");
                $(".v50").addClass("progress-bar-transistion");
                $(".v25").addClass("progress-bar-transistion");

                $(".v75").width('75%');
                $(".v50").width('50%');
                $(".v25").width('25%');

                // if ( valueProgressBarAnimated == false) {
                //     $(".value").css({ "color": "black" });
                //     }

                setTimeout(function(){
                    $(".value").css({ "color": "black" });
                    if ( valueProgressBarAnimated == false) {
                        $(".value").animate({
                            'opacity': '1'
                        }, 1000);
                        $(".value").each( function() {
                            var thisDiv = $(this);
                            var percent = $(thisDiv).text().replace("%","");
                            // console.log("test " + percent);

                            function countToPercent(percent) {
                                var interval = setInterval(counter,25);
                                var n = 0;
                                function counter() {
                                    if (n >= percent) {
                                        clearInterval(interval);
                                        valueProgressBarAnimated = true;
                                    }
                                    else {
                                        n += 1;
                                        // console.log(n);
                                        $(thisDiv).text(n + "%");
                                    }
                                }
                            }

                            countToPercent(percent);
                        });
                    }
                }, 2000);

         }
     });
});