import 'phaser';
import RandomDataGenerator = Phaser.Math.RandomDataGenerator;

export const ALPHA = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export class Random extends RandomDataGenerator {
    constructor(...seeds: string[]) {
        super();
        this.sow(seeds);
    }

    public alpha(minLength: number = 1, maxLength: number = 20): string {
        const length = this.integerInRange(minLength, maxLength);
        let str = '';
        for (let i = 0; i < length; i++) {
            str += this.pick(ALPHA);
        }
        return str;
    }
}
