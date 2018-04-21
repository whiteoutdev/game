import {Attributes} from '../stats/attributes/Attributes';
import {CoreStats} from '../stats/core/CoreStats';
import {Attribute} from '../stats/attributes/Attribute';
import {Stat} from '../stats/Stat';
import {StatsInit} from '../stats/StatsInit';

export interface ActorInit {
    class: Class;
    attributes: StatsInit<Attributes>;
}

export class Actor implements Attributes, CoreStats {
    // Attributes
    public vit: Attribute;
    public str: Attribute;
    public res: Attribute;
    public agi: Attribute;
    public dex: Attribute;
    public wil: Attribute;
    public foc: Attribute;
    public cha: Attribute;
    public luk: Attribute;

    // Core Stats
    public atk: Stat;
    public def: Stat;
    public mat: Stat;
    public mdf: Stat;
    public mhp: Stat;
    public mmp: Stat;
    public mst: Stat;

    constructor(init: ActorInit) {
        this.deriveStats();
    }

    deriveStats(): void {
        // Core Stats
        // this.mhp = (this.vit * 6) +
        //     (this.str) +
        //     (this.res * 2) +
        //     (this.wil);
        // this.mmp = (this.res) +
        //     (this.wil * 3) +
        //     (this.foc * 6);
        // this.mst = (this.vit * 3) +
        //     (this.str * 2) +
        //     (this.res * 3) +
        //     (this.agi) +
        //     (this.wil);
        // this.atk = (this.vit) +
        //     (this.str * 4) +
        //     (this.dex) +
        //     (this.luk * 0.25);
        // this.def = (this.vit * 2) +
        //     (this.str) +
        //     (this.res * 2) +
        //     (this.wil) +
        //     (this.luk * 0.25);
        // this.mat = (this.wil * 2) +
        //     (this.foc * 3) +
        //     (this.cha) +
        //     (this.luk * 0.25);
        // this.mdf = (this.vit) +
        //     (this.res) +
        //     (this.wil * 3) +
        //     (this.foc) +
        //     (this.luk * 0.25);
    }
}
