import {Focus} from './Focus';

describe('Focus', () => {
    test('it should construct with the correct name and base value', () => {
        const focus = new Focus(100);
        expect(focus.name).toBe('foc');
        expect(focus.base).toBe(100);
    });
});
