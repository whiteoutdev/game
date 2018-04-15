import faker from 'faker';
import '../../testing/customMatchers';
import {Random} from './Random';

const FUZZ_RUNS = 1000;

describe('Random Fuzz Tests', () => {
    it('it should produce predictable results from any set of seeds', () => {
        for (let i = 0; i < FUZZ_RUNS; i++) {
            const seeds     = faker.random.words().split(' '),
                  random1   = new Random(...seeds),
                  random2   = new Random(...seeds),
                  pickArray = faker.random.words(100).split(' '),
                  now       = Date.now(),
                  context   = `
Seeds:\t\t${JSON.stringify(seeds)}
Pick Array:\t\t${JSON.stringify(pickArray)}
Now:\t\t${now}
                  `;
            expect(random1.between(0, 1000)).toBeWithContext(random2.between(0, 1000), context);
            expect(random1.frac()).toBeWithContext(random2.frac(), context);
            expect(random1.integer()).toBeWithContext(random2.integer(), context);
            expect(random1.integerInRange()).toBeWithContext(random2.integerInRange(), context);
            expect(random1.normal()).toBeWithContext(random2.normal(), context);
            expect(random1.pick(pickArray)).toBeWithContext(random2.pick(pickArray), context);
            expect(random1.angle()).toBeWithContext(random2.angle(), context);
            expect(random1.real()).toBeWithContext(random2.real(), context);
            expect(random1.realInRange(0, 1000)).toBeWithContext(random2.realInRange(0, 1000), context);
            expect(random1.rotation()).toBeWithContext(random2.rotation(), context);
            expect(random1.sign()).toBeWithContext(random2.sign(), context);
            expect(random1.timestamp(0, now)).toBeWithContext(random2.timestamp(0, now), context);
            expect(random1.uuid()).toBeWithContext(random2.uuid(), context);
            expect(random1.weightedPick(pickArray)).toBeWithContext(random2.weightedPick(pickArray), context);
        }
    });
});
