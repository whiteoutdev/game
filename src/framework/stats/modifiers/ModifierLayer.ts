import {BuiltInSubclass} from '../../../common/BuiltInSubclass';
import {ModifierType} from './ModifierType';
import {StatModifier} from './StatModifier';

@BuiltInSubclass()
export class ModifierLayer extends Array<StatModifier> implements StatModifier {
    public get addend(): number {
        return this.reduce((sum, modifier) => sum + modifier.addend, 0);
    }

    public get multiplier(): number {
        const [buff, debuff] = this.reduce((aggregate, modifier) => {
            const multiplier = modifier.multiplier;
            if (multiplier > 1) {
                aggregate[0] += multiplier - 1;
            } else {
                aggregate[1] *= multiplier;
            }
            return aggregate;
        }, [1, 1]);
        return buff * debuff;
    }

    constructor(public name: ModifierType) {
        super();
    }

    public applyLayer(base: number): number {
        return (base + this.addend) * this.multiplier;
    }
}
