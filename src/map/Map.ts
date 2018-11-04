import {Serialisable} from '../persistence/Serialisable';
import {MapLayer} from './layer/MapLayer';

export interface MapData {
    width: number;
    height: number;
}

export class Map implements MapData, Serialisable {
    public readonly width: number;
    public readonly height: number;
    public readonly layers: MapLayer[] = [];

    constructor(data: MapData) {
        Object.assign(this, data);
    }

    public get size(): number {
        return this.width * this.height;
    }

    public serialise(): string {
        return JSON.stringify({
            width : this.width,
            height: this.height,
            layers: this.layers.map(layer => layer.serialise())
        });
    }
}
