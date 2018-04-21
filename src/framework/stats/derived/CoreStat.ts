import {Attributes} from '../attributes/Attributes';
import {Stat} from '../Stat';

export class CoreStat extends Stat {
    constructor(name: string, protected attributes: Attributes) {
        super(name);
    }
}
