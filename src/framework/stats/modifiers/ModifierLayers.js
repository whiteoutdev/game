import {ModifierLayer} from './ModifierLayer';
import {ModifierType} from './ModifierType';

export const modifierOrder: Array<$Values<ModifierType>> = [
    ModifierType.PERK,
    ModifierType.PASSIVE,
    ModifierType.EQUIPMENT,
    ModifierType.TEMPORARY
];

export class ModifierLayers extends Array<ModifierLayer> {
    constructor() {
        super(...modifierOrder.map(name => new ModifierLayer(name)));
    }

    getLayer(name: $Values<ModifierType>): ModifierLayer {
        return this.find(layer => layer.name === name);
    }
}
