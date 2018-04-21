import {BasicAttributes} from '../../attributes/BasicAttributes';
import {Attack} from './Attack';

describe('Attack', () => {
    test('it should construct with the correct name', () => {
        const attack = new Attack(new BasicAttributes());
        expect(attack.name).toBe('atk');
    });
});
