const toggleBtn = document.querySelector(".toggle-button");
const dropdown = document.querySelector(".dropdown-menu");

toggleBtn.addEventListener("click", () => {
    dropdown.classList.toggle("top-16");
    toggleBtn.nextElementSibling.classList.toggle("active");
});