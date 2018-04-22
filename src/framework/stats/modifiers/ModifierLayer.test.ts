import {BasicStatModifier} from './BasicStatModifier';
import {ModifierLayer} from './ModifierLayer';
import {ModifierType} from './ModifierType';

const FLOATING_POINT_PRECISION = 6;

describe('ModifierLayer', () => {
    it('should construct with the correct name', () => {
        Object.values(ModifierType).forEach(name => {
            const modifierLayer = new ModifierLayer(name);
            expect(modifierLayer.name).toBe(name);
        });
    });

    describe('applyLayer', () => {
        it('should correctly apply additive modifiers', () => {
            testAdditiveModifiers(0, 10);
            testAdditiveModifiers(0, 10, 20);
            testAdditiveModifiers(0, 10, 20, 30);
            testAdditiveModifiers(0, 10, 20, 30, 40);
            testAdditiveModifiers(100, 100);
            testAdditiveModifiers(100, -10);
            testAdditiveModifiers(100, -10, -20);
            testAdditiveModifiers(100, -10, -30);
            testAdditiveModifiers(100, -10, -40);
            testAdditiveModifiers(100, -50, 50);
        });

        it('should correctly apply multiplicative modifiers greater than 1', () => {
            testMultiplicativeModifiers(1, [2], 2);
            testMultiplicativeModifiers(1, [10], 10);
            testMultiplicativeModifiers(1, [100], 100);
            testMultiplicativeModifiers(1, [2, 3], 4);
            testMultiplicativeModifiers(1, [2, 3, 4], 7);
            testMultiplicativeModifiers(1, [1.5], 1.5);
            testMultiplicativeModifiers(1, [1.25, 1.25], 1.5);
            testMultiplicativeModifiers(1, [1.25, 1.5, 1.25], 2);
            testMultiplicativeModifiers(100, [2], 200);
            testMultiplicativeModifiers(100, [2, 3, 4], 700);
            testMultiplicativeModifiers(100, [1.25, 1.5, 1.25], 200);
        });

        it('should correctly apply multiplicative modifiers less than 1', () => {
            testMultiplicativeModifiers(1, [0.5], 0.5);
            testMultiplicativeModifiers(1, [0.1], 0.1);
            testMultiplicativeModifiers(1, [0.5, 0.5], 0.25);
            testMultiplicativeModifiers(1, [0.1, 0.1, 0.1], 0.001);
            testMultiplicativeModifiers(1, [0.75, 0.2], 0.15);
            testMultiplicativeModifiers(100, [0.5], 50);
            testMultiplicativeModifiers(100, [0.5, 0.5], 25);
            testMultiplicativeModifiers(100, [0.75, 0.2], 15);
            testMultiplicativeModifiers(100, [0.01], 1);
        });

        it('should correctly combine multiplicative modifiers', () => {
            testMultiplicativeModifiers(1, [0.5, 2], 1);
            testMultiplicativeModifiers(1, [1.5, 1.5, 0.25], 0.5);
            testMultiplicativeModifiers(1, [0.5, 0.5, 4], 1);
            testMultiplicativeModifiers(1, [0.5, 1.5, 0.5, 1.5], 0.5);
            testMultiplicativeModifiers(1, [0.5, 1.5, 1.5, 1.5], 1.25);
            testMultiplicativeModifiers(100, [0.5, 2], 100);
            testMultiplicativeModifiers(100, [1.5, 1.5, 0.25], 50);
            testMultiplicativeModifiers(100, [0.5, 0.5, 4], 100);
            testMultiplicativeModifiers(100, [0.5, 1.5, 0.5, 1.5], 50);
            testMultiplicativeModifiers(100, [0.5, 1.5, 1.5, 1.5], 125);
        });

        it('should combine additive and multiplicative modifiers correctly', () => {
            testModifiers(10, [[10, 2]], 40);
            testModifiers(10, [[-5, 2]], 10);
            testModifiers(10, [[10, 0.5]], 10);
            testModifiers(10, [[-5, 0.5]], 2.5);
            testModifiers(0, [[1, 1.5], [1, 1.5]], 4);
            testModifiers(10, [[-5, 2], [-5, 1.5]], 0);
            testModifiers(10, [[1, 1.5], [1, 1.5], [1, 1.5], [1, 1.5]], 42);
            testModifiers(10, [[5, 2], [-5, 0.5]], 10);
            testModifiers(10, [[5, 0.5], [5, 0.5]], 5);
            testModifiers(100, [[100, 0.25], [100, 2]], 150);
            testModifiers(100, [[-10, 0.5], [-20, 0.5], [-20, 0.5]], 6.25);
            testModifiers(100, [[50, 1.5], [-50, 1.5], [50, 0.5], [-50, 0.5]], 50);
        });

        function testAdditiveModifiers(base: number, ...addends: number[]): void {
            const sum = addends.reduce((aggregate, addend) => aggregate + addend, 0);
            testModifiers(base, addends.map(addend => [addend, 1]) as Array<[number, number]>, base + sum);
        }

        function testMultiplicativeModifiers(base: number, multipliers: number[], expected: number): void {
            testModifiers(base, multipliers.map(multiplier => [0, multiplier]) as Array<[number, number]>, expected);
        }

        function testModifiers(base: number, modifiers: Array<[number, number]>, expected: number): void {
            const layer = createBasicLayer(...modifiers);
            expect(layer.applyLayer(base)).toBeCloseTo(expected, FLOATING_POINT_PRECISION);
        }
    });

    function createBasicLayer(...modifiers: Array<[number, number]>): ModifierLayer {
        const layer = new ModifierLayer(ModifierType.TEMPORARY);
        modifiers.forEach(([addend, multiplier]) => {
            layer.push(new BasicStatModifier(addend, multiplier));
        });
        return layer;
    }
});
