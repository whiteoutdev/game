export enum FactionRelationship {
    ALLY    = 'ALLY',
    NEUTRAL = 'NEUTRAL',
    ENEMY   = 'ENEMY'
}

export interface FactionRelationshipMap {
    [factionName: string]: FactionRelationship;
}
