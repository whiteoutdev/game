import {BasicAttributes} from '../../attributes/BasicAttributes';
import {MaxStamina} from './MaxStamina';

describe('Max Stamina', () => {
    it('should construct with the correct name', () => {
        const maxStamina = new MaxStamina(new BasicAttributes());
        expect(maxStamina.name).toBe('mst');
    });

    it('should have a base value of 10 when all attributes are 1', () => {
        const maxStamina = new MaxStamina(new BasicAttributes());
        expect(maxStamina.getBaseValue()).toBe(10);
    });
});
