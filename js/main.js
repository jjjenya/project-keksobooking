import './util.js';
import './data.js';
import './card.js';


import { createArrayАdvertising } from './data.js';
import { createCard, mapCanvas } from './card.js';

const similarArray = createArrayАdvertising();
const card = createCard(similarArray[0]);


// Вставка сформированной карточки
mapCanvas.append(card);


export { similarArray };
