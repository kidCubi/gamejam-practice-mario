/**
 * EnvironmentObject - the superClass for the Ladder and the Platform Object
 *
 * @param  {Object} constructorObject with the following properties:
 * -----------------------
 * @param  {Object} position
 * @param  {Integer} width
 * @param  {Integer} height
 * @param  {Object} img
 * -----------------------
**/

'use strict';
import Point from '../Point.js';


export default class EnvironmentObject  {
    constructor(constructorObject) {
        this.position = constructorObject.position;
        this.width = constructorObject.width;
        this.height = constructorObject.height;
        this.img = constructorObject.img;

    }

    preload(preloader) {
        preloader.load.image(this.img.title, this.img.src);
    }

    draw(creator) {
        creator.add.image(this.position.x, this.position.y, this.img.title);
    }

}
