// Espera a que la página cargue para ocultar la pantalla de carga
window.addEventListener("load", () => {
  const loadingScreen = document.getElementById("loading-screen");
  setTimeout(() => {
    loadingScreen.style.opacity = "0";
    setTimeout(() => {
      loadingScreen.style.display = "none";
    }, 400);
  }, 800);
});

// Efecto de aparición al hacer scroll
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    elements.forEach(el => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      const visiblePoint = 150;

      if (elementTop < windowHeight - visiblePoint) {
        el.classList.add("reveal-active");
      } else {
        el.classList.remove("reveal-active");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Activar en carga inicial
});
