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
        // Fetch the form to apply custom Bootstrap validation style
        var forms = document.getElementsByClassName("contact-form");

        // Loop over it and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener("submit", function(event) {
                event.preventDefault();
                event.stopPropagation();
                
                if (form.checkValidity() === true) {
                    sendMail();
                }

                form.classList.add("was-validated");
            }, false);
        });

        function sendMail() {
            var $fullname = $("#fullname").val();
            var $email = $("#email").val();
            var $subject = $("#message-subject").val();
            var $message = $("#message-body").val();

            // For success/failure feedback
            var $firstname = $fullname;
  
            // Check for white space in name for success/fail feedback
            if ($firstname.indexOf(" ") >= 0) {
                // Assign the firstname to variable $firstname
                $firstname = $fullname.split(" ").shift();
            }

            // Disable send button until AJAX call is completed to prevent duplicate messages
            var $sendBtn = $("#btn-send");
            $sendBtn.prop("disabled", true).text("Sending...");

            $.ajax({
                url: "mail/contact.php",
                type: "POST",
                data: {
                    fullname: $fullname,
                    email: $email,
                    subject: $subject,
                    message: $message
                },
                cache: false,
                success: successFn,
                error: errorFn,
                complete: completeFn
            });

            function successFn(response) {
                if (response == "Required") {
                    swal({
                        title: "Hi",
                        text: "Your Fullname, valid email address and message are required!",
                        icon: "warning",
                        button: "Close"
                    });
                }

                if (response == "Sent") {
                    swal({
                        title: "Hi " + $firstname,
                        text: "Your message was sent successfully",
                        icon: "success",
                        button: "Close"
                    });

                    // Grab .contact-form, clear all fields and remove was-validated class when is sent successfully
                    var $contactForm =  $(".contact-form");
                    $contactForm.trigger("reset");
                    $contactForm.removeClass("was-validated");
                }

            }

            function errorFn() {
                // Error feedback
                swal({
                    title: "Hi " + $firstname,
                    text: "It seems that my server is not responding. Please try again later!",
                    icon: "error",
                    button: "Close"
                });
            }

            function completeFn() {
                // Re-enable submit button when AJAX call is completed
                setTimeout(function() {
                    $sendBtn.prop("disabled", false).text("Send");
                }, 1500);
            }
        }
  
  
    }); // jQuery document ready function

})(); // Immediately Invoked Function Expression (IIFE)