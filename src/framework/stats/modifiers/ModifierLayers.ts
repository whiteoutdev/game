import {BuiltInSubclass} from '../../../common/BuiltInSubclass';
import {Logger} from '../../logging/Logger';
import {ModifierLayer} from './ModifierLayer';
import {ModifierType} from './ModifierType';
import {StatModifier} from './StatModifier';

export const modifierOrder: ModifierType[] = [
    ModifierType.PERK,
    ModifierType.PASSIVE,
    ModifierType.EQUIPMENT,
    ModifierType.TEMPORARY
];

@BuiltInSubclass()
export class ModifierLayers extends Array<ModifierLayer> {
    constructor() {
        super(...modifierOrder.map(type => new ModifierLayer(type)));
    }

    public getLayer(name: ModifierType): ModifierLayer {
        return this.find(layer => layer.name === name);
    }

    public addModifier(modifier: StatModifier, type: ModifierType): void {
        const layer = this.getLayer(type);
        if (layer) {
            layer.push(modifier);
        } else {
            Logger.warn(`Unable to add StatModifier ${modifier} to layer ${type}. No such layer was found.`);
        }
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
