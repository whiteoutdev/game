import {Attribute} from '../stats/attributes/Attribute';
import {Attributes} from '../stats/attributes/Attributes';
import {BasicAttributes} from '../stats/attributes/BasicAttributes';
import {BasicCoreStats} from '../stats/derived/BasicCoreStats';
import {Attack} from '../stats/derived/core/Attack';
import {Defence} from '../stats/derived/core/Defence';
import {MagicAttack} from '../stats/derived/core/MagicAttack';
import {MagicDefence} from '../stats/derived/core/MagicDefence';
import {MaxHp} from '../stats/derived/core/MaxHp';
import {MaxMp} from '../stats/derived/core/MaxMp';
import {MaxStamina} from '../stats/derived/core/MaxStamina';
import {CoreStats} from '../stats/derived/CoreStats';
import {StatsInit} from '../stats/StatsInit';

export interface ActorInit {
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
    public mhp: MaxHp;
    public mmp: MaxMp;
    public mst: MaxStamina;
    public atk: Attack;
    public def: Defence;
    public mat: MagicAttack;
    public mdf: MagicDefence;

    constructor(init: ActorInit) {
        Object.assign(this, new BasicAttributes(init.attributes));
        Object.assign(this, new BasicCoreStats(this));
    }
}
