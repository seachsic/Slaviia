document.addEventListener("DOMContentLoaded", () => {
  const productCards = document.querySelectorAll(".product-card");
  const modals = document.querySelectorAll(".modal");
  const closeBtns = document.querySelectorAll(".modal .close");

  // Відкрити модалку
  productCards.forEach(card => {
    const targetId = card.getAttribute("data-modal-target");
    const modal = document.getElementById(targetId);
    const btn = card.querySelector(".product-btn");

    btn.addEventListener("click", () => {
      modal.style.display = "block";
    });
  });

  // Закрити модалку
  closeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.closest(".modal").style.display = "none";
    });
  });

  // Закрити при кліку поза модалкою
  window.addEventListener("click", (event) => {
    modals.forEach(modal => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
});