import 'phaser';
import {Map} from '../../map/Map';
import Scene = Phaser.Scene;

export class MapScene extends Scene {
    constructor(protected map: Map) {
        super(null);
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
        this.map.layers.forEach(layer => {
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
