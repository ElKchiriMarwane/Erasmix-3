<?php
 header("Access-Control-Allow-Origin: *");
 $servername ="localhost";
 $username = "root";
 $password = "";
 $database = "loginsystem";
 $con = mysqli_connect($servername, $username, $password, $database) or die ("could not connect database");
?>
