import {Attributes} from '../../attributes/Attributes';
import {StatsInit} from '../../StatsInit';
import {CoreStat} from '../CoreStat';

export class MaxStamina extends CoreStat {
    constructor(attributes: Attributes) {
        super('mst', attributes);
    }

    public getAttributeWeights(): Partial<StatsInit<Attributes>> {
        return {
            vit: 2.5,
            res: 5,
            str: 1,
            wil: 0.5,
            foc: 0.5,
            luk: 0.5
        };
    }
}
