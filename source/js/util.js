const isEscEvent = (evt) => {
  return evt.key === ('Escape' || 'Esc');
};


const debounce = (fn, wait) => {
  let t;
  return function () {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, arguments), wait);
  }
}


export {
  isEscEvent,
  debounce
};
