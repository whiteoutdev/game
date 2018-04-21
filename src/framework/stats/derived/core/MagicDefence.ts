import {Attributes} from '../../attributes/Attributes';
import {CoreStat} from '../CoreStat';

export class MagicDefence extends CoreStat {
    constructor(attributes: Attributes) {
        super('mdf', attributes);
    }
}
