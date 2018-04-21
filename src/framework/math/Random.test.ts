import {Random} from './Random';

jest.mock('phaser', () => {
    global.Phaser = require('../../testing/PhaserMock').PhaserMock;
});

describe('Random', () => {
    test('it should produce repeatable results with the same seed', () => {
        for (let i = 0; i < 5; i++) {
            const random = new Random('seed');
            expect(random.frac()).toBeCloseTo(0.034752578609405504, 16);
        }
    });
});
