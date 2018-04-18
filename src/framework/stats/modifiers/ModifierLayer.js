import type {StatModifier} from './StatModifier';
import type {ModifierType} from './ModifierType';

export class ModifierLayer extends Array<StatModifier> {
    name: $Values<ModifierType>;

    constructor(name: $Values<ModifierType>) {
        super();
        this.name = name;
    }
}
