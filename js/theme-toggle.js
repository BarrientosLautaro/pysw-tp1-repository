document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("modo-toggle");

  if (!toggle) {
    console.warn("No se encontró el botón de modo oscuro");
    return;
  }

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Alternar ícono
    if (document.body.classList.contains("dark-mode")) {
      toggle.textContent = "☀️ Modo Claro";
    } else {
      toggle.textContent = "🌙 Modo Oscuro";
    }
  });
});

