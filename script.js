// Auto-scroll sections every 5 seconds
let container = document.querySelector('.container');
let sections = document.querySelectorAll('section');
let index = 0;

setInterval(() => {
  index = (index + 1) % sections.length;
  sections[index].scrollIntoView({behavior: 'smooth'});
}, 5000);

// Floating hearts
for (let i = 0; i < 10; i++) {
  let heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (6 + Math.random() * 4) + 's';
  document.querySelector('.floating-container').appendChild(heart);
}

// Floating images
for (let i = 1; i <= 5; i++) {
  let img = document.createElement('img');
  img.src = 'images/photo' + i + '.jpg';
  img.style.left = Math.random() * 100 + 'vw';
  img.style.animationDuration = (8 + Math.random() * 4) + 's';
  document.querySelector('.floating-container').appendChild(img);
}
