import {Attributes} from '../attributes/Attributes';
import {Stat} from '../Stat';
import {StatsInit} from '../StatsInit';
import {CoreStats} from './CoreStats';

export abstract class ExtraStat extends Stat {
    protected allStats: Attributes | CoreStats;

    constructor(name: string, protected attributes: Attributes, protected coreStats: CoreStats) {
        super(name);
        this.allStats = Object.assign({}, attributes, coreStats);
    }

    public getBaseValue(): number {
        const attributeWeights = this.getAttributeWeights();
        return Object.keys(attributeWeights).reduce((sum, name) => {
            const weight = attributeWeights[name] || 0;
            return sum + this.allStats[name].getBaseValue() * weight;
        }, 0);
    }

    protected abstract getAttributeWeights(): Partial<StatsInit<Attributes | CoreStats>>;
}
