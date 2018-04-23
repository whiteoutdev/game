import {BasicStatModifier} from './BasicStatModifier';
import {ModifierLayers, modifierOrder} from './ModifierLayers';
import {ModifierType} from './ModifierType';

const LAYER_COUNT              = modifierOrder.length,
      FLOATING_POINT_PRECISION = 6;

describe('ModifierLayers', () => {
    it('should construct with an array of ModifierLayer objects in the correct order', () => {
        const modifierLayers = new ModifierLayers();
        expect(modifierLayers.length).toBe(LAYER_COUNT);

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

    it('should allow modifiers to be added to a layer', () => {
        modifierOrder.forEach(type => {
            const layers   = new ModifierLayers(),
                  modifier = new BasicStatModifier();
            layers.addModifier(modifier, type);
            modifierOrder.forEach(type2 => {
                const layer = layers.getLayer(type2);
                if (type2 === type) {
                    expect(layer.length).toBe(1);
                    expect(layer[0]).toBe(modifier);
                } else {
                    expect(layer.length).toBe(0);
                }
            });
        });
    });

    it('should apply its layers in the correct order', () => {
        testApply(1, [[0, 1], [0, 1], [0, 1], [0, 1]], 1);
        testApply(1, [[1, 1], [1, 1], [1, 1], [1, 1]], 5);
        testApply(1, [[0, 2], [0, 2], [0, 2], [0, 2]], 16);
        testApply(1, [[1, 1], [0, 2], [1, 1], [0, 2]], 10);
        testApply(1, [[1, 1], [0, 2], [0, 2], [0, 2]], 16);
        testApply(1, [[0, 2], [1, 1], [0, 2], [0, 2]], 12);
        testApply(1, [[0, 2], [0, 2], [1, 1], [0, 2]], 10);
        testApply(1, [[0, 2], [0, 2], [0, 2], [1, 1]], 9);
        testApply(1, [[0, 2], [1, 1], [1, 1], [1, 1]], 5);
        testApply(1, [[1, 1], [0, 2], [1, 1], [1, 1]], 6);
        testApply(1, [[1, 1], [1, 1], [0, 2], [1, 1]], 7);
        testApply(1, [[1, 1], [1, 1], [1, 1], [0, 2]], 8);
        testApply(1, [[0, 0.5], [0, 0.5], [0, 0.5], [0, 0.5]], 0.0625);
        testApply(1, [[1, 1], [0, 0.5], [1, 1], [0, 0.5]], 1);
        testApply(1, [[1, 1], [0, 1.5], [-2, 1], [0, 0.5]], 0.5);
        testApply(100, [[10, 1.5], [-50, 0.5], [10, 2], [0, 0.5]], 67.5);
    });

    function testApply(base: number, modifiers: Array<[number, number]>, expected: number): void {
        expect(modifiers.length).toBe(LAYER_COUNT);

        const layers = new ModifierLayers();
        expect(layers.length).toBe(LAYER_COUNT);

        modifierOrder.forEach((type, i) => {
            const modifier = modifiers[i];
            layers.addModifier(new BasicStatModifier(modifier[0], modifier[1]), type);
        });

        expect(layers.applyLayers(base)).toBeCloseTo(expected, FLOATING_POINT_PRECISION);
    }
});
