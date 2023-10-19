$(function () {
  $(".navbar-toggler").on("click", function (e) {
    $(".tm-header").toggleClass("show");
    e.stopPropagation();
  });

  $("html").click(function (e) {
    var header = document.getElementById("tm-header");

    if (!header.contains(e.target)) {
      $(".tm-header").removeClass("show");
    }
  });

  $("#tm-nav .nav-link").click(function (e) {
    $(".tm-header").removeClass("show");
  });
});

/**Indice*/
$(document).ready(function () {
  $('.tm-nav-link').click(function (e) {
    e.preventDefault();
    $(this).parent().toggleClass('active');
  });
});
/**end*/


/**cuadro de vista previa*/
function showPreview(container) {
  const preview = container.nextElementSibling;
  preview.classList.remove("hidden");
}

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("preview")) {
    event.target.classList.add("hidden");
  }
});

document.getElementById("preview").addEventListener("click", function () {
  if (event.target === this) {
    hidePreview();
  }
});
/**end*/


/**sopa de letra */
const sopaDeLetras = document.getElementById("sopaDeLetras");
const palabraEncontrada = document.getElementById("palabraEncontrada");
let letrasSeleccionadas = "";

sopaDeLetras.addEventListener("click", e => {
  const td = e.target;
  if (td.tagName === "TD") {
    const letra = td.textContent;
    letrasSeleccionadas += letra;
    td.classList.add("foundo");
  }
});
/**end*/
