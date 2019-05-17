<?php
session_start();
include 'db.php';
$username = $_POST['username'];
$sql= "SELECT * FROM users WHERE username= $username";

$result = mysqli_query($con, $sql);


if(mysqli_num_rows($result) > 0){
	while($row = mysqli_fetch_assoc($result)){
		$id = $row['id'];
		$email = $row['email'];
		$user_name = $row['username'];
    	$firstname = $row['firstname'];
    	$lastname = $row['lastname'];
 		$_SESSION['id'] = $id;
 		$_SESSION['email'] = $email;
 		$_SESSION['user_name'] = $user_name;
	}

	echo '$firstname, $lastname';

}else{
	echo "error";
}

mysqli_close($con);


 ?>
