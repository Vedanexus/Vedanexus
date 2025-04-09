// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Welcome popup when site loads
window.addEventListener("load", () => {
  setTimeout(() => {
    alert("Welcome to VedaNexus! Let's solve your IT hardware problems.");
  }, 800);
});
