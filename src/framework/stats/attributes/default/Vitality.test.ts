import {Vitality} from './Vitality';

describe('Vitality', () => {
    test('it should construct with the correct name and base value', () => {
        const vitality = new Vitality(100);
        expect(vitality.name).toBe('vit');
        expect(vitality.base).toBe(100);
    });
});
