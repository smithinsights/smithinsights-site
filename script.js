// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav toggle
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");

hamburger.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("open");
  hamburger.setAttribute("aria-expanded", isOpen);
});

// Close mobile menu when a link is clicked
mobileMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    hamburger.setAttribute("aria-expanded", false);
  });
});
