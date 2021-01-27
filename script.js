var scrollToTopBtn = document.getElementById("firstdown");
var rootElement = document.documentElement;

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 1000,
    behavior: "smooth",
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);

// typing animation

var typed = new Typed(".typing", {
  strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
  typeSpeed: 100,
  loop: true,
});

function themetog() {
  document.getElementById("woosh").className = "light-theme";
}
