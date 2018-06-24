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


export default class Ladder extends EnvironmentObject {
    constructor(constructorObject) {
        super(constructorObject);
        this.bottom = this.position.y + this.height / 2;
    }

}
