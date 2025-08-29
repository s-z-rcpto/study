// Глобальні змінні
let currentPosition = 0; // Поточна позиція прокрутки
let totalImages = 0; // Загальна кількість створених зображень
let visibleImages = 4; // Скільки зображень видно на екрані
let imageWidth = 215; // Ширина одного зображення + відступ

// Масив об'єктів з шляхом і alt
const imageUrls = [
  { src: "https://picsum.photos/400/400?random=1", alt: "Зображення 1" },
  { src: "https://picsum.photos/400/400?random=2", alt: "Зображення 2" },
  { src: "https://picsum.photos/400/400?random=3", alt: "Зображення 3" },
  { src: "https://picsum.photos/400/400?random=4", alt: "Зображення 4" },
  { src: "https://picsum.photos/400/400?random=5", alt: "Зображення 5" },
  { src: "https://picsum.photos/400/400?random=6", alt: "Зображення 6" },
  { src: "https://picsum.photos/400/400?random=7", alt: "Зображення 7" },
  { src: "https://picsum.photos/400/400?random=8", alt: "Зображення 8" },
  { src: "https://picsum.photos/400/400?random=9", alt: "Зображення 9" },
  { src: "https://picsum.photos/400/400?random=10", alt: "Зображення 10" },
  { src: "https://picsum.photos/400/400?random=11", alt: "Зображення 11" },
  { src: "https://picsum.photos/400/400?random=12", alt: "Зображення 12" },
];

// Функція створення нового зображення
function createImage(number) {
  const imageBox = document.createElement("div");

  imageBox.className = "image-box";

  // Створюємо placeholder з індикатором завантаження
  const placeholder = document.createElement("div");

  placeholder.className = "image-placeholder";
  placeholder.innerHTML = `<div class="loading-spinner"></div>`;

  imageBox.appendChild(placeholder);

  // Отримуємо об'єкт зображення
  const imageObj = getImageObj(number);
  const imageUrl = imageObj.src;
  const imageAlt = imageObj.alt;

  // Завантаження зображення
  const img = document.createElement("img");

  img.addEventListener("load", function () {
    // Видаляємо placeholder і додаємо зображення
    imageBox.innerHTML = `<img src="${imageUrl}" alt="${imageAlt}" />`;
  });

  // Починаємо завантаження
  img.src = imageUrl;

  // Додаємо обробник кліку для відкриття модального вікна
  imageBox.addEventListener("click", function () {
    openModal(number, imageUrl, imageAlt);
  });

  return imageBox;
}

// Функція отримання об'єкта зображення
function getImageObj(number) {
  if (number <= imageUrls.length) {
    return imageUrls[number - 1];
  } else {
    return imageUrls[imageUrls.length - 1];
  }
}

// Створення початкових зображень
function createInitialImages() {
  const imagesRow = document.getElementById("imagesRow");

  // Створюємо перші 10 зображень (4-5 видимих + 2 прихованих)
  for (let i = 1; i <= 7; i++) {
    const image = createImage(i);

    imagesRow.appendChild(image);

    totalImages += 1;
  }

  updateButtons();
}

// Рух праворуч
function moveRight() {
  const imagesRow = document.getElementById("imagesRow");
  const maxPosition = totalImages - visibleImages;

  // Якщо всі зображення з масиву вже показані, не рухаємо далі
  if (totalImages >= imageUrls.length && currentPosition >= maxPosition) {
    updateButtons();
    return;
  }

  if (currentPosition < maxPosition) {
    currentPosition += 1;
  } else {
    // Створюємо нове зображення, якщо ще є у масиві
    if (totalImages < imageUrls.length) {
      totalImages += 1;

      const newImage = createImage(totalImages);

      imagesRow.appendChild(newImage);

      currentPosition += 1;
    }
  }

  imagesRow.style.transform = `translateX(-${currentPosition * imageWidth}px)`;

  updateButtons();
}

// Рух ліворуч
function moveLeft() {
  if (currentPosition > 0) {
    currentPosition -= 1;

    // Рухаємо контейнер
    const imagesRow = document.getElementById("imagesRow");

    imagesRow.style.transform = `translateX(-${
      currentPosition * imageWidth
    }px)`;

    updateButtons();
  }
}

// Оновлення стану кнопок
function updateButtons() {
  const btnLeft = document.getElementById("btnLeft");
  const btnRight = document.getElementById("btnRight");

  // Кнопка "Ліворуч" недоступна на початку
  btnLeft.disabled = currentPosition === 0;

  // Кнопка "Праворуч" недоступна, якщо всі зображення з масиву показані
  const maxPosition = imageUrls.length - visibleImages;

  btnRight.disabled =
    currentPosition >= maxPosition && totalImages >= imageUrls.length;
}

// Відкриття модального вікна
function openModal(imageNumber, imageUrl, imageAlt) {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const modalInfo = document.getElementById("modalInfo");

  // Створюємо спінер по центру контейнера
  modalImage.innerHTML = `
    <div class="modal-spinner-center">
      <div class="loading-spinner"></div>
    </div>
  `;

  // Створюємо велике зображення (800x800 для кращої якості)
  const largeImageUrl = imageUrl.replace("400/400", "800/800");

  const img = document.createElement("img");

  img.addEventListener("load", function () {
    modalImage.innerHTML = `<img src="${largeImageUrl}" alt="${imageAlt}" />`;
  });

  img.src = largeImageUrl;

  // Оновлюємо інформацію
  modalInfo.textContent = imageAlt;

  // Показуємо модальне вікно
  modal.classList.add("show");

  document.body.style.overflow = "hidden"; // Блокуємо прокрутку фону
}

// Закриття модального вікна
function closeModal(event) {
  // Якщо клік був по самому контенту модального вікна, не закриваємо
  if (
    event != null &&
    event.target.closest(".modal-content") &&
    !event.target.classList.contains("modal-close")
  ) {
    return;
  }

  const modal = document.getElementById("imageModal");

  modal.classList.remove("show");

  document.body.style.overflow = ""; // Відновлюємо прокрутку фону
}

// Закриття модального вікна по клавіші Escape
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});

function updateResponsive() {
  const screenWidth = window.innerWidth;

  if (screenWidth <= 480) {
    visibleImages = 3;
    imageWidth = 135; // 120px + 15px gap
  } else if (screenWidth <= 768) {
    visibleImages = 4;
    imageWidth = 165; // 150px + 15px gap
  } else {
    visibleImages = 4;
    imageWidth = 215; // 200px + 15px gap
  }

  // Перераховуємо позицію після зміни розміру
  const imagesRow = document.getElementById("imagesRow");

  imagesRow.style.transform = `translateX(-${currentPosition * imageWidth}px)`;
}

// Ініціалізація при завантаженні сторінки
document.addEventListener("DOMContentLoaded", function () {
  createInitialImages();
  updateResponsive();

  // Додаємо обробник зміни розміру вікна
  window.addEventListener("resize", updateResponsive);

  // Додаємо обробники для кнопок
  document.getElementById("btnLeft").addEventListener("click", moveLeft);
  document.getElementById("btnRight").addEventListener("click", moveRight);

  // Додаємо обробник для закриття модального вікна по кліку на фон
  document
    .getElementById("imageModal")
    .addEventListener("click", function (event) {
      if (
        event.target === this ||
        (event.target.classList &&
          event.target.classList.contains("modal-close"))
      ) {
        closeModal(event);
      }
    });

  // Додаємо обробник для кнопки закриття модального вікна
  document
    .querySelector(".modal-close")
    .addEventListener("click", function (event) {
      closeModal(event);
    });
});
