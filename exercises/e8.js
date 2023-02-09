import { data } from "../data/data";

// SPACE DATA EXERCISE 8
// Return a Planet name by a given moon name
// Return example: 'Planet Name'

export function findPlanetNameByMoon(data, moonName) {
  // Your code goes here...
  const planets = data.planets;
  const planetMoons = planets.filter(hasMoon);
  const planetNames = planetMoons.map(getName);

  function hasMoon(planet) {
    if (planet.hasOwnProperty('moons')) {
      let moonCheck = planet.moons;
      return moonCheck.includes(moonName);
    }
  }

  function getName(planet) {
    return planet.name;
  }

  // for (var i = 0; i < planets.length; i++) {
  //   if (planets[i].hasOwnProperty('moons') === true) {
  //     if (planets[i].moons.includes(moonName) === true) {
  //       return planets[i].name;
  //     }
  //   }
  // }
  return planetNames[0];
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
