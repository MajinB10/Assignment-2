$(document).ready(function () {
    if ((localStorage.getItem("username") == null) &&(localStorage.getItem("pwd") == null) ){
        window.location.replace("/signin.html");
    }

})



function popupToggle() {
    let container = document.querySelector("#Wheel")
    container.style.transform = "rotate(0deg)";
    let ele= document.getElementById('Wheel');
    ele.classList.toggle("active");
    let ele1= document.getElementById('spin');
    ele1.classList.toggle("active");
    let ele2 = document.getElementById("arrow")
    ele2.classList.toggle("active");
    let popup = document.getElementById('popup')
    popup.classList.toggle("active");
  }

function Popup(chosenPrizeNo) {
    
    let content=`
        <h1 id="popuph1"> Congrats You have Won Prize ${chosenPrizeNo}
        <p>${dict[chosenPrizeNo]}</p> 
        <a class="button" href="#"onclick=popupToggle()><i class="fa fa-times-circle" aria-hidden="true"></i>
        </a>
    `
    document.getElementById("popup").innerHTML = content
    ;
}
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time)); // in ms
  }
function spin(){
    let container = document.querySelector("#Wheel")
    let username = localStorage.getItem("username")
    let password = localStorage.getItem("pwd")
    let email = localStorage.getItem("useremail")
    let points = localStorage.getItem("points")

    if (points<10){
        return
    }
    let max = 8;
    let min = 1;
    let noofRotation= 4*360

    let chosenPrizeNo = Math.ceil(Math.random()*(max-min+1) );
    console.log(chosenPrizeNo)
    // rotations+ (changes to get to the no) + 22.5==half due to starting in middle +some random number
    let totalRotation = noofRotation+(8-chosenPrizeNo)*45 + 22.5 +chosenPrizeNo
    
    points -= 10
    localStorage.setItem("points",points);
    var jsondata = {"username":username,"userEmail":email,"password":password,"points":localStorage.getItem("points")};
    console.log(jsondata)
    var settings = {
    "async": true,
    "crossDomain": true,
    "url": `https://studentcrud-1262.restdb.io/rest/assignmnetuser/${localStorage.getItem("id")}`,
    "method": "PUT",
    "headers": {
        "content-type": "application/json",
        "x-apikey": APIKEY,
        "cache-control": "no-cache"
    },
    "processData": false,
    "data": JSON.stringify(jsondata)
    }

    $.ajax(settings).done(function (response) {
    console.log(response);
    });

    container.style.transform = "rotate("+totalRotation+"deg)";


    Popup(chosenPrizeNo);
    delay(5000).then(popupToggle);


}

const APIKEY = "63b97b3b969f06502871ac1a";


var dict = {
    1:"10% off",
    2:"20% off",
    3:"Free shipping min $30 spent",
    4:"5% off",
    5:"8% off",
    6:"Too bad Nothing",
    7:"20% off",
    8:"5% off"
};


document.getElementById("spin").onclick = function(){spin()}

