

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Highlight the navigation link for the current section
const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let currentSection = "home";

  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 150) {
      currentSection = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === "#" + currentSection
    );
  });
});
