'use strict';
import Point from './modules/Point.js';

var cursors;


var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    backgroundColor: '#00ffff'
};

var game = new Phaser.Game(config);


function preload() {
    //this.load.image('sky', 'assets/sky.png');
}

function create() {

    cursors = this.input.keyboard.createCursorKeys();

    //this.add.image(400, 300, 'sky');


}

function update() {
    snake.move();
    if (cursors.left.isDown) {
        //move left
    } else if (cursors.right.isDown) {
        //move right
    } else if (cursors.up.isDown) {
        //move up
    } else if (cursors.down.isDown) {
        //move down
    }
}
