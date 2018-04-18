import {ModifierType} from './ModifierType';
import {ModifierLayer} from './ModifierLayer';

describe('ModifierLayer', () => {
    test('it should construct with the correct name', () => {
        Object.values(ModifierType).forEach(name => {
            const modifierLayer = new ModifierLayer(name);
            expect(modifierLayer.name).toBe(name);
        });
    });
});
