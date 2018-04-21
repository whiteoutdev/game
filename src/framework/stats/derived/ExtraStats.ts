import {Attribute} from '../attributes/Attribute';

export interface ExtraStats {
    hit: Attribute; // Hit Rate
    eva: Attribute; // Evasion Rate
    cri: Attribute; // Critical Hit Rate
    cev: Attribute; // Critical Evasion Rate
    mev: Attribute; // Magical Evasion Rate
    mrf: Attribute; // Magical Reflection Rate
    ctr: Attribute; // Counter Rate
    hrg: Attribute; // HP Regen Rate
    mrg: Attribute; // MP Regen Rate
    srg: Attribute; // Stamina Regen Rate
}
