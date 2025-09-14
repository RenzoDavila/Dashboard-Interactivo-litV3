// Punto de entrada: importa el componente raíz y cualquier inicialización global.
import './app-root.js';
import './styles/global.scss';
// Si por alguna razón  no está en index.html, lo montamos aquí:
if (!document.querySelector('app-root')) {
  document.body.appendChild(document.createElement('app-root'));
}