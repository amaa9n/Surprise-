let sections = document.querySelectorAll("section");
let currentIndex = 0;
let startScreen = document.getElementById("start-screen");

startScreen.addEventListener("click", () => {
  // Show and start YouTube music
  document.getElementById("music-container").style.display = "block";
  startScreen.style.display = "none";

  // Start auto-scroll
  setInterval(() => {
    currentIndex = (currentIndex + 1) % sections.length;
    window.scrollTo({
      top: sections[currentIndex].offsetTop,
      behavior: "smooth"
    });
  }, 5000);
});
