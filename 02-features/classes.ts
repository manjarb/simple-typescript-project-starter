class Vehicle {
  drive(): void {
    console.log('drive drive');
  }
}

const vehicle = new Vehicle();
vehicle.drive();

class Car extends Vehicle {}

const car = new Car();
car.drive();
