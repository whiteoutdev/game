import {checkAttributeNameAndBase} from '../../../../testing/framework/stats/attributes/AttributeTestingUtils';
import {Vitality} from './Vitality';

describe('Vitality', () => {
    it('should construct with the correct name and base value', () => {
        checkAttributeNameAndBase(new Vitality(100), 'vit', 100);
    });
});
