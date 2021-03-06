import {BasicAttributes} from '../../attributes/BasicAttributes';
import {MaxHp} from './MaxHp';

describe('Max HP', () => {
    it('should construct with the correct name', () => {
        const maxHp = new MaxHp(new BasicAttributes());
        expect(maxHp.name).toBe('mhp');
    });

    it('should have a base value of 10 when all attributes are 1', () => {
        const maxHp = new MaxHp(new BasicAttributes());
        expect(maxHp.getBaseValue()).toBe(10);
    });
});
