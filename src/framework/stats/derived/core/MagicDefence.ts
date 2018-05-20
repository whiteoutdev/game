import {Attributes} from '../../attributes/Attributes';
import {StatsInit} from '../../StatsInit';
import {CoreStat} from '../CoreStat';

export class MagicDefence extends CoreStat {
    constructor(attributes: Attributes) {
        super('mdf', attributes);
    }

    protected getAttributeWeights(): Partial<StatsInit<Attributes>> {
        return {
            vit: 0.1,
            res: 0.25,
            wil: 1.3,
            foc: 0.25,
            luk: 0.1
        };
    }
}
