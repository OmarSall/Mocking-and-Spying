import {getAlbumsWithPhotos} from './getAlbumsWithPhotos';
import getAlbums from './getAlbums';
import getPhotos from './getPhotos';

jest.mock('./getAlbums', () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock('./getPhotos', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('getAlbumsWithPhotos function', () => {
  it('should return albums with their photos', async () => {
    getAlbums.mockResolvedValue([
      {
        userId: 1,
        id: 1,
        title: 'Album title 1',
      },
      {
        userId: 2,
        id: 2,
        title: 'Album title 2',
      },
    ]);

    getPhotos.mockResolvedValue([
      {
        albumId: 1,
        id: 1,
        title: 'Photo title #1',
        url: 'https://via.placeholder.com/600/92c952',
        thumbnailUrl: 'https://via.placeholder.com/150/92c952',
      },
      {
        albumId: 1,
        id: 2,
        title: 'Photo title #2',
        url: 'https://via.placeholder.com/600/771796',
        thumbnailUrl: 'https://via.placeholder.com/150/771796',
      },
      {
        albumId: 2,
        id: 3,
        title: 'Photo title #3',
        url: 'https://via.placeholder.com/600/24f355',
        thumbnailUrl: 'https://via.placeholder.com/150/24f355',
      },
    ]);

    const result = await getAlbumsWithPhotos();

    expect(result).toEqual([
      {
        userId: 1,
        id: 1,
        title: 'Album title 1',
        photos: [
          {
            albumId: 1,
            id: 1,
            title: 'Photo title #1',
            url: 'https://via.placeholder.com/600/92c952',
            thumbnailUrl: 'https://via.placeholder.com/150/92c952',
          },
          {
            albumId: 1,
            id: 2,
            title: 'Photo title #2',
            url: 'https://via.placeholder.com/600/771796',
            thumbnailUrl: 'https://via.placeholder.com/150/771796',
          },
        ],
      },
      {
        userId: 2,
        id: 2,
        title: 'Album title 2',
        photos: [
          {
            albumId: 2,
            id: 3,
            title: 'Photo title #3',
            url: 'https://via.placeholder.com/600/24f355',
            thumbnailUrl: 'https://via.placeholder.com/150/24f355',
          },
        ],
      },
    ]);
  });

  it('should return an empty array if getAlbums throws', async () => {
    getAlbums.mockRejectedValue(new Error('API error'));

    const result = await getAlbumsWithPhotos();

    expect(result).toEqual([]);
  });
});