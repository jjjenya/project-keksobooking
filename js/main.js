import './util.js';
import './data.js';
import './card.js';
import './form.js';


import { createArrayАdvertising } from './data.js';
import { createCard, mapCanvas } from './card.js';

const NUMBER_АDVERTISING = 10;

// Массив рандомных объектов
const similarArray = createArrayАdvertising(NUMBER_АDVERTISING);


const card = createCard(similarArray[0]);


// Вставка сформированной карточки
mapCanvas.append(card);
