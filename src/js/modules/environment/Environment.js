/**
 * Environment
 *
 * @param  {Object} constructorObject with the following properties:
 * -----------------------
 * @param  {Object} position
 * -----------------------
**/

'use strict';
import Img from '../Img.js';
import Point from '../Point.js';
import Ladder from './Ladder.js';
import Platform from './Platform.js';

export default class Environment  {
    constructor(constructorObject) {
        this.ladderPositionList = constructorObject.ladderPositionList;
        this.platformPositionList = constructorObject.platformPositionList;
        this.ladderList = [];
        this.platformList = [];
    }

    init() {
        this.ladderPositionList.forEach((ladder) => {
            this.ladderList.push(new Ladder({
                position : new Point({
                    x : ladder.x,
                    y : ladder.y - 95 / 2
                }),
                width : 66,
                height : 95,
                img : new Img({
                    title : 'ladder',
                    src : '/dist/assets/ladder.png'
                })
            }));
        });

        this.platformPositionList.forEach((platform) => {
            this.platformList.push(new Platform({
                position : platform,
                width : 665,
                height : 95,
                img : new Img({
                    title : 'platform',
                    src : '/dist/assets/platform.png'
                })
            }));
        });
    }

    preload(preloader) {
        this.ladderList.forEach((ladder) => {
          ladder.preload(preloader);
        });

        this.platformList.forEach((platform) => {
          platform.preload(preloader);
        });
    }


    create(creator) {
        this.ladderList.forEach((ladder) => {
          ladder.draw(creator);
        });

        this.platformList.forEach((platform) => {
          platform.draw(creator);
        });
    }

}
