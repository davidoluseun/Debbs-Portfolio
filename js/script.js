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

                    } //target.length
            } 

        }); //smooth scrolling

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