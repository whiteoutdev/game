import {Tileset} from '../../../map/tileset/Tileset';

export class DemoBackgroundTileset extends Tileset {
    constructor() {
        super({
            id          : 'demo-background-tileset',
            width       : 4,
            height      : 1,
            size        : 4,
            sprite      : require('../../assets/tilesets/demo-background-tileset.png'),
            spriteWidth : 32,
            spriteHeight: 32
        });
    }
}
