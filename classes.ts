class Vehicle {
  drive(): void {
    console.log("Chugga Chugga");
  }

  honk(): void {
    console.log("Beep!");
  }
}

class motorCar extends Vehicle {
  drive(): void {
    console.log("Vrroooom");
  }
}

const vehicle = new Vehicle();

const tesla = new motorCar();

vehicle.drive();
vehicle.honk();

tesla.drive();
tesla.honk();
