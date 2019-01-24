class gameOverScene extends Phaser.Scene {

    constructor() {
        super({key: 'gameOver'});
    }

    preload() {

    }

    create() {
        this.add.text(340, 250, 'Game Over!');
        this.add.text(290, 350, 'Press [SPACE] to restart.');
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
        if (this.cursors.space.isDown)
            this.scene.start('main');
    }
}

export default gameOverScene