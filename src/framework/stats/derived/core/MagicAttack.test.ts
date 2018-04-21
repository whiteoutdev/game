import {BasicAttributes} from '../../attributes/BasicAttributes';
import {MagicAttack} from './MagicAttack';

describe('MagicAttack', () => {
    test('it should construct with the correct name', () => {
        const magicAttack = new MagicAttack(new BasicAttributes());
        expect(magicAttack.name).toBe('mat');
    });
});
