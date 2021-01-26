const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const forecast = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast);
};

// just replace the variable, but not the type annotation
const logWeatherDesctructed = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(forecast);
};
