import { data } from "../data/data";

// SPACE DATA EXERCISE 4
// Return an array of Planets' names with gravity less than 10
// Return example: ['name1', 'name2', ... , 'nameN']

export function getPlanetsWithLowGravity(data) {
  // Your code goes here...
  const planets = data.planets;
  const planetLowGravity = planets.filter(lowGrav);
  const planetNames = planetLowGravity.map(getNames);

  function lowGrav(planet) {
    return planet.gravity <= 10;
  }

  function getNames(planet) {
    return planet.name;
  }

  // for (var i = 0; i < planets.length; i++) {
  //   if (planets[i].gravity < 10) {
  //     planetLowGravity.push(planets[i].name);
  //   }
  // }

  return planetNames;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-4"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
