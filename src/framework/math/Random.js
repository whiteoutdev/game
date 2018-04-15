import RandomDataGenerator from 'phaser/src/math/random-data-generator/RandomDataGenerator';

export class Random extends RandomDataGenerator {
    constructor(seeds) {
        super();
        this.sow(seeds);
    }
}
