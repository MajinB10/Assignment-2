$(document).ready(function () {
    const APIKEY = "63b97b3b969f06502871ac1a";
    
    $("#signin-submit").on("click", function (e) {
        e.preventDefault()

        let username = $("#signin-username").val()
        let password = $("#signin-password").val()

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
          console.log(username)
          console.log(password)
          $.ajax(settings).done(function (response) {
            for (var i = 0; i < response.length; i++){
                console.log(typeof response[i].username)
                console.log(typeof response[i].password)
                if(response[i].username == username && response[i].password == password){
                    console.log("True")
                    localStorage.setItem("username",username)
                    localStorage.setItem("pwd",password)
                    window.location.replace("/about.html");
                }
                else{
                    alert("Invalid information");
                }
            }
          });
    })
    
})