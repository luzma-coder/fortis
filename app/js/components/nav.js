export const createNav = (navigate) => {
  const nav = document.createElement('nav');
  nav.id = 'main-nav';
  nav.innerHTML = `
    <h1 class="logo">Fortis</h1>
    <a href="#" data-route="learn" class="button-menu mnu-active animation-dissolve nav-icon">
      Aprender
    </a>
    <button class="button-menu mnu-noactive animation-dissolve">
        <img class="icon_lg" src="./assets/icon/ranking.svg" alt=""> 
        <span class="no-link">Ranking</span>
    </button>
    <a href="#" data-route="profile" class="button-menu mnu-noactive animation-dissolve nav-icon">
      Perfil
    </a>
  `;

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const route = e.target.getAttribute('data-route');
      navigate(route);
    });
  });

  return nav;
}

