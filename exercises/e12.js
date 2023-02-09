import { data } from "../data/data";

// SPACE DATA EXERCISE 12
// Return the sum of all moons for all planets
// Return example: 42

export function allPlanetsMoonsCount(data) {
  // Your code goes here...

  const planets = data.planets;
  let numberOfMoons = 0;
  const planetMoons = planets.filter(hasMoon);
  
  function hasMoon(planet) {
    if (planet.hasOwnProperty('moons')) {
      let moonCheck = planet.moons;
      numberOfMoons = numberOfMoons + moonCheck.length;
      return moonCheck;
    }
  }

  return numberOfMoons;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
