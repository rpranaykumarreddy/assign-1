//declaration and intialization of HTML DOM
var ret1 = document.getElementById("ret1");

//function for binary convertor
function binf1() {
    var inp = document.getElementById("hi").value;
    var facto = 1;
    for (var i = 1; i <= inp; i++) {
        facto *= i;
    }
    ret1.innerHTML = inp + " is " + facto;


}