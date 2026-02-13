const audio = document.getElementById('myAudio');

  // Start from 30 seconds
  audio.currentTime = 0;

  // Play on first click
  document.body.addEventListener('click', () => {
    audio.play();
  }, { once: true });

window.onload = function () {

  const duration = 3000;
  const animationEnd = Date.now() + duration;

  const interval = setInterval(function () {

    const timeLeft = animationEnd - Date.now();
    if (timeLeft <= 0) {
      clearInterval(interval);
      return;
    }

    // LEFT CORNER
    confetti({
      particleCount: 25,
      angle: 60,              // shoots toward center
      spread: 70,
      startVelocity: 45,
      origin: { x: 0, y: 1 }  // bottom-left
    });

    // RIGHT CORNER
    confetti({
      particleCount: 25,
      angle: 120,             // shoots toward center
      spread: 70,
      startVelocity: 45,
      origin: { x: 1, y: 1 }  // bottom-right
    });

  }, 250);
};
/* -------------------------
   FLOATING HEARTS
-------------------------- */

const heartsContainer = document.querySelector(".hearts");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (4 + Math.random() * 4) + "s";
  heart.style.fontSize = (10 + Math.random() * 15) + "px";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);
}

setInterval(createHeart, 200);