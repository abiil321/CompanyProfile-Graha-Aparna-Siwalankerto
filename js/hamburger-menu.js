// Toggle menu mobile
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Navbar background on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("bg-white", "shadow-md");
    navbar.classList.remove("bg-transparent");
    navbar.querySelectorAll("a").forEach((el) => {
      el.classList.replace("text-white", "text-gray-700");
    });
  } else {
    navbar.classList.add("bg-transparent");
    navbar.classList.remove("bg-white", "shadow-md");
    navbar.querySelectorAll("a").forEach((el) => {
      el.classList.replace("text-gray-700", "text-white");
    });
  }
});
