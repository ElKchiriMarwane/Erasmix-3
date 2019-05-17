<?php
 header("Access-Control-Allow-Origin: *");
 $servername ="10.3.210.128";
 $user = "root";
 $password = "pass";
 $database = "loginsystem";
 $con = mysqli_connect($servername, $user, $password, $database) or die ("could not connect database");
?>
