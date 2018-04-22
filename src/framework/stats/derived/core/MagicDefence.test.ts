import {BasicAttributes} from '../../attributes/BasicAttributes';
import {MagicDefence} from './MagicDefence';

describe('MagicDefence', () => {
    test('it should construct with the correct name', () => {
        const magicDefence = new MagicDefence(new BasicAttributes());
        expect(magicDefence.name).toBe('mdf');
    });

    it('should have a base value of 2 when all attributes are 1', () => {
        const magicDefence = new MagicDefence(new BasicAttributes());
        expect(magicDefence.getBaseValue()).toBe(2);
    });
});
