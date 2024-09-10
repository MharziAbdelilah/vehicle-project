// Define the Vehicle interface
interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
}

// Implement the Car class
class Car implements Vehicle {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start(): void {
    console.log('Car engine started');
  }
}

// Create an instance of Car and call the start method
const myCar = new Car('Toyota', 'Corolla', 2020);
myCar.start();
