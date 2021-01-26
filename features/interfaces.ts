// the interplay between interfaces and classes is really important

// when we create a new interface, we're creating a new type

// we're going to make an object first

const oldHondaCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
};

// long annotation is difficult to read, especially as the
// type grows in complexity
const printVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(vehicle);
};

printVehicle(oldHondaCivic);

interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

// we don't need to declare the newHondaCivic as a Vehicle
const newHondaCivic = {
  name: 'civic',
  year: 2020,
  broken: false,
  summary(): string {
    return this.name;
  },
};

// instead, the printVehicle2 function will type check it to make
// sure what we're passing fits the Vehicle interface
const printVehicle2 = (vehicle: Vehicle): void => {
  console.log(vehicle);
};

printVehicle2(newHondaCivic);
