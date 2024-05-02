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
}, 2000);

function acc1() {
  alert("Selamat Anda Kena Scam!");
  const ppp = document.querySelector(".animate")
  ppp.style.display = "flex";
}
function acc2() {
  const ppp = document.querySelector(".animate")
  ppp.style.display = "none";
}

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

// ticket
// const form = document.getElementById('myForm');
// form.addEventListener('submit', function(event) {
//   event.preventDefault();

//   const inputNumber = document.getElementById('numberInput').value;
//   const processedNumber = processNumber(inputNumber);
//   const resultElement = document.getElementById('result');
//   resultElement.textContent = processedNumber;
// });

// function processNumber(inputNumber) {
//   const processedNumber = inputNumber * 2;
//   return processedNumber;
// }
// const form = document.getElementById('tiket');
// form.addEventListener('submit', function(event) {
//   event.preventDefault(); // Cegah reload halaman

//   // Ambil nilai input number
//   const inputNumber = document.getElementById('orang').value;

//   // Olah nilai input number
//   const processedNumber = processNumber(inputNumber);

//   // Tampilkan hasil pengolahan
//   const resultElement = document.getElementById('result');
//   resultElement.textContent = `hasil: ${processedNumber}`;
// });
// function processNumber(inputNumber) {
//   const processedNumber = inputNumber * 150;
//   return processedNumber;
// }

// fly
// const ttt = document.getElementById("ttt");
// t.addEventListener("click", () => {
//   ppp.style.display = "flex";
// });
