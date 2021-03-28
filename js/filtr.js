import { deleteMarkers, createMarkers } from './map.js';
import { debounce } from './util.js';



const formMapFilters = document.querySelector('.map__filters');
const formMapFiltersElements = formMapFilters.querySelectorAll('.map__filter');

const filterForm = document.querySelector('.map__filters');
const housingTypeSelect = filterForm.querySelector('#housing-type');

const housingPriceSelect = filterForm.querySelector('#housing-price');
const housingRoomsSelect = filterForm.querySelector('#housing-rooms');
const housingGuestsSelect = filterForm.querySelector('#housing-guests');

const RERENDER_DELAY = 500;


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


const checkType = (advertisement, element) => {
  return element.value === 'any' || advertisement.offer.type === element.value;
};

const checkPrice = (advertisement, element) => {
  const LOW_PRICE = 10000;
  const HIGH_PRICE = 50000;
  switch (element.value) {
    case 'any':
      return true;
    case 'low':
      return advertisement.offer.price < LOW_PRICE;
    case 'middle':
      return advertisement.offer.price >= LOW_PRICE && advertisement.offer.price < HIGH_PRICE;
    case 'high':
      return advertisement.offer.price >= HIGH_PRICE;
    default:
      return false;
  }
}

const checkRooms = (advertisement, element) => {
  return element.value === 'any' || Number(element.value) === advertisement.offer.rooms;
}

const checkGuests = (advertisement, element) => {
  if (element.value === 'any') {
    return true;
  }
  return parseInt(element.value, 10) <= advertisement.offer.guests;
}

const checkFeatures = (advertisement) => {
  const checkedFeatures = filterForm.querySelectorAll('.map__checkbox:checked');
  let count = 0;

  checkedFeatures.forEach((feature) => {
    if (advertisement.offer.features.includes(feature.value))
      count++;
  })

  return count === checkedFeatures.length;
}


const getFilteredAds = (advertisements) => {
  const filteredAdvertisements = advertisements.filter((advertisement) => {
    return (
      checkType(advertisement, housingTypeSelect) &&
      checkPrice(advertisement, housingPriceSelect) &&
      checkRooms(advertisement, housingRoomsSelect) &&
      checkGuests(advertisement, housingGuestsSelect) &&
      checkFeatures(advertisement)
    )
  })
  return filteredAdvertisements;
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
  filterForm.addEventListener('change', onFilterChange(advertisements));
};



export {
  filterForm,
  formMapFilters,
  setFilterChange,
  setFiltersActive,
  setFiltersDeactive
};
