import { getRandomMonth } from './getRandomMonth';
import getRandomNumberInRange from './getRandomNumberInRange';

jest.mock('./getRandomNumberInRange', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('getRandomMonth function', () => {
  it('Should call getRandomNumberInRange with (0,11)', () => {
    getRandomNumberInRange.mockReturnValue(0);

    const result = getRandomMonth();

    expect(getRandomNumberInRange).toHaveBeenCalledWith(0, 11);

    expect(result).toBe('January');
  });
});