const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  const isScrolled = window.scrollY > 50;

  navbar.classList.toggle("bg-white/80", isScrolled);
  navbar.classList.toggle("backdrop-blur-xl", isScrolled);
  navbar.classList.toggle("shadow-lg", isScrolled);
  navbar.classList.toggle("py-3", isScrolled);

  navbar.classList.toggle("bg-transparent", !isScrolled);
  navbar.classList.toggle("py-4", !isScrolled);

  // Ubah warna teks nav
  document.querySelectorAll("#navbar nav a").forEach((a) => {
    a.classList.toggle("text-gray-800", isScrolled);
    a.classList.toggle("hover:text-gray-600", isScrolled);

    a.classList.toggle("text-white", !isScrolled);
    a.classList.toggle("hover:text-gray-300", !isScrolled);
  });

  // Logo text
  const logoText = document.querySelector("#navbar span");
  logoText.classList.toggle("text-gray-800", isScrolled);
  logoText.classList.toggle("text-white", !isScrolled);

  // Hamburger menu (mobile)
  const burger = document.querySelector("#navbar button");
  burger.classList.toggle("text-gray-800", isScrolled);
  burger.classList.toggle("text-white", !isScrolled);
});
