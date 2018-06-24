'use strict';
import Point from './modules/Point.js';
import Player from './modules/Player.js';
import Environment from './modules/environment/Environment.js';

var cursors;

var windowWidth = window.innerWidth;

//the ladderXCoordinateList length should be the same as the platformPositionList length
//platform list should start with highest y walue element to lowest y value element
var environment = new Environment({
    ladderXCoordinateList : [
        550,
        350
    ],
    platformPositionList : [
        new Point({
            x : windowWidth / 2,
            y : 450
        }),
        new Point({
            x : windowWidth / 2,
            y : 100
        })
    ]
});
environment.init();


var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    backgroundColor: '#000000'
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

    player.preload(this);
    environment.preload(this);
}

function create() {
    player.create(this);
    cursors = this.input.keyboard.createCursorKeys();

    environment.create(this);

    //TODO: uncomment after merge
    //this.physics.add.collider(player, platforms);

}

function update() {

    if (cursors.left.isDown) {
        //move left
        player.character.setVelocityX(-160);
        player.character.anims.play('left', true);
    } else if (cursors.right.isDown) {
        //move right
        player.character.setVelocityX(160);
    } else if (cursors.up.isDown) {
        //move up
    } else if (cursors.down.isDown) {
        //move down
    } else {
        player.character.setVelocityX(0);
    }
}
