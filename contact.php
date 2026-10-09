<?php

function redirectWithStatus(string $status): void
{
    header('Location: contact.html?status=' . rawurlencode($status), true, 303);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    redirectWithStatus('failed');
}

$name = $_POST['name'] ?? null;
$email = $_POST['email'] ?? null;
$message = $_POST['message'] ?? null;

if (!is_string($name) || !is_string($email) || !is_string($message)) {
    redirectWithStatus('invalid');
}

$name = trim($name);
$email = trim($email);
$message = trim($message);

if (
    $name === ''
    || strlen($name) > 200
    || filter_var($email, FILTER_VALIDATE_EMAIL) === false
    || strlen($email) > 254
    || $message === ''
    || strlen($message) > 10000
) {
    redirectWithStatus('invalid');
}

$recipient = 'contact@justinz.me';
$subject = 'New contact form message';
$body = "Name: {$name}\nEmail: {$email}\n\n{$message}";
$headers = [
    'From: Justinz.me Contact Form <contact@justinz.me>',
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=UTF-8'
];

if (!mail($recipient, $subject, $body, implode("\r\n", $headers))) {
    error_log('Contact form email could not be submitted.');
    redirectWithStatus('failed');
}

redirectWithStatus('sent');
