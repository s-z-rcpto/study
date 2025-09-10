// Плавне прокручування до секцій при кліку на навігацію
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Анімація появи елементів при прокрутці
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

// Спостереження за всіма елементами з класом fade-in
document.querySelectorAll(".fade-in").forEach((el) => {
  observer.observe(el);
});

// Зміна прозорості навбару при прокрутці
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.style.background = "rgba(0, 0, 0, 0.98)";
  } else {
    navbar.style.background = "rgba(0, 0, 0, 0.95)";
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
