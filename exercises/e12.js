import { data } from "../data/data";

// SPACE DATA EXERCISE 12
// Return the sum of all moons for all planets
// Return example: 42

export function allPlanetsMoonsCount(data) {
  // Your code goes here...
  const planets = data.planets;
  const planetNames = [];
  var numberOfMoons = 0;
  for (var i = 0; i < planets.length; i++) {
    if (planets[i].hasOwnProperty('moons') === true) {
      numberOfMoons = numberOfMoons + planets[i].moons.length;
    }
  }
  return numberOfMoons;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
