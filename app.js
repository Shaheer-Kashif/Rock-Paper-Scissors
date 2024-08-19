let choice = document.querySelectorAll(".button-img");

choice.forEach((img) => {
    img.addEventListener("click", () => {
        img.classList.toggle("clicked");
    });
});