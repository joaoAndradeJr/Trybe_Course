// Agora, dado o código abaixo, qual a ordem de finalização de execução das linhas comentadas?

const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {
  name: "Mars",
  distanceFromSun: {
    value: 227900000,
    measurementUnit: "kilometers",
  },
};

const venus = {
  name: "Venus",
  distanceFromSun: {
    value: 108200000,
    measurementUnit: "kilometers",
  },
};

const jupiter = {
  name: "Jupiter",
  distanceFromSun: {
    value: 778500000,
    measurementUnit: "kilometers",
  },
};

console.log(planetDistanceFromSun(mars)); // Mars, 227900000 kilometers apart from the Sun
setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // Venus, 108200000 kilometers apart from the Sun
setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // Jupter, 778500000 kilometers apart from the Sun

// Mars, 227900000 kilometers apart from the Sun
// Jupter, 778500000 kilometers
// Venus, 108200000 kilometers apart from the Sun
