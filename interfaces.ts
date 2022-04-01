interface Vehicle {
    name: string,
    year: number,
    broken: boolean
}

const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
};

// Long Object Notation
const printVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(
    `Name: ${vehicle.name}, Year: ${vehicle.year}, Broken? ${vehicle.broken}`
  );
};

// Solving Long Notation with interfaces
const printCar = (vehicle: Vehicle): void => {
  console.log(
    `Name: ${vehicle.name}, Year: ${vehicle.year}, Broken? ${vehicle.broken}`
  );
};

printVehicle(oldCivic)
printCar(oldCivic)