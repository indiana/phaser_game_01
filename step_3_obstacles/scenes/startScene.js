class startScene extends Phaser.Scene {
    
    constructor() {
        super({key: 'start'});
    }

    create() {
        this.add.text(320, 250, 'This is my amazing game');
        this.add.text(260, 300, 'about a goblin jumping over obstacles :)');
        this.add.text(320, 350, 'Press [SPACE] to start.');
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
        if (this.cursors.space.isDown)
            this.scene.start('main');
    }
}

export default startScene