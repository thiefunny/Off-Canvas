const hamburgerEl = document.querySelector(".hamburger");
const ulEl = document.querySelector("ul");
const mainEl = document.querySelector("main");
const containerEl = document.querySelector(".container");

hamburgerEl.onclick = function() {
    ulEl.classList.toggle("shift");
    containerEl.classList.toggle("shiftmain");
}