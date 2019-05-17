$(document).ready(function() {
  $("#insert").click(function(e) {
    e.preventDefault;
      var username = $("#username").val();
      var email = $("#email").val();
      var password = $("#password").val();
      var firstname = $("#firstname").val();
      var lastname = $("#lastname").val();
      var dataString = "username=" + username + "&email=" + email + "&password=" + password + "&firstname=" + firstname + "&lastname=" + lastname + "&insert=";
      console.log(dataString);
      localStorage.setItem('firstname', firstname);
      localStorage.setItem('lastname', lastname);



      if ($.trim(username).length > 0 & $.trim(email).length > 0 & $.trim(password).length > 0 & $.trim(firstname).length > 0 & $.trim(lastname).length > 0) {
        $.ajax({
          type: "POST",
          url: "http://10.3.210.128/www/LoginRegister/www/php/register.php",
          data: dataString,
          crossDomain: true,
          cache: false,
        }).done(function(data) {
          // $('head').append(data);
          console.log(data);
          window.location = "../index.html?lastname="+ lastname +"";
          alert("Successfully Registred!");
        });
      };
    //   return false;
  });
});
