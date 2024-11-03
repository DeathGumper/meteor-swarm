import Phaser from 'phaser';
import Meteor from '../entities/Meteor';

export default class PlayScene extends Phaser.Scene {
    constructor() {
        super('play-scene');
    }

    preload() {

    }

    create() {
        const width = this.cameras.main.width;
        const height = this.cameras.main.height;

        this.score = 0;

        this.player = this.physics.add.image(200, 200, 'player');
        this.player.setDrag(0.99);
        this.player.setMaxVelocity(150);
        this.player.setScale(0.6);
        this.player.setCollideWorldBounds(true);

        // generate meteor
        

        this.scoreText = this.add
        .bitmapText(width - 200, 20, 'arcade', 'Score: 0000', 24)
        .setOrigin(0.5)
        
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update() {

        if (this.cursors.up.isDown) {
            this.physics.velocityFromRotation(this.player.rotation, 150, this.player.body.acceleration);
        } else {
            this.player.setAcceleration(0);
        }

        if (this.cursors.left.isDown) {
            this.player.setAngularVelocity(-300);
        } else if (this.cursors.right.isDown) {
            this.player.setAngularVelocity(300);
        } else {
            this.player.setAngularVelocity(0);
        }

        this.scoreText.setText('Score: ' + this.score)
    }
}