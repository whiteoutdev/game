import {Attributes} from '../../attributes/Attributes';
import {CoreStat} from '../CoreStat';

export class MaxHp extends CoreStat {
    constructor(attributes: Attributes) {
        super('mhp', attributes);
    }

    public getBaseValue(): number {
        // TODO: Implement
        return 0;
    }
}
