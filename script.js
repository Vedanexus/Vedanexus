// Typing animation
let text = "Maintaining your IT hardware";
let i = 0;
function type() {
  if (i < text.length) {
    document.getElementById("typing-text").textContent += text.charAt(i);
    i++;
    setTimeout(type, 100);
  }
}
window.onload = type;

// Scroll to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show scroll button
window.onscroll = function () {
  document.getElementById("scrollTopBtn").style.display =
    window.scrollY > 100 ? "block" : "none";
};

// Thank you message
function showThankYou() {
  document.getElementById("thank-you-message").style.display = "block";
  setTimeout(() => {
    document.getElementById("thank-you-message").style.display = "none";
  }, 4000);
  return true;
}

// Theme toggle
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
