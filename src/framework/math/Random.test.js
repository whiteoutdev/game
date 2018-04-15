import {Random} from './Random';

describe('Random', () => {
    test('it should produce repeatable results with the same seed', () => {
        for (let i = 0; i < 5; i++) {
            const random = new Random('seed');
            expect(random.frac()).toBeCloseTo(0.6761468205139347, 16);
        }
    });
});
