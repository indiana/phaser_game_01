    class mainScene extends Phaser.Scene {

    constructor() {
        super({key: 'main'});
    }

    preload() {
        this.load.image("background", "assets/background.png");
        // this.load.spritesheet("goblin", "assets/goblin.png", {frameWidth: 72, frameHeight: 92});
    }

    create() {
        // this.gameSpeed = 5;

        this.background = this.add.tileSprite(0, 0, 800, 600, 'background').setOrigin(0);

        // this.anims.create({
        //     key: 'walk',
        //     frames: this.anims.generateFrameNumbers('goblin'),
        //     frameRate: 10,
        //     repeat: -1
        // });

        // this.goblin = this.physics.add.sprite(400, 400, 'goblin');
        // this.goblin.anims.load('walk');
        // this.goblin.anims.play('walk', true);

        // this.platform = this.physics.add.image(0, 560).setOrigin(0);
        // this.platform.body.width = 1000;
        // this.platform.body.allowGravity = false;
        // this.platform.body.immovable = true;

        // this.physics.add.collider(this.goblin, this.platform);

        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
        this.background.tilePositionX += this.gameSpeed;

        // if (this.cursors.space.isDown && this.goblin.body.touching.down)
        //     this.goblin.setVelocityY(-300);
    }

};

export default mainScene