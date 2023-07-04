// cards-tour
const tourCards = document.querySelectorAll(".tour-card");

tourCards.forEach((tourCard) => {
  tourCard.addEventListener("mouseenter", () => {
    const infosCard = tourCard.querySelector(".infosCard");
    gsap.to(tourCard, {
      duration: 0.3,
      scale: 1.04,
      boxShadow:
        "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
    });
    gsap.to(infosCard, {
      y: 300,
      duration: 0.4,
      backgroundColor: "rgba(0, 0, 0, 0.862)",
    });
  });

  tourCard.addEventListener("mouseleave", () => {
    const infosCard = tourCard.querySelector(".infosCard");
    gsap.to(tourCard, {
      duration: 0.3,
      scale: 1,
      boxShadow:
        "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
    });

    gsap.to(infosCard, {
      y: 520,
      duration: 0.4,
      backgroundColor: "rgba(69, 69, 69, 0.414)",
    });
  });
});

// nav-bar

const buttonNavBar = document.getElementById("buttonNavBar");
const nav = document.querySelector("nav");
const liElements = document.querySelectorAll("nav li");
let isNavOpen = false;

function navBar() {
  if (isNavOpen) {
    nav.classList.remove("nav-open");
    isNavOpen = false;
  } else {
    nav.classList.add("nav-open");
    isNavOpen = true;
  }
}

function liElement() {
  nav.classList.remove("nav-open");
  isNavOpen = false;
}

buttonNavBar.addEventListener("click", navBar);
liElements.forEach((li) => {
  li.addEventListener("click", liElement);
});

// scroll

const navbarLinks = document.querySelectorAll("nav a");

navbarLinks.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});

function scrollToSection(event) {
  event.preventDefault();

  const targetId = event.target.getAttribute("href");
  const targetSection = document.querySelector(targetId);

  window.scrollTo({
    top: targetSection.offsetTop,
    behavior: "smooth",
  });
}
