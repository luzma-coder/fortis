export const createLayout = () =>{
  const section2 = document.createElement('section');
  section2.id = 'section-2';
  section2.className = 'content_principal';

  const section3 = document.createElement('section');
  section3.id = 'section-3';
  section3.className = 'navbar_right';

  return [section2, section3];
}
