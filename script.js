const navbarNav = document.querySelector(".navbarlink");
//sesudah
document.querySelector("#hamburger").onclick = () => {
  navbarNav.classList.toggle("active");
};
const hamburger = document.querySelector("#hamburger");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});