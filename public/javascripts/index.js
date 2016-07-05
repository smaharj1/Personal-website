$(document).ready(function () {
    
    // This controls the hover for travel timeline
    $('#travelTimeline img').hover(function() {
        $(this).removeClass("desaturate").animate({zoom: '120%'}, "slow");
    },
        function () {
        $(this).addClass("desaturate").animate({zoom: '100%'}, "slow");
    });
});