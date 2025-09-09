const gallery = document.querySelectorAll(".gallery img");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementById("close");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentIndex = 0;

// відкриття модального вікна
function openModal(index) {
  modal.classList.add("active");
  modalImg.src = gallery[index].src;
  currentIndex = index;
}

// Клік мишeю по зображуню в галереї
function onGalleryImageClick(event) {
  let index = Array.prototype.indexOf.call(gallery, event.target);
  openModal(index);
}

for (let i = 0; i < gallery.length; i++) {
  gallery[i].addEventListener("click", onGalleryImageClick);
}

// Закриття модального вікна
function closeModal() {
  modal.classList.remove("active");
}

if (closeBtn != null) {
  closeBtn.addEventListener("click", closeModal);
}

// Обробник події кліку по вікну
function onWindiwClick(event) {
  if (event.target === modal) {
    closeModal();
  }
}
window.addEventListener("click", onWindiwClick);

// Показати наступне забраження
function showNext() {
  currentIndex = (currentIndex + 1) % gallery.length;
  // 5 % 9 = 5 // 9 % 9 = 0
  modalImg.src = gallery[currentIndex].src;
}

if (nextBtn != null) {
  nextBtn.addEventListener("click", showNext);
}

// Показати попередне забраження
function showPrev() {
  currentIndex = (currentIndex - 1 + gallery.length) % gallery.length;
  //   (-1 + 9) % 9 = 1
  modalImg.src = gallery[currentIndex].src;
}

if (prevBtn != null) {
  prevBtn.addEventListener("click", showPrev);
}

// Закриття та прогортування за допомогою клавіатури
function keyControl(event) {
  if (event.key === "Escape") {
    closeModal();
  } else if (event.key === "ArrowRight") {
    showNext();
  } else if (event.key === "ArrowLeft") {
    showPrev();
  }
}

document.addEventListener("keydown", keyControl);

// кнопка

const scrollToTopButton = document.getElementById("scrollToTopBtn");

// При кліку – плавно скролимо вгору
scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Показуємо/ховаємо кнопку залежно від скролу
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

const toggle = document.getElementById("menu-button");
const menu = document.getElementById("menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});