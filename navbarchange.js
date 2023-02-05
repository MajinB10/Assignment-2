$(document).ready(function () {
    if ((localStorage.getItem("username") != null) &&(localStorage.getItem("pwd") != null) ){
        let username = localStorage.getItem("username")
        let password = localStorage.getItem("pwd")

        let content = `<a class="nav-link"  href="userinfo.html">${username}</a>`

        $("#signin").html(content)
    }
   
})