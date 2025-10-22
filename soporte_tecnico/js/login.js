// login.js -> maneja login, register y recover (simulación para front-end)
document.addEventListener('DOMContentLoaded', ()=> {
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', e=>{
      e.preventDefault();
      const u = document.getElementById('usuario').value.trim();
      const p = document.getElementById('clave').value.trim();
      // Ajusta las credenciales de prueba si quieres
      if (u === 'admin' && p === 'admin') {
        localStorage.setItem('soporte_user', u);
        // Bloque de redirección comentado para usar cuando desees activarlo
        // window.location.href = 'html/dashboard.html';
        // En entorno actual, redirigimos a HTML relativo de prueba:
        window.location.href = 'html/dashboard.html';
      } else {
        const err = document.getElementById('loginError');
        err.textContent = 'Usuario o contraseña incorrectos.';
      }
    });
  }

  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', e=>{
      e.preventDefault();
      const p1 = document.getElementById('pass1').value;
      const p2 = document.getElementById('pass2').value;
      if (p1 !== p2) {
        document.getElementById('registerMsg').textContent = 'Las contraseñas no coinciden.';
        return;
      }
      const user = { user: document.getElementById('newUser').value, email: document.getElementById('email').value };
      localStorage.setItem('soporte_newuser', JSON.stringify(user));
      document.getElementById('registerMsg').textContent = 'Cuenta creada (simulada). Ve al login.';
      setTimeout(()=> window.location.href = 'login.html', 1200);
    });
  }

  const recoverForm = document.getElementById('recoverForm');
  if (recoverForm) {
    recoverForm.addEventListener('submit', e=>{
      e.preventDefault();
      const mail = document.getElementById('emailRecover').value;
      document.getElementById('recoverMsg').textContent = 'Si existe una cuenta con ese correo, recibirás un enlace.';
    });
  }
});
