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
    feedbackResponseMessage.style.color = "green";
    feedbackResponseMessage.style.display = "block";

    feedbackForm.reset();
  } else {
    alert("Помилка! Спробуйте ще раз.");
  }
});

const orderForm = document.getElementById("orderForm");
const orderResponseMessage = document.getElementById("orderResponseMessage");

orderForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const cart = [
    { name: "Продукт 1", quantity: 2, price: 100 },
    { name: "Продукт 2", quantity: 1, price: 200 },
    { name: "Продукт 3", quantity: 3, price: 150 },
  ];

  const products = cart
    .map(
      (item) => `${item.name} - ${item.quantity} шт. (${item.price} грн/шт.)`
    )
    .join("\n");

  const productsField = document.getElementById("products");

  productsField.value = products;

  const formData = new FormData(orderForm);

  const response = await fetch("send-order.php", {
    method: "POST",
    body: formData,
  });

  const result = await response.text();

  if (result === "success") {
    orderResponseMessage.style.color = "green";
    orderResponseMessage.style.display = "block";

    orderForm.reset();
  } else {
    alert("Помилка! Спробуйте ще раз.");
  }
});

// Об'єкт для зберігання товарів у кошику
const cart = {};

// Функція для оновлення кількості товару в кошику
function updateCart(productId, productData, delta) {
  if (!cart[productId]) {
    cart[productId] = { ...productData, quantity: 0 };
  }

  cart[productId].quantity += delta;

  // Якщо кількість стає 0 або менше, видаляємо товар із кошика
  if (cart[productId].quantity <= 0) {
    delete cart[productId];
  }
}

// Функція для оновлення інтерфейсу
function updateUI(orderElement, quantity) {
  const quantitySpan = orderElement.querySelector(".quantity");
  quantitySpan.textContent = quantity > 0 ? quantity : 0;

  updateCartSummary(); // Оновлення інформації про кошик
}

// Функція для оновлення інформації про кошик
function updateCartSummary() {
  const cartSummary = document.getElementById("cart-summary");
  const uniqueProducts = Object.keys(cart).length;

  if (uniqueProducts === 0) {
    cartSummary.textContent = "Кошик порожній";
    return;
  }

  const totalPrice = Object.values(cart).reduce(
    (sum, product) => sum + product.quantity * product.price,
    0
  );

  cartSummary.textContent = `У кошику ${uniqueProducts} унікальних найменувань на суму ${totalPrice.toFixed(
    2
  )} грн`;
}

// Слухачі для кнопок + і -
document.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("plus") ||
    event.target.classList.contains("minus")
  ) {
    const orderElement = event.target.closest(".order");
    const productId = orderElement.dataset.id;
    const productData = {
      name: orderElement.dataset.name,
      price: parseFloat(orderElement.dataset.price),
      description: orderElement.dataset.description,
    };

    const delta = event.target.classList.contains("plus") ? 1 : -1;

    // Оновлення кошика
    updateCart(productId, productData, delta);

    // Оновлення інтерфейсу
    const quantity = cart[productId]?.quantity || 0;

    updateUI(orderElement, quantity);

    console.log(cart); // Вивід кошика у консоль для перевірки
  }
});
