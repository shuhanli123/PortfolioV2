<?php

$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];

$mailheader = "From: ".$name."<".$email.">\r\n";

$to = "shuhanli2016@gmail.com";

mail("shuhanli2016@gmail.com", $subject, $message, $mailheader);

?>