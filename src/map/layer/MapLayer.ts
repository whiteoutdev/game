import {Serialisable} from '../../persistence/Serialisable';
import {Tileset} from '../tileset/Tileset';

export interface MapLayerData {
    tileset: Tileset;
    width: number;
    height: number;
}

export class MapLayer implements MapLayerData, Serialisable {
    public readonly tileset: Tileset;
    public readonly width: number;
    public readonly height: number;
    public readonly grid: Record<number, number> = {};

    constructor(data: MapLayerData) {
        Object.assign(this, data);
    }

    public get size(): number {
        return this.width * this.height;
    }

    public serialise(): string {
        return JSON.stringify({
            tilesetId: this.tileset.id,
            width    : this.width,
            height   : this.height,
            grid     : this.grid
        });
    }
}
