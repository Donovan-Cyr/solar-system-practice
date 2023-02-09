import { data } from "../data/data";

// SPACE DATA EXERCISE 11
// Return an array of Planets' names with less than 10 moons
// Return example: ['name1', 'name2', ... , 'nameN']

export function lowMoonsPlanets(data) {
  // Your code goes here...
  const planets = data.planets;
  const planetMoons = planets.filter(hasMoon);
  const planetNames = planetMoons.map(getName);

  function hasMoon(planet) {
    if (planet.hasOwnProperty('moons')) {
      let moonCheck = planet.moons;
      return moonCheck.length < 10;;
    }
  }

  function getName(planet) {
    return planet.name;
  }
  return planetNames;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
