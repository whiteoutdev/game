import {checkAttributeNameAndBase} from '../../../../testing/framework/stats/attributes/AttributeTestingUtils';
import {Agility} from './Agility';

describe('Agility', () => {
    test('it should construct with the correct name and base value', () => {
        checkAttributeNameAndBase(new Agility(100), 'agi', 100);
    });
});
