import {ModifierLayers, modifierOrder} from './ModifierLayers';

describe('ModifierLayers', () => {
    test('it should construct with an array of ModifierLayer objects in the correct order', () => {
        const modifierLayers = new ModifierLayers();
        expect(modifierLayers.length).toBe(4);

        modifierOrder.forEach((name, index) => {
            expect(modifierLayers[index].name).toBe(name);
        });
    });
});
