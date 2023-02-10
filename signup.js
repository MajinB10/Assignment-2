$(document).ready(function () {
    const APIKEY = "63b97b3b969f06502871ac1a";
    $("#account-made").hide();
    let originalHTMLUsername = document.getElementById("form-username").innerHTML
    let originalHTMLUserEmail = document.getElementById("form-email").innerHTML


    // To get all the rows of data in the Table
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://studentcrud-1262.restdb.io/rest/assignmnetuser",
      "method": "GET",
      "headers": {
        "content-type": "application/json",
        "x-apikey": APIKEY,
        "cache-control": "no-cache"
      }
    }
    $.ajax(settings).done(function (response) {

      $("#makeaccount-submit").on("click", function (e) {
        e.preventDefault()

        for (var i = 0; i < response.length; i++){
          if (Object.values(response[i]).indexOf($("#account-username").val())>-1){
            document.getElementById("form-username").innerHTML += `<small id="username-taken">UserNameTaken</small>`
            return 
          }
          else if(document.getElementById("username-taken") != null){
            document.getElementById("username-taken").remove()
          }
          if (Object.values(response[i]).indexOf($("#account-email").val())>-1){
            document.getElementById("form-email").innerHTML += `<small id="Email-taken">Email Used</small>`
            return
          }
          else if(document.getElementById("username-taken") != null){
            document.getElementById("Email-taken").remove()
          }

        };

        let username = $("#account-username").val() ;
        let email = $("#account-email").val() ;
        let password =$("#account-password").val() ;


        console.log(typeof username)
        console.log(typeof password)

        let data= {
            "username": username,
            "userEmail": email,
            "password": password
        }
        
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://studentcrud-1262.restdb.io/rest/assignmnetuser",
            "method": "POST",
            "headers": {
              "content-type": "application/json",
              "x-apikey": APIKEY,
              "cache-control": "no-cache"
            },
            "processData": false,
            "data": JSON.stringify(data)
          }
          
          $.ajax(settings).done(function (response) {
            $("#makeaccount-submit").prop("disabled",false)

            $("#account-made").show().fadeOut(3000);
          });


    })
      
    })  
})