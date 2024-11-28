const animatedElements = document.querySelectorAll(".anim-items");

if (animatedElements.length > 0) {
  window.addEventListener("scroll", animateOnScroll);

  function animateOnScroll() {
    for (const animatedElement of animatedElements) {
      const animatedElementHeight = animatedElement.offsetHeight;
      const animatedElementOffset = getOffset(animatedElement).top;
      const animatedStart = 4;

      let animatedElementPoint =
        window.innerHeight - animatedElementHeight / animatedStart;

      if (animatedElementHeight > window.innerHeight) {
        animatedElementPoint =
          window.innerHeight - window.innerHeight / animatedStart;
      }

      if (
        scrollY > animatedElementOffset - animatedElementPoint &&
        scrollY < animatedElementOffset + animatedElementHeight
      ) {
        animatedElement.classList.add("active");
      }
    }
  }

  function getOffset(element) {
    const rect = element.getBoundingClientRect();
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;

    return {
      top: rect.top + scrollY,
      left: rect.left + scrollX,
    };
  }

  animateOnScroll();
}

const scrollToTopButton = document.getElementById("scrollToTop");

// Відстежуємо скрол сторінки
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    scrollToTopButton.style.display = "block"; // Показуємо кнопку
  } else {
    scrollToTopButton.style.display = "none"; // Ховаємо кнопку
  }
});

// Скрол до верху при натисканні
scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Плавний скрол
  });
});
