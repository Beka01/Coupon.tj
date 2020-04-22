<?php 

$name = $_POST['name'];
$phone = $_POST['phone'];
// $email = $_POST['email'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'ulugbek.tj';                 // Наш логин
$mail->Password = '657465Life';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('ulugbek.tj@gmail.com', 'Coupon.tj');   // От кого письмо 
$mail->addAddress('fordocs.tj@gmail.com');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Клиент для консультации';
$mail->Body    = '
		Заказан звонок для консультации <br> 
	Имя: ' . $name . ' <br>
	Номер телефона: ' . $phone .'';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>