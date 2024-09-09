// var reveals = document.querySelectorAll(".reveal");

// function reveal() {
//   for (var i = 0; i < reveals.length; i++) {
//     var elementTop = reveals[i].getBoundingClientRect().top;
//     var elementVisible = 50;
//     if (elementTop < window.innerHeight - elementVisible) {
//       reveals[i].classList.toggle("slide-up");
//     }
//   }
// }

// function animateStats() {
//   var stats = document.querySelectorAll(".stat-progress--body");

//   for (var i = 0; i < stats.length; i++) {
//     var elementTop = stats[i].getBoundingClientRect().top;
//     var elementVisible = 150;
//     var elePercentage = stats[i].getAttribute("data-percentage");

//     if (elementTop < windowHeight - elementVisible) {
//       $(stats[i]).css({ height: elePercentage + "%" });
//       $(stats[i]).find(".count").html(elePercentage);
//     }
//   }
// }

// window.addEventListener("scroll", function () {
//   reveal();
//   animateStats();
// });

// // reveal();
// // animateStats();

// Function to handle the intersection observer callback
function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("slide-up");
    } else {
      entry.target.classList.remove("slide-up");
    }
    // observer.unobserve(entry.target); // Optional: Stop observing after animation is triggered
  });
}

// Create an Intersection Observer
const options = {
  root: null, // Use the viewport as the root
  rootMargin: "0px", // No additional margin
  threshold: 0.3, // 50% of the element must be in the viewport
};

const observer = new IntersectionObserver(handleIntersection, options);

// Start observing the element
const animationTrigger = document.querySelectorAll(".reveal");
const reveals = Array.from(animationTrigger);
console.log(reveals);
if (reveals) {
  reveals.map((item) => {
    observer.observe(item);
  });
}
