import {Agility} from './Agility';

describe('Agility', () => {
    test('it should construct with the correct name and base value', () => {
        const agility = new Agility(100);
        expect(agility.name).toBe('agi');
        expect(agility.base).toBe(100);
    });
});
