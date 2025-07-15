import { renderButtons } from './learn_buttons.js';
import { readAll, getDataUnity } from '../../modules/storageService.js';

export const view = () => {
  const dataUnity = getDataUnity();
  const arrDataActivities = readAll('arrActivities');
  return `
    <!-- CONTENIDO ----------------------------> 
    <!-- Card unidad --> 
    <div class="card_unidad ${dataUnity.color}">
        <div class="card_unidadContent">
            <div class="card_numberUnidad flex-r">
                <img class="icon_sm" src="./assets/icon/left.svg" alt=""> 
                <span class="title_unidad no-link">${dataUnity.nombre}</span>
            </div>
            <h3 class="subtitle">Tema: ${dataUnity.tema}</h3>
        </div>
        <button class="button-guide ${dataUnity.color} animation-dissolve"><h4>Guía</h4></button>
    </div>
     ${renderButtons(arrDataActivities,dataUnity.color)}
  `;
}
