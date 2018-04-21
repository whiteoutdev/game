import {ModifierLayer} from './ModifierLayer';
import {ModifierType} from './ModifierType';

export const modifierOrder: ModifierType[] = [
    ModifierType.PERK,
    ModifierType.PASSIVE,
    ModifierType.EQUIPMENT,
    ModifierType.TEMPORARY
];

export class ModifierLayers extends Array<ModifierLayer> {
    constructor() {
        super(...modifierOrder.map(name => new ModifierLayer(name)));
    }

    public getLayer(name: ModifierType): ModifierLayer {
        return this.find(layer => layer.name === name);
    }
}
