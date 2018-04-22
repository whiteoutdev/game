import {Stat} from '../../../framework/stats/Stat';

export class StatStub extends Stat {
    public getBaseValue(): number {
        return 1;
    }
}
