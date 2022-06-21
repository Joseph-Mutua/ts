interface Vehicle {
    name: string,
    year: Date,
    broken: boolean
    summary(): string;
}

interface Reportable {
    summary(): string
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string{
return `Name: ${this.name}`
  }
};

// Long Object Notation
// const printVehicle = (vehicle: {
//   name: string;
//   year: number;
//   broken: boolean;
// }): void => {
//   console.log(
//     `Name: ${vehicle.name}, Year: ${vehicle.year}, Broken? ${vehicle.broken}`
//   );
// };
// printVehicle(oldCivic)


// Solving Long Notation with interfaces
const printCar = (vehicle: Vehicle): void => {
  console.log(
    `Name: ${vehicle.name}, Year: ${vehicle.year}, Broken? ${vehicle.broken}`
  );
};

// printCar(oldCivic)

const myDrink = {
    color: "brown",
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} sugar`
    }
}

const printSummary = (item: Reportable): void => {
    console.log(item.summary())
}

printSummary(oldCivic)
printSummary(myDrink)