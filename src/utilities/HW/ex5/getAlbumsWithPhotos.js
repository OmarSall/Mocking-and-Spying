import getAlbums from './getAlbums';
import getPhotos from './getPhotos';

export async function getAlbumsWithPhotos() {
  try {
    const [albums, photos] = await Promise.all([getAlbums(), getPhotos()]);

    return albums.map((album) => {
      const albumPhotos = photos.filter((photo) => photo.albumId === album.id);

      return {
        ...album,
        photos: albumPhotos,
      };
    });
  } catch {
    return [];
  }
}