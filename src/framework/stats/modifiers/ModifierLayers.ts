import {Logger} from '../../logging/Logger';
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

    public applyLayers(base: number): number {
        return modifierOrder.reduce((value, type) => {
            const layer = this.getLayer(type);
            if (layer) {
                return layer.applyLayer(value);
            } else {
                Logger.warn(`No ModifierLayer found for ModifierType ${type}. Something has probably gone wrong.`);
                return value;
            }
        }, base);
    }
}
