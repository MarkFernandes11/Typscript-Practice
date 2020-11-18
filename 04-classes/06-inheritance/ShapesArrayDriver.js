"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var myShape = new Shape_1.Shape(5, 10);
var myCircle = new Circle_1.Circle(5, 10, 2.0);
var myRectangle = new Rectangle_1.Rectangle(5, 10, 7, 15);
var shapesArray = [];
shapesArray.push(myShape);
shapesArray.push(myRectangle);
shapesArray.push(myCircle);
for (var _i = 0, shapesArray_1 = shapesArray; _i < shapesArray_1.length; _i++) {
    var shape = shapesArray_1[_i];
    console.log(shape.getInfo());
}
