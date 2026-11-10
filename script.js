
const ACCESS_KEY = "securefx";

// Replace this with your actual GitHub Pages URL
const PRIVATE_PAGE_URL =
    "https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/private.html";

const input = document.getElementById("accessKey");
const button = document.getElementById("continueBtn");
const error = document.getElementById("errorMessage");

button.addEventListener("click", function () {

    if (input.value === ACCESS_KEY) {

        error.style.display = "none";

        button.textContent = "ACCESS GRANTED...";
        button.disabled = true;

        window.location.href = PRIVATE_PAGE_URL;

    } else {

        error.style.display = "block";
        input.value = "";
        input.focus();

    }

});

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        button.click();
    }
});

