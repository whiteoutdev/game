import {Attributes} from '../../attributes/Attributes';
import {StatsInit} from '../../StatsInit';
import {CoreStat} from '../CoreStat';

export class MaxHp extends CoreStat {
    constructor(attributes: Attributes) {
        super('mhp', attributes);
    }

    public getAttributeWeights(): Partial<StatsInit<Attributes>> {
        return {
            vit: 6,
            str: 1,
            res: 2,
            wil: 1
        };
    }
}
