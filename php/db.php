<?php
 header("Access-Control-Allow-Origin: *");
 $servername ="10.3.210.44";
 $username = "root";
 $password = "";
 $database = "loginsystem";
 $con = mysqli_connect($servername, $username, $password, $database) or die ("could not connect database");
?>
