export const view = () => {
  return `
    <section class="flex-c">
      <div class="img-man"></div>
      <h2 class="blue a-center">¡Completaste toda la unidad!</h2>
      <p class="yellow a-center">Exp total</p>
      <div class="card-base bradius-sm border-yellow p1040 yellow icon-flash flex">
        <img class="icon_lg" src="./assets/icon/flash.svg">
        20+
      </div>
    </section>

    <footer class="around">
        <button class="button-white w210 text-ng" onclick="navigateTo('learn')">Repasar lección</button>
        <button class="button-success w210 text-ng" onclick="navigateTo('unityEnd2')">Continuar</button>
    </footer>
  `;
}