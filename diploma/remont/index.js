// ===== Анімація секцій =====
const sections = document.querySelectorAll(".section");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.2 }
);
sections.forEach((section) => observer.observe(section));

// ===== Модалка =====
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementById("close");
const prevModalBtn = document.getElementById("prev");
const nextModalBtn = document.getElementById("next");

let currentIndex = 0;

// закриття
closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
  document.body.style.overflow = "";
});

// кнопки навігації
prevModalBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
  modalImg.src = imageUrls[currentIndex].src;
});

nextModalBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % imageUrls.length;
  modalImg.src = imageUrls[currentIndex].src;
});

// закриття при кліку на фон
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
});

// керування з клавіатури
document.addEventListener("keydown", (e) => {
  if (!modal.classList.contains("active")) return;

  if (e.key === "Escape") {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
  if (e.key === "ArrowRight") {
    currentIndex = (currentIndex + 1) % imageUrls.length;
    modalImg.src = imageUrls[currentIndex].src;
  }
  if (e.key === "ArrowLeft") {
    currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
    modalImg.src = imageUrls[currentIndex].src;
  }
});
// открыть модалку
modal.classList.add("active");
document.body.classList.add("modal-open");

// закрыть модалку
modal.classList.remove("active");
document.body.classList.remove("modal-open");

// Глобальні змінні
let currentPosition = 0; // Поточна позиція прокрутки
let totalImages = 0; // Загальна кількість створених зображень
let visibleImages = 4; // Скільки зображень видно на екрані
let imageWidth = 215; // Ширина одного зображення + відступ
const gapSize = 15; // Відступ між зображеннями (однаковий для всіх розмірів екрана)

// Масив зображень буде переданий з PHP через змінну imageUrls

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
    imageBox.innerHTML = `<img src="${imageUrl}" alt="${imageAlt}" title="${imageAlt}" />`;
  });

  // Починаємо завантаження
  img.src = imageUrl;

  img.dataset.index = number - 1; // Зберігаємо індекс зображення

  // Додаємо обробник кліку для відкриття модального вікна
  imageBox.addEventListener("click", function () {
    modal.classList.add("active");

    modalImg.src = img.src;

    currentIndex = img.dataset.index;

    document.body.style.overflow = "hidden";
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

  // Якщо є ще картинки в масиві — додаємо наступну
  if (totalImages < imageUrls.length) {
    totalImages += 1;

    const newImage = createImage(totalImages);

    imagesRow.appendChild(newImage);
  }

  // Обчислюємо максимально можливу позицію після додавання (щоб коректно прокрутити)
  const maxPosition = Math.max(0, totalImages - visibleImages);

  // Якщо можна зрушити вправо — робимо це
  if (currentPosition < maxPosition) {
    currentPosition += 1;
  } else {
    // коли тільки що додали нову картинку і вже дійшли до кінця — зміщуємо на останню позицію
    currentPosition = maxPosition;
  }

  // Рахуємо реальні розміри для компенсації
  const containerSize = imagesRow.getBoundingClientRect();
  const visibleWidth = visibleImages * imageWidth;

  // Для останнього зображення відступ зайвий, тому віднімаємо його з загальної ширини
  const totalContentWidth = totalImages * imageWidth - gapSize;

  let translateX = currentPosition * imageWidth;

  // Якщо ми на останній позиції і є різниця між контейнером і контентом
  const maxTranslate = totalContentWidth - visibleWidth;
  if (translateX >= maxTranslate && containerSize.width > visibleWidth) {
    const excess = containerSize.width - visibleWidth;

    translateX = Math.max(0, maxTranslate - excess);
  }

  imagesRow.style.transform = `translateX(-${translateX}px)`;

  updateButtons();
}

// Рух ліворуч
function moveLeft() {
  if (currentPosition === 0) {
    return;
  }

  currentPosition -= 1;

  // Рухаємо контейнер
  const imagesRow = document.getElementById("imagesRow");

  // Рахуємо реальні розміри для компенсації
  const containerSize = imagesRow.getBoundingClientRect();
  const visibleWidth = visibleImages * imageWidth;

  // Для останнього зображення відступ зайвий, тому віднімаємо його з загальної ширини
  const totalContentWidth = totalImages * imageWidth - gapSize;

  let translateX = currentPosition * imageWidth;

  // Якщо ми на останній позиції і є різниця між контейнером і контентом
  const maxTranslate = totalContentWidth - visibleWidth;

  if (translateX >= maxTranslate && containerSize.width > visibleWidth) {
    const excess = containerSize.width - visibleWidth;

    translateX = Math.max(0, maxTranslate - excess);
  }

  imagesRow.style.transform = `translateX(-${translateX}px)`;

  updateButtons();
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
    imageWidth = 135; // 120px зображення + 15px відступ
  } else if (screenWidth <= 768) {
    visibleImages = 4;
    imageWidth = 165; // 150px зображення + 15px відступ
  } else {
    visibleImages = 4;
    imageWidth = 215; // 200px зображення + 15px відступ
  }

  // Перераховуємо позицію після зміни розміру
  const imagesRow = document.getElementById("imagesRow");

  // Рахуємо реальні розміри для компенсації
  const containerWidth = imagesRow.getBoundingClientRect().width;
  const visibleWidth = visibleImages * imageWidth;

  // Для останнього зображення відступ зайвий, тому віднімаємо його з загальної ширини
  const totalContentWidth = totalImages * imageWidth - gapSize;

  let translateX = currentPosition * imageWidth;

  // Якщо ми на останній позиції і є різниця між контейнером і контентом
  const maxTranslate = totalContentWidth - visibleWidth;

  if (translateX >= maxTranslate && containerWidth > visibleWidth) {
    const excess = containerWidth - visibleWidth;

    translateX = Math.max(0, maxTranslate - excess);
  }

  imagesRow.style.transform = `translateX(-${translateX}px)`;
}

// Ініціалізація при завантаженні сторінки
document.addEventListener("DOMContentLoaded", function () {
  console.log(imageUrls);

  // Перевіряємо чи передані дані з PHP
  if (typeof imageUrls === "undefined" || !Array.isArray(imageUrls)) {
    console.error("Дані зображень не передані з PHP або неправильний формат");
    return;
  }

  createInitialImages();
  updateResponsive();

  // Додаємо обробник зміни розміру вікна
  window.addEventListener("resize", updateResponsive);

  // Додаємо обробники для кнопок
  document.getElementById("btnLeft").addEventListener("click", moveLeft);
  document.getElementById("btnRight").addEventListener("click", moveRight);
});
