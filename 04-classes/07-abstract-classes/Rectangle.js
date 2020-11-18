"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
var Shape_1 = require("./Shape");
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(_x, _y, _length, _bredth) {
        var _this = _super.call(this, _x, _y) || this;
        _this._length = _length;
        _this._bredth = _bredth;
        return _this;
    }
    Object.defineProperty(Rectangle.prototype, "length", {
        get: function () {
            return this._length;
        },
        set: function (l) {
            this._length = l;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "breadth", {
        get: function () {
            return this._bredth;
        },
        set: function (b) {
            this._bredth = b;
        },
        enumerable: false,
        configurable: true
    });
    Rectangle.prototype.getInfo = function () {
        return _super.prototype.getInfo.call(this) + (", length=" + this._length + ", breadth=" + this._bredth);
    };
    Rectangle.prototype.calculateArea = function () {
        return this._length * this._bredth;
    };
    return Rectangle;
}(Shape_1.Shape));
exports.Rectangle = Rectangle;
