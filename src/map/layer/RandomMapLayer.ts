import {Random} from '../../framework/math/Random';
import {MapLayer, MapLayerData} from './MapLayer';

export interface RandomMapLayerData extends MapLayerData {
    seeds: string[];
}

export class RandomMapLayer extends MapLayer implements RandomMapLayerData {
    public readonly seeds: string[];

    protected random: Random;

    constructor(data: RandomMapLayerData) {
        super(data);
        this.random = new Random(...this.seeds || []);
        this.generateGrid();
    }

    public generateGrid(): void {
        for (let i = 0; i < this.size; i++) {
            this.grid[i] = this.random.integerInRange(0, this.tileset.size - 1);
        }
    }

    public serialise(): string {
        return JSON.stringify({
            tilesetId: this.tileset.id,
            width    : this.width,
            height   : this.height,
            seeds    : this.seeds
        });
    }
}
