// Додаткова інтерактивність (за бажанням)
document.addEventListener("DOMContentLoaded", () => {
  // Hover ефекти
  const categories = document.querySelectorAll(".category");
  const products = document.querySelectorAll(".product");

  categories.forEach((category) => {
    category.addEventListener("mouseenter", () => {
      category.style.transform = "scale(1.05)";
    });

    category.addEventListener("mouseleave", () => {
      category.style.transform = "scale(1)";
    });
  });

  products.forEach((product) => {
    product.addEventListener("mouseenter", () => {
      product.style.transform = "scale(1.02)";
    });

    product.addEventListener("mouseleave", () => {
      product.style.transform = "scale(1)";
    });
  });
});

function addToCart(button) {
  // Знаходимо батьківський елемент товару
  const productElement = button.closest(".product");

  // Зчитуємо дані з data-атрибутів
  const product = {
    id: productElement.dataset.id,
    name: productElement.dataset.name,
    price: parseFloat(productElement.dataset.price),
    description: productElement.dataset.description,
  };

  // Додаємо товар до кошика
  cart.addToCart(product);
}

const form = document.getElementById("feedbackForm");
const responseMessage = document.getElementById("responseMessage");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  const response = await fetch("send-feedback.php", {
    method: "POST",
    body: formData,
  });

  const result = await response.text();
  if (result === "success") {
    responseMessage.style.display = "block";
    form.reset();
  } else {
    alert("Помилка! Спробуйте ще раз.");
  }
});
