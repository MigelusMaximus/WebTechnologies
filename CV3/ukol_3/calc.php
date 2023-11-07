<?php 

if(isset($_POST) && $_POST) {
    if(
        isset($_POST["a"]) && is_numeric($_POST["a"]) &&
        isset($_POST["operator"]) && $_POST["operator"] &&
        isset($_POST["b"]) && is_numeric($_POST["b"])
    ) {
        switch ($_POST["operator"]) {
            case "+": 
                $result = $_POST["a"] + $_POST["b"];
                break;

            case "-": 
                $result = $_POST["a"] - $_POST["b"];
                break;

            case "*": 
                $result = $_POST["a"] * $_POST["b"];
                break;

            case "/": 
                $result = $_POST["a"] / $_POST["b"];
                break;

            default:
                echo("Neplatny operator !");
                exit();
                break;
        }

        echo($_POST["a"] . " " . $_POST["operator"] . " " . $_POST["b"] . " = " . $result);
    }

    else {
        echo("Nie su zadane vsetky hodnoty !");
    }
}

else {
    echo("ERROR");
}