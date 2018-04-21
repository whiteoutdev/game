import {Luck} from './Luck';

describe('Luck', () => {
    test('it should construct with the correct name and base value', () => {
        const luck = new Luck(100);
        expect(luck.name).toBe('luk');
        expect(luck.base).toBe(100);
    });
});
