document.addEventListener("DOMContentLoaded", function () {
  const carouselInner = document.getElementById("carousel-inner");

  // Завантажуємо список зображень з PHP
  fetch("get-images.php")
    .then((response) => response.json())
    .then((images) => {
      if (images.length === 0) {
        carouselInner.innerHTML = `<div class="text-center">Зображень не знайдено</div>`;
        return;
      }

      // Додаємо зображення до каруселі
      images.forEach((src, index) => {
        const carouselItem = document.createElement("div");

        carouselItem.className = `carousel-item ${index === 0 ? "active" : ""}`; // Перше зображення — активне
        carouselItem.innerHTML = `
          <img src="${src}" class="d-block w-100" alt="Image ${index + 1}">
        `;

        carouselInner.appendChild(carouselItem);
      });
    })
    .catch((error) => {
      console.error("Помилка завантаження зображень:", error);

      carouselInner.innerHTML = `<div class="text-center">Помилка завантаження зображень</div>`;
    });
});
