import {ModifierType} from './ModifierType';
import {StatModifier} from './StatModifier';

export class ModifierLayer extends Array<StatModifier> implements StatModifier {
    public get addend() {
        return this.reduce((sum, modifier) => sum + modifier.addend, 0);
    }

    public get multiplier() {
        return this.reduce((sum, modifier) => sum + modifier.multiplier, 0);
    }

    constructor(public name: ModifierType) {
        super();
    }

    public applyLayer(base: number): number {
        return (base + this.addend) * this.multiplier;
    }
}
