import getAlbums from './getAlbums';

export function getAlbumsSortedByTitle() {
  return getAlbums()
    .then((albums) => {
      return albums.sort((firstAlbum, secondAlbum) => firstAlbum.title.localeCompare(secondAlbum.title));
    })
    .catch(() => {
      return [];
    });
}