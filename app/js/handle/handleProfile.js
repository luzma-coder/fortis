import { readAll, updateItem } from '../modules/storageService.js';

const loadSection = (section) => {
  const arrDataCourses = readAll('arrCourses');
  const sectionContent = document.querySelector('#section-2 main');
  let html = '';

  switch (section) {
    case 'delete_courses':
      html = `<p class="p1040">Borrar cursos</p>
        <ul class="p1040">
          ${arrDataCourses
            .filter(course => course.activo)
            .map(course => `
            <li class="li-course">
              <span>${course.nombre}</span>
              <button class="text-button" data-course=${course.id} data-nombre='${course.nombre}'>Eliminar</button>
            </li>`
          ).join('')}
        </ul>
      `;
      break;
    case 'config':
      html = `<h2>Configuración</h2><p>Configura tu cuenta a tu gusto.</p>`;
      break;
    case 'help':
      html = `<h2>Ayuda</h2><p>¿Tienes dudas? Aquí tienes respuestas.</p>`;
      break;
    case 'log_out':
      html = `<h2>Cerrar sesión</h2><p>Has cerrado sesión correctamente.</p>`;
      break;
    case 'inicio':
    default:
      // html = `<h2>Bienvenido</h2><p>Selecciona una opción del menú para comenzar.</p>`;
  }

  sectionContent.innerHTML = html;
}

// Muestra el menu interior o cuadro con links de Perfil y esconde el cuadro desafios
// También ilumina la opcion elegida de este cuadro 'Cuenta'
// Escucha si elimina algún curso
export const showCardMenu = () => {
  const cardMenu = document.getElementById('cardMenuCuenta');
  const cardChallenge = document.getElementById('cardChallenges');
  const links = document.querySelectorAll('#cardMenuCuenta a');

  cardMenu.classList.remove('hidden');
  cardChallenge.classList.add('hidden');    

  //const lastSection = localStorage.getItem('currentSection') || 'inicio';

  const updateActiveState = (chosenSection) => {
    links.forEach(link => {
      if (link.dataset.section === chosenSection) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  links.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const chosenSection = event.target.dataset.section;

      // Guardar en localStorage
      localStorage.setItem('currentSection', chosenSection);

      // Cargar contenido
      loadSection(chosenSection);
      updateActiveState(chosenSection);
    });
  });

  // escucha para eliminar perfil o los cursos
  document.addEventListener('click', event => {
    if (event.target.matches('.text-button')) {
      const button = event.target;
      const course = button.dataset.course;
      const nombre = button.dataset.nombre;
      if (nombre == 'cuenta') {
        alert('Eliminar Perfil');
      } else {
         if (course === '1') {
          alert('Curso principal, no se puede eliminar');
         } else {
          button.closest('li').remove();
          updateItem('arrCourses',course,{activo:false});
        }
      }
    }
  });

};