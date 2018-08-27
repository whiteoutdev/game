import {Faction} from './Faction';
import {FactionRelationship, FactionRelationshipMap} from './FactionRelationship';

describe('Faction', () => {
    it('should construct with the correct name', () => {
        const faction = new Faction('Test');
        expect(faction.name).toBe('Test');
    });

    it('should construct with the correct relationship data', () => {
        const relationships: FactionRelationshipMap = {
            foo: FactionRelationship.ALLY,
            bar: FactionRelationship.NEUTRAL,
            baz: FactionRelationship.ENEMY
        };
        const faction = new Faction('Test', relationships);
        expect(faction.name).toBe('Test');
        expect(faction.relationships).toBe(relationships);
    });

    describe('isAlliedTo', () => {
        it('should return true if the faction is allied to the target faction', () => {
            const foo = new Faction('foo', {bar: FactionRelationship.ALLY}),
                  bar = new Faction('bar');
            expect(foo.isAlliedTo(bar)).toBe(true);
        });

        it('should return false for any other faction relationship', () => {
            const relationships: FactionRelationshipMap = {},
                  factions                              = Object.keys(FactionRelationship)
                      .filter(key => key !== FactionRelationship.ALLY)
                      .map(key => {
                          relationships[key] = FactionRelationship[key];
                          return new Faction(key);
                      }),
                  faction                               = new Faction('Foo', relationships);
            factions.forEach(nonAllied => {
                expect(faction.isAlliedTo(nonAllied)).toBe(false);
            });
        });

        it('should not be symmetric', () => {
            const foo = new Faction('foo', {bar: FactionRelationship.ALLY}),
                  bar = new Faction('bar');
            expect(foo.isAlliedTo(bar)).toBe(true);
            expect(bar.isAlliedTo(foo)).toBe(false);
        });
    });

    describe('isNeutralTo', () => {
        it('should return true if the faction is neutral to the target faction', () => {
            const foo = new Faction('foo', {bar: FactionRelationship.NEUTRAL}),
                  bar = new Faction('bar');
            expect(foo.isNeutralTo(bar)).toBe(true);
        });

        it('should return true is no explicit relationship has been defined', () => {
            const foo = new Faction('foo'),
                  bar = new Faction('bar');
            expect(foo.isNeutralTo(bar)).toBe(true);
        });

        it('should return false for any other faction relationship', () => {
            const relationships: FactionRelationshipMap = {},
                  factions                              = Object.keys(FactionRelationship)
                      .filter(key => key !== FactionRelationship.NEUTRAL)
                      .map(key => {
                          relationships[key] = FactionRelationship[key];
                          return new Faction(key);
                      }),
                  faction                               = new Faction('Foo', relationships);
            factions.forEach(nonAllied => {
                expect(faction.isNeutralTo(nonAllied)).toBe(false);
            });
        });

        it('should not be symmetric', () => {
            const foo = new Faction('foo', {bar: FactionRelationship.NEUTRAL}),
                  bar = new Faction('bar', {foo: FactionRelationship.ENEMY});
            expect(foo.isNeutralTo(bar)).toBe(true);
            expect(bar.isNeutralTo(foo)).toBe(false);
        });
    });

    describe('isEnemyTo', () => {
        it('should return true if the faction is an enemy to the target faction', () => {
            const foo = new Faction('foo', {bar: FactionRelationship.ENEMY}),
                  bar = new Faction('bar');
            expect(foo.isEnemyTo(bar)).toBe(true);
        });

        it('should return false for any other faction relationship', () => {
            const relationships: FactionRelationshipMap = {},
                  factions                              = Object.keys(FactionRelationship)
                      .filter(key => key !== FactionRelationship.ENEMY)
                      .map(key => {
                          relationships[key] = FactionRelationship[key];
                          return new Faction(key);
                      }),
                  faction                               = new Faction('Foo', relationships);
            factions.forEach(nonAllied => {
                expect(faction.isEnemyTo(nonAllied)).toBe(false);
            });
        });

        it('should not be symmetric', () => {
            const foo = new Faction('foo', {bar: FactionRelationship.ENEMY}),
                  bar = new Faction('bar');
            expect(foo.isEnemyTo(bar)).toBe(true);
            expect(bar.isEnemyTo(foo)).toBe(false);
        });
    });
});
