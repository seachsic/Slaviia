document.addEventListener("DOMContentLoaded", () => {
  // Відкриття модалок у секції Новини
  document.querySelectorAll(".news-btn[data-modal-target]").forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-modal-target");
      const modal = document.getElementById(targetId);
      if (modal) modal.style.display = "block";
    });
  });

  // Відкриття субмодалок у секції Новини
  document.querySelectorAll(".news-btn[data-submodal-target]").forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-submodal-target");
      const modal = document.getElementById(targetId);
      if (modal) modal.style.display = "block";
    });
  });

  // Закриття модалок
  document.querySelectorAll(".modal .close").forEach(closeBtn => {
    closeBtn.addEventListener("click", () => {
      closeBtn.closest(".modal").style.display = "none";
    });
  });

  // Закриття при кліку поза модальним вікном
  window.addEventListener("click", (event) => {
    document.querySelectorAll(".modal").forEach(modal => {
      if (event.target === modal) modal.style.display = "none";
    });
  });
});