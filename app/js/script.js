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


// CONTACT FORM
// Getting data
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");

function validateForm() {

  clearMessages();
  let errorFlag = false;

  if(nameInput.value.length < 1) {
    errorNodes[0].innerText = "Name cannot be blank";
    nameInput.classList.add("error-border");
    errorFlag = true;
  }

  if(!emailIsValid(email.value)) {
    errorNodes[1].innerText = "Invalid email address";
    email.classList.add("error-border");
    errorFlag = true;
  }

  if(subject.value.length < 1) {
    errorNodes[2].innerText = "Subject cannot be blank";
    subject.classList.add("error-border");
    errorFlag = true;
  }

  if(message.value.length < 1) {
    errorNodes[3].innerText = "Message cannot be blank";
    message.classList.add("error-border");
    errorFlag = true;
  }

  if(!errorFlag) {
    success.innerText = "Thanks for reaching out! I'll get back to you as soon as possible.";
  }
}
function clearMessages() {
  for(let i = 0; i < errorNodes.length; i++) {
    errorNodes[i].innerText = "";
  }
  success.innerText = "";
  nameInput.classList.remove("error-border");
  email.classList.remove("error-border");
  subject.classList.remove("error-border");
  message.classList.remove("error-border");
}
function emailIsValid(email) {
  let pattern = /\S+@\S+\.\S+/;
  return pattern.test(email);
}

function clearInput(){
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var subject = document.getElementById("subject");
  var message = document.getElementById("message");

  if (name.value !="") {
    name.value = "";
  }
  if (email.value !="") {
    email.value = "";
  }
  if (subject.value !="") {
    subject.value = "";
  }
  if (message.value !="") {
    message.value = "";
  }
}