import {checkAttributeNameAndBase} from '../../../../testing/framework/stats/attributes/AttributeTestingUtils';
import {Resilience} from './Resilience';

describe('Resilience', () => {
    test('it should construct with the correct name and base value', () => {
        checkAttributeNameAndBase(new Resilience(100), 'res', 100);
    });
});
