import { deleteMarkers, createMarkers } from './map.js';
import { debounce } from './util.js';



const formMapFilters = document.querySelector('.map__filters');
const formMapFiltersElements = formMapFilters.querySelectorAll('.map__filter');

const housingTypeSelect = formMapFilters.querySelector('#housing-type');
const housingPriceSelect = formMapFilters.querySelector('#housing-price');
const housingRoomsSelect = formMapFilters.querySelector('#housing-rooms');
const housingGuestsSelect = formMapFilters.querySelector('#housing-guests');

const wifiFilter = document.querySelector('#filter-wifi');
const dishwasherFilter = document.querySelector('#filter-dishwasher');
const parkingFilter = document.querySelector('#filter-parking');
const washerFilter = document.querySelector('#filter-washer');
const elevatorFilter = document.querySelector('#filter-elevator');
const conditionerFilter = document.querySelector('#filter-conditioner');

const RERENDER_DELAY = 500;

const SIMILAR_STAYS_COUNT = 10;

const PriceMap = {
  LOW_PRICE: 10000,
  HIGH_PRICE: 50000,
}

const ANY_VALUE = 'any';
const LOW_VALUE = 'low';
const MIDDLE_VALUE = 'middle';
const HIGH_VALUE = 'high';

const FILTER_VALUE = /filter-/;


//   Активное состояние Фильтра
const setFiltersActive = () => {
  formMapFilters.classList.remove('map__filters--disabled');
  formMapFiltersElements.forEach((elem) => {
    elem.removeAttribute('disabled');
  });
}


//   Неактивное состояние Фильтра
const setFiltersDeactive = () => {
  formMapFilters.classList.add('map__filters--disabled');
  formMapFiltersElements.forEach((elem) => {
    elem.setAttribute('disabled', true);
  });
}


const isCheckType = (advertisement, element) => {
  return element.value === ANY_VALUE || advertisement.offer.type === element.value;
};

const isCheckPrice = (advertisement, element) => {
  return element.value === ANY_VALUE ? true : (
    ((element.value === LOW_VALUE) && (advertisement.offer.price < PriceMap.LOW_PRICE)) ||
    ((element.value === HIGH_VALUE) && (advertisement.offer.price >= PriceMap.HIGH_PRICE)) ||
    ((element.value === MIDDLE_VALUE) && (advertisement.offer.price >= PriceMap.LOW_PRICE) && (advertisement.offer.price < PriceMap.HIGH_PRICE))
  )
}

const isCheckRooms = (advertisement, element) => {
  return element.value === ANY_VALUE || Number(element.value) === advertisement.offer.rooms;
}

const isCheckGuests = (advertisement, element) => {
  return element.value === ANY_VALUE ? true : parseInt(element.value, 10) <= advertisement.offer.guests;
}

const isCheckFeatures = (feature, advertisement) => {
  const featureName = feature.getAttribute('id').replace(FILTER_VALUE, '');
  return feature.checked === false ? true : advertisement.offer.features.includes(featureName);
}


const getFilteredAds = (advertisements) => {
  const resultAdvertisements = [];
  for (let i = 0; i < advertisements.length; i++) {
    if (isCheckType(advertisements[i], housingTypeSelect) &&
      isCheckPrice(advertisements[i], housingPriceSelect) &&
      isCheckRooms(advertisements[i], housingRoomsSelect) &&
      isCheckGuests(advertisements[i], housingGuestsSelect) &&
      isCheckFeatures(wifiFilter, advertisements[i]) &&
      isCheckFeatures(dishwasherFilter, advertisements[i]) &&
      isCheckFeatures(parkingFilter, advertisements[i]) &&
      isCheckFeatures(washerFilter, advertisements[i]) &&
      isCheckFeatures(elevatorFilter, advertisements[i]) &&
      isCheckFeatures(conditionerFilter, advertisements[i])) {
      resultAdvertisements.push(advertisements[i]);
    }
    if (resultAdvertisements.length >= SIMILAR_STAYS_COUNT) {
      break;
    }
  }
  return resultAdvertisements;
}

const onFilterChange = (advertisements) => {
  return debounce((evt) => {
    evt.preventDefault();
    const filteredAdds = getFilteredAds(advertisements);
    deleteMarkers();
    createMarkers(filteredAdds);
  }, RERENDER_DELAY);
}

const setFilterChange = (advertisements) => {
  formMapFilters.addEventListener('change', onFilterChange(advertisements));
};



export {
  formMapFilters,
  setFilterChange,
  setFiltersActive,
  setFiltersDeactive
};
