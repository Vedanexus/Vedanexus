function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.onscroll = () => {
  document.getElementById("scrollBtn").style.display = window.scrollY > 100 ? "block" : "none";
};

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function showThankYou() {
  document.getElementById("thankYouMsg").style.display = "block";
  return true;
}
// Fade-in animation on scroll for service cards
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card').forEach(card => {
  observer.observe(card);
});
// Scroll to top button logic
const scrollBtn = document.getElementById("scrollBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
