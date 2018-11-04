import 'phaser';
import {Map} from '../../map/Map';
import {RandomMap} from '../../map/RandomMap';
import Scene = Phaser.Scene;

export class DemoTilesheetScene extends Scene {
    private map: Map;

    constructor() {
        super(null);
        this.map = new RandomMap({
            width : 30,
            height: 20,
            seeds : ['foo', 'bar', 'baz']
        });
    }

    public preload(): void {
        this.map.layers.forEach(layer => {
            this.load.spritesheet(
                layer.tileset.id,
                layer.tileset.sprite,
                {
                    frameWidth : layer.tileset.spriteWidth,
                    frameHeight: layer.tileset.spriteHeight
                }
            );
        });
    }

    public create(): void {
        const width  = 30,
              height = 20,
              map    = new RandomMap({
                  width,
                  height,
                  seeds: ['foo', 'bar', 'baz']
              });

        map.layers.forEach(layer => {
            for (let y = 0; y < layer.height; y++) {
                for (let x = 0; x < layer.width; x++) {
                    const tileX = (x + 0.5) * layer.tileset.spriteWidth,
                          tileY = (y + 0.5) * layer.tileset.spriteHeight;
                    this.add.sprite(tileX, tileY, layer.tileset.id, layer.grid[y * layer.width + x]);
                }
            }
        });
    }
}
