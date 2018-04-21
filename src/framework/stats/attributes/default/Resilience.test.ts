import {Resilience} from './Resilience';

describe('Resilience', () => {
    test('it should construct with the correct name and base value', () => {
        const resilience = new Resilience(100);
        expect(resilience.name).toBe('res');
        expect(resilience.base).toBe(100);
    });
});
