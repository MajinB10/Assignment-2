$(document).ready(function () {
    if ((localStorage.getItem("username") != null) &&(localStorage.getItem("pwd") != null) ){
        let content = `<div id="user-details"><h1 id="userinfo-username">Username:${localStorage.getItem("username")}</h1>
            <h2 id="userinfo-userEmail">Email:${localStorage.getItem("useremail")}</h2>
            <h2 id="userinfo-userPoints">TotalPoints:${localStorage.getItem("points")}</h2></div>   <div id="logoutpos"><button id="logout" onclick="">LogOut</button><div>`;

        document.getElementById("userinfo").innerHTML += content
    }

    function logout() {
        localStorage.clear()
        window.location.replace("/index.html");

    }

    document.getElementById("logout").onclick = function(){logout()}
})
