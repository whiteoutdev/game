import {checkAttributeNameAndBase} from '../../../../testing/framework/stats/attributes/AttributeTestingUtils';
import {Luck} from './Luck';

describe('Luck', () => {
    it('should construct with the correct name and base value', () => {
        checkAttributeNameAndBase(new Luck(100), 'luk', 100);
    });
});
