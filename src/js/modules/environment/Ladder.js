/**
 * Ladder
 *
 * @param  {Object} constructorObject with the following properties:
 * -----------------------
 * @param  {Object} position
 * -----------------------
**/

'use strict';
import EnvironmentObject from './EnvironmentObject.js';
import Img from '../Img.js';

export default class Ladder extends EnvironmentObject {
    constructor(constructorObject) {
        super(constructorObject);
        this.bottom = this.position.y + this.height / 2;
        this.width = 66;
        this.height = 95;
        this.img = new Img({
            title : 'ladder',
            src : '/dist/assets/ladder.png'
        });
    }

}
