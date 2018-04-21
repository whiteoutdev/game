import {ModifierType} from './ModifierType';
import {StatModifier} from './StatModifier';

export class ModifierLayer extends Array<StatModifier> {
    constructor(public name: ModifierType) {
        super();
    }
}
