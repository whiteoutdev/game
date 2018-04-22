import {Attributes} from '../../attributes/Attributes';
import {CoreStat} from '../CoreStat';

export class Defence extends CoreStat {
    constructor(attributes: Attributes) {
        super('def', attributes);
    }

    public getBaseValue(): number {
        // TODO: Implement
        return 0;
    }
}
