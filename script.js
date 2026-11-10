
const ACCESS_KEY = "securefx";

const PRIVATE_PAGE_URL =
    "https://shahariyafx.github.io/secure/privatefx.html";

const input = document.getElementById("accessKey");
const button = document.getElementById("continueBtn");
const error = document.getElementById("errorMessage");
const container = document.querySelector(".secure-container");

button.addEventListener("click", function () {

    if (input.value === ACCESS_KEY) {

        error.style.display = "none";
        button.textContent = "ACCESS GRANTED...";
        button.disabled = true;

        window.location.href = PRIVATE_PAGE_URL;

    } else {

        error.style.display = "block";

        container.classList.remove("shake");

        // Restart full-view shake animation
        void container.offsetWidth;

        container.classList.add("shake");

        input.value = "";
        input.focus();

    }

});

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        button.click();
    }
});
