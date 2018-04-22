import {checkAttributeNameAndBase} from '../../../../testing/framework/stats/attributes/AttributeTestingUtils';
import {Willpower} from './Willpower';

describe('Willpower', () => {
    test('it should construct with the correct name and base value', () => {
        checkAttributeNameAndBase(new Willpower(100), 'wil', 100);
    });
});
