<?php
ob_start();
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    $from = 'From: victorfateh.com'; 
    $to = 'victor@victorfateh.com'; 
    $subject = 'victorfateh.com - Contact Form';

    $body = "From: $name\n E-Mail: $email\n Phone: $phone\n \n Message:\n $message";
?>

<?php
if ($_POST['submit']) {
    if (mail ($to, $subject, $body, $from)) { 
      header( 'Location: https://www.victorfateh.com' ) ;
  }
}
?>