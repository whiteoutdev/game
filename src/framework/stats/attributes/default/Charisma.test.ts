import {checkAttributeNameAndBase} from '../../../../testing/framework/stats/attributes/AttributeTestingUtils';
import {Charisma} from './Charisma';

describe('Charisma', () => {
    it('it should construct with the correct name and base value', () => {
        checkAttributeNameAndBase(new Charisma(100), 'cha', 100);
    });
});
