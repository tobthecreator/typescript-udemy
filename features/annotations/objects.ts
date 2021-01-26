const profile = {
  name: 'tyler',
  age: 26,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

// const age = profile.age;
const { age } = profile; // infers correctly
const {
  coords: { lat, lng },
} = profile; // ALSO infers correctly!
// wowww, otherwise that'd be really ugly
