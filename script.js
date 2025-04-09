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
