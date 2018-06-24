'use strict';
import Point from './modules/Point.js';
import Environment from './modules/environment/Environment.js';


var cursors;
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;

var environment = new Environment({
    ladderPositionList : [
        new Point({
            x : 550,
            y : windowHeight

        }),
        new Point({
            x : 350,
            y : 100
        }),
        new Point({
            x : 800,
            y : 350
        })
    ],
    platformPositionList : [
        new Point({
            x : windowWidth / 2,
            y : windowHeight

        }),
        new Point({
            x : windowWidth / 2,
            y : 100
        }),
        new Point({
            x : windowWidth / 2,
            y : 350
        })
    ]
});
environment.init();


var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    backgroundColor: '#000000'
};

var game = new Phaser.Game(config);



function preload() {
    environment.preload(this);
}

function create() {

    cursors = this.input.keyboard.createCursorKeys();

    environment.create(this);

}

function update() {

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
