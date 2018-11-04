import {Tileset} from '../../../map/tileset/Tileset';

export class DemoOrbTileset extends Tileset {
    constructor() {
        super({
            id          : 'demo-orb-tileset',
            width       : 8,
            height      : 1,
            size        : 8,
            sprite      : require('../../assets/tilesets/demo-orb-tileset.png'),
            spriteWidth : 32,
            spriteHeight: 32
        });
    }
}
