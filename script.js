let timeLeft = 30;
const countdownEl = document.getElementById("countdown");
const downloadBtn = document.getElementById("downloadBtn");

const timer = setInterval(() => {
  timeLeft--;
  countdownEl.textContent = timeLeft;

  if (timeLeft <= 0) {
    clearInterval(timer);
    countdownEl.style.display = "none";
    downloadBtn.style.display = "inline-block";
  }
}, 1000);
