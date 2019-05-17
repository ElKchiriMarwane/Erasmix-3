<?php
 include "db.php";
 if(isset($_POST['insert']))
 {
   $projectname = $_POST['projectname'];
   $text = $_POST['text'];
	 $projectobject = $
 $q=mysqli_query($con,"INSERT INTO projecten ( projectname, text) VALUES ('$projectname', '$text')");
 if($q){
  echo "success";
}else{
  echo "error";
 }
}
?>
