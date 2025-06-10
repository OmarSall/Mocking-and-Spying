import getUsersDefault from './getUsersDefault';

export async function getUsersSortedByNameDefault() {
  try {
    const users = await getUsersDefault();

    return users.sort((firstUser, secondUser) => {
      return firstUser.name.localeCompare(secondUser.name);
    });
  } catch {
    return [];
  }
}