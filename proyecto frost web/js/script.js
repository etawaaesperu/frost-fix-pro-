// === Validación básica del login ===
function validarLogin(event) {
  event.preventDefault();

  const usuario = document.getElementById("usuario").value;
  const clave = document.getElementById("clave").value;

  // 🔹 Puedes modificar estos datos o conectarlo a tu base de datos después
  const usuarioCorrecto = "admin";
  const claveCorrecta = "admin";

  if (usuario === usuarioCorrecto && clave === claveCorrecta) {
    // Guarda sesión (puedes cambiar esto más adelante por token o SQL)
    localStorage.setItem("usuario", usuario);
    window.location.href = "olimpico.html";
  } else {
    alert("Usuario o contraseña incorrectos");
  }
}

// === Interfaz principal ===
function abrirOpcion(nombre) {
  // 🔹 Aquí luego podrás conectar con tus vistas o controladores MVC
  alert("Abrir " + nombre);
}

function logout() {
  // Limpia sesión y regresa al login
  localStorage.removeItem("usuario");
  window.location.href = "login.html";
}

// === Protección del panel (si no hay sesión, redirige) ===
window.onload = () => {
  const paginaActual = window.location.pathname.split("/").pop();

  if (paginaActual === "olimpico.html" && !localStorage.getItem("usuario")) {
    window.location.href = "login.html";
  }
};
// === Fin del script === 