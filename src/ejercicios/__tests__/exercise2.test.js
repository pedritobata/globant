import { sum } from '../exercise2';

describe('Exercise 2', () => {
    it('Should get the same result when invoking sum as a single or nested function implementation', () => {
        const result = 10;
        const arg1 = 2;
        const arg2 = 8;
        expect(sum(arg1,arg2)).toBe(result);
        expect(sum(arg1)(arg2)).toBe(result);
    })
})