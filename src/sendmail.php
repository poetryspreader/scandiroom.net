<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php'
require 'phpmailer/src/PHPMailer.php'

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language');
$mail->IsHTML(true);

// * от кого письмо
$mail->setFrom("info@fls.guru", "Фрилансер по жизни");
// * кому отправить 
$mail->addAddress('code@fls.guru');
// * тема письма
$mail->Subject = 'Письмо! Это "Фрилансер по жизни"';

// * Рука
$hand = "Правая";
if($_POST['hand'] == 'left'){
    $hand = "Левая";
}

// * Тело письма 
$


?>