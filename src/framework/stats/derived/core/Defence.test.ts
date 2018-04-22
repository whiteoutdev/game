import {BasicAttributes} from '../../attributes/BasicAttributes';
import {Defence} from './Defence';

describe('Defence', () => {
    it('should construct with the correct name', () => {
        const defence = new Defence(new BasicAttributes());
        expect(defence.name).toBe('def');
    });

    it('should have a base value of 2 when all attributes are 1', () => {
        const defence = new Defence(new BasicAttributes());
        expect(defence.getBaseValue()).toBe(2);
    });
});
