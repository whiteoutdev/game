import {Actor} from './Actor';

describe('Actor', () => {
    test('it constructs and initialises its fields', () => {
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

        expect(actor.vit).toBe(1);
        expect(actor.str).toBe(1);
        expect(actor.res).toBe(1);
        expect(actor.agi).toBe(1);
        expect(actor.dex).toBe(1);
        expect(actor.wil).toBe(1);
        expect(actor.foc).toBe(1);
        expect(actor.cha).toBe(1);
        expect(actor.luk).toBe(1);

        expect(actor.mhp).toBeDefined();
        expect(actor.mmp).toBeDefined();
        expect(actor.mst).toBeDefined();
        expect(actor.atk).toBeDefined();
        expect(actor.def).toBeDefined();
        expect(actor.mat).toBeDefined();
        expect(actor.mdf).toBeDefined();
    });
});
