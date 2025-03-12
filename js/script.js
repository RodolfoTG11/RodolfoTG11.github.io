// Mostrar alerta al cargar la página solo en index
if (window.location.pathname.includes("index.html") || window.location.pathname === "/") {
    alert('¡Bienvenido a Cecile BakeryRD! Descubre nuestros deliciosos postres.');
  }
  
  // Función para alternar modo oscuro
  function toggleDarkMode() {
    document.body.classList.toggle('modo-oscuro');
    const modoOscuroActivo = document.body.classList.contains('modo-oscuro');
    localStorage.setItem('modoOscuro', modoOscuroActivo ? 'true' : 'false');
  }
  
  // Verificar si modo oscuro estaba activado antes
  window.addEventListener('DOMContentLoaded', () => {
    const modoOscuroGuardado = localStorage.getItem('modoOscuro');
    if (modoOscuroGuardado === 'true') {
      document.body.classList.add('modo-oscuro');
    }
  });
  
  // Efectos hover en imágenes del menú
  const postres = document.querySelectorAll('#menu img');
  postres.forEach(img => {
    img.addEventListener('mouseover', () => {
      img.style.transform = 'scale(1.05)';
      img.style.transition = '0.3s';
    });
    img.addEventListener('mouseout', () => {
      img.style.transform = 'scale(1)';
    });
  });
  
  // Modal personalizado de promoción (opcional)
  function mostrarModalPersonalizado() {
    const modal = document.createElement('div');
    modal.classList.add('modal-personalizado');
    modal.innerHTML = `
      <div class="modal-contenido">
        <h3>Promoción especial</h3>
        <p>¡Esta semana los cupcakes tienen un 10% de descuento!</p>
        <button onclick="cerrarModal()">Cerrar</button>
      </div>
    `;
    document.body.appendChild(modal);
  }
  
  function cerrarModal() {
    const modal = document.querySelector('.modal-personalizado');
    if (modal) modal.remove();
  }
  // Carrusel de fondo automático
let slides = document.querySelectorAll('.slide');
let currentSlide = 0;

setInterval(() => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}, 4000); // cambia cada 4 segundos
