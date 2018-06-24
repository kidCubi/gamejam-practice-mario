'use strict';
import Point from './modules/Point.js';
import Player from './modules/Player.js';

var cursors;


var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
      default: 'arcade',
        arcade: {
          gravity: { y: 300 }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    backgroundColor: '#00ffff'
};

var game = new Phaser.Game(config);

var player = new Player({
    speed: 0,
    direction: '',
    bottomPos: 0,
    sprite: null,
    position: null,
    isClimbing: false
});

function preload() {
    //this.load.image('sky', 'assets/sky.png');
    player.preload(this);
}

function create() {
    player.create(this);
    cursors = this.input.keyboard.createCursorKeys();
    //this.add.image(400, 300, 'sky');
}

function update() {

    if (cursors.left.isDown) {
        //move left
        player.move("left");
    } else if (cursors.right.isDown) {
        //move right
        player.move("right");
    } else if (cursors.up.isDown) {
        //move up
        player.move("up");
    } else if (cursors.down.isDown) {
        //move down
    } else {
        player.idle();
    }
}
