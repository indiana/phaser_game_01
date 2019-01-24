import startScene from './scenes/startScene.js'
import mainScene from './scenes/mainScene.js'
import gameOverScene from './scenes/gameOverScene.js'

new Phaser.Game({
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: { y: 300 },
        }
    },
    scene: [startScene,
            mainScene,
            gameOverScene]
});
