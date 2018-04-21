import {Willpower} from './Willpower';

describe('Willpower', () => {
    test('it should construct with the correct name and base value', () => {
        const willpower = new Willpower(100);
        expect(willpower.name).toBe('wil');
        expect(willpower.base).toBe(100);
    });
});
