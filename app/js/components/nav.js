export const createNav = (navigate) => {
  const nav = document.createElement('nav');
  nav.id = 'main-nav';
  nav.innerHTML = `
    <h1 class="logo">Fortis</h1>
    <a href="#" data-route="learn" class="button-menu-active animation-dissolve nav-icon">
      Aprender
    </a>
    <button class="button-menu animation-dissolve">
        <img class="icon_lg" src="./assets/icon/ranking.svg"> 
        <h4>Ranking</h4>
    </button>
    <a href="#" data-route="profile" class="button-menu animation-dissolve nav-icon">
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

