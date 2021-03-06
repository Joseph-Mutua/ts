class Vehicle {
  constructor(public color: string) {}

  public drive(): void {
    console.log("Chugga Chugga");
  }

  protected honk(): void {
    console.log("Beep!");
  }
}

class motorCar extends Vehicle {
  constructor(public wheels: number, public color: string) {
    super(color);
  } 

  drive(): void {
    console.log("Vrroooom");
  }

  startDriving(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle("orange");
vehicle.drive();
console.log(vehicle.color);

const tesla = new motorCar(5, "Red");

tesla.startDriving();
