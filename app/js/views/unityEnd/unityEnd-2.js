export const view = () => {
  return `
    <section class="flex-c">
      <h2 class="yellow a-center pcard w510">¡Completaste el desafío del día!</h2>
      <div class="card-base bradius-30 border-yellow w510 p20">
        ${[20,50].map(numExp => `
          <div class="card_flash pb4">  
            <img class="icon_lg" src="./assets/icon/flash.svg" alt="">
            <div class="bar">
              <p class="text-ng">Ganar ${numExp} exp</p>
              <div class="exp">
                <div class="progress-${numExp}"></div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </section>

    <footer class="around">
        <button class="button-white w210 text-ng" onclick="navigateTo('learn')">Repasar lección</button>
        <button class="button-success w210 text-ng" onclick="navigateTo('learn')">Continuar</button>
    </footer>
  `;
}