const nombre = document.getElementById('');
console.log(nombre.innerHTML);

const tittle = document.querySelector("h1");
tittle.textContent = "Desafío ambiental";

document.querySelector("html").btn1 = function () {
  alert("Tu respuesta es correcta");
};
let miBoton = document.querySelector("button");
let miTitulo = document.querySelector("h1");

function estableceNombreUsuario() {
  let miNombre = prompt("Por favor, ingresa tu nombre.");
  localStorage.setItem("nombre", miNombre);
  miTitulo.textContent = "Bienvenido," + miNombre;
}
if (!localStorage.getItem("nombre")) {
  estableceNombreUsuario();
} else {
  let nombreAlmacenado = localStorage.getItem("nombre");
  miTitulo.textContent = "Bienvenido" + nombreAlmacenado;
}
miBoton.onclick = function () {
  estableceNombreUsuario();
};
