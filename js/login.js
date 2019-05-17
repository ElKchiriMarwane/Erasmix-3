    $(document).ready(function() {
      $("#insert").click(function() {
        var username = $("#username").val();
        var password = $("#password").val();
        var dataString = "username=" + username + "&password=" + password + "&insert=";
        if ($.trim(username).length > 0 & $.trim(password).length > 0) {
          $.ajax({
            type: "POST",
            url: "http://10.3.210.128/www/LoginRegister/www/php/login.php",
            data: dataString,
            crossDomain: true,
            cache: false,
            beforeSend: function() {
              $("#insert").val('Connecting...');
            },
            success: function(data) {
              if (data == "success") {
                alert("Welcome "+ username);
                window.location = "html/timeline.html";
                
              } else if (data == "error") {
                alert("error");
              }
            }
          });
        }
        return false;
      });
    });