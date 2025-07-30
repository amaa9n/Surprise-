let sections = document.querySelectorAll("section");
let currentIndex = 0;
let music = document.getElementById("bg-music");

// Wait for tap to start music + auto-scroll
document.getElementById("start-screen").addEventListener("click", () => {
  music.play();
  document.getElementById("start-screen").style.display = "none";

  // Auto-scroll every 5 seconds
  setInterval(() => {
    currentIndex = (currentIndex + 1) % sections.length;
    window.scrollTo({
      top: sections[currentIndex].offsetTop,
      behavior: "smooth"
    });
  }, 5000);
});
