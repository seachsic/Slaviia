// Навігація
document.getElementById("nav-placeholder").innerHTML = `
  <nav>
    <ul>
      <li><a href="index.html">Головна</a></li>
      <li><a href="products.html">Продукція</a></li>
      <li><a href="news.html">Новини</a></li>
      <li><a href="contacts.html">Контакти</a></li>
    </ul>
  </nav>
`;

// Футер
document.getElementById("footer-placeholder").innerHTML = `
  <footer>
    <div class="footer-content">
      <p>&copy; 2026 ТОВ "ОМПК Славія". Всі права захищені.</p>
      <p>Сайт розроблено з урахуванням сучасних стандартів доступності.</p>
    </div>
  </footer>
`;
// Дані про продукти
const products = {
  milk: { title: "Молоко пастеризоване", description: "Натуральне коров’яче молоко..." },
  kefir: { title: "Кефір", description: "Корисний кисломолочний продукт..." },
  cottage: { title: "Сир кисломолочний", description: "Свіжий домашній сир..." },
  hard: { title: "Твердий сир", description: "Витриманий сир із насиченим смаком..." },
  butter: { title: "Масло вершкове", description: "Високоякісне масло з вершків..." },
  yogurt: { title: "Йогурт", description: "Натуральний йогурт без добавок..." }
};



// Модальне вікно
const modal = document.getElementById("contactModal");
const btn = document.getElementById("contactBtn");
const close = document.getElementById("closeModal");

btn.onclick = () => { modal.style.display = "block"; }
close.onclick = () => { modal.style.display = "none"; }
window.onclick = (event) => { if (event.target === modal) modal.style.display = "none"; }
// Accordion logic
document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelectorAll(".accordion");
  accordions.forEach(acc => {
    acc.addEventListener("click", () => {
      acc.classList.toggle("active");
      const panel = acc.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("productModal");
  const titleEl = document.getElementById("productTitle");
  const descEl = document.getElementById("productDescription");
  const closeBtn = document.getElementById("closeProduct");

  // Відкриття модального вікна
  document.querySelectorAll("[data-modal-target]").forEach(btn => {
    btn.addEventListener("click", () => {
      const productKey = btn.getAttribute("data-product");
      if (productKey && products[productKey]) {
        titleEl.textContent = products[productKey].title;
        descEl.textContent = products[productKey].description;
      }
      modal.style.display = "block";
    });
  });

  // Закриття
  closeBtn.onclick = () => { modal.style.display = "none"; };
  window.onclick = (event) => { if (event.target === modal) modal.style.display = "none"; };
});
