import {BasicAttributes} from '../../attributes/BasicAttributes';
import {MaxStamina} from './MaxStamina';

describe('Max Stamina', () => {
    test('it should construct with the correct name', () => {
        const maxStamina = new MaxStamina(new BasicAttributes());
        expect(maxStamina.name).toBe('mst');
    });
});
