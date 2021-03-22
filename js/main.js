import './util.js';
import './data.js';
import './card.js';
import './form.js';
import './map.js';
import './filtr.js';
import './message.js';
import './api.js';
import './user-form.js';


import { deactivatePage, createPins, initMap } from './map.js';
import { getData } from './api.js';

deactivatePage();
initMap();
getData((objects) => {
  createPins(objects);
});
// console.log (createPins());
// getData();
