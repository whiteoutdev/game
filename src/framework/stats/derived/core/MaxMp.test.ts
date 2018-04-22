import {BasicAttributes} from '../../attributes/BasicAttributes';
import {MaxMp} from './MaxMp';

describe('Max MP', () => {
    test('it should construct with the correct name', () => {
        const maxMp = new MaxMp(new BasicAttributes());
        expect(maxMp.name).toBe('mmp');
    });

    it('should have a base value of 10 when all attributes are 1', () => {
        const maxMp = new MaxMp(new BasicAttributes());
        expect(maxMp.getBaseValue()).toBe(10);
    });
});
