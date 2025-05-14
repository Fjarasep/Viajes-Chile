// Ejecuta el código una vez que la estructura HTML esté lista
$(document).ready(function () {

  // Alerta al enviar el formulario
  $("#formulario-contacto").on("submit", function (e) {
    e.preventDefault();
    alert("Formulario enviado. ¡Gracias por contactarnos!");
  });

  // Tooltips en íconos de redes sociales
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.forEach(function (tooltipTriggerEl) {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });

});