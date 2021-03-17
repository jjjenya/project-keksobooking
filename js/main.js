import './util.js';
import './data.js';
import './card.js';
import './form.js';
import './map.js';
import './filtr.js';



import { createArrayАdvertising } from './data.js';
import { createCard } from './card.js';
import { deactivatePage, initMap } from './map.js';



const NUMBER_АDVERTISING = 10;

// Массив рандомных объектов
const similarArray = createArrayАdvertising(NUMBER_АDVERTISING);


const card = createCard(similarArray[0]);


deactivatePage();
initMap();

export {card, similarArray }
