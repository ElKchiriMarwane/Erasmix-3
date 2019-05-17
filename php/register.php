<?php
session_start();
 include "db.php";
 if(isset($_POST['insert']))
 {

   $firstname = $_POST['firstname'];
   $lastname = $_POST['lastname'];
   $username = $_POST['username'];
   $email = $_POST['email'];
   $password = $_POST['password'];
	 $_SESSION['firstname'] = $firstname;
	 $_SESSION['lastname'] = $lastname;
 $q=mysqli_query($con,"INSERT INTO users ( username, email, password, firstname, lastname) VALUES ('$username', '$email', '$password', '$firstname', '$lastname')");
 if($q){
  echo "success";
}else{
  echo "error";
 }


}
 ?>
