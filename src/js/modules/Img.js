/**
 * Img
 *
 * @param  {Object} constructorObject with the following properties:
 * -----------------------
 * @param  {String} title
 * @param  {String} src
 * -----------------------
**/

'use strict';
import Point from './Point.js';

export default class Img  {
    constructor(constructorObject) {
        this.title = constructorObject.title,
        this.src = constructorObject.src
    }

}
