import Phaser from 'phaser';

export default class LoaderScene extends Phaser.Scene {
    constructor() {
        super('loader-scene');
    }

    preload() {
        // Called by super
        // Load all the assets

        // image
        this.load.image('player', 'assets/player.png');
        this.load.image('laser', 'assets/laserBlue16.png');
        this.load.image('meteor-small', 'assets/meteor-small.png');
        this.load.image('meteor-med', 'assets/meteor-med.png');
        this.load.image('meteor-large', 'assets/meteor-large.png');

        // audio
        this.load.audio('shoot', 'assets/laser-shoot.wav');
        this.load.audio('explosion', 'assets/laser-explosion.wav');

        // font
        this.load.bitmapFont('arcade', 'assets/fonts/arcade.png', 'assets/fonts/arcade.xml');
    }

    create() {
        this.scene.switch('main-menu-scene');
    }
}