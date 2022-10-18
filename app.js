console.log("here")


function fav(unfav) {
    var fav = unfav.nextElementSibling;
    fav.style.display = "block";
    unfav.style.display = "none";
}

function unfav(fav) {
    var unfav = fav.previousElementSibling;
    fav.style.display = "none";
    unfav.style.display = "block";
}

function expand() {
    document.getElementById("side-bar").style.display = "block"
}

function collapse() {
    document.getElementById("side-bar").style.display = "none"
}

function buttonPress(elm) {
    elm.style.backgroundColor = "#461558"
}

function buttonUnpress(elm) {
    elm.style.backgroundColor = "#6A2983"
}