const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};


const pepsi: [string, boolean, number] = ["brown", true, 40];
//Using a type alias as a substitute
type Drink = [string, boolean, number];
const fanta: Drink = ["orange", true, 55];

const carSpecs: [number, number] = [431, 83];

const carStats = {
  horsepower: 400,
  weight: 3354,
};
