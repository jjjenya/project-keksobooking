const formMapFilters = document.querySelector('.map__filters');
const formMapFiltersElements = formMapFilters.querySelectorAll('.map__filter');


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



export {setFiltersActive, setFiltersDeactive, formMapFilters};
