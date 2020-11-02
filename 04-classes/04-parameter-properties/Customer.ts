class Customer {
    
    constructor(private _firstName: string, private _lastName: string) {
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(firstName: string) {
        this._firstName = firstName;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(lastName: string) {
        this._lastName = lastName;
    }
}

let myCustomer =  new Customer("John", "Doe");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
