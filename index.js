//related to index page

var btn1 = document.getElementById('his');
var btn2 = document.getElementById('sci');
var btn3 = document.getElementById('pol');
var btn4 = document.getElementById('geo');
var user = document.getElementById("username");

//storing the value loacally
var storedName = localStorage.getItem("storedName"); 

function loadName(){
    var userName = document.getElementById('username').value;
    localStorage.setItem("storedName", userName); //storing username in 'storedName'
}

//keeping buttons disabled till the name is entered
if (localStorage.length == ""){
    //showing error if name is not entered
    alert("Please enter your name");
    console.log("error: name is not entered");
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
}

//for debugging purpose
console.log(localStorage.getItem("storedName"))
console.log("Length : " + localStorage.length);
