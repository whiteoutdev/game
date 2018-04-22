import {checkAttributeNameAndBase} from '../../../../testing/framework/stats/attributes/AttributeTestingUtils';
import {Strength} from './Strength';

describe('Strength', () => {
    test('it should construct with the correct name and base value', () => {
        checkAttributeNameAndBase(new Strength(100), 'str', 100);
    });
});
