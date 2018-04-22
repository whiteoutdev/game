import {StatModifier} from './StatModifier';

export class BasicStatModifier implements StatModifier {

    public constructor(public readonly addend: number     = 0,
                       public readonly multiplier: number = 1) {
    }

    public toString(): string {
        return `[Addend: ${this.addend}, Multiplier: ${this.multiplier}]`;
    }
}
