import { Shape } from "./Shape";

export class Rectangle extends Shape {

    constructor(_x: number, _y: number, private _length: number, private _bredth: number) { 
        super(_x, _y);
    }

    get length(): number {
        return this._length;
    }

    set length(l: number) {
        this._length = l;
    }

    get breadth(): number {
        return this._bredth;
    }

    set breadth(b: number) {
        this._bredth = b;
    }

    getInfo(): string {
        return super.getInfo() + `, length=${this._length}, breadth=${this._bredth}`;
    }

}