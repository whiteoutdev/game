import {Attributes} from '../../attributes/Attributes';
import {StatsInit} from '../../StatsInit';
import {CoreStat} from '../CoreStat';

export class MaxMp extends CoreStat {
    constructor(attributes: Attributes) {
        super('mmp', attributes);
    }

    protected getAttributeWeights(): Partial<StatsInit<Attributes>> {
        return {
            res: 1,
            wil: 3,
            foc: 6
        };
    }
}
