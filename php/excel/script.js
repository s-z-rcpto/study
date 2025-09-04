// Функція пошуку товарів
function initSearch() {
  const searchInput = document.getElementById("searchInput");
  const searchInfo = document.getElementById("searchInfo");
  const tableRows = document.querySelectorAll(".products-table tbody tr");
  const categoryCards = document.querySelectorAll(".product-card");

  if (searchInput == null) {
    return;
  }

  // Функція фільтрації таблиці
  function filterTable(searchTerm) {
    let visibleRows = 0;

    tableRows.forEach((row) => {
      const cells = row.querySelectorAll("td");
      const rowText = Array.from(cells)
        .map((cell) => cell.textContent.toLowerCase())
        .join(" ");

      if (rowText.includes(searchTerm.toLowerCase())) {
        row.style.display = "";

        visibleRows += 1;
      } else {
        row.style.display = "none";
      }
    });

    return visibleRows;
  }

  // Функція фільтрації карток
  function filterCards(searchTerm) {
    let visibleCards = 0;

    const categorySections = document.querySelectorAll(".category-section");

    categorySections.forEach((section) => {
      const cards = section.querySelectorAll(".product-card");

      let visibleCardsInCategory = 0;

      cards.forEach((card) => {
        const cardText = card.textContent.toLowerCase();

        if (cardText.includes(searchTerm.toLowerCase())) {
          card.style.display = "";

          visibleCardsInCategory += 1;
          visibleCards += 1;
        } else {
          card.style.display = "none";
        }
      });

      // Ховаємо всю категорію якщо немає видимих карток
      if (visibleCardsInCategory === 0) {
        section.style.display = "none";
      } else {
        section.style.display = "";
      }
    });

    return visibleCards;
  }

  // Обробник події пошуку
  function handleSearch() {
    const searchTerm = searchInput.value.trim();

    if (searchTerm === "") {
      // Показуємо всі елементи
      tableRows.forEach((row) => (row.style.display = ""));
      categoryCards.forEach((card) => (card.style.display = ""));

      document
        .querySelectorAll(".category-section")
        .forEach((section) => (section.style.display = ""));

      searchInfo.textContent = "";

      return;
    }

    // Фільтруємо таблицю та картки
    const visibleTableRows = filterTable(searchTerm);
    const visibleCards = filterCards(searchTerm);

    // Оновлюємо інформацію про результати
    const totalVisible = visibleTableRows + visibleCards;

    if (totalVisible === 0) {
      searchInfo.textContent = "Нічого не знайдено";
      searchInfo.style.color = "#e74c3c";
    } else {
      searchInfo.textContent = `Знайдено: ${totalVisible} результат(ів)`;
      searchInfo.style.color = "#27ae60";
    }
  }

  // Додаємо обробники подій
  searchInput.addEventListener("input", handleSearch);
  searchInput.addEventListener("keyup", handleSearch);
}

// Ініціалізація після завантаження DOM
document.addEventListener("DOMContentLoaded", initSearch);
