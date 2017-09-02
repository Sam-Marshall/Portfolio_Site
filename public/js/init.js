$(document).ready(function() {

    $('.button-collapse').sideNav({
    	closeOnClick: true
    });
    $('.toggle-close').sideNav('hide');
    $('.parallax').parallax();

    $('#send-email').on('click', function(event){
    	event.preventDefault();
    })
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


});