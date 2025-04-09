document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formulario-contacto");
    const spinner = document.getElementById("spinner");
    const modal = document.getElementById("modal-confirmacion");
    const btnCerrar = document.getElementById("btn-cerrar-modal");
  
    formulario.addEventListener("submit", (e) => {
      e.preventDefault(); // Evita que recargue la página
  
      // Mostrar spinner
      spinner.style.display = "block";
  
      // Deshabilitar el botón de enviar
      formulario.querySelector(".btn-enviar").disabled = true;
  
      // Simular un envío (2 segundos)
      setTimeout(() => {
        spinner.style.display = "none"; // Ocultar spinner
        modal.style.display = "flex";   // Mostrar modal
  
        // Resetear formulario
        formulario.reset();
        formulario.querySelector(".btn-enviar").disabled = false;
      }, 2000);
    });
  
    // Cerrar modal
    btnCerrar.addEventListener("click", () => {
      modal.style.display = "none";
    });
  });
  