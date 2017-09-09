$(document).ready(function() {

    $('.button-collapse').sideNav({
        closeOnClick: true
    });
    $('.toggle-close').sideNav('hide');
    $('.parallax').parallax();

    var options = {
        strings: ["Hi, I'm Stacy and I build interactive web applications from the ground up. ^1000"],
        typeSpeed: 60,
        backSpeed: 35,
        smartBackspace: true,
        fadeOut: true,
        loop: true,
        showCursor: false
    }

    var typed = new Typed(".typed", options);


    //Send Email Functionality (using npm nodemailer)
    $('#send-email').on('click', function(event) {
        event.preventDefault();
        var name = $('#contact_name').val().trim();
        var company = $('#contact_company').val().trim();
        var email = $('#contact_email').val().trim();
        var message = $('#contact_message').val().trim();
        $("#wait_message").text("Sending E-mail...Please wait");

        $.post("/sendemail", {
            from: name,
            company: company,
            email: email,
            text: message
        }, function(data) {
            if (data === "whoaThere") {
                $("#wait_message").empty().html("Your email has been sent. Thank you for your interest!");
                clearMessage();
            } else {
                $("#wait_message").text("Email not sent!");
                clearMessage();
            }
        });

        $("#contact_name").val("");
        $("#contact_company").val("");
        $("#contact_email").val("");
        $("#contact_message").val("");

    });

    //Smooth Scrolling Functionality
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') ||
            location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 100
                }, 1000);
                return false;
            }
        }
    });

    //Highlight menu option upon scroll
    $(window).scroll(function() {
        var position = $(this).scrollTop();

        $('.section').each(function() {
            var target = $(this).offset().top - 120;
            var id = $(this).attr('id');

            if (position >= target) {
                $('#navigation > ul > li > a').removeClass('active');
                $('#navigation > ul > li > a[href=#' + id + ']').addClass('active');
            }
        });
    });

    function clearMessage() {
        setTimeout(confirm, 3000);
    };

    function confirm() {
        $("#wait_message").fadeOut("slow");
    };

});