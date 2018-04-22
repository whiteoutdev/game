import {checkAttributeNameAndBase} from '../../../../testing/framework/stats/attributes/AttributeTestingUtils';
import {Focus} from './Focus';

describe('Focus', () => {
    test('it should construct with the correct name and base value', () => {
        checkAttributeNameAndBase(new Focus(100), 'foc', 100);
    });
});
