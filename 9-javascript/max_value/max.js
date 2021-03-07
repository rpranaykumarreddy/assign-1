//declaration and intialization of HTML DOM
var ret1 = document.getElementById("ret1");
var ret2 = document.getElementById("ret2");

//function for binary convertor
function binf1() {
    var arra = [];

    arra[0] = document.getElementById("hi1").value;
    arra[1] = document.getElementById("hi2").value;
    arra[2] = document.getElementById("hi3").value;
    arra[3] = document.getElementById("hi4").value;
    arra[4] = document.getElementById("hi5").value;
    arra[5] = document.getElementById("hi6").value;
    arra[6] = document.getElementById("hi7").value;
    arra[7] = document.getElementById("hi8").value;
    arra[8] = document.getElementById("hi9").value;
    arra[9] = document.getElementById("hi0").value;

    var max = Math.max(arra[0], arra[1], arra[2], arra[3], arra[4], arra[5], arra[6], arra[7], arra[8], arra[9])
    var abc = "";

    for (i = 0; i < 10; i++) {
        abc = abc + " " + arra[i] + " ";
    }

    ret1.innerHTML = abc;
    ret2.innerHTML = max;


}