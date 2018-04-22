import {ModifierLayer} from './ModifierLayer';
import {ModifierType} from './ModifierType';

describe('ModifierLayer', () => {
    it('should construct with the correct name', () => {
        Object.values(ModifierType).forEach(name => {
            const modifierLayer = new ModifierLayer(name);
            expect(modifierLayer.name).toBe(name);
        });
    });
});
