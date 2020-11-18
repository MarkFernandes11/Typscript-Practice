import { Shape } from "./Shape";

export class Circle extends Shape {
    
    constructor(_x: number, _y: number, private _radius: number) { 
        super(_x, _y);
    }

    get radius(): number {
        return this._radius;
    }

    set radius(rad: number) {
        this._radius = rad;
    }

    getInfo(): string {
        return super.getInfo() + `, radius=${this._radius}`;
    }

    calculateArea(): number {
        return Math.PI * Math.pow(this._radius, 2);
    }
}