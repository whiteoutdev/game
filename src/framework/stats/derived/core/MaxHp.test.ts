import {BasicAttributes} from '../../attributes/BasicAttributes';
import {MaxHp} from './MaxHp';

describe('Max HP', () => {
    test('it should construct with the correct name', () => {
        const maxHp = new MaxHp(new BasicAttributes());
        expect(maxHp.name).toBe('mhp');
    });
});
