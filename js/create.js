    $(document).ready(function () {
    	console.log('Linked');
    	$("#insert").click(function () {

var title = $('#projectname').val();
			console.log(title);
var text = $('#text').val();
    		/*        var dataString = "projectname=" + projectname + "&text=" + text +"&insert=";*/
    		var project = {
    			title: $('#projectname').val(),
    			text: $('#text').val(),
    		}

    		var projectString = JSON.stringify(project);
    		console.log(projectString);
    		/*var projectJSON = /*JSON.parse(projectString);
    		console.log(projectarr);
    		var projectarr = [];
			projectarr.push(projectString);
    		localStorage.setItem('project', projectarr);*/
    		/*$.ajax({
    			type: "POST",
    			url: "http://10.3.210.89/www/LoginRegister/www/php/insertproject.php",
    			data: projectString,
    			crossDomain: true,
    			cache: false,
    		}).done(function (data) {
    			console.log(data);
    		});*/
    		/*console.log(dataString);
    		if ($.trim(projectname).length > 0 & $.trim(text).length > 0) {
    		  $.ajax({
    		    type: "POST",
    		    url: "http://10.3.210.89/www/LoginRegister/www/php/insertproject.php",
    		    data: dataString,
    		    crossDomain: true,
    		    cache: false,
    		    beforeSend: function() {
    		      $("#insert").val('Creating account...');
    		    },
    		    success: function(data) {
    		      if (data == "success") {
    		        alert("inserted");
    		        window.location = "../index.html"
    		        $("#insert").val('Register');
    		        // localStorage.setItem("projectname", projectname);
    		        // localStorage.setItem("text", text);
    		      } else if (data == "error") {
    		        alert("error");
    		      }
    		    }
    		  });
    		}
    		return false;*/
    	});
    });
