import {Attack} from './core/Attack';
import {Defence} from './core/Defence';
import {MagicAttack} from './core/MagicAttack';
import {MagicDefence} from './core/MagicDefence';
import {MaxHp} from './core/MaxHp';
import {MaxMp} from './core/MaxMp';
import {MaxStamina} from './core/MaxStamina';

export interface CoreStats {
    mhp: MaxHp; // Max HP
    mmp: MaxMp; // Max MP
    mst: MaxStamina; // Max Stamina
    atk: Attack; // Attack
    def: Defence; // Defence
    mat: MagicAttack; // Magic Attack
    mdf: MagicDefence; // Magic Defence
}
