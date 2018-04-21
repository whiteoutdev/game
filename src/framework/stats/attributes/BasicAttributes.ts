import {StatsInit} from '../StatsInit';
import {Attribute} from './Attribute';
import {Attributes} from './Attributes';
import {Agility} from './default/Agility';
import {Charisma} from './default/Charisma';
import {Dexterity} from './default/Dexterity';
import {Focus} from './default/Focus';
import {Luck} from './default/Luck';
import {Resilience} from './default/Resilience';
import {Strength} from './default/Strength';
import {Vitality} from './default/Vitality';
import {Willpower} from './default/Willpower';

const minAttributes: StatsInit<Attributes> = {
    vit: 1,
    str: 1,
    res: 1,
    agi: 1,
    dex: 1,
    wil: 1,
    foc: 1,
    cha: 1,
    luk: 1
};

export class BasicAttributes implements Attributes {
    public vit: Attribute;
    public str: Attribute;
    public res: Attribute;
    public agi: Attribute;
    public dex: Attribute;
    public wil: Attribute;
    public foc: Attribute;
    public cha: Attribute;
    public luk: Attribute;

    constructor(init: StatsInit<Attributes> = minAttributes) {
        this.vit = new Vitality(init.vit);
        this.str = new Strength(init.str);
        this.res = new Resilience(init.res);
        this.agi = new Agility(init.agi);
        this.dex = new Dexterity(init.dex);
        this.wil = new Willpower(init.wil);
        this.foc = new Focus(init.foc);
        this.cha = new Charisma(init.cha);
        this.luk = new Luck(init.luk);
    }
}
