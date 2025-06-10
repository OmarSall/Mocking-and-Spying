import { getUsersSortedByNameDefault } from './getUsersSortedByNameDefault';
import getUsersDefault from './getUsersDefault';

jest.mock('./getUsersDefault', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('getUsersSortedByName function', () => {
  it('should call the getUsers function', async () => {
    getUsersDefault.mockResolvedValue([]);

    await getUsersSortedByNameDefault();

    expect(getUsersDefault).toHaveBeenCalled();
  });
});