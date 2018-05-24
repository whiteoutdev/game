import {DemoGameScene} from '../scenes/DemoGameScene';

export const config: GameConfig = {
    type   : Phaser.AUTO,
    width  : 800,
    height : 600,
    physics: {
        default: 'arcade',
        arcade : {
            gravity: {
                y: 300
            },
            debug  : false
        }
    },
    scene  : new DemoGameScene()
};
