import {ModifierType} from './ModifierType';
import {StatModifier} from './StatModifier';

export class ModifierLayer extends Array<StatModifier> {
    name: ModifierType;

    constructor(name: ModifierType) {
        super();
        this.name = name;
    }
}
