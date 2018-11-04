import {Tileset} from './Tileset';

const id         = 'tileset',
      spritePath = '/path/to/sprite';

describe('Tileset', () => {
    it('should construct with the correct properties', () => {
        const tileset = new Tileset({
            id,
            width       : 15,
            height      : 10,
            size        : 150,
            sprite      : spritePath,
            spriteWidth : 32,
            spriteHeight: 48
        });

        expect(tileset.id).toBe(id);
        expect(tileset.width).toBe(15);
        expect(tileset.height).toBe(10);
        expect(tileset.size).toBe(150);
        expect(tileset.sprite).toBe(spritePath);
        expect(tileset.spriteWidth).toBe(32);
        expect(tileset.spriteHeight).toBe(48);
        expect(tileset.tiles).toEqual([]);
    });
});
