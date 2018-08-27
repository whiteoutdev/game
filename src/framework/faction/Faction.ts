import {FactionRelationship, FactionRelationshipMap} from './FactionRelationship';

export class Faction {
    constructor(public name: string, public relationships: FactionRelationshipMap = {}) {
    }

    public isAlliedTo(faction: Faction): boolean {
        return this.relationships[faction.name] === FactionRelationship.ALLY;
    }

    public isEnemyTo(faction: Faction): boolean {
        return this.relationships[faction.name] === FactionRelationship.ENEMY;
    }

    public isNeutralTo(faction: Faction): boolean {
        const relationship = this.relationships[faction.name];
        return (relationship === FactionRelationship.NEUTRAL) || (!relationship);
    }
}
