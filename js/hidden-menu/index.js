document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const hiddenMenu = document.getElementById("hiddenMenu");
  const closeMenu = document.getElementById("closeMenu");
  const menuOverlay = document.getElementById("menuOverlay");

  function openMenu() {
    hiddenMenu.classList.remove("hidden");
    menuOverlay.classList.remove("hidden");

    document.body.style.overflow = "hidden";
  }

  function closeMenuHandler() {
    hiddenMenu.classList.add("hidden");
    menuOverlay.classList.add("hidden");

    document.body.style.overflow = "";
  }

  menuToggle.addEventListener("click", openMenu);
  closeMenu.addEventListener("click", closeMenuHandler);
  menuOverlay.addEventListener("click", closeMenuHandler);

  // Закриття по Escape
  document.addEventListener("keydown", function (e) {
    if (!hiddenMenu.classList.contains("hidden") && e.key === "Escape") {
      closeMenuHandler();
    }
  });
});
