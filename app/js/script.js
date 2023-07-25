// CONST
const btnHamburger = document.querySelector("#btnHamburger");
const link = document.querySelectorAll(".link");
const primaryNav = document.querySelector(".primary-navigation");
const body = document.querySelector("body");

// MENU
btnHamburger.addEventListener("click", function(){
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") { // Open hamburger
    primaryNav.setAttribute("data-visible", true);
    btnHamburger.classList.add("open");
    btnHamburger.setAttribute("aria-expanded", true);
    body.classList.add("no-scroll");
  } else { // Close hamburger
    primaryNav.setAttribute("data-visible", false);
    btnHamburger.classList.remove("open");
    btnHamburger.setAttribute("aria-expanded", false);
    body.classList.remove("no-scroll");
  }
});

// SCROLLING
const scrollWatcher = document.createElement("div");
const header = document.querySelector(".header");

scrollWatcher.setAttribute("data-scroll-watcher", "");
header.before(scrollWatcher);

const navObserver = new IntersectionObserver((entries) => {
  header.classList.toggle("header__scrolled", !entries[0].isIntersecting);
}, {rootMargin: "20% 0px 0px 0px"});

navObserver.observe(scrollWatcher)

// TYPING
var typed = new Typed(".auto-input", {
  strings: ["developer", "entrepreneur"],
  typeSpeed: 75,
  backSpeed: 75,
  loop: true
})

// Popups
const decaModal = document.querySelector("#deca-modal");
const openDecaModal = document.querySelector("#deca-open");
const closeDecaModal = document.querySelector("#deca-close");
openDecaModal.addEventListener("click", () => {
  decaModal.showModal();
  body.classList.add("no-scroll");
})
closeDecaModal.addEventListener("click", () => {
  decaModal.close();
  body.classList.remove("no-scroll");
})

const katyModal = document.querySelector("#katy-modal");
const openKatyModal = document.querySelector("#katy-open");
const closeKatyModal = document.querySelector("#katy-close");
openKatyModal.addEventListener("click", () => {
  katyModal.showModal();
  body.classList.add("no-scroll");
})
closeKatyModal.addEventListener("click", () => {
  katyModal.close();
  body.classList.remove("no-scroll");
})

const idaModal = document.querySelector("#ida-modal");
const openIdaModal = document.querySelector("#ida-open");
const closeIdaModal = document.querySelector("#ida-close");
openIdaModal.addEventListener("click", () => {
  idaModal.showModal();
  body.classList.add("no-scroll");
})
closeIdaModal.addEventListener("click", () => {
  idaModal.close();
  body.classList.remove("no-scroll");
})

const ocModal = document.querySelector("#oc-modal");
const openOcModal = document.querySelector("#oc-open");
const closeOcModal = document.querySelector("#oc-close");
openOcModal.addEventListener("click", () => {
  ocModal.showModal();
  body.classList.add("no-scroll");
})
closeOcModal.addEventListener("click", () => {
  ocModal.close();
  body.classList.remove("no-scroll");
})

const osaaModal = document.querySelector("#osaa-modal");
const openOsaaModal = document.querySelector("#osaa-open");
const closeOsaaModal = document.querySelector("#osaa-close");
openOsaaModal.addEventListener("click", () => {
  osaaModal.showModal();
  body.classList.add("no-scroll");
})
closeOsaaModal.addEventListener("click", () => {
  osaaModal.close();
  body.classList.remove("no-scroll");
})