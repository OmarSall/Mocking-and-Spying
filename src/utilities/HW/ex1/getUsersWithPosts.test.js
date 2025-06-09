import { getUsersWithPosts } from './getUsersWithPosts';
import getUsers from './getUsers';
import getPosts from './getPosts';

jest.mock('./getUsers', () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock('./getPosts', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('getUsersWithPosts function', () => {
  it('Should return users with their posts', async () => {
    getUsers.mockResolvedValue([
      {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
      },
      {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
      },
    ]);

    getPosts.mockResolvedValue([
      {
        userId: 1,
        id: 1,
        title: 'Hello world 1',
        body: 'Lorem Ipsum',
      },
      {
        userId: 1,
        id: 2,
        title: 'Hello world 2',
        body: 'Lorem Ipsum 2',
      },
      {
        userId: 2,
        id: 3,
        title: 'Post for user 2',
        body: 'Content for user 2',
      },
    ]);

    const result = await getUsersWithPosts();

    expect(result).toEqual([
      {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        posts: [
          {
            userId: 1,
            id: 1,
            title: 'Hello world 1',
            body: 'Lorem Ipsum',
          },
          {
            userId: 1,
            id: 2,
            title: 'Hello world 2',
            body: 'Lorem Ipsum 2',
          },
        ],
      },
      {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        posts: [
          {
            userId: 2,
            id: 3,
            title: 'Post for user 2',
            body: 'Content for user 2',
          },
        ],
      },
    ]);
  });
});