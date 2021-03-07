//declaration and intialization of HTML DOM
var ret1 = document.getElementById("ret1");
var ret2 = document.getElementById("ret2");
var ret3 = document.getElementById("ret3");
var ret4 = document.getElementById("ret4");
var ret5 = document.getElementById("ret5");
var ret6 = document.getElementById("ret6");
var ret7 = document.getElementById("ret7");
var ret8 = document.getElementById("ret8");
var ret9 = document.getElementById("ret9");
var ret0 = document.getElementById("ret0");


//function for binary convertor
function binf1() {
    var inp = document.getElementById("hi").value;

    ret1.innerHTML = inp + " x 1  = " + (inp * 1);
    ret2.innerHTML = inp + " x 2  = " + (inp * 2);
    ret3.innerHTML = inp + " x 3  = " + (inp * 3);
    ret4.innerHTML = inp + " x 4  = " + (inp * 4);
    ret5.innerHTML = inp + " x 5  = " + (inp * 5);
    ret6.innerHTML = inp + " x 6  = " + (inp * 6);
    ret7.innerHTML = inp + " x 7  = " + (inp * 7);
    ret8.innerHTML = inp + " x 8  = " + (inp * 8);
    ret9.innerHTML = inp + " x 9  = " + (inp * 9);
    ret0.innerHTML = inp + " x 10 = " + (inp * 10);


}