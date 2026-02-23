document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("productModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDetails = document.getElementById("modalDetails");
  const modalImg = document.getElementById("modalImg");
  const closeBtn = modal.querySelector(".close");

  document.querySelectorAll(".product-card .product-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".product-card");
      modalTitle.textContent = card.dataset.title;
      modalDetails.textContent = card.dataset.details;
      modalImg.src = card.dataset.img;
      modal.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});