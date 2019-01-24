class mainScene extends Phaser.Scene {

    constructor() {
        super({key: 'main'});
    }

    preload() {
        this.load.image("background", "assets/background.png");
        this.load.image("cactus1", "assets/cactus1.png");
        this.load.image("cactus2", "assets/cactus2.png");
        this.load.image("bush", "assets/bush.png");
        this.load.image("stone", "assets/stone.png");
        this.load.spritesheet("goblin", "assets/goblin.png", {frameWidth: 72, frameHeight: 92});
    }

    create() {
        this.gameSpeed = 5;
        this.score = 0;
        this.obstacleCountdown = 60;

        this.background = this.add.tileSprite(0, 0, 800, 600, 'background').setOrigin(0);
        this.scoreText = this.add.text(20, 20, 'score: ' + this.score, { font: '20px Consolas', fill: '#000' });
        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNumbers('goblin'),
            frameRate: 10,
            repeat: -1
        });
        this.goblin = this.physics.add.sprite(400, 450, 'goblin');
        this.goblin.body.setSize(36, 92);

        this.platform = this.physics.add.image(0, 560).setOrigin(0);
        this.platform.body.width = 1000;
        this.platform.body.allowGravity = false;
        this.platform.body.immovable = true;

        this.obstacles = this.physics.add.group();

        this.physics.add.collider(this.goblin, this.platform);
        this.physics.add.collider(this.goblin, this.obstacles, this.obstacleHit, null, this);
        this.physics.add.collider(this.platform, this.obstacles);

        this.cursors = this.input.keyboard.createCursorKeys();
        this.goblin.anims.load('walk');
        this.goblin.anims.play('walk', true);
        console.log(this.scoreText);
    }

    update() {
        this.background.tilePositionX += this.gameSpeed;

        this.obstacleCountdown--;
        this.score++;

        if (this.cursors.left.isDown && this.goblin.x > this.goblin.width/2) {
            this.goblin.setVelocityX(-200);
        } else if (this.cursors.right.isDown && this.goblin.x < this.physics.world.bounds.width - this.goblin.width/2) {
            this.goblin.setVelocityX(200);
        } else {
            this.goblin.setVelocityX(0);
        }
        if ((this.cursors.up.isDown || this.cursors.space.isDown) && this.goblin.body.touching.down)
        {
            this.goblin.setVelocityY(-300);
        }    
        this.scoreText.setText('score: ' + this.score);

        if(this.obstacleCountdown == 0) {
            this.obstacleCreate();
            this.obstacleCountdown = Phaser.Math.Between(50, 200);
        }
        
        this.obstacles.getChildren().forEach(obstacle => {
            if(obstacle.x < -obstacle.width)
                this.obstacles.remove(obstacle, true, true);
        });
    }

    obstacleCreate() {
        let obstacleNames = ['cactus1', 'cactus2', 'bush', 'stone'];
        this.obstacles.create(1000, 500, Phaser.Math.RND.pick(obstacleNames)).setVelocityX(-60 * this.gameSpeed);
    }

    obstacleHit() {
        this.scene.start('gameOver', {score: this.score});
    }
};

export default mainScene