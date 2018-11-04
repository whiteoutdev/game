import {Serialisable} from './Serialisable';

export abstract class SeedableEntity<S> implements Serialisable {
    constructor(public seed: S) {
    }

    public serialise(): string {
        return JSON.stringify(this.seed);
    }
}
