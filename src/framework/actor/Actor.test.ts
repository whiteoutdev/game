import {Actor} from './Actor';

describe('Actor', () => {
    it('should construct and initialise its fields', () => {
        const actor = new Actor({
            attributes: {
                vit: 1,
                str: 1,
                res: 1,
                agi: 1,
                dex: 1,
                wil: 1,
                foc: 1,
                cha: 1,
                luk: 1
            }
        });

        expect(actor.vit.getBaseValue()).toBe(1);
        expect(actor.str.getBaseValue()).toBe(1);
        expect(actor.res.getBaseValue()).toBe(1);
        expect(actor.agi.getBaseValue()).toBe(1);
        expect(actor.dex.getBaseValue()).toBe(1);
        expect(actor.wil.getBaseValue()).toBe(1);
        expect(actor.foc.getBaseValue()).toBe(1);
        expect(actor.cha.getBaseValue()).toBe(1);
        expect(actor.luk.getBaseValue()).toBe(1);

        expect(actor.mhp).toBeDefined();
        expect(actor.mmp).toBeDefined();
        expect(actor.mst).toBeDefined();
        expect(actor.atk).toBeDefined();
        expect(actor.def).toBeDefined();
        expect(actor.mat).toBeDefined();
        expect(actor.mdf).toBeDefined();
    });
});
