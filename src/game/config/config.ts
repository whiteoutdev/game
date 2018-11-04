import {DemoGameScene} from '../scenes/DemoGameScene';
import {DemoTilesheetScene} from '../scenes/DemoTilesheetScene';

export const config: GameConfig = {
    type   : Phaser.AUTO,
    width  : 960,
    height : 640,
    physics: {
        default: 'arcade',
        arcade : {
            gravity: {
                y: 300
            },
            debug  : false
        }
    },
    scene  : new DemoTilesheetScene()
};
