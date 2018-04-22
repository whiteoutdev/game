import {checkAttributeNameAndBase} from '../../../../testing/framework/stats/attributes/AttributeTestingUtils';
import {Dexterity} from './Dexterity';

describe('Dexterity', () => {
    test('it should construct with the correct name and base value', () => {
        checkAttributeNameAndBase(new Dexterity(100), 'dex', 100);
    });
});
