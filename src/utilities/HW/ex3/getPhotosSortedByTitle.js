import getPhotos from './getPhotos';

export function getPhotosSortedByTitle() {
  return getPhotos()
    .then((photos) => {
      return photos.sort((firstTitle, secondTitle) => firstTitle.title.localeCompare(secondTitle.title));
    })
    .catch(() => {
      return [];
    });
}