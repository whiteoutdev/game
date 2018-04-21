import {Actor} from '../actor/Actor';

export interface Effect {
    begin(actor: Actor): void;

    end(actor: Actor): void;
}
