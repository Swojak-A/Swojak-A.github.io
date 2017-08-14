$(document).ready(function () {
    $(".number").each( function() {
        var thisDiv = $(this);
        var percent = $(thisDiv).text().replace("%","");
        console.log("test " + percent);

        function countToPercent(percent) {
            var interval = setInterval(counter,25);
            var n = 0;
            function counter() {
                if (n >= percent) {
                    clearInterval(interval);
                }
                else {
                    n += 1;
                    console.log(n);
                    $(thisDiv).text(n + "%");
                }
            }
        }

        countToPercent(percent);
})
});

