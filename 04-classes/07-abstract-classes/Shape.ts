export abstract class Shape {

    constructor(private _x: number, private _y: number) { }

    get numberX(): number {
        return this._x;
    }

    set numberX(x: number) {
        this._x = x;
    }

    get numberY(): number {
        return this._y;
    }

    set numberY(y: number) {
        this._y = y;
    }

    getInfo(): string {
        return `x=${this._x}, y=${this._y}`;
    }

    abstract calculateArea(): number;
}