import {Attributes} from '../../attributes/Attributes';
import {CoreStat} from '../CoreStat';

export class MaxStamina extends CoreStat {
    constructor(attributes: Attributes) {
        super('mst', attributes);
    }
}
