import { createNav } from './components/nav.js';
import { createLayout } from './components/layout.js';
import { setUnity,setCourses } from './modules/storageService.js';
import { navigateTo } from './modules/router.js';

const app = document.getElementById('app');

// Layout
const nav = createNav(navigateTo);
const layout = createLayout();

setUnity(0);
setCourses();

app.append(nav, layout[0],layout[1]);

// Navegación inicial
navigateTo('learn');

// Exponer para navegación desde otros módulos si se requiere
window.navigateTo = navigateTo;