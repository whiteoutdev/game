import {Attributes} from '../../attributes/Attributes';
import {StatsInit} from '../../StatsInit';
import {CoreStat} from '../CoreStat';

export class MagicAttack extends CoreStat {
    constructor(attributes: Attributes) {
        super('mat', attributes);
    }

    protected getAttributeWeights(): Partial<StatsInit<Attributes>> {
        return {
            wil: 0.6,
            foc: 1.2,
            cha: 0.1,
            luk: 0.1
        };
    }
}
