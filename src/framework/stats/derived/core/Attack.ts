import {Attributes} from '../../attributes/Attributes';
import {StatsInit} from '../../StatsInit';
import {CoreStat} from '../CoreStat';

export class Attack extends CoreStat {
    constructor(attributes: Attributes) {
        super('atk', attributes);
    }

    protected getAttributeWeights(): Partial<StatsInit<Attributes>> {
        return {
            vit: 0.3,
            str: 1.3,
            dex: 0.3,
            luk: 0.1
        };
    }
}
