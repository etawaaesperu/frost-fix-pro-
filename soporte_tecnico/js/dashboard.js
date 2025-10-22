// dashboard.js -> carga contenido simple según selección y controla menú colapsable
document.addEventListener('DOMContentLoaded', ()=>{
  // protección simple: redirige si no hay sesión
  const user = localStorage.getItem('soporte_user');
  // If the login takes the user to html/dashboard.html, the check below allows local testing in VS Code.
  if (!user) {
    // Allow testing by not redirecting immediately when opened from file system; comment next line if you want strict redirect.
    // location.href = 'login.html';
  } else {
    const nameSpan = document.getElementById('userName');
    if (nameSpan) nameSpan.textContent = user;
  }

  document.querySelectorAll('.nav-item').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const action = btn.dataset.action;
      loadPanel(action);
    });
  });

  const logout = document.getElementById('logoutBtn');
  if (logout) logout.addEventListener('click', ()=>{
    localStorage.removeItem('soporte_user');
    location.href = 'login.html';
  });

  // hamburger toggle for collapsing sidebar
  const hambtn = document.getElementById('hambtn');
  const sidebar = document.getElementById('sidebar');
  if (hambtn && sidebar) {
    hambtn.addEventListener('click', ()=>{
      sidebar.classList.toggle('collapsed');
    });
  }
});

function loadPanel(action) {
  const area = document.getElementById('panelArea');
  const title = document.getElementById('contentTitle');
  title.textContent = {
    registrar: 'Registrar equipo',
    servicios: 'Servicios disponibles',
    historial: 'Historial de reparaciones',
    inventario: 'Inventario de piezas',
    clientes: 'Clientes',
    config: 'Configuración'
  }[action] || 'Panel';

  area.innerHTML = `<h3>${title.textContent}</h3>
    <p>Contenido demo para <strong>${action}</strong>. Aquí puedes integrar formularios o tablas.</p>`;
}
