const phrases = [
  "Maintaining your IT hardware...",
  "Fast, Reliable, Affordable...",
  "VedaNexus is always here for you."
];

let currentPhraseIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
let displayElement = document.getElementById("typedText");

function typeWriter() {
  const currentPhrase = phrases[currentPhraseIndex];

  if (isDeleting) {
    currentCharIndex--;
  } else {
    currentCharIndex++;
  }

  const updatedText = currentPhrase.substring(0, currentCharIndex);
  displayElement.textContent = updatedText;

  let typingSpeed = isDeleting ? 100 : 150;

  if (!isDeleting && currentCharIndex === currentPhrase.length) {
    typingSpeed = 1000; // pause before deleting
    isDeleting = true;
  } else if (isDeleting && currentCharIndex === 0) {
    isDeleting = false;
    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
    typingSpeed = 500; // pause before typing next
  }

  setTimeout(typeWriter, typingSpeed);
}

// Start when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  typeWriter();
});
