import {StatStub} from '../../testing/framework/stats/StatStub';
import {Stat} from './Stat';

describe('Stat', () => {
    it('should construct with the correct name', () => {
        const stat = new StatStub('test');
        expect(stat.name).toBe('test');
    });

    it('should return the correct value when no stat modifiers have been added', () => {
        const stat = new StatStub('test');
        expect(stat.getBaseValue()).toBe(1);
        expect(stat.getValue()).toBe(1);
    });
});
