import {Agility} from './default/Agility';
import {Charisma} from './default/Charisma';
import {Dexterity} from './default/Dexterity';
import {Focus} from './default/Focus';
import {Luck} from './default/Luck';
import {Resilience} from './default/Resilience';
import {Strength} from './default/Strength';
import {Vitality} from './default/Vitality';
import {Willpower} from './default/Willpower';

export interface Attributes {
    vit: Vitality;      // Vitality    - MHP, ATK, RES, STA
    str: Strength;      // Strength    - ATK, MHP, STA
    res: Resilience;    // Resilience  - RES, MHP, MMP, STA
    agi: Agility;       // Agility     - AGI, DODGE, CRIT
    dex: Dexterity;     // Dexterity   - DEX, HIT, CRIT
    wil: Willpower;     // Willpower   - MDF, MMP
    foc: Focus;         // Focus       - MAT, MMP
    cha: Charisma;      // Charisma    - CHA
    luk: Luck;          // Luck        - LUK
}
