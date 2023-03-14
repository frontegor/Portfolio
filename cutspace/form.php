<?php




$user_email = $_GET['user_email'];
$sub = "=?utf-8?B?" . base64_encode("Текстовое сообщение") . "?=";
$headers = "From: $user_email\r\nReply-to: $user_email\r\nContent-type: text/html; charset=utf-8\r\n";


mail('jeyil95553@v3dev.com', $sub, $headers);

if (mail('jeyil95553@v3dev.com', $sub, $headers)) {
    echo "Отправлено";
} else {
    echo "Не отправлено";
}
// $user_email = htmlspecialchars($user_email);
// $user_email = urldecode($user_email);
// $user_email = trim($user_email);

// $to = "egr832409@mail.ru";
// $title = "Проверка письма";
// $message = "Салам";

// $r = mail($to, $title, $message, $user_email);


// if ($r === true) {
//     echo "Письмо отправлено";
// } else {
//     echo "Письмо не отправлено";
// }
