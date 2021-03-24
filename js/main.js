import './util.js';
import './data.js';
import './card.js';
import './form.js';
import './map.js';
import './filtr.js';
import './message.js';
import './api.js';
import './public-reset.js';


import { getData } from './api.js';

import {
  deactivatePage,
  createMarkers,
  initMap
} from './map.js';


const SIMILAR_COUNT = 6;

deactivatePage();
initMap();
getData((objects) => {
  createMarkers(objects.slice(0, SIMILAR_COUNT));
});


