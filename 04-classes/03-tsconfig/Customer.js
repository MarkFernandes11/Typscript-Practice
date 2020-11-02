"use strict";
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (firstName) {
            this._firstName = firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (lastName) {
            this._lastName = lastName;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
var myCustomer = new Customer("John", "Doe");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
myCustomer.firstName = "Jim";
myCustomer.lastName = "Ross";
// myCustomer._firstName = "Jay";
// myCustomer._lastName = "Cutler";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
