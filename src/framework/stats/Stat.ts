import {Logger} from '../logging/Logger';
import {BasicStatModifier} from './modifiers/BasicStatModifier';
import {ModifierLayers} from './modifiers/ModifierLayers';
import {ModifierType} from './modifiers/ModifierType';

export abstract class Stat {
    public name: string;

    protected modifierLayers = new ModifierLayers();

    constructor(name: string) {
        this.name = name;
    }

    public registerModifier(modifier: BasicStatModifier, type: ModifierType): void {
        const layer = this.modifierLayers.getLayer(type);
        if (layer) {
            layer.push(modifier);
        } else {
            Logger.warn(`No ModifierLayer for ModifierType ${type}.`);
            Logger.warn(`Unable to register StatModifier ${modifier} to stat ${this.name}. Ignoring`);
        }
    }

    public abstract getBaseValue(): number;

    public getValue(): number {
        return this.modifierLayers.applyLayers(this.getBaseValue());
    }
}
