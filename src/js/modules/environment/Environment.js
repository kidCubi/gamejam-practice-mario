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
        this.ladderXCoordinateList = constructorObject.ladderXCoordinateList;
        this.platformPositionList = constructorObject.platformPositionList;
        this.ladderList = [];
        this.platformList = [];
        this.ladderGroup;
        this.platformGroup;
        this.ladder = new Ladder({
            position : new Point({
                x : 0,
                y : 0
            }),
            width : 66,
            height : 95,
            img : new Img({
                title : 'ladder',
                src : '/dist/assets/ladder.png'
            })
        }),
        this.platform = new Platform({
            position : new Point({
                x : 0,
                y : 0
            }),
            width : 665,
            height : 95,
            img : new Img({
                title : 'platform',
                src : '/dist/assets/platform.png'
            })
        })
    }

    init() {
        var windowHeight = window.innerHeight;

        //first lets push the platform on the ground
        this.platformList.push(new Platform({
            position : new Point({
                x : this.platformPositionList[0].x,
                y : windowHeight - this.platform.height / 2
            }),
        }));

        this.platformPositionList.forEach((platform) => {
            this.platformList.push(new Platform({
                position : platform,
            }));
        });



        this.ladderXCoordinateList.forEach((ladderX, index) => {
            if(this.platformList[index] && this.platformList[index + 1]) {
                var scaleY = (this.platformList[index].position.y - this.platformList[index + 1].position.y) / this.ladder.height;
                this.ladderList.push(new Ladder({
                    position : new Point({
                        x : ladderX,
                        y : this.platformList[index].position.y - 95 * scaleY / 2
                    }),
                    scale : new Point({
                        x : 1,
                        y : scaleY
                    })
                }));
            }

        });


    }

    preload(preloader) {
        this.ladder.preload(preloader);
        this.platform.preload(preloader);
    }


    create(creator) {
        this.ladderGroup = creator.physics.add.staticGroup();

        this.ladderList.forEach((ladder) => {
          ladder.create(this.ladderGroup);
        });

        this.platformGroup = creator.physics.add.staticGroup();

        this.platformList.forEach((platform) => {
          platform.create(this.platformGroup);
        });
    }

}
