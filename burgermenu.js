const button = document.getElementById("my-button");
const nav = document.getElementById("nav-links");

button.addEventListener('click', () => {
    nav.classList.toggle('show');
});