import Phaser from 'phaser';

export default class Meteor extends Phaser.Physics.Arcade.Image {
    constructor(scene, x, y) {
        super(scene, x, y);

        this.meteorType = Phaser.Math.RND.between(0, 2);

        switch(this.meteorType) {
            case 0:
                this.setTexture('meteor-small');
            break;
            case 1:
                this.setTexture('meteor-med');
            break;
            case 2:
                this.setTexture('meteor-large');
            break;
        }
    }
}