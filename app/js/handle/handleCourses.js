import { readAll, updateItem } from '../modules/storageService.js';

// Esta función genera el HTML de los cursos activos
const renderActiveCoursesList = () => {
  const container = document.getElementById('optionsMenu');
  if (!container) {
    console.warn('No se encontró el contenedor #optionsMenu');
    return;
  }
  const arrDataCourses = readAll('arrCourses');
  if (!Array.isArray(arrDataCourses)) {
    console.warn('No se obtuvo un array válido de cursos');
    return '<p class="text-ng">No hay cursos disponibles</p>';
  }

  // Elimina todos los elementos .card_option que tengan data-course (es decir, cursos activos ya renderizados)
  const oldOptions = container.querySelectorAll('.card_option[data-course]');
  oldOptions.forEach(el => el.remove());

  const activeCoursesHTML = arrDataCourses
          .filter(course => course.activo)
          .map(course => `
            <div class="card_option animation-dissolve" data-course="${course.id}">
              <img class="icon_lg" src="./assets/icon/${course.icono}"> 
              <h4 class="title">${course.nombre}</h4>
            </div>`)
          .join('');

  // Insertar antes del botón "Agregar un nuevo curso"
  const addCard = document.getElementById('addCourseCard');
  if (addCard) {
    addCard.insertAdjacentHTML('beforebegin', activeCoursesHTML);
  } else {
    container.innerHTML += activeCoursesHTML;
  }
};

// Muestra y controla menu superior para cursos
export const coursesMenu = () => {
    const btnCurso = document.querySelector('.curso');
    const menu = document.getElementById('optionsMenu');
    const opcion = document.getElementById('addCourseCard');

    // Mostrar el menú al hacer clic en el botón
    btnCurso.addEventListener('click', () => {
        renderActiveCoursesList();
        menu.classList.toggle('visible');

    });

    // Capturar clic en la opción
    opcion.addEventListener('click', () => {
        menu.classList.remove('visible'); // opcional: ocultar después del clic
    });

    // Cerrar menú si se hace clic fuera
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !btnCurso.contains(e.target)) {
            menu.classList.remove('visible');
        }
    });
}

// Agrega un curso
export const addCourse = () => {
  const container = document.querySelector('.main-courses');
  if (!container) return;

  container.addEventListener('click', (event) => {
    const clickedCourse = event.target.closest('.border-courses');
    if (clickedCourse && container.contains(clickedCourse )) {
      const courseId = clickedCourse.dataset.course;
      const checkButton = clickedCourse.querySelector('.check-btn');
      if (checkButton && checkButton.classList.contains('noShow')) {
        checkButton.classList.remove('noShow');
        updateItem('arrCourses',courseId,{activo:true});
      }
    }
  });
};