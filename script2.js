document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("reviewModal");
  const openBtn = document.getElementById("openReviewModal");
  const closeBtn = modal.querySelector(".close");

  // Відкрити модалку
  openBtn.addEventListener("click", () => {
    modal.style.display = "block";
    updateModalPosition();
  });

  // Закрити модалку
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Закрити при кліку поза модалкою
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  // Оновлення позиції при скролі
  window.addEventListener("scroll", updateModalPosition);

  function updateModalPosition() {
    const modalContent = modal.querySelector(".modal-content");
    const scrollY = window.scrollY;
    modalContent.style.marginTop = scrollY + 100 + "px"; 
    // модалка рухається разом зі сторінкою
  }
});