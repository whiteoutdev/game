import 'phaser';
import Text = Phaser.GameObjects.Text;
import Group = Phaser.Physics.Arcade.Group;
import Image = Phaser.Physics.Arcade.Image;
import Sprite = Phaser.Physics.Arcade.Sprite;
import Scene = Phaser.Scene;

const graphics = {
    sky     : require('../assets/sky.png'),
    dude    : require('../assets/dude.png'),
    platform: require('../assets/platform.png'),
    bomb    : require('../assets/bomb.png'),
    star    : require('../assets/star.png')
};

export class DemoGameScene extends Scene {
    private player: Sprite;
    private stars: Group;
    private bombs: Group;
    private scoreText: Text;
    private score = 0;

    constructor() {
        super(null);
    }

    public preload(): void {
        this.load.image('sky', graphics.sky);
        this.load.image('ground', graphics.platform);
        this.load.image('star', graphics.star);
        this.load.image('bomb', graphics.bomb);
        this.load.spritesheet('dude', graphics.dude, {frameWidth: 32, frameHeight: 48});
    }

    public create(): void {
        this.add.image(400, 300, 'sky');

        const platforms = this.physics.add.staticGroup();

        platforms.create(400, 568, 'ground').setScale(2).refreshBody();

        platforms.create(600, 400, 'ground');
        platforms.create(50, 250, 'ground');
        platforms.create(750, 220, 'ground');

        this.player = this.physics.add.sprite(100, 450, 'dude');
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);

        this.anims.create({
            key      : 'left',
            frames   : this.anims.generateFrameNumbers('dude', {start: 0, end: 3}),
            frameRate: 10,
            repeat   : -1
        });

        this.anims.create({
            key      : 'turn',
            frames   : [{
                key  : 'dude',
                frame: 4
            }],
            frameRate: 20
        });

        this.anims.create({
            key      : 'right',
            frames   : this.anims.generateFrameNumbers('dude', {start: 5, end: 8}),
            frameRate: 10,
            repeat   : -1
        });

        this.physics.add.collider(this.player, platforms);

        this.stars = this.physics.add.group({
            key   : 'star',
            repeat: 11,
            setXY : {
                x    : 12,
                y    : 0,
                stepX: 70
            }
        });

        this.stars.children.iterate(child => {
            child.setCollideWorldBounds(true);
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            child.setBounceX(Phaser.Math.FloatBetween(0.4, 0.8));
            child.setVelocityX(Phaser.Math.FloatBetween(-50, 50));
            child.setDragX(5);
        }, this);

        this.physics.add.collider(this.stars, platforms);
        this.physics.add.overlap(this.player, this.stars, this.collectStar.bind(this), null, this);

        const bombs = this.bombs = this.physics.add.group();
        this.physics.add.collider(bombs, platforms);
        this.physics.add.collider(this.player, bombs, this.hitBomb.bind(this), null, this);

        this.scoreText = this.add.text(16, 16, 'score: 0', {fontSize: '32px', fill: '#000'});
    }

    public update(): void {
        const cursors = this.input.keyboard.createCursorKeys(),
              player  = this.player;

        if (cursors.left.isDown) {
            player.setVelocityX(-160);
            player.anims.play('left', true);
        } else if (cursors.right.isDown) {
            player.setVelocityX(160);
            player.anims.play('right', true);
        } else {
            player.setVelocityX(0);
            player.anims.play('turn');
        }

        if (cursors.up.isDown && player.body.touching.down) {
            player.setVelocityY(-350);
        }
    }

    private collectStar(player: Sprite, star: Image): void {
        star.disableBody(true, true);
        this.score += 10;
        this.scoreText.setText(`score: ${this.score}`);

        if (this.stars.countActive(true) === 0) {
            this.stars.children.iterate((child, index) => {
                child.enableBody(true, 12 + index * 70, 0, true, true);
                child.setVelocityX(Phaser.Math.FloatBetween(-50, 50));
            }, this);

            const x    = player.x < 400 ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400),
                  bomb = this.bombs.create(x, 16, 'bomb');
            bomb.setBounce(1);
            bomb.setCollideWorldBounds(true);
            bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
            bomb.allowGravity = false;
        }
    }

    private hitBomb(player: Sprite, bomb: Image): void {
        this.physics.pause();
        player.setTint(0xff0000);
        player.anims.play('turn');
        this.add.text(380, 292, 'Game Over', {fontSize: '32px', fill: '#000'});
    }
}
