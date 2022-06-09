//related to index page

//storing the value loacally
var storedName = localStorage.getItem("storedName");
function loadName(){
    var userName = document.getElementById('username').value;
    localStorage.setItem("storedName", userName); //storing username in 'storedName'
}
console.log(storedName); //for reference and debugging