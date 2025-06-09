import { getUsersSortedByName } from './getUsersSortedByName';
import { getUsers } from './getUsers';

jest.mock('./getUsers', () => ({
  getUsers: jest.fn(() => []),
}));

describe('The getUsersSortedByName function', () => {
  it('Should call the getUsers function', async () => {
    getUsers.mockResolvedValue([])

    await getUsersSortedByName();

    expect(getUsers).toHaveBeenCalled();
  })
})