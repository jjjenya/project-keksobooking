import './util.js';
import './data.js';
import './card.js';
import './form.js';
import './map.js';
import './filtr.js';

import { deactivatePage, createPins, initMap } from './map.js';

deactivatePage();
initMap();
createPins();


// import { createArrayАdvertising } from './data.js';
// import { createCard } from './card.js';

// const NUMBER_АDVERTISING = 10;

// // // Массив рандомных объектов
// const similarArray = createArrayАdvertising(NUMBER_АDVERTISING);


// const card = createCard(similarArray[0]);

// const points = [
//   {
//     title: 'Пример1',
//     lat: 35.79950,
//     lng: 139.68171,
//   },
//   {
//     title: 'Пример2',
//     lat: 35.78150,
//     lng: 139.59271,
//   },
// ]






// getData((objects) => {
//   createPins(objects);
//   getOn();
//   formReset (() => createPins(objects))
//   changeFilter(() => createPins(objects));
// });

// export {card, similarArray }

