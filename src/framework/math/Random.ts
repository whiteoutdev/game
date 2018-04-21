import 'phaser';
import RandomDataGenerator = Phaser.Math.RandomDataGenerator;

export class Random extends RandomDataGenerator {
    constructor(...seeds: string[]) {
        super();
        this.sow(seeds);
    }
}
