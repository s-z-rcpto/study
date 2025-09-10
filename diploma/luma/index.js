// Скрипт для мобільного меню
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Закриття мобільного меню при кліку на посилання
document.querySelectorAll("#mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

// Зміна стилю хедера при скролі
const header = document.getElementById("header");
window.onscroll = function () {
  if (window.scrollY > 50) {
    header.classList.add("py-2");
    header.classList.remove("py-4");
  } else {
    header.classList.add("py-4");
    header.classList.remove("py-2");
  }
};

// Кнопка "Вгору"
const toTopButton = document.getElementById("to-top-button");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    toTopButton.classList.remove("hidden");
    setTimeout(() => {
      toTopButton.classList.remove("opacity-0", "translate-y-4");
    }, 10);
  } else {
    toTopButton.classList.add("opacity-0", "translate-y-4");
    setTimeout(() => {
      toTopButton.classList.add("hidden");
    }, 300);
  }
});

const feedbackForm = document.getElementById("feedbackForm");
const feedbackResponseMessage = document.getElementById(
  "feedbackResponseMessage"
);

feedbackForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(feedbackForm);

  const response = await fetch("send-feedback.php", {
    method: "POST",
    body: formData,
  });

  const result = await response.text();

  if (result === "success") {
    feedbackResponseMessage.style.color = "#f4d03f";
    feedbackResponseMessage.style.display = "block";

    feedbackForm.reset();
  } else {
    alert("Помилка! Спробуйте ще раз.");
  }
});
