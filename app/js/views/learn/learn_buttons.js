/**
 * muestra todas las actividades (oval-btn) en la sección principal learn
 */
export const renderButtons = (arrActivities, color) => {
  return `
    <section id="button-section" class="pb4"> 
      ${arrActivities.map(activitie => {
        let classButton = activitie.icono === 'game' ? 'game-btn' : 'oval-btn';

        if (activitie.terminado) {
          return `
            <button class="${classButton} ${color} ${activitie.icono}" 
              aria-label="${activitie.alabel}" 
              onclick="navigateTo('${activitie.link}','INIT',${activitie.id})">
            </button>`;
        } else {
          return `
            <button class="${classButton} ${activitie.icono} locked" 
              aria-label="${activitie.alabel} (bloqueado)">
            </button>`;
        }
      }).join('')}
    </section>
  `;
};