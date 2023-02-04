$(document).ready(function () {
    const APIKEY = "63b97b3b969f06502871ac1a";
    $("#account-made").hide();

    $("#makeaccount-submit").on("click", function (e) {
        e.preventDefault()

        let username = $("#account-username").val() ;
        let email = $("#account-email").val() ;
        let password =$("#account-password").val() ;

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