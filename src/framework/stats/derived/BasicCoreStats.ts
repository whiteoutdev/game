import {Attributes} from '../attributes/Attributes';
import {Attack} from './core/Attack';
import {Defence} from './core/Defence';
import {MagicAttack} from './core/MagicAttack';
import {MagicDefence} from './core/MagicDefence';
import {MaxHp} from './core/MaxHp';
import {MaxMp} from './core/MaxMp';
import {MaxStamina} from './core/MaxStamina';
import {CoreStats} from './CoreStats';

export class BasicCoreStats implements CoreStats {
    public mhp: MaxHp;
    public mmp: MaxMp;
    public mst: MaxStamina;
    public atk: Attack;
    public def: Defence;
    public mat: MagicAttack;
    public mdf: MagicDefence;

    constructor(protected attributes: Attributes) {
        this.mhp = new MaxHp(attributes);
        this.mmp = new MaxMp(attributes);
        this.mst = new MaxStamina(attributes);
        this.atk = new Attack(attributes);
        this.def = new Defence(attributes);
        this.mat = new MagicAttack(attributes);
        this.mdf = new MagicDefence(attributes);
    }
}
