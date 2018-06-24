/**
 * Platform
 *
 * @param  {Object} constructorObject with the following properties:
 * -----------------------
 * @param  {Object} position
 * -----------------------
**/

'use strict';
import EnvironmentObject from './EnvironmentObject.js';
import Img from '../Img.js';

export default class Platform extends EnvironmentObject {
    constructor(constructorObject) {
        super(constructorObject);
        this.bottom = this.position.y + this.height / 2;
        this.width = 665;
        this.height = 95;
        this.img = new Img({
            title : 'platform',
            src : '/dist/assets/platform.png'
        });
    }

}
