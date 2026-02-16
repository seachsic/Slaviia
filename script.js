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
  milk: {
    title: "Молоко пастеризоване",
    description: "Натуральне коров’яче молоко, без домішок, зберігає всі корисні властивості."
  },
  kefir: {
    title: "Кефір",
    description: "Корисний кисломолочний продукт, багатий на пробіотики."
  },
  cottage: {
    title: "Сир кисломолочний",
    description: "Свіжий домашній сир з ніжною текстурою, ідеальний для сніданку."
  },
  hard: {
    title: "Твердий сир",
    description: "Витриманий сир із насиченим смаком, багатий на кальцій."
  },
  butter: {
    title: "Масло вершкове",
    description: "Високоякісне масло з вершків, має насичений смак."
  },
  yogurt: {
    title: "Йогурт",
    description: "Натуральний йогурт без добавок, корисний для травлення."
  }
};

// Модальне вікно
const modal = document.getElementById("productModal");
const closeBtn = document.getElementById("closeProduct");
const title = document.getElementById("productTitle");
const description = document.getElementById("productDescription");

document.querySelectorAll(".product-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const productKey = btn.getAttribute("data-product");
    title.textContent = products[productKey].title;
    description.textContent = products[productKey].description;
    modal.style.display = "block";
  });
});

closeBtn.onclick = () => { modal.style.display = "none"; }
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

