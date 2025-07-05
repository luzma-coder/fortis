export const view = () => {
  return `
    <div class="head-media">
      <h4>Juego</h4>
      <h3>Análisis dimensional</h3>
    </div>

    <main class="main-media content-viewer game">
    </main>

    <footer class="right">
      <button class="button-primary w210 text-ng" onclick="navigateTo('learn','END')">Siguiente</button>
    </footer>
  `;
}