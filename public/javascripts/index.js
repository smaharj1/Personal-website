$(document).ready(function() {

    // This controls the hover for travel timeline
    $('#travelTimeline img').hover(function() {
            $(this).removeClass("desaturate").animate({
                zoom: '120%'
            }, "fast");
        },
        function() {
            $(this).addClass("desaturate").animate({
                zoom: '100%'
            }, "fast");
        });

    $('#experience tr').on('click', function() {
        var jobDetail = $(this).find('.display-option');
        jobDetail.toggle('fast');

        var logoDisplay = $(this).find('.logo-display');
        logoDisplay.toggle();
    });

    $('#extracurricular td').on('click', function() {
        var jobDetail = $(this).find('.display-option');
        jobDetail.toggle('fast');

        var logoDisplay = $(this).find('.logo-display');
        logoDisplay.toggle();
    });

    $('#skills li span').hover(function() {
        var isHigh = $(this).hasClass('high');
        var isMedium = $(this).hasClass('medium');

        // If the skill is high, then turn the background to green and put the width to 100%
        if (isHigh) {
            $(this).addClass('skill-high').animate({
                width: '100%'
            }, 'slow')
        } else if (isMedium) {
            $(this).addClass('skill-medium').animate({
                width: '50%'
            }, "slow");
        } else {
            $(this).addClass('skill-low').animate({
                width: '30%'
            }, "slow");
        }
    });

    $('#inputImage').bind('change', function() {
        alert("ok");
        var mainFile = this;
        $.ajax({
            type: 'POST',
            url: "/processImage",
            data: {
                inputFile: mainFile
            },
            dataType: 'json',
            success: function(data) {
                console.log('success', data);

            },
            error: function(exception) {
                alert('Exeption:' + exception);
            }
        });
        e.preventDefault();
    });

    $('.contacts').on('click', function() {
        window.open($(this).data("href"));
    });





});