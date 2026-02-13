const noBtn = document.getElementById("btn2");
const yesBtn = document.getElementById("btn1");
const image = document.getElementById("mainImage");
const message = document.getElementById("message");

let clickCount = 0;
let hoverCount = 0;

/* -------------------------
   IMAGES + TEXTS
-------------------------- */
const images = [
  "images/puchipie.gif",
  "images/naw.gif",
  "images/nottynodoey.gif",
  "images/gun.gif",
  "images/phirseno.gif"
];

const texts = [
  "Must have been the wind!",
  "WHAATTTTT!!!!",
  "No Notty Doey Babyyy!",
  "HMMMM!??? 😠😠",
  "Rwarrrrrrr!!!!"
];

/* -------------------------
   CLICK LOGIC
-------------------------- */
let attemptCount = 0;

noBtn.addEventListener("click", () => {

  attemptCount++;

  // First 5 attempts → image + YES grows
  if (attemptCount <= 5) {
    image.src = images[attemptCount - 1];
    message.textContent = texts[attemptCount - 1];

    yesBtn.style.padding = `${12 + attemptCount * 6}px ${28 + attemptCount * 10}px`;
    yesBtn.style.fontSize = `${16 + attemptCount * 3}px`;
    return;
  }

});

noBtn.addEventListener("mouseenter", () => {

  if (attemptCount < 5) return;

  attemptCount++;

  // Attempts 6–10 → run
  if (attemptCount <= 16) {
    moveButton();
    return;
  }

  // After 10 attempts → disappear
  noBtn.style.display = "none";
  image.src = "images/proposal.gif";
  message.textContent = "You only have one choice now 😌💖";

});

/* -------------------------
   MOVE BUTTON SAFELY
-------------------------- */
function moveButton() {

  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const maxX = 500 - btnWidth;
  const maxY = 500 - btnHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  // Switch to fixed ONLY when moving
  noBtn.style.position = "fixed";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

}

if (yesBtn) {
  yesBtn.addEventListener("click", () => {
    window.location.href = "yes.html";
  });
}

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
  heart.style.fontSize = (8 + Math.random() * 12) + "px";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);
}

setInterval(createHeart, 200);