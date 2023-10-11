var commitButton = document.querySelector("#activeGame11")
commitButton.addEventListener('click', buttonsDisabled());
var x = 0;

function buttonsDisabled() {
    if (x > 0) {
    document.getElementById("activeGame1").disabled = true;
    document.getElementById("activeGame2").disabled = true;
    document.getElementById("activeGame3").disabled = true;
    document.getElementById("activeGame4").disabled = true;
    document.getElementById("activeGame5").disabled = true;
    document.getElementById("activeGame6").disabled = true;
    document.getElementById("activeGame7").disabled = true;
    document.getElementById("activeGame8").disabled = true;
    document.getElementById("activeGame9").disabled = true;
    }
    x++;
    console.log(x);
}

