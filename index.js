let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

// Navbar link click par menu hide karna
const navbarLinks = document.querySelectorAll(".navbar a");
navbarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuIcon.classList.remove("fa-xmark");
    navbar.classList.remove("active");
  });
});

// Sticky navbar effect
let header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 100);
});

// smooth scroll effect
document.querySelectorAll(".navbar a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

/*=================== Navbar underline effect ==================*/
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let currentSection = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute("id");
    }
  });

  navbarLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});

/*=================== Scroll Reveal ==================*/
ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-contant, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .resume, .contact-form, .about-content",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-contant p ", { origin: "right" });

/*=================== Multiple type==================*/
const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "Web Designer", "Problem Solver"],
  backSpeed: 70,
  typeSpeed: 70,
  backDelay: 1000,
  loop: true,
});

// Particles.js Configuration
particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
    },
    opacity: {
      value: 0.5,
      random: false,
    },
    size: {
      value: 5,
      random: true,
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
    },
  },
  retina_detect: true,
});

// Preloader

window.addEventListener("load", function () {
  let preloader = document.getElementById("preloader");
  preloader.style.display = "none";
});
