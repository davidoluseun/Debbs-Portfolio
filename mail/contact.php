<?php

    // Get user's inputs
    $fullname = $_POST["fullname"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // if inputs are empty or email not valid
    if (empty($fullname) || empty($email) || 
        empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {

        // Output "Required" and terminate the script   
        exit("Required");
    }

    // Convert some HTML tags in inputs to HTML Entities
    $fullname = htmlspecialchars($fullname);
    $email = htmlspecialchars($email);
    $subject = htmlspecialchars($subject);
    $message = htmlspecialchars($message);

    // Declare mail parameters
    $to = "o.d.anifowose@gmail.com"; 
    $email_subject = "New Entry: Debbs Portfolio Website.";
    $email_body = "Name:" . "\n" . $fullname . "\n\n" . "Email:" . "\n" . $email . "\n\n";
    $email_body .= "Subject:" . "\n" . $subject . "\n\n" . "Message:" . "\n" . $message;

    // use wordwrap() if lines are longer than 70 characters
    $email_body = wordwrap($email_body, 70)
    $headers = "From: debbs@portfolio.com" . "\n" . "Reply-To: " . $email; 

    // Send mail
    mail($to, $email_subject, $email_body, $headers);

    // Output "Sent" and terminate the script after sending mail
    exit("Sent")
       
?>