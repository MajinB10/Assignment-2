$(document).ready(function () {
    if ((localStorage.getItem("username") != null) &&(localStorage.getItem("pwd") != null) ){
        let content = `<h1 id="userinfo-username">${localStorage.getItem("username")}</h1>
            <h2 id="userinfo-userEmail">${localStorage.getItem("useremail")}</h2>
            <h2 id="userinfo-userPoints">Total Points:${localStorage.getItem("points")}</h2>`;

        document.getElementById("userinfo").innerHTML += content
    }

    function logout() {
        localStorage.clear()
        window.location.replace("/index.html");

    }

    document.getElementById("logout").onclick = function(){logout()}
})
