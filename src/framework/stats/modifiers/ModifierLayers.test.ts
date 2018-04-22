import {ModifierLayers, modifierOrder} from './ModifierLayers';
import {ModifierType} from './ModifierType';

describe('ModifierLayers', () => {
    it('should construct with an array of ModifierLayer objects in the correct order', () => {
        const modifierLayers = new ModifierLayers();
        expect(modifierLayers.length).toBe(4);

        modifierOrder.forEach((name, index) => {
            expect(modifierLayers[index].name).toBe(name);
        });
    });

    it('should be able to retrieve a layer by name', () => {
        const modifierLayers = new ModifierLayers();

        Object.values(ModifierType).forEach(name => {
            expect(modifierLayers.getLayer(name).name).toBe(name);
        });
    });
});
