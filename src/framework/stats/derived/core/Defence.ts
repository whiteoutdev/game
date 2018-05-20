import {Attributes} from '../../attributes/Attributes';
import {StatsInit} from '../../StatsInit';
import {CoreStat} from '../CoreStat';

export class Defence extends CoreStat {
    constructor(attributes: Attributes) {
        super('def', attributes);
    }

    protected getAttributeWeights(): Partial<StatsInit<Attributes>> {
        return {
            vit: 0.75,
            str: 0.2,
            res: 0.75,
            wil: 0.2,
            luk: 0.1
        };
    }
}
