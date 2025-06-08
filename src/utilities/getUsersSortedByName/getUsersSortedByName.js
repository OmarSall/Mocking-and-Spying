import {getUsers} from './getUsers';

export async function getUsersSortedByName() {
    try {
        const users = await getUsers();

        return users.sort((firstUser, secondUser) => {
            return firstUser.name.localeCompare(secondUser.name);
        });
    } catch {
        return [];
    }
}