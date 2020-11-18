import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";


let myCircle = new Circle(5, 10, 2.0);
let myRectangle = new Rectangle(5, 10, 7, 15);

let shapesArray: Shape[] = [];

shapesArray.push(myRectangle);
shapesArray.push(myCircle);

for(let shape of shapesArray) {
    console.log(shape.getInfo());
    console.log(shape.calculateArea());
    console.log();
    
}
