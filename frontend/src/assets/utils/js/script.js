const menuButton = document.getElementById("menu");
const sidebar = document.getElementById("sidebar");

menuButton.addEventListener("click", () => {
    sidebar.classList.toggle("close");
})

menuButton.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});