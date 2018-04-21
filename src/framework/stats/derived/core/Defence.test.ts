import {BasicAttributes} from '../../attributes/BasicAttributes';
import {Defence} from './Defence';

describe('Defence', () => {
    test('it should construct with the correct name', () => {
        const defence = new Defence(new BasicAttributes());
        expect(defence.name).toBe('def');
    });
});
