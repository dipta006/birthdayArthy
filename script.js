const slides = document.querySelectorAll(".slide");
const container = document.getElementById("container");
const navigation = document.getElementById("navigation");

const backgrounds = [
    'url(img/picture1.jpg)',
    'url(img/picture2.jpg)',
    'url(img/picture3.jpg)'
];

let currentIndex = 0;

function updateSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });

  container.style.backgroundImage = backgrounds[index];

  const navButtons = document.querySelectorAll(".nav-btn");
  navButtons.forEach((btn, i) => {
    btn.classList.toggle("active", i === index);
  });
}

slides.forEach((_, index) => {
  const navBtn = document.createElement("button");
  navBtn.classList.add("nav-btn");
  if (index === 0) navBtn.classList.add("active");
  navBtn.addEventListener("click", () => {
    currentIndex = index;
    updateSlide(currentIndex);
  });
  navigation.appendChild(navBtn);
});

updateSlide(currentIndex);
