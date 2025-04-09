// Scroll to top
const scrollBtn = document.getElementById("scrollTopBtn");
window.onscroll = () => {
  scrollBtn.style.display = window.scrollY > 100 ? "block" : "none";
};
scrollBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Dark mode toggle
document.getElementById("toggleTheme").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Thank you popup on form submission
function showThankYou() {
  alert("Thanks for reaching out to VedaNexus! We'll get back to you soon.");
  return true;
}

// Typing animation
const phrases = [
  "Maintaining your IT hardware...",
  "Fast, Reliable, Affordable...",
  "VedaNexus is always here for you."
];

let i = 0;
let j = 0;
let currentPhrase = "";
let isDeleting = false;
let isPaused = false;

function typeEffect() {
  if (isPaused) return;

  currentPhrase = phrases[i];
  const displayText = isDeleting
    ? currentPhrase.substring(0, j--)
    : currentPhrase.substring(0, j++);

  document.getElementById("typedText").textContent = displayText;

  if (!isDeleting && j === currentPhrase.length) {
    isPaused = true;
    setTimeout(() => {
      isDeleting = true;
      isPaused = false;
      typeEffect();
    }, 1200); // Pause before deleting
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % phrases.length;
  }

  setTimeout(typeEffect, isDeleting ? 100 : 150);
}

// Start typing once after DOM loads
document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
});
