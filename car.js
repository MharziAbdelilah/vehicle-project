"use strict";
// Implement the Car class
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log('Car engine started');
    }
}
// Create an instance of Car and call the start method
const myCar = new Car('Toyota', 'Corolla', 2020);
myCar.start();
