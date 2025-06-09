import { getUsersSortedByName } from './getUsersSortedByName';
import { getUsers } from './getUsers';

jest.mock('./getUsers', () => ({
  getUsers: jest.fn(),
}));

describe('The getUsersSortedByName function', () => {
  describe('when the getUsers function responds with a list of users', () => {
    beforeEach(() => {
      getUsers.mockResolvedValue([
        {
          id: 1,
          name: 'Charlie Brown',
          username: 'charlieb',
        },
        {
          id: 2,
          name: 'Alice Wonderland',
          username: 'alicew',
        },
        {
          id: 3,
          name: 'Bob Builder',
          username: 'bobb',
        },
      ]);
    });

    it('should return the users sorted by name ascending', async () => {
      const result = await getUsersSortedByName();

      expect(result[0].name).toBe('Alice Wonderland');
      expect(result[1].name).toBe('Bob Builder');
      expect(result[2].name).toBe('Charlie Brown');
    });
  });

  describe('when the getUsers function responds with an error', () => {
    beforeEach(() => {
      getUsers.mockImplementation(() => {
        throw new Error('API error');
      });
    });

    it('should return an empty array', async () => {
      const result = await getUsersSortedByName();

      expect(result).toEqual([]);
    });
  });
});
