<?php

include 'db.php';

$username = $_POST['username'];
$password = $_POST['password'];

$sql = "SELECT * FROM users WHERE username='$username' AND password='$password'";

$result = mysqli_query($con, $sql);


if(mysqli_num_rows($result) > 0){
	while($row = mysqli_fetch_assoc($result)){
		$id = $row['id'];
		$email = $row['email'];
		session_start();
		$_SESSION['id'] = $id;
		$_SESSION['email'] = $email;

	}
	$_SESSION['username'] = $username;
	echo 'success';
	// header("Location: profile.php");
}else{
	echo "error";
}

mysqli_close($con);
?>
