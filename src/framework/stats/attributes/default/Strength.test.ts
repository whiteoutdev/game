import {Strength} from './Strength';

describe('Strength', () => {
    test('it should construct with the correct name and base value', () => {
        const strength = new Strength(100);
        expect(strength.name).toBe('str');
        expect(strength.base).toBe(100);
    });
});
