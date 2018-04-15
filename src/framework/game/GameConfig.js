export interface Scene {
    preload: function;
    create: function;
    update: function;
}

export interface GameConfig {
    type: string;
    width: number;
    height: number;
    scene: Scene;
}
