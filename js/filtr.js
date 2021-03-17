const formMapFilters = document.querySelector('.map__filters');
const formMapFiltersElements = formMapFilters.querySelectorAll('.map__filter');


//   Активное состояние Фильтра
const setFiltersActive = () => {
  formMapFilters.classList.add('map__filters--disabled');
  formMapFiltersElements.forEach((elem) => {
    elem.setAttribute('disabled', true);
  });
}


//   Неактивное состояние Фильтра
const setFiltersDeactive = () => {
  formMapFilters.classList.remove('map__filters--disabled');
  formMapFiltersElements.forEach((elem) => {
    elem.setAttribute('disabled', true);
  });
}


export {setFiltersActive, setFiltersDeactive};
