import * as ActVideo from './act_video.js';

export const view = () => {
  return `
    <div class="flex">
      <article class="fgrow-1">
        <header class="head-question">
          <button class="close-btn" aria-label="Cerrar" onclick="navigateTo('learn')"></button>
          <div class="progress-bar-container" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-20"></div>
          </div>
          <div class="info_heart_questions">
              <img class="icon_sm" src="./assets/icon/heart.svg">
              <p class="text-ng">09</p>
          </div>
        </header>

        <main class="main-questions">
          <header>
            <h4>Seleccione la secuencia de verdad (V o F) para las proposiciones</h4>
          </header>
          <p class="mrevert">
            El tratamiento térmic del templado del aluminio se alcanza a la temperatura de fundición de 660°C, después se baja la temperatura a 380° durante unos 120 minutos y se somete al final a un nuevo tratamiento, a una temperatura de 250° donde se inicia el proceso de enfriamento.
          </p>
          <p class="mrevert">
    I. En unidades del sistema internacional (SI) la temperatura de fundición es 933 K.<br>
    II. El procesode recocido durante 120 min se realiza a una temperatura 716°F.<br>
    III. La temperatura en la que se inicia el proceso de enfriamento es 942 R.      </p>
            <img class="img-vuew-question" src="https://images.unsplash.com/photo-1529078155058-5d716f45d604?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjAxN3wwfDF8c2VhcmNofDh8fHN0YXRpc3RpY2FsJTIwdGFibGUlMjAyNTBkZWdyZWUlMkMlMjAzODBkZWdyZWUlMjAlMjA2NTBkZWdyZWV8ZW58MHx8fHwxNzUwNzk3NjQxfDA&ixlib=rb-4.1.0&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450" >
          <ul class="options-img">
            <li class="option" data-option="A"><span class="left">A</span><span class="center">VVV</span></li>
            <li class="option" data-option="B"><span class="left">B</span><span class="center">VVF</span></li>
            <li class="option" data-option="C"><span class="left">C</span><span class="center">VFV</span></li>
            <li class="option" data-option="D"><span class="left">D</span><span class="center">FFV</span></li>
            <li class="option" data-option="E"><span class="left">E</span><span class="center">FVF</span></li>
          </ul>
        </main>
      </article>
      <article id="solution-view" class="fgrow-1 hidden">
        ${ ActVideo.view()}
      </article>
    </div>
    <footer class="around">
      <div class="feedback hidden" id="feedback" aria-live="polite"></div>
      <button id="button-back" class="button-white w210 text-ng animation-dissolve" onclick="navigateTo('learn')">Atrás</button>
      <button id="button-see-solution" class="button-white w210 text-ng hidden">Ver Solución</button>
      <button id="button-check" class="button-primary-disabled w210 text-ng animation-dissolve">Comprobar</button>
      <button id="button-continue" class="button-success hidden w210 text-ng " onclick="navigateTo('learn','END')">Continuar</button>
    </footer>
  `;
}