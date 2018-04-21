import {Dexterity} from './Dexterity';

describe('Dexterity', () => {
    test('it should construct with the correct name and base value', () => {
        const dexterity = new Dexterity(100);
        expect(dexterity.name).toBe('dex');
        expect(dexterity.base).toBe(100);
    });
});
