/**
 * Aplica un efecto ondulado tipo serpiente a los botones de un contenedor.
 * @param {string|Element} container - Selector o nodo del contenedor.
 * @param {number[]} pattern - Array de desplazamientos en píxeles.
 */
export const setWave = (container, pattern = [0, -40, -70, -40, 0, 40, 70, 40, 0]) => {
  const contenedor =
    typeof container === 'string' ? document.querySelector(container) : container;
  if (!contenedor) return;

  const activityButtons = contenedor.querySelectorAll('button');
  activityButtons.forEach((btn, i) => {
    const offset = pattern[i % pattern.length];
    btn.style.left = `${offset}px`;
  });
};
