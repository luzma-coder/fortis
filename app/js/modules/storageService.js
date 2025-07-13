import dataBD from './apiMock.js';

// Utilidad para obtener datos de una "tabla" específica
const getItems = (table) => {
  if (!table) throw new Error('Table name is required');
  const data = localStorage.getItem(table);
  return data ? JSON.parse(data) : [];
};

// Guardar datos en una tabla
export const saveItems = (table, items) => {
  localStorage.setItem(table, JSON.stringify(items));
};

// Crear un nuevo item
export const addItem = (table, newItem) => {
  const items = getItems(table);
  if (!newItem) throw new Error('New item is required');

  newItem.id = Date.now(); // Generar ID único
  items.push(newItem);
  saveItems(table, items);
  return newItem;
};

// Leer todos los items
export const readAll = (table) => {
  return getItems(table);
};

// Leer un item por ID
export const readById = (table, id) => {
  const items = getItems(table);
  return items.find(item => item.id === id);
};

// Actualizar un item por ID
export const updateItem = (table, id, updatedData) => {
  const items = getItems(table);
  const index = items.findIndex(item => item.id === id);
  if (index === -1) {
    throw new Error(`Item with ID ${id} not found in "${table}"`);
  }

  items[index] = { ...items[index], ...updatedData };
  saveItems(table, items);
  return items[index];
};

export const updateStatusActivitie = (table, updatedData) => {
  const items = getItems(table);
  const id = getCurrentActivitie() + 1;
  const index = items.findIndex(item => item.id === id);
  if (index === -1) {
    throw new Error(`Item with ID ${id} not found in "${table}"`);
  }

  if (!items[index].terminado) {
    items[index] = { ...items[index], ...updatedData };
    // items[index].terminado = true;
  } 
  saveItems(table, items);
  return items[index];
};

// Eliminar un item por ID
export const deleteItem = (table, id) => {
  const items = getItems(table);
  const filtered = items.filter(item => item.id !== id);
  saveItems(table, filtered);
};

//************** establecer unidad  */
export const setUnity = (item) => {
  const { nombre, tema, color } = dataBD.unidad[item];
  localStorage.setItem('dataUnity',JSON.stringify( {nombre,tema,color}));
  saveItems('arrActivities', dataBD.unidad[item].actividades);
};

//************** establecer actividad actual  */
export const setCurrentActivitie = (activitie) => {
  localStorage.setItem('currentActivitie',activitie);
};

//************** establecer cursos  */
export const setCourses = () => {
  saveItems('arrCourses', dataBD.curso);
};

//************** leer datos de la unidad  */
export const getDataUnity = () => {
  const dataUnity = JSON.parse(localStorage.getItem("dataUnity"));
  return dataUnity ? dataUnity : {};
};

//************** leer color  */
export const getColor = () => {
  const color = JSON.parse(localStorage.getItem("dataUnity")).color;
  return color ? color : 'blue';
};

//************** leer actividad actual  */
export const getCurrentActivitie = () => {
  const currentAct = localStorage.getItem('currentActivitie') * 1;
  return currentAct ? currentAct : 0;
};

//************** leer datos del usuario  */
export const getUser = () => {
  const userData = dataBD.user;
    const userData2 = dataBD.user2[0];
  console.log(userData);
    console.log(userData2);

  return userData ? userData : {};
};