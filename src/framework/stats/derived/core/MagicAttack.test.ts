import {BasicAttributes} from '../../attributes/BasicAttributes';
import {MagicAttack} from './MagicAttack';

describe('MagicAttack', () => {
    it('should construct with the correct name', () => {
        const magicAttack = new MagicAttack(new BasicAttributes());
        expect(magicAttack.name).toBe('mat');
    });

    it('should have a base value of 2 when all attributes are 1', () => {
        const magicAttack = new MagicAttack(new BasicAttributes());
        expect(magicAttack.getBaseValue()).toBe(2);
    });
});
