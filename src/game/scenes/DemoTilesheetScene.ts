import 'phaser';
import {RandomMap} from '../../map/RandomMap';
import {MapScene} from './MapScene';

export class DemoTilesheetScene extends MapScene {
    constructor() {
        super(new RandomMap({
            width : 30,
            height: 20,
            seeds : ['foo', 'bar', 'baz']
        }));
    }
}
