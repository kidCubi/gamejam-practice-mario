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

        this.character = null;
        this.sprite = null;

        this.addSprites = this.addSprites.bind(this);
    }

    preload(phaserScene) {
        phaserScene.load.spritesheet('girl',
            'dist/assets/female_tilesheet.png',
            { frameWidth: 80, frameHeight: 109 }
        );
        this.addSprites(phaserScene);
    }

    create(phaserScene) {
        this.character = phaserScene.physics.add.sprite(100, 450, 'girl');
        this.character.setBounce(0.2);
        this.character.setCollideWorldBounds(true);

        phaserScene.anims.create({
            key: 'left',
            frames: phaserScene.anims.generateFrameNumbers('girl', {start: 0, end : 3}),
            frameRate: 10,
            repeat: -1
        });
        phaserScene.anims.create({
            key: 'turn',
            frames: [ { key: 'girl', frame: 4 } ],
            frameRate: 20
        });
        phaserScene.anims.create({
            key: 'right',
            frames: phaserScene.anims.generateFrameNumbers('girl', {start: 5, end : 8}),
            frameRate: 10,
            repeat: -1
        });

    }

    addSprites(phaserScene) {


    }

}
