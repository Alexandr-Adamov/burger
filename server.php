
<?php

$name = $_POST['user-name'];
$phone = $_POST['user-phone'];
$street = $_POST['user-street'];
$house = $_POST['user-house'];
$building = $_POST['house-building'];
$apartment = $_POST['user-apartment'];
$floor = $_POST['floor'];
$comments = $_POST['comments'];
$pay = $_POST['pay'];
$disturb = $_POST['dont-disturb'];
$disturb = isset($disturb) ? 'НЕТ' : 'ДА';

$mail_message = '
<html>
<head>
<title>Заявка</title>
</head>
<body>
<h2>Заказ</h2>
<ul>
<li>Имя - '. $name .'</li>
<li>Телефон - ' . $phone . '</li>
<li>Улица - ' .$street.'</li>
<li>Дом - ' .$house.' </li>
<li>Корпус - ' .$building.' </li>
<li>Квартира -  ' .$apartment.'</li>
<li>Этаж - ' .$floor.' </li>
<li>Коментарии к заказу - ' .$comments.'</li>
<li>Способ оплаты -  ' .$pay.' </li>
<li>Нужно ли перезванивать клиенту - ' .$disturb.' </li>
</ul>
</body>
</html>';



$headers = "From:Администрации \r\n".
"MIME-Version:1.0". "\r\n".
"Content-type:text/html; charset=UTF-8" . "\r\n";


$mail = mail(', 'Заказ', $mail_message, $headers);
if($mail) {
    echo 'done';
}else{
    echo 'erorr';
    }
    
?>

