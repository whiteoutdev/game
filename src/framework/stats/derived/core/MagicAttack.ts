import {Attributes} from '../../attributes/Attributes';
import {CoreStat} from '../CoreStat';

export class MagicAttack extends CoreStat {
    constructor(attributes: Attributes) {
        super('mat', attributes);
    }

    public getBaseValue(): number {
        // TODO: Implement
        return 0;
    }
}
