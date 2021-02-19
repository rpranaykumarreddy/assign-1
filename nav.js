function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
/*code of accordin in art gallery*/
var artnav = document.getElementById("artnav");
var optart = 0;

function ope() {
    if (!optart) {
        artnav.style.display = "block";
        optart = 1;
    } else {
        artnav.style.display = "none";
        optart = 0;
    }
}