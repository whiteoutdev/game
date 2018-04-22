import {Attributes} from '../attributes/Attributes';
import {Stat} from '../Stat';
import {StatsInit} from '../StatsInit';

export abstract class CoreStat extends Stat {
    constructor(name: string, protected attributes: Attributes) {
        super(name);
    }

    public getBaseValue(): number {
        const attributeWeights = this.getAttributeWeights();
        return Object.keys(attributeWeights).reduce((sum, name) => {
            const weight = attributeWeights[name] || 0;
            return sum + this.attributes[name].getBaseValue() * weight;
        }, 0);
    }

    protected abstract getAttributeWeights(): Partial<StatsInit<Attributes>>;
}
