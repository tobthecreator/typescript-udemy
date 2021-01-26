interface Animal {
  name: string;
  age: number;
  speak(): void;
}

const dog = {
  name: 'Molly',
  age: 4,
  speak(): void {
    console.log('Woof woof');
  },
  toys: ['rabbit', 'lion', 'bone'], // additional props don't matter
};

const cat = {
  name: 'Not Molly',
  age: 39,
  speak(): void {
    console.log('Meow');
  },
};

// it only matters that we satisfy the interface requirements
function speak(animal: Animal): void {
  animal.speak();
}

speak(dog);
speak(cat);
