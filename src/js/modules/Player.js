/**
 * Creates the player of the game
 *
 * @param  {Object} constructorObject with the following properties:
 * -----------------------
 * @param  {Object} position
 * -----------------------
 **/

'use strict';
import Point from './Point.js';

export default class Player {

    constructor(constructorObject) {
        this.speed =  constructorObject.speed;
        this.direction =  constructorObject.direction;
        this.bottomPos =  constructorObject.bottomPos;
        this.sprite =  constructorObject.sprite;
        this.position =  constructorObject.position;
        this.isClimbing =  constructorObject.isClimbing;

        this.player = null;

        this.addSprites = this.addSprites.bind(this);
        this.createAnims = this.createAnims.bind(this);
    }

    preload(phaserScene) {
        phaserScene.load.spritesheet('dude', 'dist/assets/dude.png', {
            frameWidth: 32,
            frameHeight: 48
        });
        this.player = phaserScene.physics.add.sprite(100, 450, 'dude');
        this.addSprites(phaserScene);
    }

    addSprites(phaserScene) {
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);
        this.createAnims(phaserScene);
    }

    createAnims(phaserScene) {
        phaserScene.anims.create({
            key: 'left',
            frames: phaserScene.anims.generateFrameNumbers('dude', {start: 0, end : 3}),
            frameRate: 10,
            repeat: -1
        });
        phaserScene.anims.create({
            key: 'turn',
            frames: [ { key: 'dude', frame: 4 } ],
            frameRate: 20
        });
        phaserScene.anims.create({
            key: 'right',
            frames: phaserScene.anims.generateFrameNumbers('dude', {start: 5, end : 8}),
            frameRate: 10,
            repeat: -1
        });
    }

}
