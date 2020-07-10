(function() {

    "use strict";
  
    // jQuery document ready fn
    $(function() {

        // Wow.js activation
        new WOW().init();
    
        // Use smooth scrolling when clicking on navigation

        var topoffset = 54; //variable for menu height
  
        $(".navbar-brand a, .navbar-nav a").click(function() {
            if (location.pathname.replace(/^\//,"") ===
                this.pathname.replace(/^\//,"") &&
                location.hostname === this.hostname) {

                    var target = $(this.hash);
                    target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");

                    if (target.length) {
                        $("html, body").animate({
                            scrollTop: target.offset().top - topoffset
                        }, 500);
                        return false;

                    } //target.length

            } //click function

        }); //smooth scrolling
  
    }); // jQuery document ready function

})(); // Immediately Invoked Function Expression (IIFE)