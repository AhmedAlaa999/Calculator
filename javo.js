alert("Welcome to calculator!");

let screen = document.getElementById("box2");
//hiiiii
function addNumber(value){
// easy java script code , in the pocket
    if(screen.innerHTML == "0"){
        screen.innerHTML = value;
    }
    else{
        screen.innerHTML += value;
    }
}
function calculate(){
    screen.innerHTML = eval(screen.innerHTML);
}
function resetCalc(){
    screen.innerHTML = "0";
}