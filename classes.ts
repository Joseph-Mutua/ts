class Vehicle {
  public drive(): void {
    console.log("Chugga Chugga");
  }

  protected honk(): void {
    console.log("Beep!");
  }
}

class motorCar extends Vehicle {
  drive(): void {
    console.log("Vrroooom");
  }

  startDriving(): void {
    this.drive();
    this.honk()
  }
}

const vehicle = new Vehicle();

const tesla = new motorCar();

vehicle.drive();
vehicle.honk();

tesla.startDriving();
tesla.honk();
