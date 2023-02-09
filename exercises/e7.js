import { data } from "../data/data";

// SPACE DATA EXERCISE 7
// Return an array of all Planets names that have moons
// Return example: ['name1', 'name2', ... , 'nameN']

export function getPlanetsNamesWithMoons(data) {
  // Your code goes here...
  const planets = data.planets;
  const planetMoons = planets.filter(hasMoon);
  const planetNames = planetMoons.map(getName);

  function hasMoon(planet) {
    if (planet.hasOwnProperty('moons')) {
      let moonCheck = planet.moons;
      return moonCheck.length > 0;
    }
  }

  function getName(planet) {
    return planet.name;
  }

  // for (var i = 0; i < planets.length; i++) {
  //   if (planets[i].hasOwnProperty('moons') === true) {
  //     planetNames.push(planets[i].name);
  //   }
  // }

  return planetNames;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
