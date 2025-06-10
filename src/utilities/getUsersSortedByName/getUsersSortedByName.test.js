import { getUsersSortedByName } from './getUsersSortedByName';

jest.mock('./getUsers', () => {
    return {
        getUsers: () => {
            return Promise.resolve([
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
        },
    };
});

describe('getUsersSortedByName', () => {
    it('should return users sorted by name ascending', async () => {
        const usersSorted = await getUsersSortedByName();

        expect(usersSorted[0].name).toBe("Alice Wonderland");
        expect(usersSorted[1].name).toBe("Bob Builder");
        expect(usersSorted[2].name).toBe("Charlie Brown");
    });
});