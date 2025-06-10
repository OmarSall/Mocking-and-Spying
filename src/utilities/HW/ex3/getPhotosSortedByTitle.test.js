import {getPhotosSortedByTitle} from './getPhotosSortedByTitle';
import getPhotos from './getPhotos';

jest.mock('./getPhotos', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('getPhotosSortedByTitle function', () => {
  it('should return photos sorted alphabetically by title', async () => {
    getPhotos.mockResolvedValue([
      { id: 1, title: 'Sunset' },
      { id: 2, title: 'Apple' },
      { id: 3, title: 'Mountain' },
    ]);

    const result = await getPhotosSortedByTitle();

    expect(result.map((photo) => photo.title)).toEqual(['Apple', 'Mountain', 'Sunset']);
  });

  it('should return an empty array if getPhotos throws', async () => {
    getPhotos.mockRejectedValue(new Error("API failed"));

    const result = await getPhotosSortedByTitle();

    expect(result).toEqual([]);
  });
});