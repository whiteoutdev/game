import {Attribute} from '../Attribute';

export class Strength extends Attribute {
    constructor(base: number) {
        super('str', base);
    }
}
