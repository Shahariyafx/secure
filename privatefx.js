
const PRIVATE_KEY = "Shahariyafx";

const keyScreen = document.getElementById("keyScreen");
const keyCard = document.getElementById("keyCard");
const keyInput = document.getElementById("privateKey");
const keyButton = document.getElementById("keyButton");
const keyError = document.getElementById("keyError");

const intro = document.getElementById("accessIntro");
const mainContainer = document.getElementById("mainContainer");

function unlockDatabase() {

    const enteredKey = keyInput.value;

    if (enteredKey === PRIVATE_KEY) {

        // CORRECT KEY

        keyError.style.display = "none";

        keyButton.disabled = true;
        keyButton.textContent = "ACCESS GRANTED";

        // HIDE KEY CARD

        keyScreen.classList.add("hide");

        // SHOW ACCESS GRANTED

        setTimeout(function () {
            intro.classList.add("hide");
        }, 700);

        // REVEAL PRIVATE DATABASE

        setTimeout(function () {
            mainContainer.classList.add("visible");
        }, 1400);

    } else {

        // INCORRECT KEY

        keyError.style.display = "block";

        keyCard.classList.remove("shake");

        void keyCard.offsetWidth;

        keyCard.classList.add("shake");

        keyInput.value = "";
        keyInput.focus();

    }
}

// BUTTON CLICK

keyButton.addEventListener("click", unlockDatabase);

// ENTER KEY SUPPORT

keyInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        unlockDatabase();
    }

});
