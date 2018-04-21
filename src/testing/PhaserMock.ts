declare global {
    namespace NodeJS {
        interface Global {
            Phaser: any;
        }
    }
}

export const PhaserMock = {
    Math: {
        RandomDataGenerator: require('phaser/src/math/random-data-generator/RandomDataGenerator')
    }
};
