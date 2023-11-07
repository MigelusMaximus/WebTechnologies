<?php
    $servername = "localhost";
    $username = "kurak";
    $password = "Tis2023*58631";
    $database = "kurak";

    try {
        $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        if(isset($_GET) && isset($_GET["term"]) && strlen($_GET["term"])) {
            $result = $conn->prepare("SELECT name AS value, id FROM manufacturer WHERE name LIKE ?");
            $result->execute(array("%" . htmlspecialchars($_GET["term"]) . "%"));

        }

        else {
            $result = $conn->query("SELECT name AS value, id FROM manufacturer");
        }

        $data = $result->fetchAll(PDO::FETCH_ASSOC);
        echo(json_encode($data));
    } 

    catch(PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }

?>
