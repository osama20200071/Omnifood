// const from = document.querySelector(".cta-form");
// from.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const name = from.querySelector("#full-name");
//   alert("welcome " + name.value);
// });

///////////////////////////////////////////////////////////
// Make mobile navigation work
const Header = document.querySelector(".header");
const menuBtn = document.querySelector(".menu-button");
const mainNavigation = document.querySelector(".main-nav");

// const openIcon = document.querySelector(".open-icon");
// const closeIcon = document.querySelector(".close-icon");

menuBtn.addEventListener("click", () => {
  Header.classList.toggle("show");
  // openIcon.classList.toggle("show");
  // closeIcon.classList.toggle("show");
});
mainNavigation.addEventListener("click", () => {
  Header.classList.toggle("show");
});

///////////////////////////////////////////////////////////
// Set current year
// update the copy right
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Smooth scrolling animation
// smooth scrolling animation using js
// first select all the links using selectorAll
// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

const links = document.querySelectorAll("a:link");
// console.log(links);

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    // console.log(link);

    const href = link.getAttribute("href");

    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// const sectionHeroEl = document.querySelector(".section-hero");
// const observer = new IntersectionObserver(
//   (entries) => {
//     const entry = entries[0];
//     const header = document.querySelector(".header");
//     if (!entry.isIntersecting) {
//       // document.body.classList.add("sticky");
//       header.classList.add("sticky");
//       sectionHeroEl.style.marginTop = "9.6rem";
//     }
//     if (entry.isIntersecting) {
//       // document.body.classList.remove("sticky");
//       header.classList.remove("sticky");
//       sectionHeroEl.style.marginTop = "0";
//     }
//   },
//   {
//     root: null,
//     threshold: 0,
//     rootMargin: "-80px",
//   }
// );

// observer.observe(sectionHeroEl);

// another approach to solve the problem that happens
// because of the margin we can make the body itself has the class
// sticky then style the header based on that and also the margin
// top of the hero section

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
