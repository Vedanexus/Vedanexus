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
let i = 0, j = 0, current = "", isDeleting = false;

function type() {
  if (i < phrases.length) {
    current = phrases[i];
    let display = isDeleting ? current.substring(0, j--) : current.substring(0, j++);
    document.getElementById("typedText").textContent = display;

    if (!isDeleting && j === current.length) {
      isDeleting = true;
      setTimeout(type, 1000);
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % phrases.length;
    }

    setTimeout(type, isDeleting ? 60 : 120);
  }
}
type();
