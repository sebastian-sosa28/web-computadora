document.addEventListener('DOMContentLoaded', () => {
  // Crea el elemento del cursor automáticamente en la página
  const cursor = document.createElement('div');
  cursor.id = 'custom-cursor';
  
  // RUTA DE TU IMAGEN (asegúrate de que apunte a donde guardes la nave)
  cursor.innerHTML = `<img src="nave.svg" alt="cursor">`;
  document.body.appendChild(cursor);

  // Mueve la nave con el mouse
  window.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });

  // Animaciones al hacer clic
  window.addEventListener('mousedown', () => cursor.classList.add('clicking'));
  window.addEventListener('mouseup', () => cursor.classList.remove('clicking'));

  // Ocultar al salir de la ventana
  document.addEventListener('mouseleave', () => cursor.style.opacity = '0');
  document.addEventListener('mouseenter', () => cursor.style.opacity = '1');
});








