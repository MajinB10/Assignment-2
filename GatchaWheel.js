let container = document.querySelector("#Wheel")
let username = localStorage.getItem("username")
let password = localStorage.getItem("pwd")
let email = localStorage.getItem("useremail")
let points = localStorage.getItem("points")

document.getElementById("spin").onclick = function(){spin()}

function spin(){
    let max = 8;
    let min = 1;
    let noofRotation= 4*360

    let chosenPrizeNo = Math.ceil(Math.random()*(max-min+1) );
    console.log(chosenPrizeNo)
    let totalRotation = noofRotation+(8-chosenPrizeNo)*45 + 22.5+chosenPrizeNo

    container.style.transform = "rotate("+totalRotation+"deg)";


}

function Popup() {
    let content=`
    <div class="popup">
        <h1> Congrats You have Won 
        <a class="button" href="#"onclick="dean('${this.objname}')">Close</a>
    </div>


    `;
}
