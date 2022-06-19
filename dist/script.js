const scriptURL = "https://script.google.com/macros/s/AKfycby1-A6zz0ci8aflpTkZ7kjXDWSTawsykk7sv-8h8x7sWIPZGFeCVsPTjS2lSoF8jeyq/exec";
const form = document.forms["contact-me"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});
// burger

const burger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

burger.addEventListener("click", function () {
  burger.classList.toggle("burger-active");
  navMenu.classList.toggle("hidden");
});

//navbar fixed

window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

window.addEventListener("click", function (e) {
  if (e.target != burger && e.target != navMenu) {
    burger.classList.remove("burger-active");
    navMenu.classList.add("hidden");
  }
});

// dark mode toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");
darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// pindahkan posisi togel sesuai mode
if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  document.documentElement.classList.add("dark");
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}
const alert = document.getElementById("alert");
const button = document.getElementById("submit");
const nama = document.getElementById("name");

button.addEventListener("click", () => {
  alert.classList.remove("hidden");
  button.preventDefault();
});
