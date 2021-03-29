const avatarChooser = document.querySelector('.ad-form-header__input');
const avatarContainer = document.querySelector('.ad-form-header__preview');
const avatarPreview = document.querySelector('.ad-form-header__preview img');

const photoChooser = document.querySelector('.ad-form__input');
const photosContainer = document.querySelector('.ad-form__photo');
const photoPreview = document.querySelector('.ad-form__photo img');

const IMAGE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const IMAGE_DEFAULT_SOURCE = 'img/muffin-grey.svg';


const deleteChildren = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}


//   Вставка в контейнер
const pasteImage = (imageElement, container, src) => {
  const image = imageElement.cloneNode(true);
  image.src = src;
  container.appendChild(image);
}


const readImage = (file, fileName, preview, container) => {
  const matches = IMAGE_TYPES.some((item) => {
    return fileName.endsWith(item);
  });

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      pasteImage(preview, container, reader.result);
    });

    reader.readAsDataURL(file);
  }
}


const onAvatarChooserChange = (chooser, preview, container) => {
  deleteChildren(container);

  const avatarFile = chooser.files[0];
  const avatarFileName = avatarFile.name.toLowerCase();

  readImage(avatarFile, avatarFileName, preview, container);
}


const onImageChooserChange = (chooser, preview, container) => {
  deleteChildren(container);

  for (let i = 0; i < chooser.files.length; i++) {
    const avatarFileName = chooser.files[i].name.toLowerCase();

    readImage(chooser.files[i], avatarFileName, preview, container);
  }
}


avatarChooser.addEventListener('change', () => {
  onAvatarChooserChange(avatarChooser, avatarPreview, avatarContainer);
});

photoChooser.addEventListener('change', () => {
  onImageChooserChange(photoChooser, photoPreview, photosContainer);
});



//   удаление до "первоначальных настроек"
const setDefaultImages = () => {
  deleteChildren(avatarContainer);
  pasteImage(avatarPreview, avatarContainer, IMAGE_DEFAULT_SOURCE);
  deleteChildren(photosContainer);
  pasteImage(photoPreview, photosContainer, IMAGE_DEFAULT_SOURCE);

}


export { setDefaultImages};
