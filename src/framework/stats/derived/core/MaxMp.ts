import {Attributes} from '../../attributes/Attributes';
import {CoreStat} from '../CoreStat';

export class MaxMp extends CoreStat {
    constructor(attributes: Attributes) {
        super('mmp', attributes);
    }

    public getBaseValue(): number {
        // TODO: Implement
        return 0;
    }
}
