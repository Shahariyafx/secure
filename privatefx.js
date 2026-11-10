
const intro = document.getElementById("accessIntro");
const mainContainer = document.getElementById("mainContainer");

document.addEventListener("DOMContentLoaded", function () {

    // SHOW ACCESS GRANTED FIRST

    setTimeout(function () {
        intro.classList.add("hide");
    }, 1700);

    // REVEAL PRIVATE DATABASE

    setTimeout(function () {
        mainContainer.classList.add("visible");
    }, 2100);

});

