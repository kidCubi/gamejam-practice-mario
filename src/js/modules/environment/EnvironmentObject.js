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
        this.width = constructorObject.width || 0;
        this.height = constructorObject.height || 0;
        this.img = constructorObject.img || 0;
        this.scale = constructorObject.scale || new Point({
            x : 1,
            y : 1
        });

    }

    preload(preloader) {
        preloader.load.image(this.img.title, this.img.src);
    }

    create(environmentObjectGroup) {
        environmentObjectGroup.create(this.position.x, this.position.y, this.img.title).setScale(this.scale.x, this.scale.y).refreshBody();

    }


}
