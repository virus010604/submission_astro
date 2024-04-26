const navbarNav = document.querySelector(".navbarlink");
document.querySelector("#hamburger").onclick = () => {
  navbarNav.classList.toggle("active");
};
const hamburger = document.querySelector("#hamburger");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// comment
const komen = document.querySelector("textarea");
komen.addEventListener("keyup", (e) => {
  komen.style.height = "auto";
  let tinggi = e.target.scrollHeight;
  komen.style.height = `${tinggi}px`;
});

function acc() {
  alert("FITUR BELUM TERSEDIA!");
}
setTimeout(function send() {
  alert("PESAN TERKIRIM!");
},2000);

// navbar scroll
const nav = document.querySelector(".navbarnav");
const baga = document.querySelector("header");
const d = document.querySelector(".drop");

const bagaOptions = {
  rootMargin: "-200px 0px 0px 0px",
};

const bagaObserver = new IntersectionObserver(function (entries, bagaObserver) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      nav.classList.add("aktif");
      d.classList.add("aktif");
    } else {
      d.classList.remove("aktif");
      nav.classList.remove("aktif");
    }
  });
}, bagaOptions);

bagaObserver.observe(baga);
