import { readAll } from '../modules/storageService.js';

export function view() {
  const arrDataCourses = readAll('arrCourses');

    return `
    <div class="title title-content"><h4>Cursos</h4></div>
    <main class="main-courses">
        ${arrDataCourses.map(course => `
            <div class="border-courses border-neutral ${!course.activo ? 'cpointer' : ''}" 
            data-course="${course.id}">
                <button class="check-btn ${!course.activo ? 'noShow' : ''}"></button>
                <img class="img-lg" src="./assets/img/${course.image}">
                <h4>${course.nombre}</h4>
            </div>`
        ).join('')}
    </main>
    `;
}