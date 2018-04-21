import {BasicAttributes} from '../../attributes/BasicAttributes';
import {MagicDefence} from './MagicDefence';

describe('MagicDefence', () => {
    test('it should construct with the correct name', () => {
        const magicDefence = new MagicDefence(new BasicAttributes());
        expect(magicDefence.name).toBe('mdf');
    });
});
