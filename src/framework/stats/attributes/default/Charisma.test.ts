import {Charisma} from './Charisma';

describe('Charisma', () => {
    test('it should construct with the correct name and base value', () => {
        const charisma = new Charisma(100);
        expect(charisma.name).toBe('cha');
        expect(charisma.base).toBe(100);
    });
});
