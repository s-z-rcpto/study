document.addEventListener("DOMContentLoaded", function () {
  const track = document.getElementById("carousel-track");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  let currentIndex = 0; // Початковий індекс каруселі
  let itemsPerScreen = 3; // Кількість елементів на екрані

  // Завантажуємо список зображень з PHP
  fetch("get-images.php")
    .then((response) => response.json())
    .then((images) => {
      // Додаємо зображення в карусель
      images.forEach((src) => {
        const item = document.createElement("div");

        item.classList.add("carousel-item");

        item.innerHTML = `<img src="${src}" alt="Image">`;

        track.appendChild(item);
      });

      // Розраховуємо ширину каруселі
      updateCarousel();
    });

  // Оновлення позиції каруселі
  function updateCarousel() {
    const totalItems = track.children.length;
    const trackWidth = (totalItems / itemsPerScreen) * 100;

    track.style.width = `${trackWidth}%`;

    const offset = -currentIndex * (100 / itemsPerScreen);

    track.style.transform = `translateX(${offset}%)`;
  }

  // Події для кнопок
  prevBtn.addEventListener("click", () => {
    const totalItems = track.children.length;

    if (currentIndex > 0) {
      currentIndex -= 1;

      updateCarousel();
    }
  });

  nextBtn.addEventListener("click", () => {
    const totalItems = track.children.length;

    if (currentIndex < totalItems - itemsPerScreen) {
      currentIndex += 1;

      updateCarousel();
    }
  });

  window.addEventListener("resize", () => {
    // Оновлення кількості елементів на екрані при зміні розміру вікна
    if (window.innerWidth <= 600) {
      itemsPerScreen = 1;
    } else if (window.innerWidth <= 900) {
      itemsPerScreen = 2;
    } else {
      itemsPerScreen = 3;
    }

    updateCarousel();
  });
});
