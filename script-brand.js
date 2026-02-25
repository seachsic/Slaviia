document.addEventListener("DOMContentLoaded", () => {
  const brandCards = document.querySelectorAll(".brand-card");
  const modals = document.querySelectorAll(".modal");
  const closeBtns = document.querySelectorAll(".modal .close");

  brandCards.forEach(card => {
    const targetId = card.getAttribute("data-modal-target");
    const modal = document.getElementById(targetId);
    const btn = card.querySelector(".brand-btn");

    btn.addEventListener("click", () => {
      modal.style.display = "flex";
    });
  });

  closeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.closest(".modal").style.display = "none";
    });
  });

  window.addEventListener("click", (event) => {
    modals.forEach(modal => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
});