import {Attributes} from '../../attributes/Attributes';
import {CoreStat} from '../CoreStat';

export class Attack extends CoreStat {
    constructor(attributes: Attributes) {
        super('atk', attributes);
    }
}
