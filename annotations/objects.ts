const profile = {
  name: "Alex",
  age: 20,
  coords: {
    lat: 0,
    long: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

//Annotation for age variable in destructuring
//@ts-ignore
const { age, name }: { age: number; name: string } = profile;

const {
  coords: { lat, long },
}: { coords: { lat: number; long: number } } = profile;
