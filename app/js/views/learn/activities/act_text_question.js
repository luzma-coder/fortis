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
            <h4>Pregunta admisión SAN MARCOS 2017-I</h4>
          </header>
          <p class="mrevert">
            Complete el párrafo con la alternativa correcta. En física, con frecuencia, es necesario deducir una expresión matemática o una ecuación, o bien verificar su validez. A dicho procedimiento se le conoce como análisis ...., que hace uso del hecho de que las dimensiones pueden ser tratadas como cantidades.
          </p>
          <ul class="options">
            <li class="option" data-option="A"><span class="left">A</span><span class="center">Analítico - numéricas</span></li>
            <li class="option" data-option="B"><span class="left">B</span><span class="center">Matemáticos - geométricas</span></li>
            <li class="option" data-option="C"><span class="left">C</span><span class="center">Físicos - trigonométricas</span></li>
            <li class="option" data-option="D"><span class="left">D</span><span class="center">Dimensional - algebraicas</span></li>
            <li class="option" data-option="E"><span class="left">E</span><span class="center">Numérico - aritméticas</span></li>
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