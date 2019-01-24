class mainScene extends Phaser.Scene {

    constructor() {
        super({key: 'main'});
    }

    preload() {
        this.load.image("background", "assets/background.png");
    }

    create() {
        // set background image
        this.background = this.add.image(0, 0, 'background').setOrigin(0);
        // initiate basic controls
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
        if (this.cursors.space.isDown)
            this.scene.start('gameOver');
    }

};

export default mainScene