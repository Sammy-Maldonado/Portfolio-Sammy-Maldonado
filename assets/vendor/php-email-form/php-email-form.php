<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verificar que los campos requeridos estén presentes
    if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['subject']) && isset($_POST['message'])) {
        // Obtener los datos del formulario y hacer algunas comprobaciones
        $name = trim($_POST['name']);
        $email = trim($_POST['email']);
        $subject = trim($_POST['subject']);
        $message = trim($_POST['message']);

        if (!empty($name) && !empty($email) && !empty($subject) && !empty($message)) {
            // Todos los campos requeridos están presentes y no están vacíos
            // Procesar los datos y enviar el correo electrónico
            $to = 'sammyalejandro.m.p@gmail.com';
            $headers = 'From: ' . $name . ' <' . $email . '>' . "\r\n" . 'Reply-To: ' . $email . "\r\n";

            $success = mail($to, $subject, $message, $headers);

            if ($success) {
                echo 'Your message has been sent.';
            } else {
                echo 'There was a problem sending your message. Please try again.';
            }
        } else {
            echo 'Please fill in all required fields.';
        }
    } else {
        echo 'Please fill in all required fields.';
    }
} else {
    header('Allow: POST');
    header('HTTP/1.1 405 Method Not Allowed');
    header('Content-Type: text/plain');
    echo 'Method Not Allowed - Please use the POST method to submit data.';
}
?>