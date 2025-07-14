import * as Learn from '../views/learn/learn.js';
import * as Profile from '../views/profile.js';
import * as Courses from '../views/courses.js';
import * as ActTextQuestion from '../views/learn/activities/act_text_question.js';
import * as ActImgQuestion from '../views/learn/activities/act_img_question.js';
import * as ActVideo from '../views/learn/activities/act_video.js';
import * as UnityEnd1 from '../views/unityEnd/unityEnd-1.js';
import * as UnityEnd2 from '../views/unityEnd/unityEnd-2.js';
import * as ActGame from '../views/learn/activities/act_game.js';
import * as RightSidebar from '../views/right_sidebar.js';

import { setWave } from '../handle/handleLearn.js';
import { handleUserResponse } from '../handle/handleLearnQuestions.js';
import { showCardMenu } from '../handle/handleProfile.js';
import { coursesMenu, addCourse } from '../handle/handleCourses.js';
import { setCurrentActivitie,updateStatusActivitie,setUnity} from './storageService.js';

function setContent(sectionNumber, html) {
  const section = document.getElementById(`section-${sectionNumber}`);
  if (section) {
    section.innerHTML = html;
    section.classList.remove('hidden');
  }
}

function showSections(sections) {
 sections.forEach(num => {
    const el = document.getElementById(`section-${num}`);
    // el.classList.toggle('hidden', !sections.includes(num));
  });
}

function showNav(visible) {
  const mainNav = document.getElementById('main-nav');
  if (visible) {
    mainNav.classList.remove('hidden');
  } else {
    mainNav.classList.add('hidden');
  }
}

function hideSection(num) {
  const sec = document.getElementById(`section-${num}`);
  if (sec) {
    sec.classList.add('hidden');
  }
}

const updateActivitie = (status,activitie) => {
  let itemReturn;
  if (status == 'INIT') {
    setCurrentActivitie(activitie);
  }
  if (status == 'END') {
    itemReturn = updateStatusActivitie('arrActivities',{terminado:true});
  }
}

const activeNavProfile = (route) => {
  const routes = document.querySelectorAll('[data-route]');
  Array.from(routes).forEach(el => el.classList.replace('mnu-active','mnu-noactive'));

  const currentLink = Array.from(routes).find(el => el.dataset.route === route);
  currentLink.classList.replace('mnu-noactive','mnu-active');
}

export const navigateTo = (route,status,activitie) => {
  switch (route) {
    case 'learn':
      showNav(true);
      updateActivitie(status);
      setContent(2, Learn.view());
      setContent(3, RightSidebar.view());
        activeNavProfile(route);

      setWave('#button-section');
      coursesMenu();
      break;
    case 'profile':
      showNav(true);
      setContent(2, Profile.view());
      setContent(3, RightSidebar.view());
        activeNavProfile(route);

      coursesMenu();
      showCardMenu();
      break;
    case 'courses':
      showNav(true);
      setContent(2, Courses.view());
      setContent(3, RightSidebar.view());
      coursesMenu();
      addCourse();
      break;
    case 'act_text_question':
      showNav(false);
      setContent(2, ActTextQuestion.view());
      hideSection(3);
      handleUserResponse();
      updateActivitie(status,activitie);
      break;
    case 'act_img_question':
      showNav(false);
      setContent(2, ActImgQuestion.view());
      hideSection(3);
      handleUserResponse();
      updateActivitie(status,activitie);
      break;
    case 'act_video':
      showNav(false);
      setContent(2, ActVideo.view());
      hideSection(3);
      updateActivitie(status,activitie);
      break;
    case 'act_game':
      showNav(false);
      setContent(2, ActGame.view());
      hideSection(3);
      updateActivitie(status,activitie);
      break;
    case 'unityEnd1':
      showNav(false);
      setContent(2, UnityEnd1.view());
      hideSection(3);
      updateActivitie(status,activitie);
      break;
    case 'unityEnd2':
      showNav(false);
      setContent(2, UnityEnd2.view());
      hideSection(3);
      setUnity(1);
      break;
    default:
      showNav(true);
      setContent(2, '<h2>404 - Página no encontrada</h2>');
      setContent(3, RightSidebar.view());
  }
}
