<?php
// Перевірка, чи були передані дані методом POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Отримання даних від клієнта
    $name = $_POST["name"];
    $report = $_POST["report"];

    // При необхідності виконайте обробку та збереження даних у базі даних
    // Наприклад, підключіться до бази даних та виконайте запит INSERT

    // Підключення до бази даних
    $servername = "localhost";
    $username = "username";
    $password = "password";
    $dbname = "dbname";

    $conn = new mysqli($servername, $username, $password, $dbname);

    // Перевірка підключення
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Підготовка та виконання запиту INSERT
    $stmt = $conn->prepare("INSERT INTO reports (name, report) VALUES (?, ?)");
    $stmt->bind_param("ss", $name, $report);
    $stmt->execute();

    // Закриття з'єднання з баз
$stmt->close();
$conn->close();
// Відправлення успішної відповіді клієнту
http_response_code(200);
echo json_encode(array("message" => "Дані успішно збережено"));

Будь ласка, замініть значення змінних `$servername`, `$username`, `$password` та `$dbname` на свої дані для підключення до бази даних. Також не забудьте виконати необхідну обробку даних та забезпечити безпеку запитів до бази даних.
