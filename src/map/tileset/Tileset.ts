import {Tile} from './Tile';

export interface TilesetData {
    id: string;
    width: number;
    height: number;
    size: number;
    sprite: any;
    spriteWidth: number;
    spriteHeight: number;
    tiles?: Tile[];
    tags?: string[];
}

export class Tileset implements TilesetData {
    public id: string;
    public width: number;
    public height: number;
    public size: number;
    public sprite: any;
    public spriteWidth: number;
    public spriteHeight: number;
    public tiles: Tile[] = [];
    public tags: string[] = [];

    constructor(data: TilesetData) {
        Object.assign(this, data);
    }
}
