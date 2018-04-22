import {BasicStatModifier} from './BasicStatModifier';

describe('StatModifier', () => {
    it('should construct using default values', () => {
        const m1 = new BasicStatModifier(),
              m2 = new BasicStatModifier(100);

        expect(m1.addend).toBe(0);
        expect(m1.multiplier).toBe(1);
        expect(m2.addend).toBe(100);
        expect(m2.multiplier).toBe(1);
    });

    it('should use a custom toString() method', () => {
        const m1 = new BasicStatModifier(),
              m2 = new BasicStatModifier(100),
              m3 = new BasicStatModifier(100, 5);

        expect(String(m1)).toBe('[Addend: 0, Multiplier: 1]');
        expect(String(m2)).toBe('[Addend: 100, Multiplier: 1]');
        expect(String(m3)).toBe('[Addend: 100, Multiplier: 5]');
    });
});
