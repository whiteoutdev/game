import {Stat} from '../Stat';

export abstract class Attribute extends Stat {
    public base: number;

    constructor(name: string, base: number) {
        super(name);
        this.base = base;
    }

    public getBaseValue(): number {
        return this.base;
    }
}
