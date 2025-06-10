import getUsers from './getUsers';
import getPosts from './getPosts';

export async function getUsersWithPosts() {
  try {
    const [users, posts] = await Promise.all([getUsers(), getPosts()]);

    return users.map((user) => {
      const userPosts = posts.filter((post) => post.userId === user.id);

      return {
        ...user,
        posts: userPosts,
      };
    });
  } catch {
    return [];
  }
}