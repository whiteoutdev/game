import {Attributes} from '../../attributes/Attributes';
import {StatsInit} from '../../StatsInit';
import {CoreStats} from '../CoreStats';
import {ExtraStat} from '../ExtraStat';

export class CounterRate extends ExtraStat {
    constructor(attributes: Attributes, coreStats: CoreStats) {
        super('', attributes, coreStats);
    }

    public getAttributeWeights(): Partial<StatsInit<Attributes | CoreStats>> {
        return {

        };
    }
}
