(function() {

    "use strict";
  
    // jQuery document ready fn
    $(function() {

        // Wow.js activation
        new WOW().init();
    
        // Use smooth scrolling when clicking on navigation

        var topoffset = 60; // Variable for menu height
  
        $(".navbar-brand a, .navbar-nav a, .btn-hire").click(function() {
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

                    } // Target.length
            } 

        }); // Smooth scrolling

        //  OwlCarousel activation and settings
        $(".owl-carousel").owlCarousel({
            loop: true,
            margin: 20,
            autoplay: true,
            autoplayTimeout: 3000,
            slideBy: 1,
            responsive: {
                //  Breakpoint from 0 up
                0: {
                    items: 1
                },
                //  Breakpoint from 576 up
                576: {
                    items: 2
                },
                //  Breakpoint from 992 up
                992: {
                    items: 3
                }
            }
        });

        // Bootstrap form validation
        // Fetch the form to apply custom Bootstrap validation style to
        var forms = document.getElementsByClassName("contact-form");

        // Loop over it and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener("submit", function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add("was-validated");
            }, false);
        });
  
    }); // jQuery document ready function

})(); // Immediately Invoked Function Expression (IIFE)