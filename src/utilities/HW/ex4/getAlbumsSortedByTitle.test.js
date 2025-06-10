import {getAlbumsSortedByTitle} from './getAlbumsSortedByTitle';
import getAlbums from './getAlbums';

jest.mock('./getAlbums', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('getAlbumsSortedByTitle function', () => {
  it('should return albums sorted alphabetically by title', async () => {
    getAlbums.mockResolvedValue([
      { id: 1, title: 'Zebra album' },
      { id: 2, title: 'Apple album' },
      { id: 3, title: 'Monkey album' },
    ]);

    const result = await getAlbumsSortedByTitle();

    expect(result.map((a) => a.title)).toEqual([
      'Apple album',
      'Monkey album',
      'Zebra album',
    ]);
  });

  it('should return an empty array if getAlbums throws', async () => {
    getAlbums.mockRejectedValue(new Error('API failed'));

    const result = await getAlbumsSortedByTitle();

    expect(result).toEqual([]);
  });
});