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

//

var nullWidth = 0;
$(document).ready(function () {
    $(".v75").width(nullWidth + '%');
    $(".v50").width(nullWidth + '%');
    $(".v25").width(nullWidth + '%');
});

$(window).scroll(function () {
    /* Check the location of each desired element */
    $('#skillset-section').each(function (i) {

        var bottom_of_object = $(this).offset().top + (0.5 * $(this).outerHeight());
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* If the object is completely visible in the window, fade it in */
        if (bottom_of_window > bottom_of_object) {

                $(".v75").addClass("progress-bar-transistion");
                $(".v50").addClass("progress-bar-transistion");
                $(".v25").addClass("progress-bar-transistion");

                $(".v75").width('75%');
                $(".v50").width('50%');
                $(".v25").width('25%');

         }
     });
});