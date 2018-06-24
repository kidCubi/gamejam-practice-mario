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

        this.move = this.move.bind(this);
        this.idle = this.idle.bind(this);

    }

    preload(phaserScene) {
        this.sprite = phaserScene.load.spritesheet('girl',
            'dist/assets/female_tilesheet.png',
            { frameWidth: 80, frameHeight: 110 }
        );
    }

    create(phaserScene) {
        this.character = phaserScene.physics.add.sprite(100, 450, 'girl');
        this.character.setBounce(0.2);
        this.character.setCollideWorldBounds(true);

        phaserScene.anims.create({
            key: 'left',
            frames: phaserScene.anims.generateFrameNumbers('girl', {start: 9, end : 10}),
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
            frames: phaserScene.anims.generateFrameNumbers('girl', {start: 9, end : 10}),
            frameRate: 10,
            repeat: -1
        });
        phaserScene.anims.create({
            key: 'idle',
            frames: phaserScene.anims.generateFrameNumbers('girl', {start: 23, end : 23}),
            frameRate: 10,
            repeat: -1
        });
        phaserScene.anims.create({
            key: 'climb',
            frames: phaserScene.anims.generateFrameNumbers('girl', {start: 5, end : 6}),
            frameRate: 10,
            repeat: -1
        });
    }

    move(direction) {

        switch(direction) {
            case "left":
                this.character.setVelocityX(-160);
                this.character.anims.play('left', true);
                this.character.scaleX = -1;
                break;
            case "right":
                this.character.setVelocityX(160);
                this.character.anims.play('right', true);
                break;
            case "up":
                this.isClimbing = true;
                this.character.setVelocityY(-50);
                this.character.anims.play('climb', true);
                break;
            case "idle":

        }
    }

    idle() {
        this.character.setVelocityX(0);
        this.character.anims.play('idle', true);
        this.character.scaleX = 1;
    }

}
