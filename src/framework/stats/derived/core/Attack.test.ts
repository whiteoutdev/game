import {BasicAttributes} from '../../attributes/BasicAttributes';
import {Attack} from './Attack';

describe('Attack', () => {
    it('should construct with the correct name', () => {
        const attack = new Attack(new BasicAttributes());
        expect(attack.name).toBe('atk');
    });

    it('should have a base value of 2 when all attributes are 1', () => {
        const attack = new Attack(new BasicAttributes());
        expect(attack.getBaseValue()).toBe(2);
    });
});
