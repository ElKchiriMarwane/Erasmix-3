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
		$user_name = $row['username'];

		$_SESSION['id'] = $id;
		$_SESSION['email'] = $email;
$_SESSION['user_name'] = $user_name;
	}

	echo 'success';

}else{
	echo "error";
}

mysqli_close($con);
?>
