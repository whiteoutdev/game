import {Random} from '../framework/math/Random';
import {DemoBackgroundTileset} from '../game/data/tilesets/DemoBackgroundTileset';
import {DemoOrbTileset} from '../game/data/tilesets/DemoOrbTileset';
import {RandomMapLayer} from './layer/RandomMapLayer';
import {Map, MapData} from './Map';

export interface RandomMapData extends MapData {
    seeds: string[];
}

export class RandomMap extends Map implements RandomMapData {
    public readonly seeds: string[];

    protected random: Random;

    constructor(data: RandomMapData) {
        super(data);
        this.random = new Random(...this.seeds || []);
        this.generateLayers();
    }

    private generateLayers(): void {
        this.layers.push(
            new RandomMapLayer({
                seeds  : [this.random.alpha()],
                height : this.height,
                width  : this.width,
                tileset: new DemoBackgroundTileset()
            }),
            new RandomMapLayer({
                seeds  : [this.random.alpha()],
                height : this.height,
                width  : this.width,
                tileset: new DemoOrbTileset()
            })
        );
    }
}
