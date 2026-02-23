// Навігація
document.getElementById("nav-placeholder").innerHTML = `
<nav>
  <ul>
    <li>
      <a href="index.html" class="home-link">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
             viewBox="0 0 24 24" fill="none" stroke="currentColor"
             stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
        Головна
      </a>
    </li>
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

// 🔹 Універсальна логіка для модальних вікон
document.addEventListener("DOMContentLoaded", () => {
  // Відкриття модальних вікон
  document.querySelectorAll("[data-modal-target]").forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-modal-target");
      const modal = document.getElementById(targetId);

      if (modal) {
        // Якщо це продукт — заповнюємо дані
        const productKey = btn.getAttribute("data-product");
        if (productKey && products[productKey]) {
          modal.querySelector("#productTitle").textContent = products[productKey].title;
          modal.querySelector("#productDescription").textContent = products[productKey].description;
        }
        modal.style.display = "block";
      }
    });
  });

  // Закриття модальних вікон
  document.querySelectorAll(".modal .close").forEach(closeBtn => {
    closeBtn.addEventListener("click", () => {
      closeBtn.closest(".modal").style.display = "none";
    });
  });

  // Закриття при кліку поза вікном
  window.addEventListener("click", (event) => {
    document.querySelectorAll(".modal").forEach(modal => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".timeline-item");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  items.forEach(item => observer.observe(item));
});


document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");
});

document.addEventListener("DOMContentLoaded", () => {
  // Відкриття модалок
  document.querySelectorAll("[data-modal-target]").forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-modal-target");
      const modal = document.getElementById(targetId);
      if (modal) modal.style.display = "block";
    });
  });

  // Відкриття субмодалок
  document.querySelectorAll("[data-submodal-target]").forEach(btn => {
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

document.querySelectorAll("[data-modal-target]").forEach(btn => {
  btn.addEventListener("click", () => {
    const targetId = btn.getAttribute("data-modal-target");
    const modal = document.getElementById(targetId);
    if (modal) modal.style.display = "block";
  });
});

document.querySelectorAll("[data-submodal-target]").forEach(btn => {
  btn.addEventListener("click", () => {
    const targetId = btn.getAttribute("data-submodal-target");
    const modal = document.getElementById(targetId);
    if (modal) modal.style.display = "block";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".testimonial-card");
  let currentIndex = 0;

  function showCard(index) {
    cards.forEach((card, i) => {
      card.classList.toggle("active", i === index);
    });
  }

  // Автоматична зміна кожні 5 секунд
  setInterval(() => {
    currentIndex = (currentIndex + 1) % cards.length;
    showCard(currentIndex);
  }, 5000);
});

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    showCard(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % cards.length;
    showCard(currentIndex);
  });

  // Автоматична прокрутка кожні 5 секунд
  setInterval(() => {
    currentIndex = (currentIndex + 1) % cards.length;
    showCard(currentIndex);
  }, 5000);

  